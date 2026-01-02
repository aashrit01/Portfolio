// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Page navigation is now handled by regular links
// No smooth scrolling needed for separate pages

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Active nav link is now set in HTML based on current page
// No need for scroll-based activation

// Typing effect for hero subtitle (optional enhancement)
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page loads
    setTimeout(typeWriter, 800);
}

// Add smooth reveal for about text
const aboutText = document.querySelectorAll('.about-text p');
aboutText.forEach((p, index) => {
    p.style.opacity = '0';
    p.style.transform = 'translateX(-30px)';
    p.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(p);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// Accessibility Features: Zoom and Focus Mode
(function() {
    // Text Zoom Functionality
    let fontSizeMultiplier = parseFloat(localStorage.getItem('fontSizeMultiplier')) || 1;
    const minZoom = 0.8;
    const maxZoom = 2.0;
    const zoomStep = 0.1;

    function updateZoom() {
        document.documentElement.style.setProperty('--font-size-multiplier', fontSizeMultiplier);
        localStorage.setItem('fontSizeMultiplier', fontSizeMultiplier);
    }

    // Initialize zoom on page load
    updateZoom();

    // Zoom In
    const zoomInBtn = document.getElementById('zoomIn');
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            if (fontSizeMultiplier < maxZoom) {
                fontSizeMultiplier = Math.min(fontSizeMultiplier + zoomStep, maxZoom);
                updateZoom();
            }
        });
    }

    // Zoom Out
    const zoomOutBtn = document.getElementById('zoomOut');
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (fontSizeMultiplier > minZoom) {
                fontSizeMultiplier = Math.max(fontSizeMultiplier - zoomStep, minZoom);
                updateZoom();
            }
        });
    }

    // Reset Zoom
    const resetZoomBtn = document.getElementById('resetZoom');
    if (resetZoomBtn) {
        resetZoomBtn.addEventListener('click', () => {
            fontSizeMultiplier = 1;
            updateZoom();
        });
    }

    // Focus Mode
    const focusModeBtn = document.getElementById('focusMode');
    let isFocusMode = localStorage.getItem('focusMode') === 'true';

    function toggleFocusMode() {
        isFocusMode = !isFocusMode;
        if (isFocusMode) {
            document.body.classList.add('focus-mode');
            focusModeBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
            focusModeBtn.title = 'Exit Focus Mode';
        } else {
            document.body.classList.remove('focus-mode');
            focusModeBtn.innerHTML = '<i class="fas fa-eye"></i>';
            focusModeBtn.title = 'Focus Mode';
        }
        localStorage.setItem('focusMode', isFocusMode);
    }

    // Initialize focus mode
    if (isFocusMode) {
        document.body.classList.add('focus-mode');
        if (focusModeBtn) {
            focusModeBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
            focusModeBtn.title = 'Exit Focus Mode';
        }
    }

    if (focusModeBtn) {
        focusModeBtn.addEventListener('click', toggleFocusMode);
    }
})();

console.log('Portfolio loaded successfully! 🚀');

