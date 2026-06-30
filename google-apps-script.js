const SPREADSHEET_ID = "10lGCrHY4lm7k7oC8EE9oTGUGtuY5P8tmgwx8r90_A3Q"

function getParams(e) {
  if (e.parameter && Object.keys(e.parameter).length > 0) return e.parameter
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

const FORM_CONFIGS = {
  Undergraduate: {
    fields: [
      "Timestamp", "Form Type",
      "Programme", "Semester",
      "Full Name", "Gender", "Date of Birth", "State of Origin", "Nationality", "Religion",
      "Specially Abled", "Ability Description",
      "Schools (JSON)", "Results (JSON)",
      "Father Name", "Father Occupation", "Father Workplace", "Father Home Address",
      "Father City", "Father State", "Father Office Address", "Father Phone", "Father Email",
      "Mother Name", "Mother Occupation", "Mother Workplace", "Mother Home Address",
      "Mother City", "Mother State", "Mother Office Address", "Mother Phone", "Mother Email",
      "Guardian Name", "Guardian Occupation", "Guardian Workplace", "Guardian Home Address",
      "Guardian City", "Guardian State", "Guardian Office Address", "Guardian Phone", "Guardian Email",
      "Personal Statement",
      "Faculty", "Course Name",
      "University 1", "University 2", "University 3",
      "Accommodation", "Accommodation Other",
      "How Did You Hear", "How Did You Hear Other",
      "Passport URL",
    ],
    map: {
      programme: "Programme", semester: "Semester",
      fullName: "Full Name", gender: "Gender", dateOfBirth: "Date of Birth",
      stateOfOrigin: "State of Origin", nationality: "Nationality", religion: "Religion",
      speciallyAbled: "Specially Abled", abilityDescription: "Ability Description",
      schools: "Schools (JSON)", results: "Results (JSON)",
      fatherName: "Father Name", fatherOccupation: "Father Occupation", fatherWorkplace: "Father Workplace",
      fatherHomeAddress: "Father Home Address", fatherCity: "Father City", fatherState: "Father State",
      fatherOfficeAddress: "Father Office Address", fatherPhone: "Father Phone", fatherEmail: "Father Email",
      motherName: "Mother Name", motherOccupation: "Mother Occupation", motherWorkplace: "Mother Workplace",
      motherHomeAddress: "Mother Home Address", motherCity: "Mother City", motherState: "Mother State",
      motherOfficeAddress: "Mother Office Address", motherPhone: "Mother Phone", motherEmail: "Mother Email",
      guardianName: "Guardian Name", guardianOccupation: "Guardian Occupation", guardianWorkplace: "Guardian Workplace",
      guardianHomeAddress: "Guardian Home Address", guardianCity: "Guardian City", guardianState: "Guardian State",
      guardianOfficeAddress: "Guardian Office Address", guardianPhone: "Guardian Phone", guardianEmail: "Guardian Email",
      personalStatement: "Personal Statement",
      faculty: "Faculty", courseName: "Course Name",
      university1: "University 1", university2: "University 2", university3: "University 3",
      accommodation: "Accommodation", accommodationOther: "Accommodation Other",
      hearAbout: "How Did You Hear", hearAboutOther: "How Did You Hear Other",
      passportUrl: "Passport URL", passportDataPage: "Passport URL", passportDataPageUrl: "Passport URL",
    }
  },
  IELTS: {
    fields: [
      "Timestamp", "Form Type",
      "Test Type", "Module", "Preferred Test Date",
      "Title", "First Name", "Last Name", "Date of Birth", "Gender",
      "Nationality", "Country of Birth", "First Language", "Phone Number",
      "ID Type", "ID Number", "Expiry Date",
      "Email Address", "Mobile / WhatsApp",
      "Residential Address", "City / State / Country", "Postal Code", "Correspondence Address",
      "Occupation", "Organisation / School", "Highest Education",
      "How Did You Hear",
      "Passport URL",
    ],
    map: {
      testType: "Test Type", module: "Module", preferredTestDate: "Preferred Test Date",
      title: "Title", firstName: "First Name", lastName: "Last Name",
      dateOfBirth: "Date of Birth", gender: "Gender",
      nationality: "Nationality", countryOfBirth: "Country of Birth",
      firstLanguage: "First Language", phoneNumber: "Phone Number",
      idType: "ID Type", idNumber: "ID Number", expiryDate: "Expiry Date",
      emailAddress: "Email Address", mobileWhatsApp: "Mobile / WhatsApp",
      residentialAddress: "Residential Address", cityStateCountry: "City / State / Country",
      postalCode: "Postal Code", correspondenceAddress: "Correspondence Address",
      occupation: "Occupation", organisationSchool: "Organisation / School",
      highestEducation: "Highest Education",
      hearAbout: "How Did You Hear",
      passportDataPage: "Passport URL", passportDataPageUrl: "Passport URL",
    }
  },
  Degree: {
    fields: [
      "Timestamp", "Form Type",
      "Full Name", "Gender", "Date of Birth", "Nationality",
      "Email Address", "Phone Number",
      "Programme", "Course Name",
      "How Did You Hear",
      "Passport URL",
    ],
    map: {
      fullName: "Full Name", gender: "Gender", dateOfBirth: "Date of Birth",
      nationality: "Nationality", emailAddress: "Email Address", phoneNumber: "Phone Number",
      programme: "Programme", courseName: "Course Name",
      hearAbout: "How Did You Hear",
      passportDataPage: "Passport URL", passportDataPageUrl: "Passport URL",
    }
  },
  Masters: {
    fields: [
      "Timestamp", "Form Type",
      "Full Name", "Gender", "Date of Birth", "Nationality",
      "Email Address", "Phone Number",
      "Programme", "Course Name",
      "How Did You Hear",
      "Passport URL",
    ],
    map: {
      fullName: "Full Name", gender: "Gender", dateOfBirth: "Date of Birth",
      nationality: "Nationality", emailAddress: "Email Address", phoneNumber: "Phone Number",
      programme: "Programme", courseName: "Course Name",
      hearAbout: "How Did You Hear",
      passportDataPage: "Passport URL", passportDataPageUrl: "Passport URL",
    }
  },
}

function getConfig(formType) {
  return FORM_CONFIGS[formType] || FORM_CONFIGS.Undergraduate
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    const params = getParams(e)
    const formType = params.formType || "Unknown"
    const config = getConfig(formType)
    const fields = config.fields
    const fieldMap = config.map

    let targetSheet
    try {
      targetSheet = sheet.getSheetByName(formType)
    } catch (err) {}

    if (!targetSheet) {
      return ContentService
        .createTextOutput(`ERROR: No sheet tab found named "${formType}". Create a tab with this exact name.`)
        .setMimeType(ContentService.MimeType.TEXT)
    }

    // Ensure headers exist
    const firstCell = targetSheet.getRange(1, 1).getValue()
    if (targetSheet.getLastRow() === 0 || firstCell !== "Timestamp") {
      if (targetSheet.getLastRow() > 0) {
        targetSheet.getRange(1, 1, targetSheet.getLastRow(), fields.length).clear()
      }
      const headerRow = targetSheet.getRange(1, 1, 1, fields.length)
      headerRow.setValues([fields])
      headerRow.setFontWeight("bold")
      headerRow.setBackground("#f3f4f6")
      targetSheet.setFrozenRows(1)
    }

    // Build row in header order
    const row = fields.map(header => {
      if (header === "Timestamp") return new Date().toISOString()
      if (header === "Form Type") return formType
      for (const [paramKey, fieldName] of Object.entries(fieldMap)) {
        if (fieldName === header) return params[paramKey] || ""
      }
      return ""
    })

    const lastRow = targetSheet.getLastRow() + 1
    targetSheet.getRange(lastRow, 1, 1, row.length).setValues([row])

    // Render passport image inline
    const passportUrl = params.passportDataPage || params.passportDataPageUrl || params.passportUrl || ""
    if (passportUrl) {
      const passportCol = fields.indexOf("Passport URL") + 1
      if (passportCol > 0) {
        const cell = targetSheet.getRange(lastRow, passportCol)
        cell.setFormula(`=IMAGE("${passportUrl}", 1)`)
        cell.setNote(`Passport URL (copy this):\n${passportUrl}`)
      }
    }

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
