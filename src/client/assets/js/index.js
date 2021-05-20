const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNavigation = document.querySelector('.mobile-navigation');

console.log(mobileNavigation)
hamburgerMenu.addEventListener('click', () => {
  if (mobileNavigation.classList.contains("mobile-view")) {
    mobileNavigation.classList.remove("mobile-view");
    
  } else {
    mobileNavigation.classList.add("mobile-view");
  }
})

