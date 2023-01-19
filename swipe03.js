var slideIndex = 0;
var slides = document.querySelectorAll('.slider img');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var intervalId;

function showSlide() {
    // remove the active class from all slides
    for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    // add the active class to the current slide
    slides[slideIndex].classList.add('active');
}

showSlide();

function startSlider() {
    intervalId = setInterval(function(){
        // increment the slide index
        slideIndex++;
        // if the slide index is greater than the number of slides, set it back to 0
        if(slideIndex === slides.length) {
            slideIndex = 0;
        }
        // show the slide
        showSlide();
    }, 3000);
}

startSlider();

prevButton.addEventListener('click', function() {
    clearInterval(intervalId);
    slideIndex--;
    if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
    startSlider();
});

nextButton.addEventListener('click', function() {
    clearInterval(intervalId);
    slideIndex++;
    if(slideIndex === slides.length) {
        slideIndex = 0;
    }
    showSlide();
    startSlider();
});

