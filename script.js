let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (the dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Wrap around to the first slide
  if (n > slides.length) {
    slideIndex = 1
  }
  
  // Wrap around to the last slide
  if (n < 1) {
    slideIndex = slides.length
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and highlight the active dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}