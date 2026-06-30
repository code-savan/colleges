/**
 * Google Apps Script — Form Submission Handler
 *
 * Receives form submissions from the colleges website via the Next.js API proxy.
 * Each form type is written to its own sheet within the same spreadsheet.
 *
 * SETUP (DO THIS EXACTLY):
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/10lGCrHY4lm7k7oC8EE9oTGUGtuY5P8tmgwx8r90_A3Q
 * 2. Create sheet tabs named EXACTLY: Undergraduate, Degree, Masters, IELTS
 * 3. Click Extensions > Apps Script
 * 4. Delete any existing code and paste the entire contents of this file
 * 5. Click Deploy > New Deployment
 *    - Select type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy
 * 7. Copy the Web App URL and set it as NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL in .env.local
 * 8. IMPORTANT: After deploying, also go to your sheet and verify headers appear after first submission
 */

const SPREADSHEET_ID = "10lGCrHY4lm7k7oC8EE9oTGUGtuY5P8tmgwx8r90_A3Q"

function getParams(e) {
  // Standard POST (from our API proxy — Content-Type: application/x-www-form-urlencoded)
  if (e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter
  }

  // Fallback: parse raw POST body for no-cors requests with text/plain
  if (e.postData && e.postData.contents) {
    const params = {}
    e.postData.contents.split("&").forEach(pair => {
      const [key, value] = pair.split("=").map(s => decodeURIComponent(s || ""))
      if (key) params[key] = value || ""
    })
    return params
  }

  return {}
}

const ALL_FIELDS = [
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

const FIELD_MAP = {
  "formType": "Form Type",
  "testType": "Test Type",
  "module": "Module",
  "preferredTestDate": "Preferred Test Date",
  "title": "Title",
  "firstName": "First Name",
  "lastName": "Last Name",
  "dateOfBirth": "Date of Birth",
  "gender": "Gender",
  "nationality": "Nationality",
  "countryOfBirth": "Country of Birth",
  "firstLanguage": "First Language",
  "phoneNumber": "Phone Number",
  "idType": "ID Type",
  "idNumber": "ID Number",
  "expiryDate": "Expiry Date",
  "emailAddress": "Email Address",
  "mobileWhatsApp": "Mobile / WhatsApp",
  "residentialAddress": "Residential Address",
  "cityStateCountry": "City / State / Country",
  "postalCode": "Postal Code",
  "correspondenceAddress": "Correspondence Address",
  "occupation": "Occupation",
  "organisationSchool": "Organisation / School",
  "highestEducation": "Highest Education",
  "hearAbout": "How Did You Hear",
  "passportDataPage": "Passport Data Page URL",
  "passportDataPageUrl": "Passport Data Page URL",
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    const params = getParams(e)
    const formType = params.formType || "Unknown"

    // Route to the correct sheet tab
    let targetSheet
    try {
      targetSheet = sheet.getSheetByName(formType)
    } catch (err) {
      // Sheet tab not found
    }

    if (!targetSheet) {
      return ContentService
        .createTextOutput(`ERROR: No sheet tab found named "${formType}". Create a tab with this exact name.`)
        .setMimeType(ContentService.MimeType.TEXT)
    }

    // Ensure headers exist in the first row
    if (targetSheet.getLastRow() === 0) {
      const headerRow = targetSheet.getRange(1, 1, 1, ALL_FIELDS.length)
      headerRow.setValues([ALL_FIELDS])
      headerRow.setFontWeight("bold")
      headerRow.setBackground("#f3f4f6")
      // Freeze header row
      targetSheet.setFrozenRows(1)
    }

    // Build the data row in header order
    const row = ALL_FIELDS.map(header => {
      if (header === "Timestamp") return new Date().toISOString()

      // Find the matching param key
      for (const [paramKey, fieldName] of Object.entries(FIELD_MAP)) {
        if (fieldName === header) {
          return params[paramKey] || ""
        }
      }
      return ""
    })

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
    .createTextOutput("Form endpoint is running. Use POST to submit data.")
    .setMimeType(ContentService.MimeType.TEXT)
}
