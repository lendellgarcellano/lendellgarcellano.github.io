
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
  const current = window.location.pathname.split("/").pop(); // filename.html

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (current === "" && linkPage === "index.html") {
      link.classList.add("active");
    } else if (linkPage === current) {
      link.classList.add("active");
    }
  });
});
