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

const addPanelListeners = () => {
  // On each projects panel, adds listener to "open" the panel, making it wider / narrower.
  panels.forEach(panel => { panel.addEventListener('mouseover', addOpenClass) });
  panels.forEach(panel => { panel.addEventListener('mouseleave', removeOpenClass) });
  
  // When the panel has finished its "opening" transition, the description box is expanded vertically.
  panels.forEach(panel => { panel.addEventListener('transitionend', detectTheEnd) });
}

export default addPanelListeners();
