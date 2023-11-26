
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


const allProgressBars = document.querySelectorAll('.progress');

setTimeout(function updateProgressBars() {
  allProgressBars.forEach((bar) => {
    const collegeName = bar.id.split('-')[0];
    const info = collegeInfo[collegeName];
    const timeSubmitted = new Date(info.timeSubmitted);
    const timeResponse = new Date(info.timeResponse);
    const now = new Date();
    const total = timeResponse - timeSubmitted;
    const elapsed = now - timeSubmitted;
    const percent = Math.round(100 * elapsed / total);
    bar.querySelector('.progress-bar').style.width = `${percent}%`;
    bar.querySelector('.progress-bar').innerHTML = `${percent}%`;
    bar.parentElement.querySelector('.progress-labels > p:nth-child(1)').innerHTML = timeSubmitted.toLocaleDateString();
    bar.parentElement.querySelector('.progress-labels > p:nth-child(2)').innerHTML = "~" + timeResponse.toLocaleDateString();
  });
}, 300);






