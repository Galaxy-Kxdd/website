// Blommas Cocktail & Eatery — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNavToggle();
  initMenuTabs();
  initScrollReveal();
  initBookingForm();
});

/* Sticky header shadow on scroll */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Mobile nav toggle */
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
    });
  });
}

/* Menu category tabs (menu.html) */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');
  if (!tabs.length || !categories.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      categories.forEach((cat) => {
        cat.classList.toggle('active', cat.id === target);
      });
    });
  });
}

/* Fade/slide elements into view */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

/* Reservation form: client-side validation + Formspree submission */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const endpoint = form.getAttribute('action');
    const isConfigured = endpoint && !endpoint.includes('YOUR_FORM_ID');

    try {
      if (isConfigured) {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error('Request failed');
      }

      showStatus(status, 'success',
        "Thank you! Your reservation request has been sent — we'll confirm by phone or email shortly.");
      form.reset();
    } catch (err) {
      showStatus(status, 'error',
        'Something went wrong sending your request. Please call us directly to book.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Reservation';
    }
  });
}

function validateForm(form) {
  let isValid = true;
  const fields = form.querySelectorAll('[required]');

  fields.forEach((field) => {
    const wrapper = field.closest('.field');
    const valid = field.checkValidity();
    wrapper.classList.toggle('invalid', !valid);
    if (!valid) isValid = false;
  });

  return isValid;
}

function showStatus(statusEl, type, message) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `form-status ${type}`;
  statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
