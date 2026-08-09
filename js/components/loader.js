const JOKE_QUESTION = "Why did Nandani's code review come back clean?";
const JOKE_ANSWER = "Because she never merges without git-ting a second opinion.";

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeText(el, text, speed, done) {
  if (prefersReduced) { el.textContent = text; if (done) done(); return; }
  let i = 0;
  const timer = setInterval(() => {
    el.textContent = text.slice(0, i + 1);
    i++;
    if (i >= text.length) { clearInterval(timer); if (done) done(); }
  }, speed);
}

/**
 * Runs the terminal-style boot intro, then reveals the site.
 * Respects prefers-reduced-motion and can be skipped via the skip button.
 */
export function initLoader() {
  const loader = document.getElementById('loader');
  const skipBtn = document.getElementById('skipBtn');
  const jokeQEl = document.getElementById('jokeQ');
  const jokeAEl = document.getElementById('jokeA');
  const logLines = document.querySelectorAll('#loaderLog [data-line]');
  if (!loader) return;

  function hideLoader() {
    loader.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  function runSequence() {
    typeText(jokeQEl, JOKE_QUESTION, prefersReduced ? 0 : 26, () => {
      typeText(jokeAEl, JOKE_ANSWER, prefersReduced ? 0 : 22, () => {
        let idx = 0;
        const stepDelay = prefersReduced ? 0 : 260;
        function showNext() {
          if (idx >= logLines.length) {
            setTimeout(hideLoader, prefersReduced ? 0 : 500);
            return;
          }
          logLines[idx].classList.add('is-shown');
          setTimeout(() => {
            logLines[idx].classList.add('is-done');
            idx++;
            setTimeout(showNext, stepDelay);
          }, prefersReduced ? 0 : 220);
        }
        setTimeout(showNext, prefersReduced ? 0 : 300);
      });
    });
  }

  skipBtn.addEventListener('click', hideLoader);
  window.addEventListener('load', () => setTimeout(runSequence, prefersReduced ? 0 : 250));
  // Safety fallback in case the load event already fired before this ran.
  if (document.readyState === 'complete') setTimeout(runSequence, 250);
}
