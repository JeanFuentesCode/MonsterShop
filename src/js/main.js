// src/js/main.js

const runMobileMenuToggle = () => {
    const mobileMenuButton = document.querySelector('[data-purpose="mobile-menu-button"]');
    const mobileMenu = document.querySelector('[data-purpose="mobile-menu"]');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runMobileMenuToggle);
} else {
    runMobileMenuToggle();
}
