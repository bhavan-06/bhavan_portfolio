// PRELOADER

window.addEventListener("load", function () {

    const preloader =
        document.getElementById("preloader");

    setTimeout(function () {

        preloader.style.opacity = "0";

        setTimeout(function () {

            preloader.style.display = "none";

        }, 500);

    }, 1000);

});


// SCROLL PROGRESS

window.addEventListener("scroll", function () {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "scroll-progress"
    ).style.width = progress + "%";

});


// NAVBAR

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// MOBILE MENU

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.getElementById("navLinks");


mobileMenu.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

    }
);


// BACK TO TOP

const backToTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// TYPING EFFECT

const roles = [

    "AI Enthusiast",

    "Data Science Student",

    "ML Developer",

    "Future Data Engineer"

];


let roleIndex = 0;


setInterval(function () {

    roleIndex =
        (roleIndex + 1) % roles.length;

    document.getElementById(
        "typingText"
    ).textContent =
        roles[roleIndex];

}, 2500);


// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        showToast(
            "Thank you! Your message has been recorded."
        );

        contactForm.reset();

    }
);


// TOAST

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}