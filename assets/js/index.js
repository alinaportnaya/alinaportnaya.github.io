const slides = [
  {
    src: "./assets/images/32.jpg",
    alt: "art1",
    description: "Квітучі гілки мигдалю - Ван Гог",
  },
  {
    src: "./assets/images/50.jpg",
    alt: "art2",
    description: "Натюрморт - Жан-Батист Сімеон Шарден",
  },
  {
    src: "./assets/images/58.jpg",
    alt: "art3",
    description: "Свято в Сен-Клу - Жан-Оноре Фрагонар",
  },
  {
    src: "./assets/images/13.jpg",
    alt: "art4",
    description: "Танці у Мулен де ла Галетт - П'єр-Огюст Ренуар",
  },
  {
    src: "./assets/images/20.jpg",
    alt: "art5",
    description: "Без назви - Віталій Слободський",
  },
  {
    src: "./assets/images/30.jpg",
    alt: "art6",
    description: "Остра-Гехеге - Каспар Давид Фрідріх",
  },
  {
    src: "./assets/images/29.jpg",
    alt: "art7",
    description: "Пірс Кале - Вільям Тернер",
  },
  {
    src: "./assets/images/25.jpg",
    alt: "art8",
    description: "Афінська школа - Рафаель Санті",
  },
  {
    src: "./assets/images/36.jpg",
    alt: "art9",
    description: "Адольф Моне читає в саду - Клод Моне",
  },
];

let currentSlideIndex = 0;
const mainImg = document.querySelector(".mainImg");
const imgDescription = document.querySelector(".imgDescription");
const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");

updateSlideImage(currentSlideIndex);
nextBtn.addEventListener("click", nextSlideHandler);
prevBtn.addEventListener("click", prevSlideHandler);

function updateSlideImage(currentSlideIndex) {
  mainImg.src = slides[currentSlideIndex].src;
  mainImg.alt = slides[currentSlideIndex].alt;
  imgDescription.textContent = slides[currentSlideIndex].description;
}

function nextSlideHandler(params) {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlideImage(currentSlideIndex);
}
function prevSlideHandler(params) {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlideImage(currentSlideIndex);
}
