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
})();
