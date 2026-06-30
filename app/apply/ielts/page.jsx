"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import PassportUpload from '../../../components/PassportUpload.jsx'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || ""

const initialFormData = {
  testType: "",
  module: "",
  preferredTestDate: "",
  title: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  countryOfBirth: "",
  firstLanguage: "",
  phoneNumber: "",
  idType: "International Passport",
  idNumber: "",
  expiryDate: "",
  emailAddress: "",
  mobileWhatsApp: "",
  residentialAddress: "",
  cityStateCountry: "",
  postalCode: "",
  correspondenceAddress: "",
  occupation: "",
  organisationSchool: "",
  highestEducation: "",
  hearAbout: "",
  agreeDeclaration: false,
}

const IeltsRegistrationForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [passportUrl, setPassportUrl] = useState("")
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.testType) newErrors.testType = "Select a test type"
    if (!formData.module) newErrors.module = "Select a module"
    if (!formData.preferredTestDate) newErrors.preferredTestDate = "Select a test date"
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.gender) newErrors.gender = "Select your gender"
    if (!formData.nationality) newErrors.nationality = "Nationality is required"
    if (!formData.countryOfBirth) newErrors.countryOfBirth = "Country of birth is required"
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required"
    if (!formData.idNumber) newErrors.idNumber = "ID number is required"
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required"
    if (!formData.emailAddress) newErrors.emailAddress = "Email is required"
    if (!formData.emailAddress.includes("@")) newErrors.emailAddress = "Valid email is required"
    if (!formData.residentialAddress) newErrors.residentialAddress = "Address is required"
    if (!formData.cityStateCountry) newErrors.cityStateCountry = "City/State/Country is required"
    if (!formData.highestEducation) newErrors.highestEducation = "Select your highest education"
    if (!formData.agreeDeclaration) newErrors.agreeDeclaration = "You must agree to the declaration"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError("")

    const submissionData = new FormData()
    submissionData.append("formType", "IELTS")
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value)
    })
    submissionData.append("passportDataPage", passportUrl)

    try {
      if (GOOGLE_APPS_SCRIPT_URL) {
        const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          body: submissionData,
        })
        const result = await res.text()
        if (!res.ok) throw new Error(result || "Submission failed")
      } else {
        console.log("IELTS Form submitted:", Object.fromEntries(submissionData))
        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <NavBar />
        <section className="pt-28 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
              <p className="text-gray-600 mb-2">
                Thank you for your IELTS registration. Your application has been received.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                We will contact you at <strong>{formData.emailAddress}</strong> with further instructions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Applications
                </Link>
                <Link
                  href="/courses/ielts"
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-300 transition-colors"
                >
                  Learn About IELTS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />

      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Applications
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">IELTS Registration Form</h1>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl">
              Please complete this form in BLOCK LETTERS. Name as written in your International Passport Data Page.
              Form must be submitted with a copy of your International Passport Data Page.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} noValidate>
            {submitError && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            )}

            {/* ===== 1. TEST TAKEN ===== */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">1</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Test Taken</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Test Type</label>
                  <div className="space-y-2">
                    {["IELTS Academic", "IELTS General Training"].map(option => (
                      <label key={option} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.testType === option
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="testType"
                          value={option}
                          checked={formData.testType === option}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 accent-red-600"
                        />
                        <span className="text-sm font-medium text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.testType && <p className="text-xs text-red-500 mt-1">{errors.testType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Module</label>
                  <div className="space-y-2">
                    {["IELTS on Paper", "IELTS on Computer"].map(option => (
                      <label key={option} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.module === option
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="module"
                          value={option}
                          checked={formData.module === option}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 accent-red-600"
                        />
                        <span className="text-sm font-medium text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.module && <p className="text-xs text-red-500 mt-1">{errors.module}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Test Date</label>
                  <input
                    type="date"
                    name="preferredTestDate"
                    value={formData.preferredTestDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                      errors.preferredTestDate ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                    }`}
                  />
                  {errors.preferredTestDate && <p className="text-xs text-red-500 mt-1">{errors.preferredTestDate}</p>}
                </div>
              </div>
            </div>

            {/* ===== 2. PERSONAL DETAILS ===== */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">2</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Personal Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <div className="flex flex-wrap gap-3">
                    {["Mr", "Mrs", "Miss", "Other"].map(option => (
                      <label key={option} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                        formData.title === option
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="title"
                          value={option}
                          checked={formData.title === option}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 accent-red-600"
                        />
                        <span className="text-sm font-medium text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="As in passport"
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.firstName ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="As in passport"
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.lastName ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.dateOfBirth ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.dateOfBirth && <p className="text-xs text-red-500 mt-1">{errors.dateOfBirth}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <div className="flex gap-3 h-full items-start pt-1">
                      {["M", "F", "Other"].map(option => (
                        <label key={option} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                          formData.gender === option
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}>
                          <input
                            type="radio"
                            name="gender"
                            value={option}
                            checked={formData.gender === option}
                            onChange={handleChange}
                            className="w-4 h-4 text-red-600 accent-red-600"
                          />
                          <span className="text-sm font-medium text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality</label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.nationality ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.nationality && <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Birth</label>
                    <input
                      type="text"
                      name="countryOfBirth"
                      value={formData.countryOfBirth}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.countryOfBirth ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.countryOfBirth && <p className="text-xs text-red-500 mt-1">{errors.countryOfBirth}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Language</label>
                    <input
                      type="text"
                      name="firstLanguage"
                      value={formData.firstLanguage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition-all text-sm focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+234..."
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.phoneNumber ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5">
                  <p className="text-sm font-semibold text-gray-700 mb-3">ID Details</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">ID Type</label>
                      <input
                        type="text"
                        name="idType"
                        value={formData.idType}
                        disabled
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">ID Number</label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        placeholder="Passport number"
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                          errors.idNumber ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                        }`}
                      />
                      {errors.idNumber && <p className="text-xs text-red-500 mt-1">{errors.idNumber}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Expiry Date</label>
                      <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                          errors.expiryDate ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                        }`}
                      />
                      {errors.expiryDate && <p className="text-xs text-red-500 mt-1">{errors.expiryDate}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                          errors.emailAddress ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                        }`}
                      />
                      {errors.emailAddress && <p className="text-xs text-red-500 mt-1">{errors.emailAddress}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        name="mobileWhatsApp"
                        value={formData.mobileWhatsApp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition-all text-sm focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Passport Data Page <span className="text-gray-400 font-normal">(upload)</span>
                      </label>
                      <PassportUpload
                        fileUrl={passportUrl}
                        onUpload={(url) => setPassportUrl(url)}
                        onRemove={() => setPassportUrl("")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== 3. CONTACT DETAILS ===== */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">3</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Contact Details</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Residential Address</label>
                  <textarea
                    name="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                    rows={2}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm resize-none ${
                      errors.residentialAddress ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                    }`}
                  />
                  {errors.residentialAddress && <p className="text-xs text-red-500 mt-1">{errors.residentialAddress}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City / State / Country</label>
                    <input
                      type="text"
                      name="cityStateCountry"
                      value={formData.cityStateCountry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        errors.cityStateCountry ? "border-red-300 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-red-500"
                      }`}
                    />
                    {errors.cityStateCountry && <p className="text-xs text-red-500 mt-1">{errors.cityStateCountry}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition-all text-sm focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Correspondence Address <span className="text-gray-400 font-normal">(if different)</span></label>
                  <textarea
                    name="correspondenceAddress"
                    value={formData.correspondenceAddress}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition-all text-sm resize-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* ===== 4. ADDITIONAL INFORMATION ===== */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">4</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Additional Information</h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Occupation</label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition-all text-sm focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organisation / School</label>
                    <input
                      type="text"
                      name="organisationSchool"
                      value={formData.organisationSchool}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition-all text-sm focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Education</label>
                  <div className="flex flex-wrap gap-2">
                    {["Secondary", "Diploma", "Bachelor's", "Master's", "PhD", "Other"].map(option => (
                      <label key={option} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                        formData.highestEducation === option
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="highestEducation"
                          value={option}
                          checked={formData.highestEducation === option}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 accent-red-600"
                        />
                        <span className="text-sm font-medium text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.highestEducation && <p className="text-xs text-red-500 mt-1">{errors.highestEducation}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">How did you hear about us?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Website", "Social Media", "Friend/Family", "School/Agent", "Advertisement", "Other"].map(option => (
                      <label key={option} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                        formData.hearAbout === option
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="hearAbout"
                          value={option}
                          checked={formData.hearAbout === option}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 accent-red-600"
                        />
                        <span className="text-sm font-medium text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ===== 5. DECLARATION ===== */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">5</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Declaration</h2>
              </div>

              <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                formData.agreeDeclaration
                  ? "border-red-500 bg-red-50"
                  : errors.agreeDeclaration ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
              }`}>
                <input
                  type="checkbox"
                  name="agreeDeclaration"
                  checked={formData.agreeDeclaration}
                  onChange={handleChange}
                  className="w-5 h-5 text-red-600 accent-red-600 shrink-0 mt-0.5"
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  I declare that the information provided is true and accurate to the best of my knowledge.
                </span>
              </label>
              {errors.agreeDeclaration && <p className="text-xs text-red-500 mt-2">{errors.agreeDeclaration}</p>}

              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Office Use Only:</strong> Registration ID, Date Received, Payment Status, Received By
                </p>
              </div>
            </div>

            {/* ===== SUBMIT ===== */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                By submitting, you confirm that all information provided is accurate.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-red-200"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  <><CheckCircle2 className="w-4 h-4" /> Submit Application</>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IeltsRegistrationForm
