// Parallax effect
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    document.body.style.backgroundPosition = `center ${-scrollPosition * 0.3}px`;
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// Toggle project details
function toggleProjectDetails(element) {
    const details = element.querySelector('.project-details');
    const isActive = details.classList.contains('active');
    
    // Close all other project details
    document.querySelectorAll('.project-details.active').forEach(detail => {
        if (detail !== details) {
            detail.classList.remove('active');
        }
    });
    
    // Toggle current project
    details.classList.toggle('active');
}

// Close project details when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.project-item')) {
        document.querySelectorAll('.project-details.active').forEach(detail => {
            detail.classList.remove('active');
        });
    }
});
