'use strict';

(function () {
  const slides = document.querySelectorAll('.review__wrapper');
  const next = document.querySelector('.review__btn-mb');

  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    if(n > slides.length) {
      slideIndex =1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.classList.remove('review__wrapper--current'));

    slides[slideIndex - 1].classList.add('review__wrapper--current');

  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  next.addEventListener('click', () => plusSlides(1));
})();
