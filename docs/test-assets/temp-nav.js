const navData = [
  {
    "title": "Bulk Enrollment",
    isNew: true,
    "href": './gsl-component-library/bulk-enrollment.html'
  },
  {
    "title": "Student Management",
    isNew: true,
    "href": '/'
  },
  {
    "title": "Bulk Transition",
    isNew: true,
    "href": '/'
  },
  {
    "title": "Leads",
    "icon": "test-assets/images/Leads-Menu.svg",
    "children": [
      {
        "title": "Search/View Leads",
        "href": "./gsl-component-library/test-page-1.html"
      },
      {
        "title": "Add New Lead",
        "href": "./gsl-component-library/test-page-2.html"
      },
      {
        "title": "Reporting",
        "children": [
          {
            "title": "Lead Activity",
            "href": "./gsl-component-library/test-page-3.html"
          },
          {
            "title": "Lead Activity Comparison",
            "href": "./gsl-component-library/test-page-4.html"
          },
          {
            "title": "Mailing Labels",
            "href": "./gsl-component-library/test-page-5.html"
          }
        ]
      }
    ]
  },
  {
    "title": "Families",
    "icon": "test-assets/images/Families-Menu.svg",
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
    "icon": "test-assets/images/Class-Lists-Menu.svg",
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
    "icon": "test-assets/images/Employees-Menu.svg",
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
    "icon": "test-assets/images/Accounting-Menu.svg",
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

/*

  {
    "title": "Leads",
    "icon": "/test-test-assets/images/leads-menu.svg",
    "children": [
      {
        "title": "Search/View Leads",
        "href": "/Leads"
      },
      {
        "title": "Add New Lead"
      },
      {
        "title": "Lead Activity",
        "href": "/leads2",
        "children": [
          {
            "title": "Lead Activity",
            "href": "#/leads"
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
    "title": "Reporting",
    "icon": "/test-test-assets/images/reporting-menu.svg",
    "children": [
      {
        "title": "Search/View Families",
        "href": "/Families/FamilyCenter.aspx"
      },
      {
        "title": "Allergy List",
        "href": "/reports/people/ChildAllergyList.aspx",
        "children": [
          {
            "title": "Allergy List",
            "href": "/reports/people/ChildAllergyList.aspx",
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
                "title": "Photo Permission Report",
                "href": "/reports/people/NoPhotoList.aspx"
              },
              {
                "title": "Child Illness Report",
                "href": "#/illness"
              }
            ]
          },
          {
            "title": "Enrollment Confirmation",
            "href": "/reports/schools/EnrollmentConfirmationReport.aspx",
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
                "href": "#/temp-pins"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Families",
    "icon": "/test-test-assets/images/families-menu.svg",
    "children": [
      {
        "title": "Class Lists - By Classroom",
        "href": "/Frame.aspx?trg=/Framed/schoolyear"
      },
      {
        "title": "Class Lists - By Program Ratio",
        "href": "/Frame.aspx?trg=/Framed/schoolyear?byRatio=true"
      },
      {
        "title": "Class Lists - Summer Camp",
        "href": "/Frame.aspx?trg=/Framed/summer"
      },
      {
        "title": "Summer Camp School Settings",
        "href": "/Frame.aspx?trg=/Framed/summersettings"
      },
      {
        "title": "Classrooms & Program Ratios",
        "href": "/ClassLists/ClassroomsProgramRatios.aspx"
      },
      {
        "title": "Child Event Report",
        "href": "/reports/schools/ChildEventReport.aspx",
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
    "title": "Class Lists",
    "icon": "/test-test-assets/images/class-lists-menu.svg",
    "children": [
      {
        "title": "Class Lists - By Classroom",
        "href": "/Frame.aspx?trg=/Framed/schoolyear"
      },
      {
        "title": "Class Lists - By Program Ratio",
        "href": "/Frame.aspx?trg=/Framed/schoolyear?byRatio=true"
      },
      {
        "title": "Class Lists - Summer Camp",
        "href": "/Frame.aspx?trg=/Framed/summer"
      },
      {
        "title": "Summer Camp School Settings",
        "href": "/Frame.aspx?trg=/Framed/summersettings"
      },
      {
        "title": "Classrooms & Program Ratios",
        "href": "/ClassLists/ClassroomsProgramRatios.aspx"
      },
      {
        "title": "Child Event Report",
        "href": "/reports/schools/ChildEventReport.aspx",
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
    "icon": "/test-test-assets/images/employees-menu.svg",
    "children": [
      {
        "title": "Search/View Employees",
        "href": "/Employees/EmployeeCenter.aspx"
      },
      {
        "title": "Cont Educ Progress Report",
        "href": "/reports/people/EmployeeContinuingEducationProgressReport.aspx",
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
          },
          {
            "title": "Faculty Contact Report",
            "href": "/reports/people/EmployeeContactReport.aspx"
          }
        ]
      }
    ]
  },
  {
    "title": "Accounting",
    "icon": "/test-test-assets/images/accounting-menu.svg",
    "children": [
      {
        "title": "By Parent",
        "href": "/Accounting/Ledger/Parents.aspx",
        "children": [
          {
            "title": "By Parent",
            "href": "/Accounting/Ledger/Parents.aspx",
            "children": [
              {
                "title": "By Parent",
                "href": "/Accounting/Ledger/Parents.aspx"
              },
              {
                "title": "By Classroom",
                "href": "/Accounting/Ledger/Classrooms.aspx"
              },
              {
                "title": "By Charge Code",
                "href": "/Accounting/Ledger/ChargeCodes.aspx"
              },
              {
                "title": "By Other Payor",
                "href": "/Accounting/Ledger/OtherPayors.aspx"
              },
              {
                "title": "By Program",
                "href": "/Accounting/Ledger/Programs.aspx"
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
        "title": "Monthly Batch Billing",
        "href": "/Accounting/BatchBilling/Monthly.aspx",
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
            "title": "ERP Preview",
            "href": "/Accounting/ERPBilling/ERPPreview.aspx",
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
      },
      {
        "title": "Payment Center/Receive Payments",
        "href": "/Accounting/Ledger/Payments/PaymentCenter.aspx",
        "children": [
          {
            "title": "Payment Center/Receive Payments",
            "href": "/Accounting/Ledger/Payments/PaymentCenter.aspx"
          },
          {
            "title": "Setup Payment Instruments",
            "href": "/Accounting/Ledger/Payments/SetupRecurring.aspx"
          },
          {
            "title": "Manage Payment Batches",
            "href": "/Accounting/Ledger/Payments/PaymentBatches.aspx"
          },
          {
            "title": "Deposit Tickets",
            "href": "/Accounting/DepositTickets.aspx"
          },
          {
            "title": "Electronic Payment Management",
            "href": "/Accounting/Ledger/Payments/ElectronicPaymentOptions.aspx"
          },
          {
            "title": "Electronic Payment Transaction Log",
            "href": "/Accounting/Ledger/Payments/ElectronicPaymentTransactionLog.aspx"
          }
        ]
      },
      {
        "title": "Close Month",
        "href": "/Accounting/Administration/MonthCloser.aspx",
        "children": [
          {
            "title": "Close Month",
            "href": "/Accounting/Administration/MonthCloser.aspx"
          },
          {
            "title": "Monthly Financial Report",
            "href": "/Accounting/FinancialReporting.aspx"
          }
        ]
      },
      {
        "title": "Batch End of Year Statements",
        "href": "/Accounting/StatementBatches/Yearly.aspx",
        "children": [
          {
            "title": "Batch End of Year Statements",
            "href": "/Accounting/StatementBatches/Yearly.aspx"
          }
        ]
      },
      {
        "title": "A/R Aging Report",
        "href": "/reports/accounting/AccountsReceivableAgingReport.aspx",
        "children": [
          {
            "title": "A/R Aging Report",
            "href": "/reports/accounting/AccountsReceivableAgingReport.aspx"
          },
          {
            "title": "A/R Aging Summary Report",
            "href": "/reports/accounting/AccountsReceivableAgingSummaryReport.aspx"
          },
          {
            "title": "Account Activity Detail (Parent)",
            "href": "/reports/accounting/AccountActivityDetailReport.aspx"
          },
          {
            "title": "Account Activity Detail (Other Payor)",
            "href": "/reports/accounting/AccountActivityDetailOtherPayorReport.aspx"
          },
          {
            "title": "Audit Report",
            "href": "/reports/accounting/AuditReport.aspx"
          },
          {
            "title": "Bad Debt",
            "href": "/reports/accounting/BadDebtReport.aspx"
          },
          {
            "title": "Balance Summary (Parent)",
            "href": "/reports/accounting/BalanceSummaryReport.aspx"
          },
          {
            "title": "Balance Summary (Other Payor)",
            "href": "/reports/accounting/BalanceSummaryOtherPayorReport.aspx"
          },
          {
            "title": "Billing Audit Report",
            "href": "/reports/accounting/BillingAuditReport.aspx"
          },
          {
            "title": "Billing Corrections Report",
            "href": "/reports/accounting/BillingCorrectionsReport.aspx"
          },
          {
            "title": "Billing Forecast Report",
            "href": "/reports/accounting/BillingForecastReport.aspx"
          },
          {
            "title": "Cash Receipts",
            "href": "/reports/accounting/CashReceiptsReport.aspx"
          },
          {
            "title": "Charge/Credit Summary Report",
            "href": "/reports/accounting/ChargeCreditSummaryReport.aspx"
          },
          {
            "title": "Deposit History Report",
            "href": "/reports/accounting/DepositHistoryReport.aspx"
          },
          {
            "title": "Discount Breakdown Report",
            "href": "/reports/accounting/DiscountBreakdownReport.aspx"
          },
          {
            "title": "Expiring Credit Card Report",
            "href": "/reports/accounting/ExpiringCreditCardReport.aspx"
          },
          {
            "title": "Ledger Auditing",
            "href": "/reports/accounting/LedgerAuditReport.aspx"
          },
          {
            "title": "Out of Balance Transaction Report",
            "href": "/reports/accounting/OutOfBalanceTransactionReport.aspx"
          },
          {
            "title": "Revenue Report",
            "href": "/reports/accounting/RevenueReport.aspx"
          },
          {
            "title": "Royalties Exclusions Report",
            "href": "/reports/accounting/RoyaltiesExclusionsReport.aspx"
          },
          {
            "title": "Royalty Report",
            "href": "/reports/accounting/RoyaltyReport.aspx"
          },
          {
            "title": "Specific Billed Report",
            "href": "/reports/accounting/SpecificBilledReport.aspx"
          },
          {
            "title": "Statements (Parent)",
            "href": "/reports/accounting/FamilyStatement.aspx"
          },
          {
            "title": "Statements (Other Payor)",
            "href": "/reports/accounting/OtherPayorStatement.aspx"
          },
          {
            "title": "End of Year Statements (Parent)",
            "href": "/reports/accounting/FamilyTaxStatement.aspx"
          },
          {
            "title": "Total Systems Cash Receipts",
            "href": "/reports/accounting/TotalSystemsCashReceiptsReport.aspx"
          },
          {
            "title": "Unapplied Deposit Report",
            "href": "/reports/accounting/UnappliedDepositReport.aspx"
          },
          {
            "title": "Adjusted Transactions Report",
            "href": "/reports/accounting/BillingAndFinancialReportAdjustmentsReport.aspx"
          },
          {
            "title": "PML Adjusted Transactions Report",
            "href": "/reports/accounting/PriorMonthLedgerAdjustmentTransactionsReport.aspx"
          }
        ]
      }
    ]
  },
  {
    "title": "Events",
    "icon": "/test-test-assets/images/events-menu.svg",
    "children": [
      {
        "title": "Calendar",
        "href": "/Administration/Calendar.aspx"
      },
      {
        "title": "Custom Follow-up Events",
        "href": "/Administration/AutoFollowupActivities/AutoFollowupActivities.aspx"
      },
      {
        "title": "Family Connect Event Schedule",
        "href": "/Administration/PublicWebsite/EventSchedule.aspx",
        "children": [
          {
            "title": "Family Connect Event Schedule",
            "href": "/Administration/PublicWebsite/EventSchedule.aspx"
          },
          {
            "title": "Family Connect Event Templates",
            "href": "/Administration/PublicWebsite/EventTemplates.aspx"
          },
          {
            "title": "Summer Camp Schedule",
            "href": "/Administration/PublicWebsite/SummerCampEvent.aspx"
          },
          {
            "title": "Summer Camp Event Templates",
            "href": "/Administration/PublicWebsite/SummerCampEventTemplates.aspx"
          }
        ]
      },
      {
        "title": "Task Management",
        "href": "/Tasks/TaskManagement.aspx"
      }
    ]
  },
  {
    "title": "Administration",
    "icon": "/test-test-assets/images/administration-menu.svg",
    "children": [
      {
        "title": "User Management",
        "href": "/Administration/Users.aspx"
      },
      {
        "title": "Role/Permission Management",
        "href": "/Administration/RolesPermissions.aspx"
      },
      {
        "title": "School Management",
        "href": "/Administration/Schools.aspx"
      },
      {
        "title": "School Images",
        "href": "/Administration/SchoolImages.aspx"
      },
      {
        "title": "Emergency Planned Absence",
        "href": "/Administration/PlannedAbsenceReason.aspx"
      },
      {
        "title": "Certifications",
        "href": "/Administration/Employees/Certifications.aspx",
        "children": [
          {
            "title": "Certifications",
            "href": "/Administration/Employees/Certifications.aspx"
          },
          {
            "title": "Continuing Education Requirements",
            "href": "/Administration/Employees/ContinuingEducationRequirements.aspx"
          },
          {
            "title": "Employee Review Timing",
            "href": "/Administration/Employees/ReviewTiming.aspx"
          },
          {
            "title": "Employee Vaccination Schedules",
            "href": "/Administration/VaccinationSchedules.aspx?A=employee"
          }
        ]
      },
      {
        "title": "Child Vaccination Schedules",
        "href": "/Administration/VaccinationSchedules.aspx?A=child",
        "children": [
          {
            "title": "Child Vaccination Schedules",
            "href": "/Administration/VaccinationSchedules.aspx?A=child"
          },
          {
            "title": "Symptoms",
            "href": "/Administration/Children/Symptoms.aspx"
          },
          {
            "title": "Allergies",
            "href": "/Administration/Children/Allergens.aspx"
          },
          {
            "title": "Medical Conditions & Restrictions",
            "href": "/Administration/Children/ConditionsRestrictions.aspx"
          },
          {
            "title": "Illness Master List",
            "href": "/Administration/Children/IllnessMasterList.aspx"
          }
        ]
      },
      {
        "title": "Ethnicities",
        "href": "/Administration/Lookups/Ethnicities.aspx",
        "children": [
          {
            "title": "Ethnicities",
            "href": "/Administration/Lookups/Ethnicities.aspx"
          },
          {
            "title": "Relationships",
            "href": "/Administration/Lookups/Relationships.aspx"
          },
          {
            "title": "Zip Codes",
            "href": "/Administration/Lookups/Zipcodes.aspx"
          }
        ]
      },
      {
        "title": "System Alerts",
        "href": "/Administration/SystemAlerts.aspx"
      },
      {
        "title": "Document Management",
        "href": "/Administration/FamilyConnect/Documents.aspx",
        "children": [
          {
            "title": "Document Management",
            "href": "/Administration/FamilyConnect/Documents.aspx"
          },
          {
            "title": "User Management",
            "href": "/Administration/FamilyConnect/Users.aspx"
          },
          {
            "title": "Verify Family Connect Setup",
            "href": "/Administration/FamilyConnect/Validate.aspx"
          },
          {
            "title": "User Report",
            "href": "/reports/people/FamilyConnectUserReport.aspx",
            "children": [
              {
                "title": "User Report",
                "href": "/reports/people/FamilyConnectUserReport.aspx"
              }
            ]
          }
        ]
      },
      {
        "title": "Batch Email - Parents",
        "href": "/Administration/Communications/EMailUtility.aspx?mode=PARENT",
        "children": [
          {
            "title": "Batch Email - Parents",
            "href": "/Administration/Communications/EMailUtility.aspx?mode=PARENT"
          },
          {
            "title": "Batch Email - Employees",
            "href": "/Administration/Communications/EMailUtility.aspx?mode=EMPLOYEE"
          },
          {
            "title": "Email Log",
            "href": "/Administration/EMailLog.aspx"
          },
          {
            "title": "Email Profiles",
            "href": "/Administration/EmailProfiles/EmailProfiles.aspx"
          },
          {
            "title": "Global Email Search",
            "href": "/Administration/GlobalEMailSearch.aspx"
          },
          {
            "title": "Deferred Emails",
            "href": "/Administration/DeferredEmail.aspx"
          }
        ]
      },
      {
        "title": "School Quotes",
        "href": "/Administration/PublicWebsite/SchoolQuotes.aspx",
        "children": [
          {
            "title": "School Quotes",
            "href": "/Administration/PublicWebsite/SchoolQuotes.aspx"
          },
          {
            "title": "Listen 360 Testimonials",
            "href": "/Administration/PublicWebsite/Listen360Testimonials.aspx"
          },
          {
            "title": "Parent Testmonials",
            "href": "/Administration/PublicWebsite/ParentTestimonials.aspx"
          },
          {
            "title": "Program Content",
            "href": "/Administration/PublicWebsite/WebsiteProgramContent.aspx"
          },
          {
            "title": "Careers",
            "href": "/Administration/PublicWebsite/WebsiteCareerContent.aspx"
          }
        ]
      },
      {
        "title": "Encrypt/Decrypt",
        "href": "/Administration/EncryptDecrypt.aspx"
      },
      {
        "title": "Family Merge/Delete Utility",
        "href": "/Administration/AdminUtility/FamilyMergeDelete.aspx",
        "children": [
          {
            "title": "Family Merge/Delete Utility",
            "href": "/Administration/AdminUtility/FamilyMergeDelete.aspx"
          },
          {
            "title": "Replicate/Restore School Utility",
            "href": "/Administration/AdminUtility/ReplicateRestore.aspx"
          },
          {
            "title": "Bulk Import Advertising Costs",
            "href": "/Administration/AdminUtility/EditBulkImportAdvertisingCosts.aspx"
          }
        ]
      },
      {
        "title": "Statistics",
        "href": "/Administration/Statistics/ChildStatistics.aspx"
      },
      {
        "title": "List Management",
        "href": "/Administration/MailLists/MailLists.aspx"
      },
      {
        "title": "iBrochure Videos",
        "href": "/Administration/IBrochure/IBrochureVideos.aspx"
      },
      {
        "title": "iBrochure Version Report",
        "href": "/reports/Schools/IBrochureVersionReport.aspx"
      },
      {
        "title": "Constant Contact",
        "href": "/Administration/ConstantContact.aspx"
      },
      {
        "title": "Brand Connect",
        "href": "/Administration/SaepioRedirect.aspx",
        "children": [
          {
            "title": "Brand Connect",
            "href": "/Administration/SaepioRedirect.aspx"
          },
          {
            "title": "iGoddard",
            "href": "/Administration/IGoddardPortal.aspx"
          }
        ]
      },
      {
        "title": "Open a New FMS Window",
        "href": "/"
      },
      {
        "title": "Change FMS Password"
      },
      {
        "title": "Switch Active School"
      }
    ]
  },

*/


function syncPageTitleFromNavData() {
  const shell = document.querySelector('gsl-shell');
  const currentPath = window.location.pathname || '/';

  function findTitle(items) {
    for (const item of items) {
      if (item.href === currentPath) {
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
  // Set it as the `currentPath` prop
  shell.currentPath = currentPath;
}


const shell = document.querySelector('gsl-shell')
shell.navigationData = navData;
syncCurrentPathToSideNav();
syncPageTitleFromNavData();
