'use strict';

(function () {
  const header = document.querySelector('.header');
  const headerNav = header.querySelector('.header__nav');
  const headerBtn = header.querySelector('.header__btn-mb');
  const listItems = header.querySelectorAll('.header__item');

  headerNav.classList.add('header__nav--closed');

  const menuOpened =  () => {
    headerNav.classList.remove('header__nav--closed');
    headerNav.classList.add('header__nav--opened');
    headerBtn.classList.remove('header__btn-mb--burger');
    headerBtn.classList.add('header__btn-mb--closed');
  };

  const menuClosed = () => {
    headerNav.classList.remove('header__nav--opened');
    headerNav.classList.add('header__nav--closed');
    headerBtn.classList.remove('header__btn-mb--closed');
    headerBtn.classList.add('header__btn-mb--burger');
  };

  const onMenuClick = function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      menuOpened();
    } else {
      menuClosed();
    }
  };

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onMenuClick);
  }

  headerBtn.addEventListener('click', onMenuClick);

})();
