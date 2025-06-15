// JavaScript to toggle the mobile menu and icons
    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        if (mobileMenuButton && mobileMenu && hamburgerIcon && closeIcon) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden'); // Toggle menu visibility
                hamburgerIcon.classList.toggle('hidden'); // Toggle hamburger icon visibility
                closeIcon.classList.toggle('hidden');    // Toggle close icon visibility
            });
        }
    });