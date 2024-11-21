document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Tooltip Functionality
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function() {
            const tooltipText = tooltip.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        });

        tooltip.addEventListener('mouseout', function() {
            const tooltipText = tooltip.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        });
    });

    // Form submission handling
    const registrationForm = document.querySelector('#registration form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Terima Kasih sudah mendaftar');
            window.location.href = 'index.html';
        });
    }

    const loginForm = document.querySelector('.login-box form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'deskripsi.html';
        });
    }
});
