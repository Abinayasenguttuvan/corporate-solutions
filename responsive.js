// TOGGLE MENU
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// MOBILE DROPDOWN CLICK
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});


  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // Home page (index.html)
    if (
      (currentPage === "" || currentPage === "index.html") &&
      linkPage === "index.html"
    ) {
      link.classList.add("active");
    }

    // Other pages
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });




