// Mobile menu functionality
function showMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}

function hideMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 