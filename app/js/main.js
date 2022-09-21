'use strict';

const burgerMenu = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__menu--mobile');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger--active');
  mobileMenu.classList.toggle('header__burger--active');
});
