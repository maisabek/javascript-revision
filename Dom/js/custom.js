$(window).scroll(function() {
    if ($(".navbar2").offset().top > 50) {
        $(".navbar2").addClass("top-nav-collapse");
    } else {
        $(".navbar2").removeClass("top-nav-collapse");
    }
});

$(document).ready(function(){
    $(".question1").click(function(){
        $(".answer1").slideToggle(1000);
    });});

    $(document).ready(function(){
        $(".question3").click(function(){
            $(".answer3").slideToggle(1000);
        });});
        
    $(document).ready(function(){
    $(".question2").click(function(){
        $(".answer2").slideToggle(1000);
    });});
       
    var slideIndex = 1;
    showSlides(slideIndex);
     
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
     
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
     
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("app");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slides[slideIndex-1].style.display = "block"; 
    }



    var slideIndex = 0;
    
    carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("app");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
}


carouselclients();
function carouselclients() {
  var i;
  var x = document.getElementsByClassName("");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  //x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
}

var myNav = document.getElementById("nav2"),
    myDiv = document.getElementById("nav1");

window.onscroll = function say() {
    
    "use strict";
    
    if (window.scrollY <= myDiv.offsetHeight) {
        
        myNav.classList.remove("pos");
        
    } else if (window.scrollY > myDiv.offsetHeight) {

        myNav.classList.add("pos");
        
    }
    
};

