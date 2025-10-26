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


