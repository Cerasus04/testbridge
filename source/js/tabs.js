'use strict';

(function () {
  function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
      tabsContent.forEach(item => {
        item.classList.add('options__detals--hide');
        item.classList.remove('options__detals--show');
      });

      tabs.forEach(item => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add('options__detals--show');
      tabsContent[i].classList.remove('options__detals--hide');
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

  tabs('.options__item', '.options__detals', '.options__list', 'options__item--active');
})();
