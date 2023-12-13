
const useIFrame = true;
const populateInfoDelay = 150;
const updateProgressDelay = 400;

const collegeInfo = {
  cornell: {
    name: "Cornell University",
    id: "cornell",
    appType: "Early Decision",
    dateSubmitted: "11/1/2023",
    dateResponse: "12/14/2023",
    collegePortalWebsite: "https://engage.admissions.cornell.edu/account/login",
  },
  purdue: {
    name: "Purdue University",
    id: "purdue",
    appType: "Early Action",
    dateSubmitted: "11/1/2023", 
    dateResponse: "1/15/2024",
    collegePortalWebsite: "https://www.admissions.purdue.edu/apply/applicationstatus.php",
  },
  northeastern: {
    name: "Northeastern University",
    id: "northeastern",
    appType: "Early Action",
    dateSubmitted: "11/1/2023",
    dateResponse: "1/28/2024",
    collegePortalWebsite: "https://apply.northeastern.edu/portal/app_status?utm_campaign=FRapplicant&utm_content=ASC_appacknowledge&utm_medium=email&utm_source=deliver&utm_term=fa24",
  },
  udub: {
    name: "University of Washington",
    id: "udub",
    appType: "Early Action",
    dateSubmitted: "11/15/2023",
    dateResponse: "3/1/2024",
    collegePortalWebsite: "https://admit.washington.edu/uw-netid/",
  },
  ut: {
    name: "University of Texas Austin",
    id: "ut",
    appType: "Regular Decision",
    dateSubmitted: "12/1/2023",
    dateResponse: "3/1/2024",
    collegePortalWebsite: "https://bealonghorn.admissions.utexas.edu/portal/mystatus?tab=admissions",
  },
  uc: {
    name: "University of California",
    id: "uc",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/10/2024",
    collegePortalWebsite: "https://apply.universityofcalifornia.edu/my-application/login",
  },
};



