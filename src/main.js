import { renderHome } from './components/Home.js';
import { renderServices } from './components/Services.js';
import { renderGallery } from './components/Gallery.js';
import { renderAbout } from './components/About.js';
import { renderContact } from './components/Contact.js';
import { renderEstimate } from './components/Estimate.js';
import '../css/normalize.css';
import '../css/styles.css';
import '../css/animations.css';

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('app');
  
  // Handle routing
  function handleRoute() {
    const path = window.location.pathname;
    
    if (path === '/estimate') {
      app.innerHTML = renderEstimate();
      document.body.classList.add('estimate-page');
    } else {
      document.body.classList.remove('estimate-page');
      app.innerHTML = `
        ${renderHome()}
        ${renderServices()}
        ${renderGallery()}
        ${renderAbout()}
        ${renderContact()}
      `;
      
      initializeComponents();
    }
  }

  function initializeComponents() {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          navMenu.classList.remove('active');
        }
      });
    });

    // Scroll to top
    const scrollTopButton = document.getElementById('scroll-top');
    if (scrollTopButton) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          scrollTopButton.style.display = 'flex';
        } else {
          scrollTopButton.style.display = 'none';
        }
      });

      scrollTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Handle initial route
  handleRoute();

  // Handle navigation
  document.addEventListener('click', (e) => {
    if (e.target.matches('a[href="/estimate"]')) {
      e.preventDefault();
      window.history.pushState({}, '', '/estimate');
      handleRoute();
      window.scrollTo(0, 0);
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', handleRoute);
});