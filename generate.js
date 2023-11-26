

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

const collegeInfo = {
  cornell: {
    name: "Cornell University",
    appType: "Early Decision",
    timeSubmitted: "11/01/2023",
    timeResponse: "12/12/2023",
    collegePortalWebsite: "https://engage.admissions.cornell.edu/account/login",
  },
  purdue: {
    name: "Purdue University",
    appType: "Early Action",
    timeSubmitted: "11/01/2023",
    timeResponse: "01/15/2024",
    collegePortalWebsite: "https://www.admissions.purdue.edu/apply/applicationstatus.php",
  },
  northeastern: {
    name: "Northeastern University",
    appType: "Early Action",
    timeSubmitted: "11/01/2023",
    timeResponse: "01/28/2024",
    collegePortalWebsite: "https://apply.northeastern.edu/portal/app_status?utm_campaign=FRapplicant&utm_content=ASC_appacknowledge&utm_medium=email&utm_source=deliver&utm_term=fa24",
  },
};
for (let i = 0; i < rowNum; i++) {
  
}


