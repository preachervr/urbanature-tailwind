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

    document.querySelectorAll('.before-after-container').forEach(container => {
      const slider = container.querySelector('.range-slider');
      const clipImage = container.querySelector('.clip-image');

      const initialValue = slider.value;
      clipImage.style.clipPath = `inset(0 ${100 - initialValue}% 0 0)`;
      clipImage.style.webkitClipPath = `inset(0 ${100 - initialValue}% 0 0)`;

      slider.addEventListener('input', (e) => {
        const value = e.target.value;
        clipImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        clipImage.style.webkitClipPath = `inset(0 ${100 - value}% 0 0)`;
      });
    });

