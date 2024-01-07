
const useIFrame = true;
const populateInfoDelay = 150;
const updateProgressDelay = 400;
const IFrameVerificationDelay = 4000;

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
    name: "UT Austin",
    id: "ut",
    appType: "Regular Decision",
    dateSubmitted: "12/1/2023",
    dateResponse: "3/1/2024",
    collegePortalWebsite: "https://bealonghorn.admissions.utexas.edu/portal/mystatus?tab=admissions",
  },
  ucb: {
    name: "UC Berkeley",
    id: "ucb",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/28/2024",
    collegePortalWebsite: "https://apply.berkeley.edu/apply/status",
  },
  ucsd: {
    name: "UC San Diego",
    id: "ucsd",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/31/2024",
    collegePortalWebsite: "https://beatriton.ucsd.edu/apply/status",
  },
  ucr: {
    name: "UC Riverside",
    id: "ucr",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/1/2024",
    collegePortalWebsite: "https://auth.ucr.edu/cas/login?service=https://my.ucr.edu/AccountHome.aspx",
  },
  uci: {
    name: "UC Irvine",
    id: "uci",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/17/2024",
    collegePortalWebsite: "https://apply.admissions.uci.edu/portal/applicantstatus",
  },
  ucla: {
    name: "UC LA",
    id: "ucla",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/17/2024",
    collegePortalWebsite: "https://bruins.admission.ucla.edu/myApplication/Status.aspx",
  },
  ucm: {
    name: "UC Merced",
    id: "ucm",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/1/2024",
    collegePortalWebsite: "https://decision.ucmerced.edu/",
  },
  ucd: {
    name: "UC Davis",
    id: "ucd",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/10/2024",
    collegePortalWebsite: "https://myadmissions.ucdavis.edu/applicants/current/status/",
  },
  ucsc: {
    name: "UC Santa Cruz",
    id: "ucsc",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "3/15/2024",
    collegePortalWebsite: "https://my.ucsc.edu/psc/csprd/EMPLOYEE/SA/c/NUI_FRAMEWORK.PT_AGSTARTPAGE_NUI.GBL?CONTEXTIDPARAMS=TEMPLATE_ID%3aPTPPNAVCOL&scname=ADMN_ADMISSIONS&PTPPB_GROUPLET_ID=SCA_ADMISSIONS&CRefName=ADMN_NAVCOLL_20&PanelCollapsible=Y&AJAXTransfer=Y",
  },
  sjsu: {
    name: "San Jose State University",
    id: "sjsu",
    appType: "Regular Decision",
    dateSubmitted: "11/29/2023",
    dateResponse: "2/1/2024",
    collegePortalWebsite: "https://one.sjsu.edu/",
  }
};



