// Animation functionality for Classic Collision website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all animation components
  initializeHeroParallax();
  initializeServiceCardAnimations();
  initializeTestimonialSlider();
});

// Hero parallax effect
function initializeHeroParallax() {
  const hero = document.getElementById('hero');
  
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const heroHeight = hero.offsetHeight;
      
      // Only apply parallax effect while hero section is visible
      if (scrollPosition <= heroHeight) {
        const parallaxOffset = scrollPosition * 0.4;
        hero.style.backgroundPositionY = `${parallaxOffset}px`;
      }
    });
  }
}

// Service card animations
function initializeServiceCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Add a subtle pulse animation on hover
      this.style.animation = 'pulse 1s infinite';
    });
    
    card.addEventListener('mouseleave', function() {
      // Remove the animation
      this.style.animation = '';
    });
  });
}

// Testimonial slider functionality
function initializeTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentSlide = 0;
  
  if (slides.length === 0) return;
  
  // Function to show a specific slide
  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(30px)';
      slide.style.opacity = '0';
    });
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.transform = 'translateX(0)';
    slides[currentSlide].style.opacity = '1';
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }
  
  // Next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  // Previous slide
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Set up event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Auto slide
  let slideInterval = setInterval(nextSlide, 5000);
  
  // Pause auto slide on hover
  const slidesContainer = document.querySelector('.testimonials-container');
  if (slidesContainer) {
    slidesContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    slidesContainer.addEventListener('mouseleave', () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  }
  
  // Initial setup
  showSlide(currentSlide);
}