'use strict';

(function () {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
})();

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

'use strict';

(function () {
  const COUNTRY_CODE = '+7(';
  const length = COUNTRY_CODE.length;

  const onInputPhoneInput = (e) => {
    const matrix = COUNTRY_CODE + '___) ___ __ __';
    const def = matrix.replace(/\D/g, '');
    let i = 0;
    let val = e.target.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    e.target.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && i < val.length) {
        return val.charAt(i++);
      } else if (i >= val.length) {
        return '';
      } else {
        return a;
      }
    });
  };

  const onFocusPhoneInput = (e) => {
    if (!e.target.value) {
      e.target.value = COUNTRY_CODE;
      e.target.addEventListener('input', onInputPhoneInput);
      e.target.addEventListener('blur', onBlurPhoneInput);
      e.target.addEventListener('keydown', onKeydownPhoneInput);
    }
  };

  const onKeydownPhoneInput = (e) => {
    if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
      e.target.setSelectionRange(length, length);
    }
    if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
      e.preventDefault();
    }
    if (e.target.selectionStart === 1 && e.keyCode === 46) {
      e.preventDefault();
    }
  };

  const onBlurPhoneInput = (e) => {
    if (e.target.value === COUNTRY_CODE) {
      e.target.value = '';
      e.target.removeEventListener('input', onInputPhoneInput);
      e.target.removeEventListener('blur', onBlurPhoneInput);
    }
  };

  const initPhoneMask = () => {
    const phoneInputs = document.querySelectorAll('[data-type="tel"]');
    if (phoneInputs.length) {
      phoneInputs.forEach((input) => {
        input.addEventListener('focus', onFocusPhoneInput);
      });
    }
  };

  initPhoneMask();
})();

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

'use strict';

(function () {
  function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass, contentActiveClass, contentHideClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
      tabsContent.forEach(item => {
        item.classList.add(contentHideClass);
        item.classList.remove(contentActiveClass);
      });

      tabs.forEach(item => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add(contentActiveClass);
      tabsContent[i].classList.remove(contentHideClass);
      tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  tabs('.options__list1-item', '.options__detals1', '.options__list1', 'options__list1-item--active', 'options__detals1--show', 'options__detals1--hide');
  tabs('.options__list2-item', '.options__detals2', '.options__list2', 'options__list2-item--active', 'options__detals2--show', 'options__detals2--hide');
  tabs('.options__control', '.options__container', '.options__controls',  'options__control--active', 'options__container--active', 'options__container--disabled');
})();
