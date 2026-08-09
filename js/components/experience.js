import { experienceData } from '../data.js';

/**
 * Renders the Experience timeline into #timeline using experienceData.
 */
export function renderExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  experienceData.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML = `
      <div class="timeline-card">
        <div class="timeline-card__head">
          <div class="timeline-card__role">${exp.role}</div>
          <div class="timeline-card__period">${exp.period}</div>
        </div>
        <div class="timeline-card__org">${exp.org} <span class="sep">·</span> <span class="loc">${exp.location}</span></div>
        <ul class="timeline-card__list">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="tech-tags">${exp.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      </div>
    `;
    timeline.appendChild(item);
  });
}
