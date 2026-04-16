// Reveal animation logic for scroll-triggered effects
const reveal = () => {
    const reveals = document.querySelectorAll('[data-reveal]');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('revealed');
        }
    });
};

// Global event listeners for reveal animations
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Header scroll effect: adds 'scrolled' class when page is scrolled more than 50px
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/**
 * Hero Image Slideshow
 * Cycles through .hero__item elements every 4500ms
 */
(function() {
    const slides = Array.from(document.querySelectorAll('.hero .hero__item'));
    if (slides.length <= 1) return;

    let current = 0;
    const intervalMs = 4500;

    window.setInterval(() => {
        slides[current].classList.remove('is-active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('is-active');
    }, intervalMs);
})();

/**
 * Specialty Coffee Carousel
 * Handles horizontal scrolling for the specialty coffee bean list
 */
(function() {
    const list = document.getElementById('special-coffee-list');
    const prevBtn = document.querySelector('.special-coffee-arrow-prev');
    const nextBtn = document.querySelector('.special-coffee-arrow-next');
    
    if (!list || !prevBtn || !nextBtn) return;

    function getScrollAmount() {
        const card = list.querySelector('.specialtyCard');
        if (!card) return list.offsetWidth * 0.85;
        return card.offsetWidth + 40; // Card width + gap (40px)
    }

    prevBtn.addEventListener('click', () => {
        list.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        list.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
})();

/**
 * BASE Purchase Button Styling
 * Ensures the 'Add to Cart' button matches the premium theme
 */
window.addEventListener('load', () => {
    // Note: .base_purchase_btn is a common class for BASE platform buttons
    const btn = document.querySelector('.base_purchase_btn');
    if (btn) {
        btn.style.width = '100%';
        btn.style.height = '60px';
        btn.style.background = '#1C1C1C';
        btn.style.color = '#FFF';
        btn.style.border = 'none';
        btn.style.fontSize = '16px';
        btn.style.letterSpacing = '0.1em';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'background 0.3s ease';
        
        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#333';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = '#1C1C1C';
        });
    }
});
