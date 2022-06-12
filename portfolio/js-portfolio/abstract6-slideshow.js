console.log("abstract6-slideshow.js");

let slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides6");
  let dots = document.getElementsByClassName("dot6");
  if (n > slides.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active6", "");
  }
  slides[slideIndex6-1].style.display = "block";
  dots[slideIndex6-1].className += " active6";
}
