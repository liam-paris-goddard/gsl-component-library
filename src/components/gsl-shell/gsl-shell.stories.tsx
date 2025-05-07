import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Layout/GSL Shell',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const mockNav = [
  {
    "title": "Leads",
    "icon": "assets/images/Leads-Menu.svg",
    "children": [
      {
        "title": "Search/View Leads",
        "href": "/Leads/LeadCenter.aspx"
      },
      {
        "title": "Add New Lead",
        "href": "/"
      },
      {
        "title": "Reporting",
        "children": [
          {
            "title": "Lead Activity",
            "href": "/reports/leads/LeadConversionReport.aspx"
          },
          {
            "title": "Lead Activity Comparison",
            "href": "/reports/leads/LeadConversionComparisonReport.aspx"
          },
          {
            "title": "Mailing Labels",
            "href": "/reports/leads/LeadMailingLabelsReport.aspx"
          }
        ]
      }
    ]
  },
  {
    "title": "Families",
    "icon": "assets/images/Families-Menu.svg",
    "href": "#",
    "children": [
      {
        "title": "Search/View Families",
        "href": "/Families/FamilyCenter.aspx"
      },
      {
        "title": "Reporting",
        "children": [
          {
            "title": "Child Info",
            "children": [
              {
                "title": "Allergy List",
                "href": "/reports/people/ChildAllergyList.aspx"
              },
              {
                "title": "Birthday Report",
                "href": "/reports/schools/BirthdayReport.aspx"
              },
              {
                "title": "Child Pickup",
                "href": "/reports/people/ChildPickupReport.aspx"
              },
              {
                "title": "Mailing Labels",
                "href": "/reports/people/ChildMailBoxReport.aspx"
              },
              {
                "title": "Combined Child Information Report",
                "href": "/reports/people/ChildCombinedInformationReport.aspx"
              },
              {
                "title": "Combined Medical Report",
                "href": "/reports/people/ChildCombinedMedicalReport.aspx"
              },
              {
                "title": "Conditions and Restrictions Report",
                "href": "/reports/people/ChildConditionsAndRestrictionsReport.aspx"
              },
              {
                "title": "Emergency Contact Report",
                "href": "/reports/people/EmergencyContactReport.aspx"
              },
              {
                "title": "Expiring Health Appraisals Report",
                "href": "/reports/people/HealthAppraisalReport.aspx"
              },
              {
                "title": "Expiring Immunizations Report",
                "href": "/reports/people/ChildExpiringImmunizationsReport.aspx"
              },
              {
                "title": "Expiring Paperwork/Medication",
                "href": "/reports/people/ExpiringPaperworkMedicationReport.aspx"
              },
              {
                "title": "Immunization History Report",
                "href": "/reports/people/ImmunizationHistoryReport.aspx"
              },
              {
                "title": "Incident Tracking Report",
                "href": "/reports/schools/IncidentTrackingReport.aspx"
              },
              {
                "title": "Password Report",
                "href": "/reports/people/ChildPasswordList.aspx"
              },
              {
                "title": "Photo         Permission Report",
                "href": "/reports/people/NoPhotoList.aspx"
              },
              {
                "title": "Child Illness Report",
                "href": "/reports/people/ChildillnessReport.aspx"
              }
            ]
          },
          {
            "title": "Family Info",
            "children": [
              {
                "title": "Enrollment Confirmation",
                "href": "/reports/schools/EnrollmentConfirmationReport.aspx"
              },
              {
                "title": "General List",
                "href": "/reports/people/ChildInformationGeneralListA.aspx"
              },
              {
                "title": "Invalid Email Address Report",
                "href": "/reports/schools/InvalidEmailAddressReport.aspx"
              },
              {
                "title": "Mailbox Report",
                "href": "/reports/schools/MailboxReport.aspx"
              },
              {
                "title": "Mailing Labels",
                "href": "/reports/people/FamilyMailingLabelsReport.aspx"
              },
              {
                "title": "Parent Employer Report",
                "href": "/reports/people/ParentEmployerReport.aspx"
              },
              {
                "title": "Temporary T & A PINs",
                "href": "/reports/schools/TempTAPINReport.aspx"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Class Lists",
    "icon": "assets/images/Class-Lists-Menu.svg",
    "href": "#",
    "children": [
      {
        "title": "Class Lists - By Classroom",
        "href": "/Frame.aspx?trg=/Framed/schoolyear.html"
      },
      {
        "title": "Class Lists - By Program Ratio",
        "href": "/Frame.aspx?trg=/Framed/schoolyear.html?byRatio=true"
      },
      {
        "title": "Class Lists - Summer Camp",
        "href": "/Frame.aspx?trg=/Framed/summer.html"
      },
      {
        "title": "Summer Camp School Settings",
        "href": "/Frame.aspx?trg=/Framed/summersettings.html"
      },
      {
        "title": "Classrooms & Program Ratios",
        "href": "/ClassLists/ClassroomsProgramRatios.aspx"
      },
      {
        "title": "Reporting",
        "children": [
          {
            "title": "Child Event Report",
            "href": "/reports/schools/ChildEventReport.aspx"
          },
          {
            "title": "Child FTE Report",
            "href": "/reports/schools/ChildFteReport.aspx"
          },
          {
            "title": "Child FTE History Report",
            "href": "/reports/schools/ChildFteHistoryReport.aspx"
          },
          {
            "title": "Classroom Timeclock Extract",
            "href": "/reports/schools/ClassroomTimeclockExtract.aspx"
          },
          {
            "title": "Istation Roster Report",
            "href": "/reports/schools/IstationRosterReport.aspx"
          },
          {
            "title": "Currently Signed-In",
            "href": "/reports/schools/CurrentlySignedIn.aspx"
          },
          {
            "title": "Daily Sign-In Sheet",
            "href": "/reports/schools/DailySignInSheet.aspx"
          },
          {
            "title": "Projected Openings - Compact",
            "href": "/reports/classlists/ProjectedOpeningsCompactReport.aspx"
          },
          {
            "title": "Parent Timeclock Extract",
            "href": "/reports/schools/ParentTimeclockExtract.aspx"
          },
          {
            "title": "Projected FTEs Report",
            "href": "/reports/classlists/ProjectedFTEs.aspx"
          },
          {
            "title": "Weekly Sign-In Sheet",
            "href": "/reports/schools/WeeklySignInSheet.aspx"
          },
          {
            "title": "Monthly Sign-In Sheet",
            "href": "/reports/schools/MonthlySignInSheet.aspx"
          },
          {
            "title": "Schedule Audit Report",
            "href": "/reports/classlists/ScheduleAuditReport.aspx"
          },
          {
            "title": "Time & Attendance Auditing",
            "href": "/reports/schools/TimeAttendanceAudit.aspx"
          },
          {
            "title": "Waiting List Report",
            "href": "/reports/people/WaitingListReport.aspx"
          },
          {
            "title": "Weekly Attendance Sheet",
            "href": "/reports/schools/WeeklyAttendanceSheet.aspx"
          },
          {
            "title": "Summer Camp Sign-Up Sheet",
            "href": "/reports/classlists/SummerCampSignUpSheet.aspx"
          },
          {
            "title": "Emergency Planned Absence",
            "href": "/reports/classlists/EmergencyPlannedAbsReport.aspx"
          },
          {
            "title": "Contact Tracing List Report",
            "href": "/reports/classlists/HealthDepartmentReportPage.aspx"
          }
        ]
      }
    ]
  },
  {
    "title": "Employees",
    "icon": "assets/images/Employees-Menu.svg",
    "href": "#",
    "children": [
      {
        "title": "Search/View Employees",
        "href": "/Employees/EmployeeCenter.aspx"
      },
      {
        "title": "Reporting",
        "children": [
          {
            "title": "Cont Educ Progress Report",
            "href": "/reports/people/EmployeeContinuingEducationProgressReport.aspx"
          },
          {
            "title": "Current Certifications/Clearances Report",
            "href": "/reports/people/EmployeeCurrentCertificationReport.aspx"
          },
          {
            "title": "Employee Review Tracking Report",
            "href": "/reports/people/EmployeeReviewTrackingReport.aspx"
          },
          {
            "title": "Employee Schedule Report",
            "href": "/reports/schools/EmployeeWeeklyAttendanceSheet.aspx"
          },
          {
            "title": "Expiring Certifications/Clearances Report",
            "href": "/reports/people/EmployeeExpiringCertificationReport.aspx"
          },
          {
            "title": "Expiring Health Appraisals Report",
            "href": "/reports/people/EmployeeHealthAppraisalReport.aspx"
          },
          {
            "title": "Expiring Immunization Report",
            "href": "/reports/people/EmployeeExpiringImmunizationsReport.aspx"
          },
          {
            "title": "Immunization History Report",
            "href": "/reports/people/EmployeeImmunizationHistoryReport.aspx"
          },
          {
            "title": "Temporary T & A PINs",
            "href": "/reports/schools/TempTaPinEmployeeReport.aspx"
          },
          {
            "title": "Timesheet Detail Report",
            "href": "/reports/people/EmployeeTimesheetDetailReport.aspx"
          },
          {
            "title": "Timesheet Summary Report",
            "href": "/reports/people/EmployeeTimesheetSummaryReport.aspx"
          }
        ]
      }
    ]
  },
  {
    "title": "Accounting",
    "icon": "assets/images/Accounting-Menu.svg",
    "children": [
      {
        "title": "Accounts",
        "children": [
          {
            "title": "Ledger",
            "children": [
              {
                "title": "By         Parent",
                "href": "/Accounting/Ledger/Parents.aspx"
              },
              {
                "title": "By         Classroom",
                "href": "/Accounting/Ledger/Classrooms.aspx"
              },
              {
                "title": "By         Charge Code",
                "href": "/Accounting/Ledger/ChargeCodes.aspx"
              },
              {
                "title": "By         Other Payor",
                "href": "/Accounting/Ledger/OtherPayors.aspx"
              },
              {
                "title": "By         Program",
                "href": "/Accounting/Ledger/Programs.aspx"
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
            "href": "/Accounting/Administration/ChargeCreditManager.aspx"
          },
          {
            "title": "Other Payors",
            "href": "/Accounting/Administration/OtherPayors.aspx"
          },
          {
            "title": "Chart of Accounts",
            "href": "/Accounting/Administration/Accounts.aspx"
          },
          {
            "title": "Emergency Credit",
            "href": "/Accounting/Administration/EmergencyClosureCredit.aspx"
          }
        ]
      },
      {
        "title": "Billing",
        "children": [
          {
            "title": "Monthly Batch Billing",
            "href": "/Accounting/BatchBilling/Monthly.aspx"
          },
          {
            "title": "Monthly Batch Statements",
            "href": "/Accounting/StatementBatches/Monthly.aspx"
          },
          {
            "title": "Semi-Monthly Batch Billing",
            "href": "/Accounting/BatchBilling/SemiMonthly.aspx"
          },
          {
            "title": "Weekly Batch Billing",
            "href": "/Accounting/BatchBilling/Weekly.aspx"
          },
          {
            "title": "ERP Billing",
            "children": [
              {
                "title": "ERP Preview",
                "href": "/Accounting/ERPBilling/ERPPreview.aspx"
              },
              {
                "title": "ERP Billing log",
                "href": "/Accounting/ERPBilling/ERPBillinglog.aspx"
              }
            ]
          }
        ]
      }
    ]
  },
]

export const Default: Story = {
  render: () => {
    const el = document.createElement('gsl-shell');
    el.navigationData = mockNav;
    el.currentPath = '/students/enrollment';
    el.logoSrc = 'assets/images/logo.svg'
    const main = document.createElement('main');
    main.style.padding = '1rem';
    main.style.background = '#f4f4f4';
    main.innerHTML = `
      <h1>Dashboard Content</h1>
      <p>This is an example layout.</p>
    `;
    el.appendChild(main);

    return el;
  }
};
