// Global JavaScript for all pages

// Initialize tooltips and interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add any global interactivity here
  
  // Smooth transitions
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active nav links
  const currentPage = window.location.pathname;
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Mobile menu toggle if exists
  const mobileMenuBtn = document.querySelector('[data-mobile-menu-toggle]');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const sidebar = document.querySelector('[data-purpose="main-navigation"]');
      if (sidebar) {
        sidebar.classList.toggle('hidden');
      }
    });
  }
});

// Utility function to add event listeners
function addEventListeners(selector, eventType, callback) {
  document.querySelectorAll(selector).forEach(element => {
    element.addEventListener(eventType, callback);
  });
}

// Utility function to toggle class
function toggleClass(selector, className) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.toggle(className);
  }
}
