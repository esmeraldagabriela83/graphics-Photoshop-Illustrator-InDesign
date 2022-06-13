console.log("abstract04-slideshow.js");

let slideIndex04 = 1;
showSlides04(slideIndex04);

// Next/previous controls
function plusSlides04(n) {
  showSlides04(slideIndex04 += n);
}

// Thumbnail image controls
function currentSlide04(n) {
  showSlides04(slideIndex04 = n);
}

function showSlides04(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides04");
  let dots = document.getElementsByClassName("dot04");
  if (n > slides.length) {slideIndex04 = 1}
  if (n < 1) {slideIndex04 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active04", "");
  }
  slides[slideIndex04-1].style.display = "block";
  dots[slideIndex04-1].className += " active04";
}
