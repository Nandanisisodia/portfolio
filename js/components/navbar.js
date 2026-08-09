/**
 * Highlights the nav link matching the section currently in view.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('[data-nav]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => spyObserver.observe(s));
}

/**
 * Toggles the mobile nav panel and closes it after a link is tapped.
 */
function initMobileNav() {
  const mainNav = document.getElementById('mainNav');
  const burgerBtn = document.getElementById('burgerBtn');
  if (!mainNav || !burgerBtn) return;

  burgerBtn.addEventListener('click', () => mainNav.classList.toggle('is-mobile-open'));

  document.querySelectorAll('#mobilePanel [data-nav], #mobilePanel .nav__cta').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('is-mobile-open'));
  });
}

export function initNavbar() {
  initScrollSpy();
  initMobileNav();
}
