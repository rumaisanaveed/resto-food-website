const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburgerbtn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    if (hamburgerBtn && mobileMenu) {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    }
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
};

initApp();
