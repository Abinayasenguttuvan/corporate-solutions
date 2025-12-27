/* CASE STUDY SLIDER */
let cases = document.querySelectorAll('.case');
let index = 0;

document.getElementById('nextCase').onclick = () => {
  cases[index].classList.remove('active');
  index = (index + 1) % cases.length;
  cases[index].classList.add('active');
};

/* TESTIMONIAL AUTO SLIDE */
let testimonials = document.querySelectorAll('.testimonial');
let t = 0;
setInterval(()=>{
  testimonials[t].classList.remove('active');
  t = (t + 1) % testimonials.length;
  testimonials[t].classList.add('active');
},4000);


  document.querySelectorAll(".case-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });


 
function typeWriter(el, text, speed) {
  let i = 0;
  el.classList.add("type-cursor");

  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      el.classList.remove("type-cursor");
    }
  }, speed);
}

let typed = false;

window.addEventListener("scroll", () => {
  const section = document.getElementById("ai-solutions");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!typed && position < screenHeight - 150) {
    typed = true;

    typeWriter(
      document.getElementById("cube-type-1"),
      "Boost your digital growth with intelligent, data-driven AI marketing strategies.",
      35
    );

    setTimeout(() => {
      typeWriter(
        document.getElementById("cube-type-2"),
        "We automate SEO, ads, analytics, and content optimization to deliver higher engagement, smarter decisions, and scalable growth.",
        25
      );
    }, 2000);
  }
});



window.addEventListener("load", () => {
  const content = document.querySelector(".trusted-content");

  setTimeout(() => {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
    content.style.transition = "all 1.2s ease";
  }, 500);
});


const faqTrack = document.querySelector(".faq-track");

faqTrack.addEventListener("mouseenter", () => {
  faqTrack.style.animationPlayState = "paused";
});

faqTrack.addEventListener("mouseleave", () => {
  faqTrack.style.animationPlayState = "running";
});




