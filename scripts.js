
const topBar = document.querySelector('.top-bar');
document.addEventListener('scroll', () => {
  curScroll = window.scrollY;
  if (curScroll > 50) {
    topBar.classList.add('scrolled');
  }
  else {
    topBar.classList.remove('scrolled');
  }
});

const downArrow = document.querySelector('#down-arrow');
downArrow.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

const upArrow = document.querySelector('#up-arrow');
upArrow.addEventListener('click', () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });
});







