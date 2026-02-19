document.addEventListener('DOMContentLoaded', () => {

  // ===============================
  // Scroll Reveal Animation
  // ===============================
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section, .card, .thumb').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });

  // ===============================
  // Dark Mode Toggle
  // ===============================
  const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent =
      document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme',
      document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close');

  document.querySelectorAll('.thumb').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.remove('hidden');
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) {
      lightbox.classList.add('hidden');
    }
  });

});