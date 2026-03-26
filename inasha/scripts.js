// Generate animated stars
const starsContainer = document.getElementById('stars');
const starCount = 50;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random positioning
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.borderRadius = '50%';
    
    // Random animation delay
    star.style.animationDelay = Math.random() * 3 + 's';
    
    starsContainer.appendChild(star);
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to command items
document.querySelectorAll('.command-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.animationDelay = '0s';
    });
});
