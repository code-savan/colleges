"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Upload, CheckCircle2, AlertCircle, X } from 'lucide-react'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

const UndergraduateApplicationForm = () => {
  const [photoPreview, setPhotoPreview] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)

  const [formData, setFormData] = useState({
    // Programme Selection
    programme: '',
    semester: '',

    // Applicant Details
    fullName: '',
    gender: '',
    dateOfBirth: '',
    stateOfOrigin: '',
    nationality: '',
    religion: '',
    speciallyAbled: 'no',
    abilityDescription: '',

    // Schools Attended
    schools: [
      { name: '', address: '', period: '', class: '' },
      { name: '', address: '', period: '', class: '' },
      { name: '', address: '', period: '', class: '' }
    ],

    // Results
    results: Array(9).fill({ subject: '', waec: '', neco: '', igcse: '' }),

    // Parent/Guardian Information
    fatherName: '',
    fatherOccupation: '',
    fatherWorkplace: '',
    fatherHomeAddress: '',
    fatherCity: '',
    fatherState: '',
    fatherOfficeAddress: '',
    fatherPhone: '',
    fatherEmail: '',

    motherName: '',
    motherOccupation: '',
    motherWorkplace: '',
    motherHomeAddress: '',
    motherCity: '',
    motherState: '',
    motherOfficeAddress: '',
    motherPhone: '',
    motherEmail: '',

    guardianName: '',
    guardianOccupation: '',
    guardianWorkplace: '',
    guardianHomeAddress: '',
    guardianCity: '',
    guardianState: '',
    guardianOfficeAddress: '',
    guardianPhone: '',
    guardianEmail: '',

    // Personal Statement
    personalStatement: '',

    // Faculty and Course
    faculty: '',
    courseName: '',

    // Proposed Universities
    university1: '',
    university2: '',
    university3: '',

    // Accommodation
    accommodation: '',
    accommodationOther: '',

    // How did you hear
    hearAbout: '',
    hearAboutOther: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const programmes = [
    'A-LEVEL',
    'A-LEVEL (EXTENDED) SUMMER INTENSIVE PROGRAMME',
    'INTERNATIONAL MEDICAL FOUNDATION PROGRAMME',
    'INTERNATIONAL UNIVERSITY FOUNDATION PROGRAMME',
    'BSc/BA DIPLOMA'
  ]

  const semesters = [
    'JANUARY/FEBRUARY ENTRY',
    'MAY/JUNE ENTRY',
    'SEPTEMBER/OCTOBER ENTRY'
  ]

  const faculties = [
    'Accounting, Banking, Business, Economics, Finance + Management',
    'Computing, Information System and Mathematics',
    'Engineering',
    'Law, Business and Criminology',
    'Social Sciences',
    'Media and Cultural Studies',
    'Medical Sciences',
    'Life Sciences, Pharmacy and Nursing',
    'Linguistics and Modern Languages'
  ]

  const accommodationOptions = [
    'YOUR RESIDENCE',
    'BRITISH AUC COLLEGE RESIDENCE',
    'SHORTLET APARTMENTS',
    'AIR BNB',
    'HOTEL APARTMENTS',
    'OTHERS'
  ]

  const hearAboutOptions = [
    'Friend',
    'School Fair',
    'Study Tour',
    'Website',
    'Social Media',
    'Advert',
    'Others'
  ]

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        setErrors(prev => ({ ...prev, photo: 'File size must be less than 5MB' }))
        return
      }
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, photo: 'Please upload an image file' }))
        return
      }

      setPhotoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)

      // Clear error
      if (errors.photo) {
        setErrors(prev => ({ ...prev, photo: '' }))
      }
    }
  }

  const removePhoto = () => {
    setPhotoFile(null)
    setPhotoPreview(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSchoolChange = (index, field, value) => {
    const newSchools = [...formData.schools]
    newSchools[index] = { ...newSchools[index], [field]: value }
    setFormData(prev => ({ ...prev, schools: newSchools }))
  }

  const handleResultChange = (index, field, value) => {
    const newResults = [...formData.results]
    newResults[index] = { ...newResults[index], [field]: value }
    setFormData(prev => ({ ...prev, results: newResults }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!photoFile) newErrors.photo = 'Passport photograph is required'
    if (!formData.programme) newErrors.programme = 'Programme is required'
    if (!formData.semester) newErrors.semester = 'Semester is required'
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.nationality) newErrors.nationality = 'Nationality is required'
    if (!formData.fatherName && !formData.motherName && !formData.guardianName) {
      newErrors.parentGuardian = 'At least one parent/guardian information is required'
    }
    if (!formData.personalStatement || formData.personalStatement.length < 100) {
      newErrors.personalStatement = 'Personal statement is required (minimum 100 characters)'
    }
    if (!formData.faculty) newErrors.faculty = 'Faculty selection is required'
    if (!formData.courseName) newErrors.courseName = 'Course name is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', { ...formData, photo: photoFile })
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const firstError = document.querySelector('.error-field')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <NavBar />
        <div className="pt-28 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your application. Our admissions team will review your application and contact you within 5-7 business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Return to Home
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Back to Forms
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Application Forms</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Undergraduate Programme Application Form
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Complete the form below to apply for admission to British AUC University Pathway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Instructions:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All fields marked with <span className="text-red-600">*</span> are required</li>
                <li>• Please fill in CAPITAL LETTERS where specified</li>
                <li>• Upload a passport photograph at the top of the form</li>
                <li>• Required documents to submit after online application: (i) 2 passport photographs, (ii) Copy of birth certificate, (iii) Copy of passport photo page, (iv) Copy of NECO/WAEC/IGCSE result, (v) Transcript from current school</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Passport Photograph Upload */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Passport Photograph</h2>

              <div className="flex flex-col items-center">
                {!photoPreview ? (
                  <div className={`w-full max-w-md border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:border-red-500 hover:bg-gray-50 transition-all ${errors.photo ? 'border-red-500 bg-red-50 error-field' : 'border-gray-300'}`}>
                    <label htmlFor="photo-upload" className="cursor-pointer block">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-700 font-medium mb-2">
                        Click to upload passport photograph <span className="text-red-600">*</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG or JPEG (Max 5MB)
                      </p>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={photoPreview}
                      alt="Passport photograph"
                      className="w-48 h-48 object-cover rounded-xl border-4 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
                {errors.photo && <p className="text-red-600 text-sm mt-2">{errors.photo}</p>}
              </div>
            </div>

            {/* Programme Selection */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme Selection</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Programme <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="programme"
                    value={formData.programme}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.programme ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  >
                    <option value="">Select Programme</option>
                    {programmes.map(prog => (
                      <option key={prog} value={prog}>{prog}</option>
                    ))}
                  </select>
                  {errors.programme && <p className="text-red-600 text-xs mt-1">{errors.programme}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Semester & Month of Proposed Entry <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.semester ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  >
                    <option value="">Select Semester</option>
                    {semesters.map(sem => (
                      <option key={sem} value={sem}>{sem}</option>
                    ))}
                  </select>
                  {errors.semester && <p className="text-red-600 text-xs mt-1">{errors.semester}</p>}
                </div>
              </div>
            </div>

            {/* Applicant Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Applicant&apos;s Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name (in CAPITAL LETTERS) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="ENTER YOUR FULL NAME"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase ${errors.fullName ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.gender ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                  {errors.gender && <p className="text-red-600 text-xs mt-1">{errors.gender}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.dateOfBirth ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  />
                  {errors.dateOfBirth && <p className="text-red-600 text-xs mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State of Origin
                  </label>
                  <input
                    type="text"
                    name="stateOfOrigin"
                    value={formData.stateOfOrigin}
                    onChange={handleInputChange}
                    placeholder="Enter state of origin"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nationality <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    placeholder="Enter nationality"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase ${errors.nationality ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  />
                  {errors.nationality && <p className="text-red-600 text-xs mt-1">{errors.nationality}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Religion
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    placeholder="Enter religion"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specially Abled
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="speciallyAbled"
                        value="no"
                        checked={formData.speciallyAbled === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-red-600"
                      />
                      <span>No</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="speciallyAbled"
                        value="yes"
                        checked={formData.speciallyAbled === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-red-600"
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                </div>

                {formData.speciallyAbled === 'yes' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Please Describe
                    </label>
                    <textarea
                      name="abilityDescription"
                      value={formData.abilityDescription}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Please describe your special needs"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Schools Attended */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schools Attended in the Last 3 Years</h2>

              {formData.schools.map((school, index) => (
                <div key={index} className="mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-b-0 border-gray-200">
                  <h3 className="font-semibold text-gray-700 mb-4">School {String.fromCharCode(65 + index)}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                      <input
                        type="text"
                        value={school.name}
                        onChange={(e) => handleSchoolChange(index, 'name', e.target.value)}
                        placeholder="Enter school name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        value={school.address}
                        onChange={(e) => handleSchoolChange(index, 'address', e.target.value)}
                        placeholder="Enter address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                      <input
                        type="text"
                        value={school.period}
                        onChange={(e) => handleSchoolChange(index, 'period', e.target.value)}
                        placeholder="e.g., 2020-2023"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                      <input
                        type="text"
                        value={school.class}
                        onChange={(e) => handleSchoolChange(index, 'class', e.target.value)}
                        placeholder="Enter class/grade"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Examination Results */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results with Grades (If Applicable)</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">S/N</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Subject</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">WAEC</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">NECO</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">IGCSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.results.map((result, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2">{index + 1}</td>
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={result.subject}
                            onChange={(e) => handleResultChange(index, 'subject', e.target.value)}
                            placeholder="Subject"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-sm"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={result.waec}
                            onChange={(e) => handleResultChange(index, 'waec', e.target.value)}
                            placeholder="Grade"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-sm"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={result.neco}
                            onChange={(e) => handleResultChange(index, 'neco', e.target.value)}
                            placeholder="Grade"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-sm"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={result.igcse}
                            onChange={(e) => handleResultChange(index, 'igcse', e.target.value)}
                            placeholder="Grade"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-sm"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Parent/Guardian Information</h2>
              {errors.parentGuardian && <p className="text-red-600 text-sm mb-4 error-field">{errors.parentGuardian}</p>}

              {/* Father's Information */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">(A) Father&apos;s Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Enter father's full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                      placeholder="Enter occupation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Place of Work</label>
                    <input
                      type="text"
                      name="fatherWorkplace"
                      value={formData.fatherWorkplace}
                      onChange={handleInputChange}
                      placeholder="Enter workplace"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
                    <input
                      type="text"
                      name="fatherHomeAddress"
                      value={formData.fatherHomeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter home address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City/Town</label>
                    <input
                      type="text"
                      name="fatherCity"
                      value={formData.fatherCity}
                      onChange={handleInputChange}
                      placeholder="Enter city/town"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="fatherState"
                      value={formData.fatherState}
                      onChange={handleInputChange}
                      placeholder="Enter state"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Office Address</label>
                    <input
                      type="text"
                      name="fatherOfficeAddress"
                      value={formData.fatherOfficeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter office address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
                    <input
                      type="tel"
                      name="fatherPhone"
                      value={formData.fatherPhone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="fatherEmail"
                      value={formData.fatherEmail}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Mother's Information */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">(B) Mother&apos;s Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      placeholder="Enter mother's full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                    <input
                      type="text"
                      name="motherOccupation"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                      placeholder="Enter occupation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Place of Work</label>
                    <input
                      type="text"
                      name="motherWorkplace"
                      value={formData.motherWorkplace}
                      onChange={handleInputChange}
                      placeholder="Enter workplace"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
                    <input
                      type="text"
                      name="motherHomeAddress"
                      value={formData.motherHomeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter home address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City/Town</label>
                    <input
                      type="text"
                      name="motherCity"
                      value={formData.motherCity}
                      onChange={handleInputChange}
                      placeholder="Enter city/town"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="motherState"
                      value={formData.motherState}
                      onChange={handleInputChange}
                      placeholder="Enter state"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Office Address</label>
                    <input
                      type="text"
                      name="motherOfficeAddress"
                      value={formData.motherOfficeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter office address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
                    <input
                      type="tel"
                      name="motherPhone"
                      value={formData.motherPhone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="motherEmail"
                      value={formData.motherEmail}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Guardian Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">(C) Guardian (If Guardian shall be responsible for the student)</h3>
                <p className="text-sm text-gray-600 mb-4">Only fill this section if a guardian will be responsible for you</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleInputChange}
                      placeholder="Enter guardian's full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                    <input
                      type="text"
                      name="guardianOccupation"
                      value={formData.guardianOccupation}
                      onChange={handleInputChange}
                      placeholder="Enter occupation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Place of Work</label>
                    <input
                      type="text"
                      name="guardianWorkplace"
                      value={formData.guardianWorkplace}
                      onChange={handleInputChange}
                      placeholder="Enter workplace"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
                    <input
                      type="text"
                      name="guardianHomeAddress"
                      value={formData.guardianHomeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter home address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City/Town</label>
                    <input
                      type="text"
                      name="guardianCity"
                      value={formData.guardianCity}
                      onChange={handleInputChange}
                      placeholder="Enter city/town"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      name="guardianState"
                      value={formData.guardianState}
                      onChange={handleInputChange}
                      placeholder="Enter state"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Office Address</label>
                    <input
                      type="text"
                      name="guardianOfficeAddress"
                      value={formData.guardianOfficeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter office address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
                    <input
                      type="tel"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="guardianEmail"
                      value={formData.guardianEmail}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Statement */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Statement</h2>
              <p className="text-sm text-gray-600 mb-4">
                We would like to know more about you. Why would you like this course, what is your future ambition and also include your hobbies and other skills/talents.
              </p>

              <textarea
                name="personalStatement"
                value={formData.personalStatement}
                onChange={handleInputChange}
                rows="12"
                placeholder="Write your personal statement here..."
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.personalStatement ? 'border-red-500 error-field' : 'border-gray-300'}`}
              />
              {errors.personalStatement && <p className="text-red-600 text-xs mt-1">{errors.personalStatement}</p>}
              <p className="text-xs text-gray-500 mt-2">
                {formData.personalStatement.length} characters (minimum 100 required)
              </p>
            </div>

            {/* Faculty and Course Selection - NEW */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Faculty and Course Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Your Faculty <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.faculty ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  >
                    <option value="">Select Faculty</option>
                    {faculties.map(faculty => (
                      <option key={faculty} value={faculty}>{faculty}</option>
                    ))}
                  </select>
                  {errors.faculty && <p className="text-red-600 text-xs mt-1">{errors.faculty}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter Course Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleInputChange}
                    placeholder="E.g., BSc (Hons) Computer Science"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none ${errors.courseName ? 'border-red-500 error-field' : 'border-gray-300'}`}
                  />
                  {errors.courseName && <p className="text-red-600 text-xs mt-1">{errors.courseName}</p>}
                  <p className="text-xs text-gray-500 mt-1">
                    Please enter the full name of the course you wish to study
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Proposed Universities (Please list 3 universities of choice)
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="university1"
                      value={formData.university1}
                      onChange={handleInputChange}
                      placeholder="1. First choice university"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      name="university2"
                      value={formData.university2}
                      onChange={handleInputChange}
                      placeholder="2. Second choice university"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      name="university3"
                      value={formData.university3}
                      onChange={handleInputChange}
                      placeholder="3. Third choice university"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodation Options */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Accommodation Options</h2>

              <div className="space-y-3">
                {accommodationOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="accommodation"
                      value={option}
                      checked={formData.accommodation === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>

              {formData.accommodation === 'OTHERS' && (
                <div className="mt-4">
                  <input
                    type="text"
                    name="accommodationOther"
                    value={formData.accommodationOther}
                    onChange={handleInputChange}
                    placeholder="Please specify"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                </div>
              )}
            </div>

            {/* How Did You Hear */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How did you get to hear about British AUC University Pathway?</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hearAboutOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="hearAbout"
                      value={option}
                      checked={formData.hearAbout === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600"
                    />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>

              {formData.hearAbout === 'Others' && (
                <div className="mt-4">
                  <input
                    type="text"
                    name="hearAboutOther"
                    value={formData.hearAboutOther}
                    onChange={handleInputChange}
                    placeholder="Please specify"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  />
                </div>
              )}
            </div>

            {/* Note: Include all other form sections here from the previous comprehensive form */}
            {/* For brevity, I'm showing the key new sections */}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                Submit Application
                <CheckCircle2 className="w-5 h-5" />
              </button>
              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 border border-gray-300 px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default UndergraduateApplicationForm
