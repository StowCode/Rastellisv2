//////////////
/* NAVBAR CHANGE ON SCROLL */
// Get the navbar element
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const mobileMenu = document.getElementById('mobile-menu')

// Get the initial height of the navbar
const navbarHeight = navbar.offsetHeight;

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
  // Check if the user has scrolled down
  if (window.scrollY > 0) {
    // Calculate the new height of the navbar
    const newHeight = navbarHeight - 20;
    
    // Set the new height of the navbar
    navbar.style.height = `${newHeight}px`;
    logo.style.width = '150px';
    mobileMenu.style.top = '80px'
  } else {
    // If the user has scrolled back to the top, reset the height of the navbar
    navbar.style.height = `${navbarHeight}px`;
    logo.style.width = '210px';
    mobileMenu.style.top = '100px'
  }
});

///////////////////
/* Mobile Menu */
function menuToggle() {
    if (mobileMenu.style.display ==  'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    } 
}
/* const hamburger = document.querySelector('hamburger');
hamburger.addEventListener('click', menuToggle ); */

// Closes menu on link click
function mobileLinkClick() {
    mobileMenu.style.display = 'none';
}

