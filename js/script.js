document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav__list');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('nav__list--active');
        });
    }

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('nav__list--active');
        });
    });

    const blindBtn = document.getElementById('blindModeBtn');
    const body = document.body;

    if (localStorage.getItem('blindMode') === 'enabled') {
        body.classList.add('blind-mode');
    }

    if (blindBtn) {
        blindBtn.addEventListener('click', function() {
            body.classList.toggle('blind-mode');
            if (body.classList.contains('blind-mode')) {
                localStorage.setItem('blindMode', 'enabled');
            } else {
                localStorage.setItem('blindMode', 'disabled');
            }
        });
    }

});