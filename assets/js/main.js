/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", showMenu);
navClose.addEventListener("click", closeMenu);

function showMenu() {
  navMenu.classList.toggle("show__menu");
}
function closeMenu() {
  navMenu.classList.remove("show__menu");
}

/*=============== REMOVE MENU MOBILE ===============*/
function linkAction() {
  navMenu.classList.remove("show__menu");
}
navLink.forEach((element) => {
  element.addEventListener("click", linkAction);
});

/*=============== SHADOW HEADER ===============*/

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm("service_uv2ijtc", "template_muut40h", "#contact-form", "omm1uabw3MowNuE8F")
    .then(() => {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅';
      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error sending email:', error);
      // Display an error message to the user if needed
      contactMessage.textContent = 'Error sending message ❌';
    });
};

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
