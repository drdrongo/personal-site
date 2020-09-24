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



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const hamburger = () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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
    console.log(e);
    e.target.querySelector('.project-description-box').setAttribute("style", "max-height: 100%; padding: 12px;")
  }
}

panels.forEach(panel => { panel.addEventListener('mouseover', addOpenClass) });
panels.forEach(panel => { panel.addEventListener('mouseleave', removeOpenClass) });
// panels.forEach(panel => { panel.addEventListener('transitionend', function() {
//   console.log('transition Ended')
// }) });

panels.forEach(panel => { panel.addEventListener('transitionend', detectTheEnd) });


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  // hamburger();
  
});
