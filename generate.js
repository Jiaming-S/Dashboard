
const wrapper = document.querySelector('.item-wrapper');

setTimeout(function populateCollegeInfo() {
  const placeholders = document.querySelectorAll('.item-wrapper > .placeholder');
  const placeholderNum = placeholders.length;
  const rowNum = Object.keys(collegeInfo).length;
  if (placeholderNum !== rowNum) {
    if (placeholderNum > rowNum) {
      for (let i = rowNum; i < placeholderNum; i++) wrapper.removeChild(placeholders[i]);
    }
    if (placeholderNum < rowNum) {
      for (let i = placeholderNum; i < rowNum; i++) wrapper.insertBefore(placeholders[1].cloneNode(true), placeholders[1]);
    }
  }
  
  for (let i = 0; i < rowNum; i++) {
    const curKey = Object.keys(collegeInfo)[i];
    const curInfo = {
      name: collegeInfo[curKey].name,
      id: collegeInfo[curKey].id,
      appType: collegeInfo[curKey].appType,
      timeSubmitted: collegeInfo[curKey].timeSubmitted,
      timeResponse: collegeInfo[curKey].timeResponse,
      collegePortalWebsite: collegeInfo[curKey].collegePortalWebsite,
    }
    const curRow = placeholders[i];
    curRow.classList.remove('placeholder');
    curRow.id = `${curInfo.id}`;
  
    if (useIFrame) curRow.querySelector('iframe').src = curInfo.collegePortalWebsite;
  
    curRow.querySelectorAll('.item-small')[0].querySelector('h2').textContent = curInfo.name;
    curRow.querySelectorAll('.item-small')[0].querySelector('p').textContent = `Submitted ${curInfo.timeSubmitted}`;
  
    curRow.querySelectorAll('.item-small')[1].querySelector('h3').textContent = curInfo.appType;
  
    curRow.querySelectorAll('.item-medium')[0].querySelector('.progress').id = `${curInfo.id}-progress`;
  }
}, populationDelay);

setTimeout(function updateProgressBars() {
  const allProgressBars = document.querySelectorAll('.progress');
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
}, progressBarDelay);



