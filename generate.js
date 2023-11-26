

const wrapper = document.querySelector('.item-wrapper');
const placeholders = document.querySelectorAll('.item-wrapper > *');

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
  curRow.id = `${curInfo.id}`;

  curRow.querySelector('iframe').src = curInfo.collegePortalWebsite;

  curRow.querySelectorAll('.item-small')[0].querySelector('h2').textContent = curInfo.name;
  curRow.querySelectorAll('.item-small')[0].querySelector('p').textContent = `Submitted ${curInfo.timeSubmitted}`;
  
  curRow.querySelectorAll('.item-small')[1].querySelector('h3').textContent = curInfo.appType;

  curRow.querySelectorAll('.item-medium')[0].querySelector('.progress').id = `${curInfo.id}-progress`;
}


