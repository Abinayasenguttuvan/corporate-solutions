
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");

/* Mobile menu toggle */
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* Mobile dropdown toggle */
dropdownBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});

/* Close menu after clicking any link */
document.querySelectorAll(".dropdown-content a, .nav-links > li > a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      navbar.classList.remove("active");
      dropdown.classList.remove("active");
    }
  });
});


// Footer accordion (optional)
if (window.innerWidth <= 600) {
  document.querySelectorAll(".footer-box h3").forEach(title => {
    title.addEventListener("click", () => {
      title.parentElement.classList.toggle("active");
    });
  });
}

