/**
 * Entry point — wires together every component.
 * Each component owns its own rendering/behaviour; this file only
 * decides the order they run in.
 */
import { renderSkills } from './components/skills.js';
import { renderExperience } from './components/experience.js';
import { renderProjects } from './components/projects.js';
import { renderEducation } from './components/education.js';
import { initNavbar } from './components/navbar.js';
import { initLoader } from './components/loader.js';
import { initLeetcode } from './components/leetcode.js';
import { initScrollReveal } from './utils/scrollReveal.js';

// 1. Render all data-driven sections first.
renderSkills();
renderExperience();
renderProjects();
renderEducation();

// 2. Wire up interactive behaviour once the DOM has content.
initNavbar();
initLeetcode();
initLoader();

// 3. Scroll-reveal must run last, after every .reveal element exists.
initScrollReveal();
