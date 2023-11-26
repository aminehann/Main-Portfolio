/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click',showMenu);
navClose.addEventListener('click',closeMenu);

function showMenu () {navMenu.classList.toggle('show__menu')}
function closeMenu () {navMenu.classList.remove('show__menu')}

/*=============== REMOVE MENU MOBILE ===============*/
function linkAction (){
    navMenu.classList.remove('show__menu');
}
navLink.forEach(element => {element.addEventListener('click',linkAction);});

/*=============== SHADOW HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
