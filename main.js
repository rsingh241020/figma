document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    navbarToggle.addEventListener('click', function () {
        mobileMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Optional: Close menu when clicking outside
    mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) {
            mobileMenu.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});