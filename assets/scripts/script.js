const body = document.getElementById('body');
const toggle = document.getElementById('toggle');
const input = document.getElementById('switch');

toggle.addEventListener('click', function() {
  const isChecked = input.checked;
  if (isChecked) {
    body.classList.remove('night');
  } else {
    body.classList.add('night');
  }
});

function carouselchoose(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  $(".carousel-container").fadeOut("slow",function(){
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    $(".carousel-container").fadeIn("slow");
  });
}

var slideIndex = 1;

function plusSlides(n) {
  var imgs = document.getElementsByClassName("item-img");
  slideIndex += n
  carouselchoose(imgs[slideIndex-1])
}

function navbar() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("navbar");
  if (x.className === "dropdown-menu") {
    x.className += " toggle";
  } else {
    x.className = "dropdown-menu";
  }
  if (y.className === "navbar") {
    y.className += " toggle";
  } else {
    y.className = "navbar";
  }
}