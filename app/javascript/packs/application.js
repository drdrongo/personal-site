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
function addActiveClass() {
  this.classList.add('open-active');
}

function removeActiveClass() {
  this.classList.remove('open-active');
}
function removeOpenClass() {
  this.classList.remove('open');
}

panels.forEach(panel => { panel.addEventListener('mouseout', removeActiveClass) });
panels.forEach(panel => { panel.addEventListener('mouseout', removeOpenClass) });
panels.forEach(panel => { panel.addEventListener('mouseover', addOpenClass) });
panels.forEach(panel => { panel.addEventListener('mouseover', addActiveClass) });



document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  // hamburger();
});
