document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let current = 0;

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        current++;
        if (current >= slides.length) current = 0;
        showSlide(current);
    }

    setInterval(nextSlide, 5000);

    // افکت پارالاکس
    window.addEventListener('scroll', function() {
        let scroll = window.scrollY;
        document.querySelectorAll('.parallax-img').forEach(function(img) {
            img.style.transform = 'translateY(' + (scroll * 0.2) + 'px)';
        });
    });
});