import { projectsData } from '../data.js';

/**
 * Renders the Projects grid into #projectsGrid using projectsData.
 * Falls back to a stylised browser mockup if no screenshot is provided.
 */
export function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';

    const statusHtml = p.status === 'live'
      ? `<span class="project-card__status project-card__status--live">Live</span>`
      : `<span class="project-card__status project-card__status--wip">Deploying Soon</span>`;

    const liveBtn = p.live
      ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn--primary">Live Demo ↗</a>`
      : `<span class="btn btn--primary btn--disabled">Live Demo ↗</span>`;

    const shotHtml = p.image
      ? `<img src="${p.image}" alt="${p.name} screenshot" loading="lazy">`
      : `<div class="mock-browser">
          <div class="mock-browser__bar"><span></span><span></span><span></span></div>
          <div class="mock-browser__body">
            <div class="mock-browser__block" style="width:40%"></div>
            <div class="mock-browser__block"></div>
            <div class="mock-browser__block"></div>
            <div class="mock-browser__block"></div>
          </div>
        </div>`;

    card.innerHTML = `
      <div class="project-card__shot">
        ${shotHtml}
      </div>
      <div class="project-card__body">
        <div class="project-card__title">${p.name} ${statusHtml}</div>
        <div class="project-card__desc">${p.desc}</div>
        <div class="project-card__tags">${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="project-card__links">
          ${liveBtn}
          <a href="${p.github}" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}
