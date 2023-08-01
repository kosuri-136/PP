document.getElementById('hamburger').addEventListener('click', (e) => {
  // alert('Click on hamburger')
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:visible');
  e.preventDefault();
});

// click on Close hamburger
document.getElementById('mobile-drawer-close-icon').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility: hidden');
});

// click on home
document.getElementById('drawer-nav-url').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});

// click on portfolio
document.getElementById('drawer-nav-url1').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});

// click on about section menu
document.getElementById('drawer-nav-url2').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});

// click on contact
document.getElementById('drawer-nav-url3').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});









// adding box shaddow on scroll

window.addEventListener('scroll', () => {
  const y = this.scrollY;
  if (y > 10) {
    document.getElementById('main-header').classList.add('active');
  } else {
    document.getElementById('main-header').classList.remove('active');
  }
});






// Get the dark theme toggle button
const toggleButton = document.getElementById('toggle-btn');

// Add click event listener to the button
toggleButton.addEventListener('click', () => {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle('dark-theme');

  // Toggle the moon and sun icons using the class
  const isDarkTheme = document.body.classList.contains('dark-theme');
  const moonIcon = toggleButton.querySelector('.moon');
  const sunIcon = toggleButton.querySelector('.sun');

  moonIcon.style.display = isDarkTheme ? 'inline-block' : 'none';
  sunIcon.style.display = isDarkTheme ? 'none' : 'inline-block';
});

