// faq.js

/**
 * Инициализирует функциональность FAQ-секции: переключение табов и раскрытие первого аккордеона.
 */
export function initFaq() {
  const faqSection = document.querySelector('[data-test="faq"]');

  if (!faqSection) {
    return; // Если FAQ-секция не найдена, выходим
  }

  const tabControls = faqSection.querySelector('[data-faq-tabs="controls"]');
  const accordionWrappers = faqSection.querySelectorAll('[data-faq-accordion="wrapper"]');

  // Функция для переключения табов
  const handleTabSwitch = (tabButton) => {
    const tabId = tabButton.dataset.tabId;

    // Деактивируем все табы и скрываем контент
    tabControls.querySelectorAll('[data-faq-tabs="control"]').forEach((btn) => btn.classList.remove('tab-button--active'));
    accordionWrappers.forEach((wrapper) => wrapper.classList.add('faq-accordion--hidden'));

    // Активируем выбранный таб и показываем соответствующий контент
    tabButton.classList.add('tab-button--active');
    faqSection.querySelector(`[data-tab-content="${tabId}"]`).classList.remove('faq-accordion--hidden');

    // Сохраняем ID активного таба в localStorage
    localStorage.setItem('activeFaqTab', tabId);

    // Раскрываем первый аккордеон в текущем табе
    const currentTabContent = faqSection.querySelector(`[data-tab-content="${tabId}"]`);
    const firstAccordionItemInput = currentTabContent.querySelector('.faq-accordion__list .faq-accordion__item input[type="checkbox"]:first-child');
    if (firstAccordionItemInput) {
      firstAccordionItemInput.checked = true;
    }
  };

  // Привязываем обработчики событий к кнопкам табов
  tabControls.querySelectorAll('[data-faq-tabs="control"]').forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      handleTabSwitch(tabButton);
    });
  });

  // Восстанавливаем состояние табов из localStorage при загрузке страницы
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
