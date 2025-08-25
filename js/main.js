// Enhanced Mobile-First JavaScript for DSCET Website

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
let lastFocusedElement = null; // for restoring focus after closing mobile menu
const scrollTopBtn = document.createElement('button');

// Enhanced Mobile Detection
const isMobile = () => window.innerWidth <= 768;
const isTablet = () => window.innerWidth > 768 && window.innerWidth <= 1024;
const isTouch = 'ontouchstart' in window;
const hasHover = window.matchMedia('(hover: hover)').matches;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollTop();
    initializeAnimations();
    initializeFormValidation();
    initializeLazyLoading();
    initializeFacilitiesCarousel();
    initializeCellsCarousel();
    initializeMobileFeatures();
    initializeTouchGestures();
    initializeViewportFix();
    initializeHeroSlider();
    initializeScrollNavbar();
});

// Mobile Navigation Toggle
function initializeNavigation() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
        // Keyboard: Enter/Space to toggle
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
        
        // Handle mobile dropdown menus
        initializeMobileDropdowns();
        
        // Close menu when clicking on a link (only if it's not a dropdown parent)
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (!link.querySelector('.arrow')) {
                    closeMobileMenu();
                }
            });
            // Optional: give menuitem semantics
            link.setAttribute('role', 'menuitem');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close with Escape key when menu is open
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                e.preventDefault();
                closeMobileMenu();
            }
        });

        // Initialize ARIA state
        hamburger.setAttribute('aria-expanded', 'false');
    }
}

// Initialize Mobile Dropdown Functionality
function initializeMobileDropdowns() {
    const dropdownLinks = document.querySelectorAll('.nav-menu li > a .arrow');
    
    dropdownLinks.forEach(arrow => {
        const parentLink = arrow.parentElement;
        const parentLi = parentLink.parentElement;
        const submenu = parentLi.querySelector('.submenu, .sub-submenu');
        
        if (submenu) {
            parentLink.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle current submenu
                submenu.classList.toggle('active');
                arrow.style.transform = submenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                
                // Close other submenus at the same level
                const siblings = parentLi.parentElement.children;
                Array.from(siblings).forEach(sibling => {
                    if (sibling !== parentLi) {
                        const siblingSubmenu = sibling.querySelector('.submenu, .sub-submenu');
                        const siblingArrow = sibling.querySelector('.arrow');
                        if (siblingSubmenu) {
                            siblingSubmenu.classList.remove('active');
                            if (siblingArrow) {
                                siblingArrow.style.transform = 'rotate(0deg)';
                            }
                        }
                    }
                });
            });
        }
    });
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Scroll Navbar Functionality
let lastScrollTop = 0;
let scrollThreshold = 100;

function initializeScrollNavbar() {
    const navbar = document.querySelector('.main-nav');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when past threshold
        if (currentScrollTop > scrollThreshold) {
            navbar.classList.add('scrolled');
            
            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
                // Scrolling down - hide navbar
                navbar.classList.add('hidden');
                navbar.classList.remove('visible');
            } else if (currentScrollTop < lastScrollTop) {
                // Scrolling up - show navbar
                navbar.classList.remove('hidden');
                navbar.classList.add('visible');
            }
        } else {
            // At top of page - show navbar in original state
            navbar.classList.remove('scrolled', 'hidden', 'visible');
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
}

// Scroll to Top Button
function initializeScrollTop() {
    scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: all 0.3s;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleScrollTop);
}

function toggleScrollTop() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.course-card, .facility-card, .stat');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Form Validation
function initializeFormValidation() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (validateForm(name, email, message)) {
                // Simulate form submission
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                this.reset();
            }
        });
    }
}

function validateForm(name, email, message) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name.trim()) {
        showNotification('Please enter your name.', 'error');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (!message.trim()) {
        showNotification('Please enter your message.', 'error');
        return false;
    }
    
    return true;
}

