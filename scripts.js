
const topBar = document.querySelector('.top-bar');
document.addEventListener('scroll', () => {
  curScroll = window.scrollY;
  if (curScroll > 10) {
    topBar.classList.add('scrolled');
  }
  else {
    topBar.classList.remove('scrolled');
  }
});

let isDragging = false;
let curTranslate = 0;
const topBarInternal = document.querySelector('.top-bar-internal');
document.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = e.movementX;
    curTranslate += dx;
    topBar.style.transform = `translateX(${curTranslate}px)`;
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


