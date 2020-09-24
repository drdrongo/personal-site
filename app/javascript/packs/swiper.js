
const setSwiper = () => {
  var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    mousewheel: true,
    loop: true,
    speed: 500,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 0,
      shadowScale: 0.5,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    observer: true,
    observeParents: true,
  });
}

const setSwiperListeners = () => {
  document.querySelectorAll('.swiper-text-overlay').forEach(el => {
    el.addEventListener('mouseover', function() {
      el.classList.remove('show-overlay')
    });
    el.addEventListener('mouseout', function() {
      el.classList.add('show-overlay')
    });
  })
}

const swiper = () => {
  setSwiper();
  setSwiperListeners();
}

export default swiper();
