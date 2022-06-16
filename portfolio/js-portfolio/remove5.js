console.log("remove5.js");

let slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  let dots = document.getElementsByClassName("dot5");
  if (n > slides.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active5", "");
  }
  slides[slideIndex5-1].style.display = "block";
  dots[slideIndex5-1].className += " active5";
}
