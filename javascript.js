        // Dark mode toggle
        const toggleBtn = document.getElementById("dark-toggle");
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });

        // Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});