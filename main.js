const menuBtn = document.querySelector(".navbar__icons");
const navLinks = document.querySelector(".navbar__links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu after clicking a link (mobile)
  document.querySelectorAll(".navbar__links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}
