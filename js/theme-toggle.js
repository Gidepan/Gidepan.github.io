document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const imageElement = document.getElementById('toggle-image');
    const themeIcon = themeToggleBtn.querySelector('img');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    const images = [
        'asset/bulb-on.png',
        'asset/bulb-off.png',
    ];

    let currentIndex = 0;

    themeToggleBtn.addEventListener('click', () => {
        // Update the index
        currentIndex = (currentIndex + 1) % images.length;
        
        // Change the image source
        imageElement.src = images[currentIndex];
    });
    themeToggleBtn.addEventListener('click', function (e) {
        e.preventDefault(); // prevent anchor navigation
        body.classList.toggle('dark-theme');
        navbar.classList.toggle('dark-theme');
        footer.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            // Change icon to bulb-off when in dark mode
            themeIcon.src = 'asset/bulb-off.png';
        } else {
            // Change icon to bulb-on when in light mode
            themeIcon.src = 'asset/bulb-on.png';
        }
    });
});
