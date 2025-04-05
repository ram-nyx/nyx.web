// Add this JavaScript for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    function handleScroll() {
        scrollElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Initial check
    handleScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', handleScroll);
});

// Video overlay handler
document.querySelector('.video-overlay').addEventListener('click', function() {
    this.style.display = 'none';
    // Start playing the video
    const iframe = this.previousElementSibling;
    const src = iframe.src;
    iframe.src = src + '?autoplay=1';
});
