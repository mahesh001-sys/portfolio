new Typed(".typing", {
  strings: [
    "Automation Frameworks",
    "CI/CD Pipelines",
    "QA Solutions",
    "Selenium Test Suites"
  ],
  typeSpeed: 75,
  backSpeed: 45,
  loop: true
});

document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
  this.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-group, .project-card, .cert-card, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
