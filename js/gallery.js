// Gallery functionality for Classic Collision website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize gallery components
  initializeGalleryFilters();
  initializeGalleryModal();
});

// Gallery filtering functionality
function initializeGalleryFilters() {
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Update active tab
      galleryTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Get filter category
      const category = this.getAttribute('data-category');
      
      // Filter gallery items
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || category === itemCategory) {
          item.style.display = 'block';
          // Add animation for appearing items
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Gallery modal functionality
function initializeGalleryModal() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryModal = document.querySelector('.gallery-modal');
  const modalImage = document.getElementById('gallery-expanded-img');
  const modalCaption = document.getElementById('gallery-caption');
  const closeButton = document.querySelector('.gallery-close');
  
  if (!galleryModal || !modalImage || !modalCaption) return;
  
  // Open modal when clicking on gallery item
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgElement = this.querySelector('img');
      const captionElement = this.querySelector('.gallery-caption');
      
      if (imgElement) {
        // Get image source and caption
        const imgSrc = imgElement.getAttribute('src');
        const captionHTML = captionElement ? captionElement.innerHTML : '';
        
        // Set modal content
        modalImage.src = imgSrc;
        modalCaption.innerHTML = captionHTML;
        
        // Show modal with fade-in animation
        galleryModal.style.display = 'block';
        setTimeout(() => {
          galleryModal.style.opacity = '1';
        }, 50);
        
        // Prevent page scrolling while modal is open
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal when clicking on close button
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
  
  // Close modal when clicking outside the image
  galleryModal.addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && galleryModal.style.display === 'block') {
      closeModal();
    }
  });
  
  // Close modal function
  function closeModal() {
    galleryModal.style.opacity = '0';
    setTimeout(() => {
      galleryModal.style.display = 'none';
      // Re-enable page scrolling
      document.body.style.overflow = '';
    }, 300);
  }
}