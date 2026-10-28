// Portfolio interactive enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple console welcome
  console.log(
    '%c Asraful Islam Sharthak ',
    'background: #3b82f6; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 16px; font-weight: bold;'
  );
  console.log('%c Blockchain Security & Development · Full-Stack · Researcher', 'color: #94a3b8;');
  console.log('%c https://github.com/sharthak18', 'color: #60a5fa;');
});
