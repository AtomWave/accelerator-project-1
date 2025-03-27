
// button-play.js
export function initVideoLoader() {
  document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.about__play-button');
    const iframeWrapper = document.querySelector('.about__iframe-wrapper');

    playButton.addEventListener('click', () => {
      iframeWrapper.hidden = false;
      const iframe = iframeWrapper.querySelector('iframe');
      iframe.src = `${iframe.getAttribute('data-src') }&autoplay=1`;
    });
  });
}


