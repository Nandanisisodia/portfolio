/**
 * Adds the .is-visible class to any .reveal element once it scrolls into view.
 * Call this AFTER all components have rendered their content into the DOM.
 */
export function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));
}
