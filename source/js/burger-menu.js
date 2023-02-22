document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  const burgerMenuBtn = document.querySelector('.burger-menu')

  function toggleMenuState() {
    header.classList.toggle('header--menu-opened')
    burgerButton.classList.toggle('burger-menu--opened')
  }

  burgerMenuBtn.addEventListener('click', toggleMenuState)
})
/*
// Скрипт для меню
const menuBtn = document.querySelector('.navigation__btn');
const menuNav = document.querySelector('.navigation');


if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault;
    menuNav.classList.toggle('navigation--opened');
  });
} */
