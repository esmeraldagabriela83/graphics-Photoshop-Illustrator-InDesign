///////////////to show and hide sources links

var sourceLink=document.querySelector(".btn_show_hide");

var showHide=function(event){
    event.preventDefault();
  this.nextElementSibling.classList.toggle("hidden");
  console.log("next element is : " , this.nextElementSibling);
}

sourceLink.addEventListener("click" , showHide);
console.log("sourceLink is : " , sourceLink);

/////////////
