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

// Hero Photo Slides


const slides = document.querySelectorAll("section.relative > div[data-index]");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("opacity-100", i === index);
    slide.classList.toggle("opacity-0", i !== index);
    dots[i].classList.toggle("bg-white/80", i === index);
    dots[i].classList.toggle("bg-white/40", i !== index);
  });
  currentIndex = index;
}

function nextSlide() {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.dataset.dot));
    resetInterval();
  });
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

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


// Back To Top Button

const backToTopButton = document.getElementById("backToTop");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  if(window.scrollY > 300) {
    backToTopButton.classList.remove("opacity-0");
    backToTopButton.classList.add("opacity-100");
  } else {
    backToTopButton.classList.add("opacity-0");
    backToTopButton.classList.remove("opacity-100");
  }
  const footerRect = footer.getBoundingClientRect();
  const overlap = window.innerHeight - footerRect.top;

  if (overlap > 0 ) {
    backToTopButton.style.bottom = `${overlap +24}px`
  } else {
    backToTopButton.style.bottom = "24px";
  }
});

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

backToTopButton.addEventListener("click", backToTop);


