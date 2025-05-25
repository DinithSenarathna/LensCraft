// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
    });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// CTA button functionality
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('gallery').scrollIntoView({
        behavior: 'smooth'
    });
});

// Image hover effect
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Optimize hero image loading
document.addEventListener('DOMContentLoaded', function() {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = 'https://source.unsplash.com/random/1600x900?photography,camera';
    
    // Fallback in case image doesn't load
    heroImage.onerror = function() {
        document.querySelector('.hero').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))';
    };
    
    // Add loaded class when image is ready
    heroImage.onload = function() {
        document.querySelector('.hero').classList.add('hero-loaded');
    };
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
            document.querySelector('nav ul').classList.remove('show');
        }
    });
});