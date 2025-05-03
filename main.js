// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeTeamSlider();
  initializeServiceModals();
  initializeScrollToTop();
});

// Navigation functionality
function initializeNavigation() {
  const header = document.getElementById('header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        navMenu.classList.remove('active');
      }
    });
  });
}

// Team slider functionality
function initializeTeamSlider() {
  const slider = document.querySelector('.team-slider');
  const prevBtn = document.querySelector('.team-nav.prev');
  const nextBtn = document.querySelector('.team-nav.next');
  
  // Guard clause: only proceed if all required elements exist
  if (!slider || !prevBtn || !nextBtn) {
    return;
  }
  
  let position = 0;
  const slideWidth = 300; // Width of team member card + gap

  function updateSliderPosition() {
    slider.style.transform = `translateX(${position}px)`;
  }

  prevBtn.addEventListener('click', () => {
    position = Math.min(position + slideWidth, 0);
    updateSliderPosition();
  });

  nextBtn.addEventListener('click', () => {
    const maxScroll = -(slider.scrollWidth - slider.parentElement.clientWidth + 80);
    position = Math.max(position - slideWidth, maxScroll);
    updateSliderPosition();
  });
}

// Service modals functionality
function initializeServiceModals() {
  const modal = document.getElementById('service-modal');
  const closeBtn = document.querySelector('.close-modal');
  const modalBody = document.querySelector('.modal-body');
  const learnMoreBtns = document.querySelectorAll('.service-learn-more');

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

  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.closest('.service-card');
      const title = service.querySelector('h3').textContent;
      const details = serviceDetails[title];

      modalBody.innerHTML = `
        <h3>${title}</h3>
        <p>${details.description}</p>
        <ul>
          ${details.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <a href="https://estimates.classiccollision.com" target="_blank" class="btn btn-primary">Get Estimate</a>
      `;

      modal.style.display = 'block';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Scroll to top functionality
function initializeScrollToTop() {
  const scrollButton = document.getElementById('scroll-top');
  
  if (scrollButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollButton.style.display = 'flex';
      } else {
        scrollButton.style.display = 'none';
      }
    });

    scrollButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}