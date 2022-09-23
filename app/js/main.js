'use strict';

// BURGER MENU

const burgerMenu = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__menu--mobile');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger--active');
  mobileMenu.classList.toggle('header__burger--active');
});

// BURGER MENU

// POPUP

const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-popup__btn]');
const popupBg = document.getElementById('popup-bg');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget);
    openPopup(popup);
  });
});

popupBg.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.popup--active');
  popups.forEach((popup) => {
    closePopup(popup);
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add('popup--active');
  popupBg.classList.add('popup--active');
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove('popup--active');
  popupBg.classList.remove('popup--active');
}

// POPUP

// SCROLL

const scrollFunc = () => {
  const links = document.querySelectorAll('.header__list a');

  links.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

      const id = element.getAttribute('href').substring(1);
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        console.log('net');
      }
    });
  });
};

scrollFunc();
