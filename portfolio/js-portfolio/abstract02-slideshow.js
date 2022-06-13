console.log("abstract02-slideshow.js");

let slideIndex02 = 1;
showSlides02(slideIndex02);

// Next/previous controls
function plusSlides02(n) {
  showSlides02(slideIndex02 += n);
}

// Thumbnail image controls
function currentSlide02(n) {
  showSlides02(slideIndex02 = n);
}

function showSlides02(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides02");
  let dots = document.getElementsByClassName("dot02");
  if (n > slides.length) {slideIndex02 = 1}
  if (n < 1) {slideIndex02 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active02", "");
  }
  slides[slideIndex02-1].style.display = "block";
  dots[slideIndex02-1].className += " active02";
}
