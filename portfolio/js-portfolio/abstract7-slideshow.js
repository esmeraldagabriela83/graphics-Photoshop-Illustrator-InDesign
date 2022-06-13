console.log("abstract7-slideshow.js");

let slideIndex7 = 1;
showSlides7(slideIndex7);

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

// Thumbnail image controls
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides7");
  let dots = document.getElementsByClassName("dot7");
  if (n > slides.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active7", "");
  }
  slides[slideIndex7-1].style.display = "block";
  dots[slideIndex7-1].className += " active7";
}
