// <!-- Smooth Scroll Script -->
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// <!-- IntersectionObserver for Section Fade-In -->
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.05
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

// nav bar script

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var navLinks = document.querySelectorAll('.nav-link');
  var scrollPosition = window.scrollY;
  var headerHeight = document.getElementById('header').offsetHeight;

  if (scrollPosition > headerHeight - 100) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, ' + Math.min(scrollPosition / headerHeight, 1) + ')';
    navLinks.forEach(function(link) {
      link.style.color = 'rgba(0, 0, 0, ' + Math.min(scrollPosition / headerHeight, 1) + ')';
      link.style.textShadow = 'none'; // Remove shadow when navbar is opaque
    });
  } else {
    navbar.style.backgroundColor = 'transparent';
    navLinks.forEach(function(link) {
      link.style.color = 'white';
      link.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.75)'; // Add shadow when navbar is transparent
    });
  }
});

// Get elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeBtn = document.getElementById('close-btn');
const closeIcon = document.getElementById('close-icon');
const mobileMenuPanel = document.getElementById('mobile-menu-panel');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');

// Toggle the mobile menu panel
function toggleMobileMenu() {
  // Slide the panel in and out by toggling translate-x-0 class
  mobileMenuPanel.classList.toggle('translate-x-0');
  // Toggle hamburger and close icons
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden'); // Ensure close icon is toggled properly
  // Toggle body scroll
  document.body.classList.toggle('overflow-hidden');
}

// Add event listener to the hamburger button
hamburgerBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
mobileMenuPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', toggleMobileMenu);
});

// Close the menu when clicking outside of the menu panel
document.addEventListener('click', (event) => {
    if (!mobileMenuPanel.contains(event.target) && event.target !== hamburgerBtn && !hamburgerBtn.contains(event.target)) {
        if (mobileMenuPanel.classList.contains('translate-x-0')) {
            toggleMobileMenu(); // Reuse the toggle function for consistency
        }
    }
});

// Close the panel when the close button is clicked
closeBtn.addEventListener('click', () => {
    // Slide out the menu
    mobileMenuPanel.classList.remove('translate-x-0');

    // Toggle hamburger and close icons
    hamburgerIcon.classList.remove('hidden'); // Show hamburger icon
    closeIcon.classList.add('hidden'); // Hide close icon

    // Allow body scroll again
    document.body.classList.remove('overflow-hidden');
});

// Close the panel if scrolling outside the panel
window.addEventListener('scroll', (event) => {
    // Check if the mobile menu panel is open
    if (mobileMenuPanel.classList.contains('translate-x-0')) {
        // Close the panel when scrolling
        mobileMenuPanel.classList.remove('translate-x-0');

        // Toggle hamburger and close icons
        hamburgerIcon.classList.remove('hidden'); // Show hamburger icon
        closeIcon.classList.add('hidden'); // Hide close icon

        // Allow body scroll again
        document.body.classList.remove('overflow-hidden');
    }
});

// Change hamburger color on scroll
window.addEventListener('scroll', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var scrollPosition = window.scrollY;
    var headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight - 100) {
        // Change navbar background and link colors
        navbar.style.backgroundColor = 'rgba(255, 255, 255, ' + Math.min(scrollPosition / headerHeight, 1) + ')';
        navLinks.forEach(function (link) {
            link.style.color = 'rgba(0, 0, 0, ' + Math.min(scrollPosition / headerHeight, 1) + ')';
        });

        // Change hamburger icon to dark gray when scrolling past the header
        hamburgerIcon.style.color = '#333'; // Dark gray color
    } else {
        // Revert to original transparent navbar and white links
        navbar.style.backgroundColor = 'transparent';
        navLinks.forEach(function (link) {
            link.style.color = 'white';
        });

        // Change hamburger icon back to white when in the header
        hamburgerIcon.style.color = 'white'; // White color
    }
});
