let slideIndex = 1;
showSlides(slideIndex);
let slideInterval;

// Автоматическая смена слайдов
function startSlideShow() {
  slideInterval = setInterval(() => {
    showSlides(slideIndex += 1);
  }, 2000);
}

// Остановка автоматической смены при ручном управлении
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Переход к следующему/предыдущему слайду
function plusSlides(n) {
  stopSlideShow(); // Останавливаем автоматическую смену
  showSlides(slideIndex += n);
}

// Переход к конкретному слайду
function currentSlide(n) {
  stopSlideShow(); // Останавливаем автоматическую смену
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

// Запускаем автоматическую смену слайдов
startSlideShow();
