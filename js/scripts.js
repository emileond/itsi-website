// Navbar Functionality
const navbar = document.querySelector('.navbar');
const h1 = document.querySelector('h1');
const mainNav = document.querySelector('.main-nav');
const navBarToggle = document.querySelector('.navbar-toggle');
const navItems = document.querySelectorAll('.main-nav li')

// Mobile Toggle
navBarToggle.addEventListener('click', () => { mainNav.classList.toggle('active') });

// Navbar Menu Active Item
function activeLink() {
    mainNav.classList.remove('active');
}

navItems.forEach(el => {
    el.addEventListener('click', activeLink)
})

// Scroll
const scrollObs = new IntersectionObserver(scrollObserver);

function scrollObserver(payload) {
    if (!payload[0].isIntersecting) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
}

scrollObs.observe(h1);