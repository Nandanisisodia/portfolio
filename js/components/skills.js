import { skillsData } from '../data.js';

/**
 * Renders the Skills grid into #skillsGrid using skillsData.
 */
export function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;

  skillsData.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.innerHTML = `
      <h3>${cat.title}</h3>
      <div class="skill-card__desc">${cat.desc}</div>
      <div class="skill-tags">
        ${cat.items.map(i => `<span class="skill-tag"><i style="background:${i.color}"></i>${i.name}</span>`).join('')}
      </div>
    `;
    skillsGrid.appendChild(card);
  });
}
