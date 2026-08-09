import { educationData } from '../data.js';

/**
 * Renders the Education list into #eduList using educationData.
 */
export function renderEducation() {
  const eduList = document.getElementById('eduList');
  if (!eduList) return;

  educationData.forEach(e => {
    const item = document.createElement('div');
    item.className = 'edu-item reveal';
    item.innerHTML = `
      <div class="edu-item__left">
        <h3>${e.title}</h3>
        <div class="school">${e.school}</div>
      </div>
      <div class="edu-item__right">
        <div class="score">${e.score}</div>
        <div class="yr">${e.year}</div>
      </div>
    `;
    eduList.appendChild(item);
  });
}
