import Swiper from 'swiper';

function initCoachesSwiper() {
  const coachesSwiper = new Swiper('.swiper-juri', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        // Отключаем свайп на десктопе
        touch: false,
        simulateTouch: false,
        mousewheel: false,
        keyboard: false,
      },
    },
  });

  document.querySelectorAll('[data-swiper-juri-prev]').forEach((button) => {
    button.addEventListener('click', () => coachesSwiper.slidePrev());
  });

  document.querySelectorAll('[data-swiper-juri-next]').forEach((button) => {
    button.addEventListener('click', () => coachesSwiper.slideNext());
  });

  return coachesSwiper;
}

export { initCoachesSwiper };
