document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('img');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    // Apply theme from local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        navbar.classList.add('dark-theme');
        footer.classList.add('dark-theme');
        themeIcon.src = 'asset/bulb-off.png';
    }

    themeToggleBtn.addEventListener('click', function (e) {
        e.preventDefault(); // prevent anchor navigation
        body.classList.toggle('dark-theme');
        navbar.classList.toggle('dark-theme');
        footer.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            // Change icon to bulb-off when in dark mode
            themeIcon.src = 'asset/bulb-off.png';
            localStorage.setItem('theme', 'dark');
        } else {
            // Change icon to bulb-on when in light mode
            themeIcon.src = 'asset/bulb-on.png';
            localStorage.setItem('theme', 'light');
        }
    });
});
