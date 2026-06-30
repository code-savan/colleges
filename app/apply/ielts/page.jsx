"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  GraduationCap,
  User,
  Mail,
  BookOpen,
  FileCheck,
  Globe,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  School,
  Languages,
  FileText,
  Check,
  Monitor,
  ChevronRight
} from 'lucide-react'
import PassportUpload from '../../../components/PassportUpload.jsx'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

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

const sections = [
  { id: "test", label: "Test Details", icon: GraduationCap },
  { id: "personal", label: "Personal Details", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "additional", label: "Additional Info", icon: BookOpen },
  { id: "declaration", label: "Declaration", icon: FileCheck },
]

function StepIndicator({ current }) {
  return (
    <div className="flex items-center gap-0">
      {sections.map((section, i) => {
        const isActive = i <= current
        const isCurrent = i === current
        return (
          <div key={section.id} className="flex items-center flex-1">
            <div className="flex items-center gap-3">
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-red-500 text-white shadow-md shadow-red-200"
                  : "bg-gray-100 text-gray-400"
              }`}>
                {isActive && i < current ? (
                  <Check className="w-4 h-4" />
                ) : (
                  i + 1
                )}
                {isCurrent && (
                  <span className="absolute -inset-1 rounded-full bg-red-100 animate-pulse -z-10" />
                )}
              </div>
              <span className={`text-sm font-medium hidden sm:block transition-colors ${
                isActive ? "text-gray-900" : "text-gray-400"
              }`}>
                {section.label}
              </span>
            </div>
            {i < sections.length - 1 && (
              <div className={`flex-1 h-px mx-4 transition-colors duration-300 ${
                i < current ? "bg-red-500" : "bg-gray-200"
              }`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function SectionCard({ number, icon: Icon, title, children, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100/80">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center ring-1 ring-red-100">
            <Icon className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h2>
            <p className="text-sm text-gray-400">Step {number} of {sections.length}</p>
          </div>
        </div>
        {children}
      </div>
    </motion.div>
  )
}

function RadioCard({ name, value, label, checked, onChange, icon: Icon }) {
  const id = `${name}-${value.replace(/\s+/g, "-")}`
  return (
    <label
      htmlFor={id}
      className={`relative flex items-center gap-3.5 p-4 rounded-2xl cursor-pointer transition-all duration-200 group ${
        checked
          ? "bg-red-50 ring-2 ring-red-500 shadow-sm"
          : "bg-gray-50 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-white"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
        checked ? "bg-red-500" : "bg-white ring-2 ring-gray-300"
      }`}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      {Icon && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
          checked ? "bg-white text-red-500" : "bg-white text-gray-400 ring-1 ring-gray-200"
        }`}>
          <Icon className="w-4.5 h-4.5" />
        </div>
      )}
      <span className={`text-sm font-medium transition-colors ${
        checked ? "text-gray-900" : "text-gray-600"
      }`}>
        {label}
      </span>
    </label>
  )
}

