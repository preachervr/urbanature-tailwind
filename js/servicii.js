// Hambuger Menu

  const btnMenu = document.getElementById("btnMenu");
  const navMobile = document.getElementById("navMobile");

    btnMenu.addEventListener("click", () => {
      navMobile.classList.toggle("hidden");
      btnMenu.textContent = navMobile.classList.contains("hidden") ? "MENU ☰" : "MENU X";
    });


// Active Page

const links = document.querySelectorAll(`#navLinks a`);
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add(`header-shadow`);
  }
})


// Before-After Slider
document.querySelectorAll('.before-after-container').forEach(container => {
  const slider = container.querySelector('.range-slider');
  const clipImage = container.querySelector('.clip-image');
  const initialValue = slider.value;
  clipImage.style.clipPath = `inset(0 ${100 - initialValue}% 0 0)`;
  slider.addEventListener('input', e => {
    const value = e.target.value;
    clipImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  });
});