// Lazy Loading Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</i>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = '#27ae60';
    } else if (type === 'error') {
        notification.style.background = '#e74c3c';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Facilities Carousel
let currentFacilitySlide = 0;

function initializeFacilitiesCarousel() {
    const facilitySlides = document.querySelectorAll('.facility-slide');
    
    if (facilitySlides.length > 0) {
        showFacilitySlide(0);
        
        // Auto-slide every 5 seconds
        setInterval(() => {
            changeFacilitySlide(1);
        }, 5000);
    }
}

function changeFacilitySlide(direction) {
    const facilitySlides = document.querySelectorAll('.facility-slide');
    
    facilitySlides[currentFacilitySlide].classList.remove('active');
    
    currentFacilitySlide += direction;
    
    if (currentFacilitySlide >= facilitySlides.length) {
        currentFacilitySlide = 0;
    } else if (currentFacilitySlide < 0) {
        currentFacilitySlide = facilitySlides.length - 1;
    }
    
    showFacilitySlide(currentFacilitySlide);
}

function showFacilitySlide(index) {
    const facilitySlides = document.querySelectorAll('.facility-slide');
    facilitySlides.forEach(slide => slide.classList.remove('active'));
    if (facilitySlides[index]) {
        facilitySlides[index].classList.add('active');
    }
}

// Cells Carousel
let currentCellSlide = 0;

function initializeCellsCarousel() {
    const cellSlides = document.querySelectorAll('.cell-card');
    
    if (cellSlides.length > 0) {
        showCellSlide(0);
        
        // Auto-slide every 4 seconds
        setInterval(() => {
            changeCellSlide(1);
        }, 4000);
    }
}

function changeCellSlide(direction) {
    const cellSlides = document.querySelectorAll('.cell-card');
    const indicators = document.querySelectorAll('.cells-indicators .indicator');
    
    cellSlides[currentCellSlide].classList.remove('active');
    indicators[currentCellSlide].classList.remove('active');
    
    currentCellSlide += direction;
    
    if (currentCellSlide >= cellSlides.length) {
        currentCellSlide = 0;
    } else if (currentCellSlide < 0) {
        currentCellSlide = cellSlides.length - 1;
    }
    
    showCellSlide(currentCellSlide);
}

function showCellSlide(index) {
    const cellSlides = document.querySelectorAll('.cell-card');
    const indicators = document.querySelectorAll('.cells-indicators .indicator');
    
    cellSlides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    if (cellSlides[index]) {
        cellSlides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentCellSlide = index;
    }
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current) + (counter.innerText.includes('+') ? '+' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Parallax Effect
function initializeParallax() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Dynamic Year Update
function updateYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Loading Animation
function initializeLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="spinner"></div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;
    
    document.body.appendChild(loader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }, 500);
    });
}

// Enhanced Mobile-Specific Features
function initializeMobileFeatures() {
    // Add device-specific classes
    if (isMobile()) {
        document.body.classList.add('mobile-device');
    }
    
    if (isTablet()) {
        document.body.classList.add('tablet-device');
    }
    
    if (isTouch) {
        document.body.classList.add('touch-device');
    }
    
    if (!hasHover) {
        document.body.classList.add('no-hover');
    }
    
    // Enhanced orientation change handling
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            closeMobileMenu();
            // Recalculate viewport height
            setViewportHeight();
            // Trigger resize to recalculate layouts
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
    
    // Handle resize events for responsive behavior
    window.addEventListener('resize', debounce(() => {
        if (!isMobile() && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }, 250));
    
    // Prevent zoom on input focus (iOS)
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', preventZoom);
        input.addEventListener('blur', allowZoom);
    });
}

function preventZoom() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }
}

function allowZoom() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0';
    }
}

// Touch Gestures
function initializeTouchGestures() {
    if (!isTouch) return;
    
    let startX, startY, endX, endY;
    
    // Swipe to close mobile menu
    if (navMenu) {
        navMenu.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        navMenu.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = Math.abs(endY - startY);
            
            // Swipe left to close menu
            if (deltaX < -100 && deltaY < 50) {
                closeMobileMenu();
            }
        });
    }
    
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn, .link-item, .department-card, .cell-card');
    buttons.forEach(button => {
        button.addEventListener('touchstart', addTouchFeedback);
        button.addEventListener('touchend', removeTouchFeedback);
        button.addEventListener('touchcancel', removeTouchFeedback);
    });
}

function addTouchFeedback(e) {
    e.currentTarget.style.transform = 'scale(0.95)';
    e.currentTarget.style.opacity = '0.8';
}

function removeTouchFeedback(e) {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.opacity = '';
}

// Viewport Height Fix for Mobile
function initializeViewportFix() {
    // Fix for mobile viewport height issues
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', debounce(setViewportHeight, 100));
    window.addEventListener('orientationchange', () => {
        setTimeout(setViewportHeight, 100);
    });
}

// Enhanced Mobile Navigation
function toggleMobileMenu() {
    if (!hamburger || !navMenu) return;
    const isActive = hamburger.classList.contains('active');

    if (!isActive) {
        // Opening
        lastFocusedElement = document.activeElement;
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
        createBackdrop();
        
        // Focus first link for accessibility with delay
        setTimeout(() => {
            const firstLink = navMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }, 100);
    } else {
        // Closing
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    removeBackdrop();
    // Restore focus to the element that opened the menu
    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

function createBackdrop() {
    // Remove existing backdrop if any
    const existingBackdrop = document.querySelector('.mobile-backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }
    
    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-backdrop';
    document.body.appendChild(backdrop);
    
    // Force reflow and add active class
    backdrop.offsetHeight;
    backdrop.classList.add('active');
    
    backdrop.addEventListener('click', closeMobileMenu);
}

function removeBackdrop() {
    const backdrop = document.querySelector('.mobile-backdrop');
    if (backdrop) {
        backdrop.classList.remove('active');
        setTimeout(() => backdrop.remove(), 300);
    }
}

// Hero Slider Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function initializeHeroSlider() {
    if (slides.length > 0) {
        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Initialize first slide
        showSlide(0);
    }
}

 

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    changeSlide(1);
}

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

// Make functions globally available for onclick handlers
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize smooth scroll after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScroll();
    animateCounters();
    updateYear();
});

// CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
