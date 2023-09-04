let sliderIndex = 1;

showSlides();

function plusSlide(n) {
  showSlides((sliderIndex += n));
}

function showSlides() {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (sliderIndex == 0) {
    sliderIndex = slides.length;
  }
  if (sliderIndex == slides.length + 1) {
    sliderIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sliderIndex - 1].style.display = "flex";
  dots[sliderIndex - 1].className += " active";
}

function currentSlide(n) {
  showSlides((sliderIndex = n));
}

setInterval(() => {
  showSlides((sliderIndex += 1));
}, 10000);
