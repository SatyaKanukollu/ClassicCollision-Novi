import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeServiceModals();
  
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true
  });
});

function initializeNavigation() {
  const header = document.getElementById('header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  });
}

function initializeServiceModals() {
  const serviceButtons = document.querySelectorAll('.service-learn-more');
  
  const serviceDetails = {
    'Collision Repair': {
      description: 'Our comprehensive collision repair service includes:',
      features: [
        'Free initial damage assessment',
        'Insurance claim assistance',
        'State-of-the-art repair equipment',
        'Factory-certified technicians',
        'Lifetime warranty on repairs',
        'Free rental car assistance'
      ]
    },
    'Auto Body Work': {
      description: 'Professional auto body services including:',
      features: [
        'Dent removal and repair',
        'Panel replacement',
        'Frame straightening',
        'Rust repair and prevention',
        'Custom body modifications',
        'Scratch removal'
      ]
    },
    'Paint Services': {
      description: 'Expert paint services featuring:',
      features: [
        'Computerized color matching',
        'Premium quality paints',
        'Clear coat protection',
        'Custom paint jobs',
        'Spot repair and blending',
        'Environmental-friendly products'
      ]
    }
  };

  serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
      const serviceCard = button.closest('.service-card');
      const title = serviceCard.querySelector('h3').textContent;
      const details = serviceDetails[title];

      const modal = document.createElement('div');
      modal.className = 'service-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <h3>${title}</h3>
          <p>${details.description}</p>
          <ul>
            ${details.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <a href="/estimate.html" class="estimate-link">Get Estimate →</a>
        </div>
      `;

      document.body.appendChild(modal);

      const closeBtn = modal.querySelector('.close-modal');
      closeBtn.addEventListener('click', () => {
        modal.remove();
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          modal.remove();
        }
      });
    });
  });
}