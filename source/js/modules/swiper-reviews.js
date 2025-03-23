import Swiper from "swiper";

function initReviewsSwiper() {
  let reviewsSwiper;

  document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Swiper
    reviewsSwiper = new Swiper('.swiper-reviews', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: false, // Слайдер не зациклен
      navigation: {
        nextEl: '[data-swiper-reviews-next]',
        prevEl: '[data-swiper-reviews-prev]',
      },
      on: {
        init: function () {
          updateButtons(this); // Обновление кнопок при инициализации
        },
        slideChange: function () {
          updateButtons(this); // Обновление кнопок при смене слайда
        },
      },
    });

    // Обработчики кликов для кнопок
    const prevButton = document.querySelector('[data-swiper-reviews-prev]');
    const nextButton = document.querySelector('[data-swiper-reviews-next]');

    prevButton.addEventListener('click', () => {
      if (reviewsSwiper) reviewsSwiper.slidePrev();
    });

    nextButton.addEventListener('click', () => {
      if (reviewsSwiper) reviewsSwiper.slideNext();
    });
  });

  // Функция для обновления состояния кнопок
  function updateButtons(swiperInstance) {
    const prevButton = document.querySelector('[data-swiper-reviews-prev]');
    const nextButton = document.querySelector('[data-swiper-reviews-next]');

    if (swiperInstance.isBeginning) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (swiperInstance.isEnd) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  return reviewsSwiper; // Возвращаем объект Swiper
}

export { initReviewsSwiper };
