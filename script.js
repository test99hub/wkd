// script.js
document.getElementById('franchiseForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  // simulate form sending
  setTimeout(() => {
    form.reset();
    document.getElementById('thankYouMessage').classList.remove('hidden');
  }, 500);
});

// scroll to thank you message
const thankYou = document.getElementById('thankYouMessage');
const observer = new MutationObserver(() => {
  if (!thankYou.classList.contains('hidden')) {
    thankYou.scrollIntoView({ behavior: 'smooth' });
  }
});
observer.observe(thankYou, { attributes: true });

// Sequential animation for brand cards
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.brand-card');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('fade-in');
    }, index * 200); // 200ms delay between each
  });
});