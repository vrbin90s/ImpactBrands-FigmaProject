import createHTMLElement from "./function.js";

// Mobile Navigation
function mobileMenu() {
  const primaryNavigation = document.querySelector('.navigation__list');
  const mobileNavToggle = document.querySelector('.navigation__toggle');

  mobileNavToggle.addEventListener('click', () => {

    const visibility = primaryNavigation.getAttribute('data-visable');
    if(visibility === 'false') {
      mobileNavToggle.ariaExpanded = true;
      primaryNavigation.setAttribute('data-visable', true);
    } else {
      primaryNavigation.setAttribute('data-visable', false);
      mobileNavToggle.ariaExpanded = false;
    }
  });
}
mobileMenu();

// Accordion logic for FAQs section
const accordionList = document.querySelectorAll('.btn__accordion');

accordionList.forEach((accordionButton, index) => {
  const iconWrapper = createHTMLElement({ element: 'span', className: 'accordion__icon-wrapper'});
  const icon = createHTMLElement({ element: 'img', className: 'accordion__icon', src: '../assets/images/icons/i-angle-left.png' });
  iconWrapper.append(icon);

  const panel = accordionButton.nextElementSibling;
  accordionButton.append(iconWrapper);
  if(index === 0) {
    panel.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
    icon.classList.add('open');
  }

  accordionButton.addEventListener('click', function() {
    accordionButton.append(iconWrapper);
    
    panel.classList.toggle('open');
    icon.classList.toggle('open');
    if(panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

  })
});

