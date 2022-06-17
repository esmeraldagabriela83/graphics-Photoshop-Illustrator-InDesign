//https://www.youtube.com/watch?v=4YQ4svkETS0&t=3s
//Simple JavaScript Slideshow In 5 Minutes

//https://www.youtube.com/watch?v=0X0kovjzLrw
//How To Send Email from HTML Contact Form Without Any Backend Language

console.log("I am the home-photo.js file");
///
//mai intai activeaza section cu id="home-slider"

// var homeSlider=document.getElementById("home-slider");
// console.log("homeSlider is : " , homeSlider);
// homeSlider.style.display="flex";
// homeSlider.style.alignItems="center";
// homeSlider.style.justifyContent="center";
// homeSlider.style.border="3px solid yellow";
//
// var mySliderImages=document.getElementById("mySlider");
//
// mySliderImages.style.height="60vh";
// mySliderImages.style.width="100%";
// mySliderImages.style.backgroundRepeat="no-repeat";
// mySliderImages.style.backgroundPosition="no-repeat";
// mySliderImages.style.backgroundSize=" contain";
// mySliderImages.style.backgroundImage= "url(./images/home1.jpg)";
// // mySliderImages.style.backgroundImage= array[0];
//
// const array=["url(./images/home1.jpg)" , "url(./images/home2.jpg)" , "url(./images/home3.jpg)"]
// var i=0 ;
// function change(){
//     mySliderImages.style.backgroundImage= array[i];
//   if(i<array.length -1){
//    i++
//   }else{
//     i=0;
//   }
// }
// setInterval(change, 3000);
///
// height: 150px;
//   width: 100%;
//   background-repeat: no-repeat;
//   background-image: url(./images/pexels-photo-847393.jpeg);
//   background-position: center;
//   background-size: contain;
///////////////////////////////////////////////////////


var imgImg=document.getElementById("img-img");

imgImg.style.height="75%";
imgImg.style.marginTop="5em";

imgImg.src="./images/home1.jpg";

const arrayImg=["./images/home1.jpg" , "./images/home2.jpg" , "./images/home3.jpg"]
var j=0 ;
function changeImg(){
    imgImg.src= arrayImg[j];
  if(j<arrayImg.length -1){
   j++
  }else{
    j=0;
  }
}
setInterval(changeImg, 3000);









//
