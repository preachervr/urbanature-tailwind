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


// Theme Switcher

const themeButtons = document.querySelectorAll('.themeToggle');
const html = document.documentElement;

function updateDots(isDark) {
  themeButtons.forEach(btn => {
    const themeDot = btn.querySelector('.themeDot');
    themeDot.classList.toggle('left-1', !isDark);
    themeDot.classList.toggle('right-1', isDark);
  });
}

let isDark = localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
html.classList.toggle('dark', isDark);
updateDots(isDark);

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    isDark = !html.classList.contains('dark');
    html.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    updateDots(isDark);
  });
});


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


// Overlay On Mobile

const cards = document.querySelectorAll('.block.group');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const overlay = card.querySelector('.absolute.inset-0');
    overlay.classList.toggle('opacity-100');
  });
});

