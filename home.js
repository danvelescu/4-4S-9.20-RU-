var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("container1");
  var imgs = document.getElementsByClassName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   for (i = 0; i < dots.length; i++) {
     imgs[i].className = imgs[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 2000); // Меняйте изображение каждые 2 секунды
}
