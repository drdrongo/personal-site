// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery
//= require jquery_ujs

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("swiper")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
// import { addPanelListeners } from './panel.js';
// import { swiper } from './swiper.js';



// #### PANELS #########################
const panels = document.querySelectorAll('.panel');

function addOpenClass() {
  this.classList.add('open');
}

function removeOpenClass() {
  this.classList.remove('open');
  this.querySelector('.project-description-box').setAttribute('style', 'max-height: 0; padding: 0;')
}

function detectTheEnd(e) {
  if (e.propertyName == "flex-grow" && e.target.classList.contains('open')) {
    e.target.querySelector('.project-description-box').setAttribute("style", "max-height: 100%; padding: 12px;")
  }
}

// On each projects panel, adds listener to "open" the panel, making it wider / narrower.
panels.forEach(panel => { panel.addEventListener('mouseover', addOpenClass) });
panels.forEach(panel => { panel.addEventListener('mouseleave', removeOpenClass) });

// When the panel has finished its "opening" transition, the description box is expanded vertically.
panels.forEach(panel => { panel.addEventListener('transitionend', detectTheEnd) });




// SWIPER ##############################
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
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
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

setSwiper();
setSwiperListeners();



document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();

  // addPanelListeners;
  // swiper;
});
