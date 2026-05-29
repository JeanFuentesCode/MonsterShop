// src/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('[data-purpose="mobile-menu-button"]');
    const mobileMenu = document.querySelector('[data-purpose="mobile-menu"]');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