function InputField({ label, error, icon: Icon, ...props }) {
  const [focused, setFocused] = useState(false)
  const errorId = props.name ? `${props.name}-error` : undefined

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
            focused ? "text-red-500" : error ? "text-red-400" : "text-gray-400"
          }`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`w-full px-4 py-3.5 rounded-2xl bg-white outline-none transition-all duration-200 text-sm placeholder:text-gray-400 ${
            Icon ? "pl-11" : ""
          } ${
            error
              ? "ring-2 ring-red-400 bg-red-50/50 focus:ring-red-500"
              : "ring-1 ring-gray-200 focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
          }`}
          {...props}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            id={errorId}
            role="alert"
            className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5"
          >
            <AlertCircle className="w-3 h-3 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function RadioGroup({ label, name, options, value, onChange, error, columns }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">{label}</label>
      <div className={`grid ${columns || "grid-cols-1 sm:grid-cols-2"} gap-3`}>
        {options.map(opt => (
          <RadioCard
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            icon={opt.icon}
            checked={value === opt.value}
            onChange={onChange}
          />
        ))}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5"
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const shakeVariants = {
  shake: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 }
  }
}

const IeltsRegistrationForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [passportUrl, setPassportUrl] = useState("")
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [shakeKey, setShakeKey] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const formRef = useRef(null)
  const sectionRefs = useRef({})

  const filledCount = sections.reduce((count, section) => {
    const fields = {
      test: ["testType", "module", "preferredTestDate"],
      personal: ["title", "firstName", "lastName", "dateOfBirth", "gender", "nationality", "countryOfBirth", "firstLanguage", "phoneNumber", "idNumber", "expiryDate", "emailAddress"],
      contact: ["residentialAddress", "cityStateCountry", "postalCode"],
      additional: ["highestEducation"],
      declaration: ["agreeDeclaration"],
    }
    return count + (fields[section.id] || []).filter(f => {
      const v = formData[f]
      return typeof v === "boolean" ? v : v && v.trim() !== ""
    }).length
  }, 0)
  const totalRequired = sections.reduce((c, s) => {
    const fields = {
      test: ["testType", "module", "preferredTestDate"],
      personal: ["title", "firstName", "lastName", "dateOfBirth", "gender", "nationality", "countryOfBirth", "firstLanguage", "phoneNumber", "idNumber", "expiryDate", "emailAddress"],
      contact: ["residentialAddress", "cityStateCountry", "postalCode"],
      additional: ["highestEducation"],
      declaration: ["agreeDeclaration"],
    }
    return c + (fields[s.id] || []).length
  }, 0)
  const completionPct = Math.round((filledCount / totalRequired) * 100)

  // Track scroll position to update step indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200
      let activeSection = 0
      sections.forEach((section, i) => {
        const el = document.getElementById(`section-${section.id}`)
        if (el && el.offsetTop <= scrollY) {
          activeSection = i
        }
      })
      setCurrentStep(activeSection)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
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
    else if (!formData.emailAddress.includes("@")) newErrors.emailAddress = "Valid email is required"
    if (!formData.residentialAddress) newErrors.residentialAddress = "Address is required"
    if (!formData.cityStateCountry) newErrors.cityStateCountry = "City/State/Country is required"
    if (!formData.highestEducation) newErrors.highestEducation = "Select your highest education"
    if (!formData.agreeDeclaration) newErrors.agreeDeclaration = "You must agree to the declaration"

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      setShakeKey(k => k + 1)
    }

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError("")

    const payload = {
      formType: "IELTS",
      ...formData,
      passportDataPage: passportUrl,
    }

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (!result.success) {
        throw new Error(result.error || "Submission failed")
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
      <div className="min-h-screen w-full bg-[#fafbfc]">
        <NavBar />
        <section className="pt-28 pb-20">
          <div className="max-w-lg mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-10 sm:p-14 text-center shadow-sm border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-7 shadow-lg shadow-emerald-100"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                Application Submitted
              </h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
                Thank you for your IELTS registration. We&apos;ll contact you at <strong className="text-gray-700">{formData.emailAddress}</strong> with next steps.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Applications
                </Link>
                <Link
                  href="/courses/ielts"
                  className="inline-flex items-center gap-2 bg-white ring-1 ring-gray-200 text-gray-700 px-6 py-3.5 rounded-2xl font-semibold text-sm hover:ring-gray-300 transition-all"
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
    <div className="min-h-screen w-full bg-[#fafbfc]">
      <NavBar />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
        <motion.div
          className="h-full bg-red-500"
          initial={{ width: "0%" }}
          animate={{ width: `${completionPct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Applications
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
                <FileText className="w-4.5 h-4.5 text-red-500" />
              </div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Registration</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              IELTS Registration
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Complete the form below in BLOCK LETTERS. Name must match your International Passport Data Page.
              All fields marked are required.
            </p>
          </motion.div>

          {/* Step indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100"
          >
            <StepIndicator current={currentStep} />
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="relative pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            animate={shakeKey ? "shake" : undefined}
            variants={shakeVariants}
            key={shakeKey}
            className="space-y-6"
          >
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-red-50 rounded-2xl p-4 ring-1 ring-red-200"
              >
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">Submission Error</p>
                  <p className="text-sm text-red-600 mt-0.5">{submitError}</p>
                </div>
              </motion.div>
            )}

            {/* ===== 1. TEST TAKEN ===== */}
            <div id="section-test">
              <SectionCard number={1} icon={GraduationCap} title="Test Details">
                <div className="space-y-6">
                  <RadioGroup
                    label="Test Type"
                    name="testType"
                    value={formData.testType}
                    onChange={handleChange}
                    error={errors.testType}
                    options={[
                      { value: "IELTS Academic", label: "IELTS Academic", icon: GraduationCap },
                      { value: "IELTS General Training", label: "IELTS General Training", icon: Globe },
                    ]}
                  />

                  <RadioGroup
                    label="Module"
                    name="module"
                    value={formData.module}
                    onChange={handleChange}
                    error={errors.module}
                    options={[
                      { value: "IELTS on Paper", label: "IELTS on Paper", icon: FileText },
                      { value: "IELTS on Computer", label: "IELTS on Computer", icon: Monitor },
                    ]}
                  />

                  <div className="max-w-sm">
                    <InputField
                      label="Preferred Test Date"
                      name="preferredTestDate"
                      type="date"
                      value={formData.preferredTestDate}
                      onChange={handleChange}
                      error={errors.preferredTestDate}
                      icon={Calendar}
                    />
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* ===== 2. PERSONAL DETAILS ===== */}
            <div id="section-personal">
              <SectionCard number={2} icon={User} title="Personal Details">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Title</label>
                    <div className="flex flex-wrap gap-3">
                      {["Mr", "Mrs", "Miss", "Other"].map(option => (
                        <RadioCard
                          key={option}
                          name="title"
                          value={option}
                          label={option}
                          checked={formData.title === option}
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="First Name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="As in passport"
                      error={errors.firstName}
                      icon={User}
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="As in passport"
                      error={errors.lastName}
                      icon={User}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Date of Birth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      error={errors.dateOfBirth}
                      icon={Calendar}
                    />
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                      <div className="flex gap-3 h-full items-start pt-0.5">
                        {["M", "F", "Other"].map(option => (
                          <RadioCard
                            key={option}
                            name="gender"
                            value={option}
                            label={option}
                            checked={formData.gender === option}
                            onChange={handleChange}
                          />
                        ))}
                      </div>
                      <AnimatePresence>
                        {errors.gender && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.gender}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Nationality"
                      name="nationality"
                      type="text"
                      value={formData.nationality}
                      onChange={handleChange}
                      error={errors.nationality}
                      icon={Globe}
                    />
                    <InputField
                      label="Country of Birth"
                      name="countryOfBirth"
                      type="text"
                      value={formData.countryOfBirth}
                      onChange={handleChange}
                      error={errors.countryOfBirth}
                      icon={Globe}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="First Language"
                      name="firstLanguage"
                      type="text"
                      value={formData.firstLanguage}
                      onChange={handleChange}
                      icon={Languages}
                    />
                    <InputField
                      label="Phone Number"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+234..."
                      error={errors.phoneNumber}
                      icon={Phone}
                    />
                  </div>

                  {/* ID Details */}
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <FileText className="w-4 h-4 text-red-500" />
                      ID Details
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1.5">ID Type</label>
                        <div className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 text-sm text-gray-500 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          International Passport
                        </div>
                      </div>
                      <InputField
                        label="ID Number"
                        name="idNumber"
                        type="text"
                        value={formData.idNumber}
                        onChange={handleChange}
                        placeholder="Passport number"
                        error={errors.idNumber}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField
                        label="Expiry Date"
                        name="expiryDate"
                        type="date"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        error={errors.expiryDate}
                        icon={Calendar}
                      />
                      <InputField
                        label="Email Address"
                        name="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        error={errors.emailAddress}
                        icon={Mail}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField
                        label="Mobile / WhatsApp"
                        name="mobileWhatsApp"
                        type="tel"
                        value={formData.mobileWhatsApp}
                        onChange={handleChange}
                        icon={Phone}
                      />
                      <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1.5">
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
              </SectionCard>
            </div>

            {/* ===== 3. CONTACT DETAILS ===== */}
            <div id="section-contact">
              <SectionCard number={3} icon={Mail} title="Contact Details">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Residential Address</label>
                    <textarea
                      name="residentialAddress"
                      value={formData.residentialAddress}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white outline-none transition-all duration-200 text-sm resize-none placeholder:text-gray-400 ${
                        errors.residentialAddress
                          ? "ring-2 ring-red-400 bg-red-50/50 focus:ring-red-500"
                          : "ring-1 ring-gray-200 focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.residentialAddress && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.residentialAddress}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="City / State / Country"
                      name="cityStateCountry"
                      type="text"
                      value={formData.cityStateCountry}
                      onChange={handleChange}
                      error={errors.cityStateCountry}
                      icon={MapPin}
                    />
                    <InputField
                      label="Postal Code"
                      name="postalCode"
                      type="text"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Correspondence Address <span className="text-gray-400 font-normal">(if different)</span>
                    </label>
                    <textarea
                      name="correspondenceAddress"
                      value={formData.correspondenceAddress}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none transition-all duration-200 text-sm resize-none placeholder:text-gray-400 focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                    />
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* ===== 4. ADDITIONAL INFORMATION ===== */}
            <div id="section-additional">
              <SectionCard number={4} icon={BookOpen} title="Additional Information">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Occupation"
                      name="occupation"
                      type="text"
                      value={formData.occupation}
                      onChange={handleChange}
                      icon={Briefcase}
                    />
                    <InputField
                      label="Organisation / School"
                      name="organisationSchool"
                      type="text"
                      value={formData.organisationSchool}
                      onChange={handleChange}
                      icon={School}
                    />
                  </div>

                  <RadioGroup
                    label="Highest Education"
                    name="highestEducation"
                    value={formData.highestEducation}
                    onChange={handleChange}
                    error={errors.highestEducation}
                    columns="grid-cols-2 sm:grid-cols-3"
                    options={[
                      { value: "Secondary", label: "Secondary" },
                      { value: "Diploma", label: "Diploma" },
                      { value: "Bachelor's", label: "Bachelor's" },
                      { value: "Master's", label: "Master's" },
                      { value: "PhD", label: "PhD" },
                      { value: "Other", label: "Other" },
                    ]}
                  />

                  <RadioGroup
                    label="How did you hear about us?"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    columns="grid-cols-2 sm:grid-cols-3"
                    options={[
                      { value: "Website", label: "Website" },
                      { value: "Social Media", label: "Social Media" },
                      { value: "Friend/Family", label: "Friend/Family" },
                      { value: "School/Agent", label: "School/Agent" },
                      { value: "Advertisement", label: "Advertisement" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                </div>
              </SectionCard>
            </div>

            {/* ===== 5. DECLARATION ===== */}
            <div id="section-declaration">
              <SectionCard number={5} icon={FileCheck} title="Declaration" isLast>
                <div className="space-y-6">
                  <label className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-200 ${
                    formData.agreeDeclaration
                      ? "bg-red-50 ring-2 ring-red-500 shadow-sm"
                      : errors.agreeDeclaration
                        ? "bg-red-50/50 ring-2 ring-red-400"
                        : "bg-gray-50 ring-1 ring-gray-200 hover:ring-gray-300"
                  }`}>
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                      formData.agreeDeclaration
                        ? "bg-red-500 shadow-sm shadow-red-200"
                        : "bg-white ring-2 ring-gray-300"
                    }`}>
                      {formData.agreeDeclaration && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      name="agreeDeclaration"
                      checked={formData.agreeDeclaration}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900">Declaration</span>
                      <p className="text-sm text-gray-500 mt-0.5">
                        I declare that the information provided is true and accurate to the best of my knowledge.
                      </p>
                    </div>
                  </label>
                  <AnimatePresence>
                    {errors.agreeDeclaration && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {errors.agreeDeclaration}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Office Use Only</p>
                    <p className="text-xs text-gray-400">Registration ID · Date Received · Payment Status · Received By</p>
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* ===== SUBMIT ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Ready to submit?</p>
                    <p className="text-sm text-gray-500">Please review your information before submitting</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:shadow-none disabled:transform-none active:translate-y-0 shrink-0"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                  ) : (
                    <><CheckCircle2 className="w-4 h-4" /> Submit Application</>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IeltsRegistrationForm
