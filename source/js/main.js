// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { initVideoLoader } from './modules/button-play.js';
import { initTabs } from './modules/tabs.js';
import { initCoachesSwiper } from './modules/swiper-juri.js';
import { initReviewsSwiper } from './modules/swiper-reviews.js';
import { initFaq } from './modules/faq.js';

initVideoLoader();
initTabs();
initCoachesSwiper();
initReviewsSwiper();
document.addEventListener('DOMContentLoaded', () => {
  initFaq();
});
