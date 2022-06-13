console.log("abstract01-slideshow.js");

let slideIndex01 = 1;
showSlides01(slideIndex01);

// Next/previous controls
function plusSlides01(n) {
  showSlides01(slideIndex01 += n);
}

// Thumbnail image controls
function currentSlide01(n) {
  showSlides01(slideIndex01 = n);
}

function showSlides01(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides01");
  let dots = document.getElementsByClassName("dot01");
  if (n > slides.length) {slideIndex01 = 1}
  if (n < 1) {slideIndex01 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active01", "");
  }
  slides[slideIndex01-1].style.display = "block";
  dots[slideIndex01-1].className += " active01";
}
