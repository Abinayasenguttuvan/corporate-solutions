// Fade animations
const fadeElements = document.querySelectorAll(".fade");
const slideElements = document.querySelectorAll(".slide");

function animateOnScroll() {
    fadeElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });

    slideElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
