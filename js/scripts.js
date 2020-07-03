// Navbar Functionality
const navbar = document.querySelector('.navbar');
const h1 = document.querySelector('h1');

const scrollObs = new IntersectionObserver(scrollObserver);


function scrollObserver(payload) {
    if (!payload[0].isIntersecting) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
}

scrollObs.observe(h1);