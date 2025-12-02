
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Load menu.html dynamically
  fetch("menu.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("menu").innerHTML = data;

      // Now that menu exists, set up toggle and active highlight
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      }

      // Highlight active page
      const current = window.location.pathname.split("/").pop();

      document.querySelectorAll(".nav-links a").forEach(link => {
        const linkPage = link.getAttribute("href");
        if (current === "" && linkPage === "index.html") {
          link.classList.add("active");
        } else if (linkPage === current) {
          link.classList.add("active");
        }
      });
    });
});

