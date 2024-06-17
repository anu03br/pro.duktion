// javascript for katrgorien radio buttons
// --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Select the radio buttons
    const smallPaintingRadio = document.getElementById('small-painting');
    const bigPaintingRadio = document.getElementById('big-painting');

    // Select all the article cards
    const allArticleCards = document.querySelectorAll('.article-card');

    // Function to filter article cards based on the selected radio button
    function filterArticles() {
        if (smallPaintingRadio.checked) {
            // Show only small paintings
            allArticleCards.forEach(card => {
                if (card.querySelector('.painting-small')) {
                    card.style.display = 'block'; // Show
                } else {
                    card.style.display = 'none'; // Hide
                }
            });
        } else if (bigPaintingRadio.checked) {
            // Show only big paintings
            allArticleCards.forEach(card => {
                if (card.querySelector('.painting-big')) {
                    card.style.display = 'block'; // Show
                } else {
                    card.style.display = 'none'; // Hide
                }
            });
        }
    }

    // Add event listeners to the radio buttons
    smallPaintingRadio.addEventListener('change', filterArticles);
    bigPaintingRadio.addEventListener('change', filterArticles);

    // Initial call to set the correct articles on page load
    filterArticles();
});
// more javascrips
// ---------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}