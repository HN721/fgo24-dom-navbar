const toggle = document.getElementById("hamburger");
const navbar = document.getElementById("navList");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
