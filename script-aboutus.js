document.addEventListener('DOMContentLoaded',() => {
const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    const scrollThreshold = 50;
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > scrollThreshold) {
                navbar.classList.add('hide');
            }
        } else {
            // Scrolling up
            navbar.classList.remove('hide');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});



//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu'); 

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active')
);
 
});

//Fade In effect for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach((el) => observer.observe(el));

//Fade in effect Hero container
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const heroContainer = document.querySelectorAll('.container-hero');
heroContainer.forEach((el) => observer1.observe(el));

//Fade in effect description heading
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const descriptionHeading = document.querySelectorAll('.description-heading');
descriptionHeading.forEach((el) => observer2.observe(el));

//Fade in effect description preview
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const descriptionPreview = document.querySelectorAll('.description-preview');
descriptionPreview.forEach((el) => observer3.observe(el));

//Fade in effect description text
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const descriptionText = document.querySelectorAll('.dsc-text');
descriptionText.forEach((el) => observer4.observe(el));

//Fade in effect features heading
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const featuresHeading = document.querySelectorAll('.features-heading');
featuresHeading.forEach((el) => observer5.observe(el));

//Fade in effect git heading
const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const gitHeading = document.querySelectorAll('.git-heading');
gitHeading.forEach((el) => observer6.observe(el));

//Fade in effect git text
const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const gitText = document.querySelectorAll('.git-text');
gitText.forEach((el) => observer7.observe(el));