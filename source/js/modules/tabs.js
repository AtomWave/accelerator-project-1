const initTabs = () => {
  const tabsParentElement = document.querySelector('[data-tabs="parent"]');

  if (!tabsParentElement) {
    return;
  }

  const tabsControls = tabsParentElement.querySelectorAll('[data-tabs="control"]');
  const tabsElements = tabsParentElement.querySelectorAll('[data-tabs="element"]');

  if (!tabsControls.length || !tabsElements.length) {
    return;
  }

  // Проверяем, есть ли активный таб
  let activeTabFound = false;
  tabsControls.forEach((control) => {
    if (control.classList.contains('is-active')) {
      activeTabFound = true;
    }
  });

  // Если нет активного таба, активируем первый
  if (!activeTabFound && tabsControls.length > 0 && tabsElements.length > 0) {
    tabsControls[0].classList.add('is-active');
    tabsElements[0].classList.add('is-active');
  }

  const controlClickHandler = (evt) => {
    const target = evt.target;

    if (target.classList.contains('is-active')) {
      return;
    }

    tabsControls.forEach((control) => {
      control.classList.remove('is-active');
    });

    tabsElements.forEach((element) => {
      element.classList.remove('is-active');
    });

    target.classList.add('is-active');

    const dataContent = target.dataset.content;
    const correspondingTab = tabsParentElement.querySelector(`[data-element-content="${dataContent}"]`);

    if (correspondingTab) {
      correspondingTab.classList.add('is-active');
    }
  };

  tabsControls.forEach((control) => {
    control.addEventListener('click', controlClickHandler);
  });
};

export { initTabs };
