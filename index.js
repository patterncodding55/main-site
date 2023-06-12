
window.onscroll = () => {
    let header = document.querySelector(".header");

    header.classList.toggle('sticky', window.scrollY > 100);
}

let menuIcon = document.querySelector("#menu-icon");
let menuClose = document.querySelector("#menu-close");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuClose.classList.toggle('navbar')
    navbar.classList.toggle('active')
};


// dark-mode
let darkMode = document.querySelector("#darkMode-icon");

darkMode.onclick = () => {
    darkMode.classList.toggle('fa-home');
    document.body.classList.toggle('dark-mode');
};

// scroll reverce
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 ScrollReveal().reveal('.services, .faq', { origin: 'top' });
 ScrollReveal().reveal('.social-media, .image-faq img, .categories-left, .services-box, .about-achievement-right', { origin: 'right' });
 ScrollReveal().reveal('.categries-right, .faq-right, .footer-container', { origin: 'left' });


   /*  === typed text js animation === */
const typed = new Typed(".multiple-text", {
    strings: ["Front-End Developer","(HTML,CSS,Bootstrap,Jquery,JS, & React)", "Back-End Developer", "(MSQL/MongoDb,Python/Node,Django)", 
    "Full-Stack Developer", "graphic Designer", "Blogger", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// for

// navbar change on sroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// Toggle the question and answer paragraphs

const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // changing the icon as it toggles
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fa fa-plus'){
            icon.className = 'fa fa-minus';
        }else{
            icon.className = 'fa fa-plus';
        }
    })
})

// toggle nav bugger

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = 'none';
});

// close navbar

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = 'inline-block';
});

