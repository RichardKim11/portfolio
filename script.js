document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
          .scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );
  
    document.querySelectorAll('section, .card').forEach(el => {
      el.classList.add('hidden');
      observer.observe(el);
    });
  
    // Lightbox modal logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
  
    if (!lightbox || !lightboxImg || !closeBtn) {
      console.warn('Lightbox elements missing');
      return;
    }
  
    // IMPORTANT FIX: attach click to thumbnail container
    document.querySelectorAll('.thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const img = thumb.querySelector('img');
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
  
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        lightbox.classList.add('hidden');
      }
    });
  
  });
  
  // Dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  toggleBtn.textContent =
    document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';

  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

// Persist theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
}
