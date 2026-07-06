const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been submitted.');
  form.reset();
});

const animatedEls = document.querySelectorAll('.animate-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

animatedEls.forEach((el) => observer.observe(el));
