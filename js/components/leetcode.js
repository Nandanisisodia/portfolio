const LEETCODE_USERNAME = "Nandani_Sisodia_525";
const CIRC = 2 * Math.PI * 68; // circumference of the progress ring (r=68)

// Approximate platform totals per difficulty, used only as the denominator
// for the breakdown bars when an API doesn't report them directly.
const PLATFORM_TOTALS = { totalEasy: 900, totalMedium: 1950, totalHard: 850 };

// Shown only if every live source fails.
const fallbackStats = {
  totalSolved: 231, totalQuestions: 3300,
  easySolved: 74, totalEasy: 750,
  mediumSolved: 123, totalMedium: 1550,
  hardSolved: 34, totalHard: 700,
  acceptanceRate: 80.06, ranking: 695077
};

let els = {};

function cacheEls() {
  els = {
    total: document.getElementById('leetTotalNum'),
    easyVal: document.getElementById('easyVal'),
    medVal: document.getElementById('medVal'),
    hardVal: document.getElementById('hardVal'),
    easyBar: document.getElementById('easyBar'),
    medBar: document.getElementById('medBar'),
    hardBar: document.getElementById('hardBar'),
    rank: document.getElementById('statRank'),
    accept: document.getElementById('statAccept'),
    totalStat: document.getElementById('statTotal'),
    note: document.getElementById('leetNote'),
    pill: document.getElementById('leetStatusPill'),
    ringEasy: document.getElementById('ringEasy'),
    ringMedium: document.getElementById('ringMedium'),
    ringHard: document.getElementById('ringHard'),
    refreshBtn: document.getElementById('leetRefreshBtn'),
  };
}

function renderLeetStats(data, isLive) {
  const { totalSolved, easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard, acceptanceRate, ranking } = data;

  els.total.textContent = totalSolved;
  els.easyVal.textContent = `${easySolved} / ${totalEasy}`;
  els.medVal.textContent = `${mediumSolved} / ${totalMedium}`;
  els.hardVal.textContent = `${hardSolved} / ${totalHard}`;

  els.easyBar.style.width = totalEasy ? `${(easySolved / totalEasy) * 100}%` : '0%';
  els.medBar.style.width = totalMedium ? `${(mediumSolved / totalMedium) * 100}%` : '0%';
  els.hardBar.style.width = totalHard ? `${(hardSolved / totalHard) * 100}%` : '0%';

  els.rank.textContent = ranking ? `#${Number(ranking).toLocaleString()}` : '—';
  els.accept.textContent = (acceptanceRate || acceptanceRate === 0) ? `${Number(acceptanceRate).toFixed(2)}%` : '—';
  els.totalStat.textContent = totalSolved;

  // Ring: stack easy -> medium -> hard as a proportion of total solved.
  const total = Math.max(totalSolved, 1);
  const easyLen = CIRC * (easySolved / total);
  const medLen = CIRC * (mediumSolved / total);
  const hardLen = CIRC * (hardSolved / total);

  els.ringEasy.style.strokeDasharray = `${easyLen} ${CIRC}`;
  els.ringEasy.style.strokeDashoffset = 0;

  els.ringMedium.style.strokeDasharray = `${medLen} ${CIRC}`;
  els.ringMedium.style.strokeDashoffset = -easyLen;

  els.ringHard.style.strokeDasharray = `${hardLen} ${CIRC}`;
  els.ringHard.style.strokeDashoffset = -(easyLen + medLen);

  els.note.classList.toggle('is-shown', !isLive);
  els.pill.innerHTML = isLive
    ? `<span class="dot-live"></span> live`
    : `<span class="dot-live" style="background:#f5b95c"></span> cached`;
}

/**
 * Source 1 (primary): alfa-leetcode-api — actively maintained as of 2026.
 * Combines the /solved and profile endpoints since stats + ranking live
 * on different routes.
 */
async function fetchFromAlfaApi(username) {
  const base = 'https://alfa-leetcode-api.onrender.com';
  const [solvedRes, profileRes] = await Promise.all([
    fetch(`${base}/${username}/solved`),
    fetch(`${base}/${username}`)
  ]);
  if (!solvedRes.ok) throw new Error('alfa solved endpoint failed');
  const solved = await solvedRes.json();
  const profile = profileRes.ok ? await profileRes.json() : {};

  if (typeof solved.solvedProblem !== 'number' && typeof solved.easySolved !== 'number') {
    throw new Error('unexpected alfa response shape');
  }

  const byDifficulty = (arr, name) => Array.isArray(arr) ? arr.find(d => d.difficulty === name) : null;
  const totalAll = byDifficulty(solved.totalSubmissionNum, 'All');
  const totalEasy = byDifficulty(solved.totalSubmissionNum, 'Easy');
  const totalMedium = byDifficulty(solved.totalSubmissionNum, 'Medium');
  const totalHard = byDifficulty(solved.totalSubmissionNum, 'Hard');
  const acAll = byDifficulty(solved.acSubmissionNum, 'All');

  let acceptanceRate = null;
  if (acAll?.submissions && totalAll?.submissions) {
    acceptanceRate = (acAll.submissions / totalAll.submissions) * 100;
  }

  return {
    totalSolved: solved.solvedProblem ?? (solved.easySolved + solved.mediumSolved + solved.hardSolved),
    easySolved: solved.easySolved ?? 0,
    mediumSolved: solved.mediumSolved ?? 0,
    hardSolved: solved.hardSolved ?? 0,
    totalEasy: totalEasy?.count ?? PLATFORM_TOTALS.totalEasy,
    totalMedium: totalMedium?.count ?? PLATFORM_TOTALS.totalMedium,
    totalHard: totalHard?.count ?? PLATFORM_TOTALS.totalHard,
    acceptanceRate,
    ranking: profile.ranking ?? null
  };
}

/**
 * Source 2 (secondary): leetcode-stats-api — kept as a fallback in case it's
 * back online; it returns totals in a single, already-normalized call.
 */
async function fetchFromLegacyApi(username) {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
  if (!res.ok) throw new Error('legacy api failed');
  const data = await res.json();
  if (!data || data.status === 'error' || typeof data.totalSolved !== 'number') throw new Error('unexpected legacy response shape');
  return data;
}

async function fetchLeetStats() {
  els.pill.innerHTML = `<span class="dot-live" style="background:#8b92a8"></span> loading`;

  const sources = [fetchFromAlfaApi, fetchFromLegacyApi];
  for (const source of sources) {
    try {
      const data = await source(LEETCODE_USERNAME);
      renderLeetStats(data, true);
      return;
    } catch (err) {
      // try the next source
    }
  }
  renderLeetStats(fallbackStats, false);
}

/**
 * Fetches live LeetCode stats for LEETCODE_USERNAME and renders them.
 * Tries multiple public APIs in order, and falls back to static numbers
 * (marked "cached") only if every source fails.
 */
export function initLeetcode() {
  cacheEls();
  if (!els.total) return;
  fetchLeetStats();
  els.refreshBtn.addEventListener('click', fetchLeetStats);
}

