import Swiper from "swiper";

function initReviewsSwiper() {
  let reviewsSwiper;

  document.addEventListener('DOMContentLoaded', () => {
    reviewsSwiper = new Swiper('.swiper-reviews', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: false,
      touchEventsTarget: 'container',
      navigation: {
        nextEl: '[data-swiper-reviews-next]',
        prevEl: '[data-swiper-reviews-prev]',
      },
      on: {
        init: function () {
          updateButtons(this);
        },
        slideChange: function () {
          updateButtons(this);
        }
      }
    });

    const prevButton = document.querySelector('[data-swiper-reviews-prev]');
    const nextButton = document.querySelector('[data-swiper-reviews-next]');

    prevButton.addEventListener('click', () => {
      if (reviewsSwiper) reviewsSwiper.slidePrev();
    });

    nextButton.addEventListener('click', () => {
      if (reviewsSwiper) reviewsSwiper.slideNext();
    });
  });

  function updateButtons(swiperInstance) {
    const prevButton = document.querySelector('[data-swiper-reviews-prev]');
    const nextButton = document.querySelector('[data-swiper-reviews-next]');

    prevButton.disabled = swiperInstance.isBeginning;
    nextButton.disabled = swiperInstance.isEnd;
  }

  return reviewsSwiper;
}

export { initReviewsSwiper };
