/* ---------- Contact form ---------- */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = contactForm.querySelector('button[type="submit"]');

function showStatus(type, text) {
  formStatus.className = 'form-status ' + type;
  formStatus.textContent = text;
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';
  showStatus('', '');

  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error('Request failed');

    contactForm.reset();
    showStatus('success', "Thanks! Your message has been sent. We'll be in touch soon.");
  } catch (err) {
    showStatus('error', 'Sorry, something went wrong. Please call or message us instead.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send';
  }
});

/* ---------- Scroll-in animation ---------- */
const animatedEls = document.querySelectorAll('.animate-in');

if (!('IntersectionObserver' in window)) {
  animatedEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach((el) => observer.observe(el));
}
