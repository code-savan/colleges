/**
 * Google Apps Script — Form Submission Handler
 *
 * Deploy this as a Web App to receive form submissions from the static site.
 * Each form type is written to its own sheet within the same spreadsheet.
 *
 * SETUP:
 * 1. Create a Google Sheet with sheet tabs named exactly: Undergraduate, Degree, Masters, IELTS
 * 2. Open Extensions > Apps Script
 * 3. Paste this file (replace SPREADSHEET_ID)
 * 4. Deploy > New Deployment > Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and set it as NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL
 */

const SPREADSHEET_ID = "10lGCrHY4lm7k7oC8EE9oTGUGtuY5P8tmgwx8r90_A3Q"

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    const formType = e.parameter.formType || "Unknown"

    // Route to the correct sheet tab
    let targetSheet
    try {
      targetSheet = sheet.getSheetByName(formType)
    } catch (err) {
      // Sheets are named: Undergraduate, Degree, Masters, IELTS
    }

    if (!targetSheet) {
      return ContentService
        .createTextOutput(`No sheet found for: ${formType}`)
        .setMimeType(ContentService.MimeType.TEXT)
    }

    const passportUrl = e.parameter.passportDataPage || ""

    // Build header + row data
    // The headers are: timestamp + form fields
    const headers = [
      "Timestamp",
      "Form Type",
      "Test Type",
      "Module",
      "Preferred Test Date",
      "Title",
      "First Name",
      "Last Name",
      "Date of Birth",
      "Gender",
      "Nationality",
      "Country of Birth",
      "First Language",
      "Phone Number",
      "ID Type",
      "ID Number",
      "Expiry Date",
      "Email Address",
      "Mobile / WhatsApp",
      "Residential Address",
      "City / State / Country",
      "Postal Code",
      "Correspondence Address",
      "Occupation",
      "Organisation / School",
      "Highest Education",
      "How Did You Hear",
      "Passport Data Page URL",
    ]

    // First row: ensure headers exist
    if (targetSheet.getLastRow() === 0) {
      const headerRow = targetSheet.getRange(1, 1, 1, headers.length)
      headerRow.setValues([headers])
      headerRow.setFontWeight("bold")
      headerRow.setBackground("#f3f4f6")
    }

    const row = [
      new Date().toISOString(),
      formType,
      e.parameter.testType || "",
      e.parameter.module || "",
      e.parameter.preferredTestDate || "",
      e.parameter.title || "",
      e.parameter.firstName || "",
      e.parameter.lastName || "",
      e.parameter.dateOfBirth || "",
      e.parameter.gender || "",
      e.parameter.nationality || "",
      e.parameter.countryOfBirth || "",
      e.parameter.firstLanguage || "",
      e.parameter.phoneNumber || "",
      e.parameter.idType || "",
      e.parameter.idNumber || "",
      e.parameter.expiryDate || "",
      e.parameter.emailAddress || "",
      e.parameter.mobileWhatsApp || "",
      e.parameter.residentialAddress || "",
      e.parameter.cityStateCountry || "",
      e.parameter.postalCode || "",
      e.parameter.correspondenceAddress || "",
      e.parameter.occupation || "",
      e.parameter.organisationSchool || "",
      e.parameter.highestEducation || "",
      e.parameter.hearAbout || "",
      passportUrl,
    ]

    targetSheet.appendRow(row)

    return ContentService
      .createTextOutput("SUCCESS")
      .setMimeType(ContentService.MimeType.TEXT)

  } catch (err) {
    return ContentService
      .createTextOutput("ERROR: " + err.toString())
      .setMimeType(ContentService.MimeType.TEXT)
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Form endpoint is running.")
    .setMimeType(ContentService.MimeType.TEXT)
}
