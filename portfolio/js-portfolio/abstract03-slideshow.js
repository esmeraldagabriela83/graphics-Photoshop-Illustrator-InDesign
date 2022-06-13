console.log("abstract03-slideshow.js");

let slideIndex03 = 1;
showSlides03(slideIndex03);

// Next/previous controls
function plusSlides03(n) {
  showSlides03(slideIndex03 += n);
}

// Thumbnail image controls
function currentSlide03(n) {
  showSlides03(slideIndex03 = n);
}

function showSlides03(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides03");
  let dots = document.getElementsByClassName("dot03");
  if (n > slides.length) {slideIndex03 = 1}
  if (n < 1) {slideIndex03 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active03", "");
  }
  slides[slideIndex03-1].style.display = "block";
  dots[slideIndex03-1].className += " active03";
}
