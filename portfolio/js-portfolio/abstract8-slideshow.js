console.log("abstract8-slideshow.js");

let slideIndex8 = 1;
showSlides8(slideIndex8);

// Next/previous controls
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

// Thumbnail image controls
function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides8");
  let dots = document.getElementsByClassName("dot8");
  if (n > slides.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active8", "");
  }
  slides[slideIndex8-1].style.display = "block";
  dots[slideIndex8-1].className += " active8";
}
