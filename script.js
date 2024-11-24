let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slideshowPage = document.querySelector(".carousel");
    let slides = slideshowPage.querySelectorAll(".mySlides");
    
    if (n > slides.length) {
        slideIndex = 1; 
    } else if (n < 1) {
        slideIndex = slides.length;  
    }
    
    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
