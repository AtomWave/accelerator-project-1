export function initFaq() {
  const faqSection = document.querySelector('[data-test="faq"]');

  if (!faqSection) {
    return;
  }

  const tabControls = faqSection.querySelector('[data-faq-tabs="controls"]');
  const accordionWrappers = faqSection.querySelectorAll('[data-faq-accordion="wrapper"]');

  const handleTabSwitch = (tabButton) => {
    const tabId = tabButton.dataset.tabId;

    tabControls.querySelectorAll('[data-faq-tabs="control"]').forEach((btn) => btn.classList.remove('tab-button--active'));
    accordionWrappers.forEach((wrapper) => wrapper.classList.add('faq-accordion--hidden'));

    tabButton.classList.add('tab-button--active');
    faqSection.querySelector(`[data-tab-content="${tabId}"]`).classList.remove('faq-accordion--hidden');

    localStorage.setItem('activeFaqTab', tabId);

    const currentTabContent = faqSection.querySelector(`[data-tab-content="${tabId}"]`);
    const firstAccordionItemInput = currentTabContent.querySelector('.faq-accordion__list .faq-accordion__item input[type="checkbox"]:first-child');
    if (firstAccordionItemInput) {
      firstAccordionItemInput.checked = true;
    }
  };

  tabControls.querySelectorAll('[data-faq-tabs="control"]').forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      handleTabSwitch(tabButton);
    });
  });

  const activeTabId = localStorage.getItem('activeFaqTab');
  const firstTabButton = tabControls.querySelector('[data-faq-tabs="control"]');

  if (activeTabId) {
    const activeTabButton = tabControls.querySelector(`[data-tab-id="${activeTabId}"]`);
    if (activeTabButton) {
      handleTabSwitch(activeTabButton);
    } else {
      handleTabSwitch(firstTabButton);
    }
  } else {
    handleTabSwitch(firstTabButton);
  }
}
