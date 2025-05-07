const navData = [{
  "title": "Bulk Enrollment",
  isNew: true,
  "href": './test-page-6'
},
{
  "title": "Student Management",
  isNew: true,
  "href": './test-page-6'
},
{
  "title": "Bulk Transition",
  isNew: true,
  "href": './test-page-6'
},
{
  "title": "Leads",
  "icon": "test-assets/images/Leads-Menu.svg",
  "children": [
    {
      "title": "Search/View Leads",
      "href": "./test-page-1"
    },
    {
      "title": "Add New Lead",
      "href": "./test-page-2"
    },
    {
      "title": "Reporting",
      "children": [
        {
          "title": "Lead Activity",
          "href": "./test-page-3"
        },
        {
          "title": "Lead Activity Comparison",
          "href": "./test-page-4"
        },
        {
          "title": "Mailing Labels",
          "href": "./test-page-5"
        }
      ]
    }
  ]
},
{
  "title": "Families",
  "icon": "test-assets/images/Families-Menu.svg",
  "children": [
    {
      "title": "Search/View Families",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Reporting",
      "children": [
        {
          "title": "Child Info",
          "children": [
            {
              "title": "Allergy List",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Birthday Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Child Pickup",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Mailing Labels",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Combined Child Information Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Combined Medical Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Conditions and Restrictions Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Emergency Contact Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Expiring Health Appraisals Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Expiring Immunizations Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Expiring Paperwork/Medication",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Immunization History Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Incident Tracking Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Password Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Photo Permission Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Child Illness Report",
              "onClickAction": () => { console.warn('clicked') },

            }
          ]
        },
        {
          "title": "Family Info",
          "children": [
            {
              "title": "Enrollment Confirmation",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "General List",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Invalid Email Address Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Mailbox Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Mailing Labels",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Parent Employer Report",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "Temporary T & A PINs",
              "onClickAction": () => { console.warn('clicked') },

            }
          ]
        }
      ]
    }
  ]
},
{
  "title": "Class Lists",
  "icon": "test-assets/images/Class-Lists-Menu.svg",
  "onClickAction": () => { console.warn('clicked') },

  "children": [
    {
      "title": "Class Lists - By Classroom",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Class Lists - By Program Ratio",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Class Lists - Summer Camp",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Summer Camp School Settings",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Classrooms & Program Ratios",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Reporting",
      "children": [
        {
          "title": "Child Event Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Child FTE Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Child FTE History Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Classroom Timeclock Extract",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Istation Roster Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Currently Signed-In",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Daily Sign-In Sheet",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Projected Openings - Compact",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Parent Timeclock Extract",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Projected FTEs Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Weekly Sign-In Sheet",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Monthly Sign-In Sheet",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Schedule Audit Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Time & Attendance Auditing",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Waiting List Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Weekly Attendance Sheet",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Summer Camp Sign-Up Sheet",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Emergency Planned Absence",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Contact Tracing List Report",
          "onClickAction": () => { console.warn('clicked') },

        }
      ]
    }
  ]
},
{
  "title": "Employees",
  "icon": "test-assets/images/Employees-Menu.svg",
  "onClickAction": () => { console.warn('clicked') },

  "children": [
    {
      "title": "Search/View Employees",
      "onClickAction": () => { console.warn('clicked') },

    },
    {
      "title": "Reporting",
      "children": [
        {
          "title": "Cont Educ Progress Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Current Certifications/Clearances Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Employee Review Tracking Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Employee Schedule Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Expiring Certifications/Clearances Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Expiring Health Appraisals Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Expiring Immunization Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Immunization History Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Temporary T & A PINs",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Timesheet Detail Report",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Timesheet Summary Report",
          "onClickAction": () => { console.warn('clicked') },

        }
      ]
    }
  ]
},
{
  "title": "Accounting",
  "icon": "test-assets/images/Accounting-Menu.svg",
  "children": [
    {
      "title": "Accounts",
      "children": [
        {
          "title": "Ledger",
          "children": [
            {
              "title": "By Parent",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "By Classroom",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "By Charge Code",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "By Other Payor",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "By Program",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": ""
            },
            {
              "title": "Show Parent Ledger Popup"
            }
          ]
        },
        {
          "title": "Charge/Credit List",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Other Payors",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Chart of Accounts",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Emergency Credit",
          "onClickAction": () => { console.warn('clicked') },

        }
      ]
    },
    {
      "title": "Billing",
      "children": [
        {
          "title": "Monthly Batch Billing",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Monthly Batch Statements",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Semi-Monthly Batch Billing",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "Weekly Batch Billing",
          "onClickAction": () => { console.warn('clicked') },

        },
        {
          "title": "ERP Billing",
          "children": [
            {
              "title": "ERP Preview",
              "onClickAction": () => { console.warn('clicked') },

            },
            {
              "title": "ERP Billing log",
              "onClickAction": () => { console.warn('clicked') },

            }
          ]
        }
      ]
    }
  ]
},
]

function syncPageTitleFromNavData() {
  const shell = document.querySelector('gsl-shell');
  const currentPath = window.location.pathname || '/';
  const pathToFind = `./${currentPath.split('/')[0]}`
  console.warn(pathToFind)
  function findTitle(items) {
    for (const item of items) {
      console.warn(item.href)
      if (item.href === pathToFind) {
        return item.title;
      }
      if (item.children) {
        const found = findTitle(item.children);
        if (found) return found;
      }
    }
    return null;
  }

  const title = findTitle(shell.navigationData);
  if (title) {
    shell.pageTitle = title;
  }
}

function syncCurrentPathToSideNav() {
  const shell = document.querySelector('gsl-shell');

  // Get pathname and normalize
  const currentPath = window.location.pathname || '/';
  const pathToFind = `./${currentPath.split('/')[0]}`
  // Set it as the `currentPath` prop
  shell.currentPath = pathToFind;
}


const shell = document.querySelector('gsl-shell')
shell.navigationData = navData;
syncCurrentPathToSideNav();
syncPageTitleFromNavData();
