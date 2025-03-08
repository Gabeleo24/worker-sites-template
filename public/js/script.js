// DOMContentLoaded ensures the script runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Collapsible Sections
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    collapsibleHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        // Toggle arrow symbol
        const arrow = header.querySelector('.arrow');
        arrow.textContent = content.classList.contains('active') ? '▲' : '▼';
      });
    });
  
    // Lightbox Modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
  
    // Open modal when an image is clicked
    document.querySelectorAll('.vertical-gallery img').forEach(img => {
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalCaption.textContent = img.alt;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // prevent background scroll
      });
    });
  
    // Close modal on click of X
    modalClose.addEventListener('click', () => {
      closeModal();
    });
  
    // Close modal if user clicks outside modal content
    window.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  
    // Smooth Scroll for nav links (optional)
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });