/* When the user scrolls down, change the navbar. When the user scrolls up, change it back */
var navbar = document.querySelector("#navbar");
var easeLogo = document.querySelector("#ease-logo");
var scrollIndicator = document.querySelector("#scroll-indicator");
var menuToggleIcon = document.getElementById("menu-toggle");


// Check if it's a desktop browser (adjust detection logic as needed)
const isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

window.onload = function() {
  if(!isDesktop) {
    // For mobile browsers, always keep the 'scrolled' class
    navbar.classList.add("scrolled");
    easeLogo.src = "./img/ease-logo-white.svg";
  }
  setMenuIcon();
}; 

/* toggle the navbar background when window is scrolled */
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  const currentScrollPos = window.scrollY;

  if (isDesktop) {
    if (currentScrollPos > 5) {
      navbar.classList.add("scrolled");
      easeLogo.src = "./img/ease-logo-white.svg";
    } else {
      navbar.classList.remove("scrolled");
      easeLogo.src = "./img/ease-logo-green.svg";
    }
  } 

  // Handle logo and scroll indicator behavior
  if (currentScrollPos > 5) {
    scrollIndicator.style.opacity = 0;
  } else {
    scrollIndicator.style.opacity = 1;
  }

  // Handle navbar animation
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "1rem"; // Transition back to top smoothly
  } else {
    navbar.style.top = "1rem"; // Hide initially, animate on scroll down
  }

  prevScrollpos = currentScrollPos;
  setMenuIcon();
};

/* Toggle the mobile menu */
function menuToggle() {
  document.querySelector("#menu-toggle").classList.toggle("open");
  document.querySelector("#nav-elements").classList.toggle("toggled");
  setMenuIcon();
  /*var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }*/
}

// initialize animate on scroll effects
AOS.init();

/* define flickity after page fully loaded" 
window.addEventListener('DOMContentLoaded', function() {
  var flkty = new Flickity('#testimonial-container');
  console.log(flkty);

  var x = 'hello';
});*/

function setMenuIcon() {
  const isMobile = window.innerWidth <= 860;
  if (!isMobile || !menuToggleIcon) return;

  const open = menuToggleIcon.classList.contains("open");
  const scrolled = window.scrollY > 5;

  let icon = "";
  if (open) {
    icon = scrolled ? "xmark.svg" : "xmark_dark.svg";
  } else {
    icon = scrolled ? "bars.svg" : "bars_dark.svg";
  }

  menuToggleIcon.style.backgroundImage = `url('./img/${icon}')`;
}