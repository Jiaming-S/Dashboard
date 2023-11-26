
const wrapper = document.querySelector('.item-wrapper');
const rowNum = Object.keys(collegeInfo).length;

setTimeout(function populateCollegeInfo() {
  const placeholders = document.querySelectorAll('.item-wrapper > .placeholder');
  const placeholderNum = placeholders.length;
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
      dateSubmitted: collegeInfo[curKey].dateSubmitted,
      dateResponse: collegeInfo[curKey].dateResponse,
      collegePortalWebsite: collegeInfo[curKey].collegePortalWebsite,
    }
    const curRow = placeholders[i];
    curRow.classList.remove('placeholder');
    curRow.id = `${curInfo.id}`;
  
    if (useIFrame) curRow.querySelector('iframe').src = curInfo.collegePortalWebsite;
    curRow.querySelector('.college-name').textContent = curInfo.name;
    curRow.querySelector('.college-submission-date').textContent = `Submitted ${curInfo.dateSubmitted}`;
    curRow.querySelector('.college-application-type').textContent = curInfo.appType;
    curRow.querySelector('.progress').id = `${curInfo.id}-progress`;
  }
}, populationDelay);

setTimeout(function updateProgressBars() {
  const allProgressBars = document.querySelectorAll('.progress');
  for (let i = 0; i < rowNum; i++) {
    const curKey = Object.keys(collegeInfo)[i];
    const curInfo = {
      dateSubmitted: collegeInfo[curKey].dateSubmitted,
      dateResponse: collegeInfo[curKey].dateResponse,
    }
    const curBar = allProgressBars[i];

    const dateSubmitted = new Date(curInfo.dateSubmitted);
    const dateResponse = new Date(curInfo.dateResponse);
    const now = new Date();
    const total = dateResponse - dateSubmitted;
    const elapsed = now - dateSubmitted;
    const percent = Math.round(100 * elapsed / total);

    curBar.querySelector('.progress-bar').style.width = `${percent}%`;
    curBar.querySelector('.progress-bar').textContent = `${percent}%`;
    
    curBar.parentElement.querySelector('.progress-labels > p:nth-child(1)').textContent = dateSubmitted.toLocaleDateString();
    curBar.parentElement.querySelector('.progress-labels > p:nth-child(2)').textContent = "~" + dateResponse.toLocaleDateString();
  };
}, updateProgressDelay);



