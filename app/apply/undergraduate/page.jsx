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
  BookOpen,
  FileText,
  Check,
  Calendar,
  Globe,
  MapPin,
  School,
  Pen,
  Home,
  Users,
  Upload,
  X
} from 'lucide-react'
import PassportUpload from '../../../components/PassportUpload.jsx'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

const initialFormData = {
  programme: '',
  semester: '',
  fullName: '',
  gender: '',
  dateOfBirth: '',
  stateOfOrigin: '',
  nationality: '',
  religion: '',
  speciallyAbled: 'no',
  abilityDescription: '',
  schools: [
    { name: '', address: '', period: '', class: '' },
    { name: '', address: '', period: '', class: '' },
    { name: '', address: '', period: '', class: '' },
  ],
  results: Array(9).fill({ subject: '', waec: '', neco: '', igcse: '' }),
  fatherName: '', fatherOccupation: '', fatherWorkplace: '', fatherHomeAddress: '',
  fatherCity: '', fatherState: '', fatherOfficeAddress: '', fatherPhone: '', fatherEmail: '',
  motherName: '', motherOccupation: '', motherWorkplace: '', motherHomeAddress: '',
  motherCity: '', motherState: '', motherOfficeAddress: '', motherPhone: '', motherEmail: '',
  guardianName: '', guardianOccupation: '', guardianWorkplace: '', guardianHomeAddress: '',
  guardianCity: '', guardianState: '', guardianOfficeAddress: '', guardianPhone: '', guardianEmail: '',
  personalStatement: '',
  faculty: '',
  courseName: '',
  university1: '', university2: '', university3: '',
  accommodation: '',
  accommodationOther: '',
  hearAbout: '',
  hearAboutOther: '',
}

const sections = [
  { id: "photo", label: "Photo", icon: Upload },
  { id: "programme", label: "Programme", icon: GraduationCap },
  { id: "personal", label: "Personal Details", icon: User },
  { id: "schools", label: "Education", icon: School },
  { id: "family", label: "Family", icon: Users },
  { id: "statement", label: "Statement", icon: Pen },
  { id: "course", label: "Course", icon: BookOpen },
  { id: "accommodation", label: "Accommodation", icon: Home },
]

const programmes = [
  'A-LEVEL',
  'A-LEVEL (EXTENDED) SUMMER INTENSIVE PROGRAMME',
  'INTERNATIONAL MEDICAL FOUNDATION PROGRAMME',
  'INTERNATIONAL UNIVERSITY FOUNDATION PROGRAMME',
  'BSc/BA DIPLOMA',
]

const semesters = [
  'JANUARY/FEBRUARY ENTRY',
  'MAY/JUNE ENTRY',
  'SEPTEMBER/OCTOBER ENTRY',
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
  'Linguistics and Modern Languages',
]

const accommodationOptions = [
  'YOUR RESIDENCE',
  'BRITISH AUC COLLEGE RESIDENCE',
  'SHORTLET APARTMENTS',
  'AIR BNB',
  'HOTEL APARTMENTS',
  'OTHERS',
]

const hearAboutOptions = [
  'Friend', 'School Fair', 'Study Tour',
  'Website', 'Social Media', 'Advert', 'Others',
]

function StepIndicator({ current }) {
  return (
    <div className="flex items-center gap-0 overflow-x-auto pb-1">
      {sections.map((section, i) => {
        const isActive = i <= current
        const isCurrent = i === current
        return (
          <div key={section.id} className="flex items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className={`relative flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold transition-all duration-300 ${
                isActive
                  ? "bg-red-500 text-white shadow-md shadow-red-200"
                  : "bg-gray-100 text-gray-400"
              }`}>
                {isActive && i < current ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  i + 1
                )}
              </div>
              <span className={`text-xs font-medium hidden md:block transition-colors whitespace-nowrap ${
                isActive ? "text-gray-900" : "text-gray-400"
              }`}>
                {section.label}
              </span>
            </div>
            {i < sections.length - 1 && (
              <div className={`w-6 sm:w-10 h-px mx-2 transition-colors duration-300 ${
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
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100/80">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center ring-1 ring-red-100">
            <Icon className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">{title}</h2>
            <p className="text-xs text-gray-400">Step {number} of {sections.length}</p>
          </div>
        </div>
        {children}
      </div>
    </motion.div>
  )
}

function InputField({ label, error, icon: Icon, ...props }) {
  const [focused, setFocused] = useState(false)
  const errorId = props.name ? `${props.name}-error` : undefined

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
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

function SelectField({ label, error, children, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <select
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full px-4 py-3.5 rounded-2xl bg-white outline-none transition-all duration-200 text-sm appearance-none ${
            error
              ? "ring-2 ring-red-400 bg-red-50/50 focus:ring-red-500"
              : "ring-1 ring-gray-200 focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
          }`}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
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

function RadioCard({ name, value, label, checked, onChange }) {
  const id = `${name}-${value.replace(/\s+/g, "-")}`
  return (
    <label
      htmlFor={id}
      className={`relative flex items-center gap-3.5 p-3.5 rounded-2xl cursor-pointer transition-all duration-200 group ${
        checked
          ? "bg-red-50 ring-2 ring-red-500 shadow-sm"
          : "bg-gray-50 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-white"
      }`}
    >
      <input type="radio" name={name} value={value} id={id} checked={checked} onChange={onChange} className="sr-only" />
      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
        checked ? "bg-red-500" : "bg-white ring-2 ring-gray-300"
      }`}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className={`text-sm font-medium transition-colors ${checked ? "text-gray-900" : "text-gray-600"}`}>{label}</span>
    </label>
  )
}

const shakeVariants = {
  shake: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 },
  },
}

const UndergraduateApplicationForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [passportUrl, setPassportUrl] = useState("")
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [shakeKey, setShakeKey] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200
      let active = 0
      sections.forEach((s, i) => {
        const el = document.getElementById(`section-${s.id}`)
        if (el && el.offsetTop <= scrollY) active = i
      })
      setCurrentStep(active)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  const handleSchoolChange = (index, field, value) => {
    setFormData(prev => {
      const schools = [...prev.schools]
      schools[index] = { ...schools[index], [field]: value }
      return { ...prev, schools }
    })
  }

  const handleResultChange = (index, field, value) => {
    setFormData(prev => {
      const results = [...prev.results]
      results[index] = { ...results[index], [field]: value }
      return { ...prev, results }
    })
  }

  const validateForm = () => {
    const e = {}
    if (!passportUrl) e.photo = "Passport photograph is required"
    if (!formData.programme) e.programme = "Select a programme"
    if (!formData.semester) e.semester = "Select a semester"
    if (!formData.fullName) e.fullName = "Full name is required"
    if (!formData.gender) e.gender = "Select gender"
    if (!formData.dateOfBirth) e.dateOfBirth = "Date of birth is required"
    if (!formData.nationality) e.nationality = "Nationality is required"
    if (!formData.fatherName && !formData.motherName && !formData.guardianName) {
      e.parentGuardian = "At least one parent/guardian is required"
    }
    if (!formData.personalStatement || formData.personalStatement.length < 100) {
      e.personalStatement = "Minimum 100 characters"
    }
    if (!formData.faculty) e.faculty = "Select a faculty"
    if (!formData.courseName) e.courseName = "Course name is required"
    setErrors(e)
    if (Object.keys(e).length > 0) setShakeKey(k => k + 1)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError("")

    // Flatten schools and results for the submission
    const payload = {
      formType: "Undergraduate",
      ...formData,
      passportUrl,
      schools: JSON.stringify(formData.schools),
      results: JSON.stringify(formData.results),
    }

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      if (!result.success) throw new Error(result.error || "Submission failed")
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      setSubmitError(err.message || "Something went wrong")
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Application Submitted</h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
                Thank you for your application. Our admissions team will review it and contact you within 5-7 business days.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Applications
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

      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
        <motion.div
          className="h-full bg-red-500"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.round(Object.keys(formData).reduce((c, k) => {
            const v = formData[k]
            return c + (typeof v === "boolean" ? v : (v && String(v).trim() ? 1 : 0))
          }, 0) / Object.keys(initialFormData).length * 100)}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <Link href="/apply" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 mb-6 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Applications
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5 text-red-500" />
              </div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Application</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Undergraduate Application
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Complete the form below to apply for admission to British AUC University Pathway.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100"
          >
            <StepIndicator current={currentStep} />
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="relative pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.form
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

            {/* ===== 1. PHOTO ===== */}
            <div id="section-photo">
              <SectionCard number={1} icon={Upload} title="Passport Photograph">
                <div className="max-w-md">
                  <p className="text-sm text-gray-500 mb-4">Upload a recent passport photograph</p>
                  <PassportUpload
                    fileUrl={passportUrl}
                    onUpload={(url) => setPassportUrl(url)}
                    onRemove={() => setPassportUrl("")}
                  />
                  <AnimatePresence>
                    {errors.photo && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500 mt-2 flex items-center gap-1.5"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.photo}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </SectionCard>
            </div>

            {/* ===== 2. PROGRAMME ===== */}
            <div id="section-programme">
              <SectionCard number={2} icon={GraduationCap} title="Programme Selection">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="Programme"
                    name="programme"
                    value={formData.programme}
                    onChange={handleChange}
                    error={errors.programme}
                  >
                    <option value="">Select Programme</option>
                    {programmes.map(p => <option key={p} value={p}>{p}</option>)}
                  </SelectField>
                  <SelectField
                    label="Semester & Proposed Entry"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    error={errors.semester}
                  >
                    <option value="">Select Semester</option>
                    {semesters.map(s => <option key={s} value={s}>{s}</option>)}
                  </SelectField>
                </div>
              </SectionCard>
            </div>

            {/* ===== 3. PERSONAL DETAILS ===== */}
            <div id="section-personal">
              <SectionCard number={3} icon={User} title="Applicant's Details">
                <div className="space-y-4">
                  <InputField
                    label="Full Name (in CAPITAL LETTERS)"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="ENTER YOUR FULL NAME"
                    error={errors.fullName}
                    icon={User}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} error={errors.gender}>
                      <option value="">Select Gender</option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                      <option value="OTHER">OTHER</option>
                    </SelectField>
                    <InputField label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} error={errors.dateOfBirth} icon={Calendar} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="State of Origin" name="stateOfOrigin" value={formData.stateOfOrigin} onChange={handleChange} icon={MapPin} />
                    <InputField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} error={errors.nationality} icon={Globe} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Religion" name="religion" value={formData.religion} onChange={handleChange} icon={FileText} />
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Specially Abled</label>
                      <div className="flex gap-3">
                        {["no", "yes"].map(opt => (
                          <RadioCard key={opt} name="speciallyAbled" value={opt} label={opt === "no" ? "No" : "Yes"} checked={formData.speciallyAbled === opt} onChange={handleChange} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {formData.speciallyAbled === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Please Describe</label>
                        <textarea
                          name="abilityDescription"
                          value={formData.abilityDescription}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none transition-all text-sm resize-none focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                          placeholder="Describe any special needs"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionCard>
            </div>

            {/* ===== 4. SCHOOLS ===== */}
            <div id="section-schools">
              <SectionCard number={4} icon={School} title="Schools Attended (Last 3 Years)">
                <div className="space-y-6">
                  {formData.schools.map((school, i) => (
                    <div key={i} className={`${i < formData.schools.length - 1 ? "pb-6 border-b border-gray-100" : ""}`}>
                      <p className="text-sm font-semibold text-gray-700 mb-3">School {String.fromCharCode(65 + i)}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="sm:col-span-2">
                          <input
                            value={school.name}
                            onChange={(e) => handleSchoolChange(i, "name", e.target.value)}
                            placeholder="School name"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                          />
                        </div>
                        <input
                          value={school.address}
                          onChange={(e) => handleSchoolChange(i, "address", e.target.value)}
                          placeholder="Address"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                        />
                        <input
                          value={school.period}
                          onChange={(e) => handleSchoolChange(i, "period", e.target.value)}
                          placeholder="Period (e.g., 2020-2023)"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                        />
                        <div className="sm:col-span-2">
                          <input
                            value={school.class}
                            onChange={(e) => handleSchoolChange(i, "class", e.target.value)}
                            placeholder="Class / Grade"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>

            {/* Results */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100/80">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center ring-1 ring-red-100">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Examination Results</h2>
                  <p className="text-xs text-gray-400">If applicable</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-3 text-xs font-semibold text-gray-500 uppercase">#</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500 uppercase">Subject</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500 uppercase">WAEC</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500 uppercase">NECO</th>
                      <th className="text-left py-3 pl-3 text-xs font-semibold text-gray-500 uppercase">IGCSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.results.map((r, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2 pr-3 text-gray-400 text-xs">{i + 1}</td>
                        <td className="py-2 px-3">
                          <input value={r.subject} onChange={(e) => handleResultChange(i, "subject", e.target.value)} placeholder="Subject" className="w-full px-3 py-2 rounded-xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400" />
                        </td>
                        <td className="py-2 px-3">
                          <input value={r.waec} onChange={(e) => handleResultChange(i, "waec", e.target.value)} placeholder="Grade" className="w-full px-3 py-2 rounded-xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400" />
                        </td>
                        <td className="py-2 px-3">
                          <input value={r.neco} onChange={(e) => handleResultChange(i, "neco", e.target.value)} placeholder="Grade" className="w-full px-3 py-2 rounded-xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400" />
                        </td>
                        <td className="py-2 pl-3">
                          <input value={r.igcse} onChange={(e) => handleResultChange(i, "igcse", e.target.value)} placeholder="Grade" className="w-full px-3 py-2 rounded-xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ===== 5. FAMILY ===== */}
            <div id="section-family">
              <SectionCard number={5} icon={Users} title="Parent / Guardian Information">
                <AnimatePresence>
                  {errors.parentGuardian && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mb-4 flex items-center gap-1.5"
                    >
                      <AlertCircle className="w-3 h-3" /> {errors.parentGuardian}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Father */}
                <div className="mb-8">
                  <p className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">A</span>
                    Father&apos;s Information
                  </p>
                  <ParentFields prefix="father" formData={formData} handleChange={handleChange} />
                </div>

                {/* Mother */}
                <div className="mb-8">
                  <p className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">B</span>
                    Mother&apos;s Information
                  </p>
                  <ParentFields prefix="mother" formData={formData} handleChange={handleChange} />
                </div>

                {/* Guardian */}
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">C</span>
                    Guardian Information
                  </p>
                  <p className="text-xs text-gray-400 mb-4">Only fill if a guardian will be responsible for the student</p>
                  <ParentFields prefix="guardian" formData={formData} handleChange={handleChange} />
                </div>
              </SectionCard>
            </div>

            {/* ===== 6. STATEMENT ===== */}
            <div id="section-statement">
              <SectionCard number={6} icon={Pen} title="Personal Statement">
                <p className="text-sm text-gray-500 mb-4">
                  Why would you like this course? What is your future ambition? Include hobbies and other skills/talents.
                </p>
                <textarea
                  name="personalStatement"
                  value={formData.personalStatement}
                  onChange={handleChange}
                  rows={10}
                  placeholder="Write your personal statement here..."
                  className={`w-full px-4 py-3.5 rounded-2xl bg-white outline-none transition-all text-sm resize-none placeholder:text-gray-400 ${
                    errors.personalStatement
                      ? "ring-2 ring-red-400 bg-red-50/50 focus:ring-red-500"
                      : "ring-1 ring-gray-200 focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
                  }`}
                />
                <AnimatePresence>
                  {errors.personalStatement && (
                    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.personalStatement}
                    </motion.p>
                  )}
                </AnimatePresence>
                <p className="text-xs text-gray-400 mt-2">{formData.personalStatement.length} characters (minimum 100)</p>
              </SectionCard>
            </div>

            {/* ===== 7. COURSE ===== */}
            <div id="section-course">
              <SectionCard number={7} icon={BookOpen} title="Faculty & Course Information">
                <div className="space-y-5">
                  <SelectField label="Select Your Faculty" name="faculty" value={formData.faculty} onChange={handleChange} error={errors.faculty}>
                    <option value="">Select Faculty</option>
                    {faculties.map(f => <option key={f} value={f}>{f}</option>)}
                  </SelectField>

                  <InputField label="Enter Course Name" name="courseName" value={formData.courseName} onChange={handleChange} placeholder="E.g., BSc (Hons) Computer Science" error={errors.courseName} />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Proposed Universities (list 3 choices)</label>
                    <div className="space-y-3">
                      <input name="university1" value={formData.university1} onChange={handleChange} placeholder="1. First choice university" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
                      <input name="university2" value={formData.university2} onChange={handleChange} placeholder="2. Second choice university" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
                      <input name="university3" value={formData.university3} onChange={handleChange} placeholder="3. Third choice university" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
                    </div>
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* ===== 8. ACCOMMODATION ===== */}
            <div id="section-accommodation">
              <SectionCard number={8} icon={Home} title="Accommodation Options">
                <div className="space-y-3">
                  {accommodationOptions.map(opt => (
                    <RadioCard key={opt} name="accommodation" value={opt} label={opt} checked={formData.accommodation === opt} onChange={handleChange} />
                  ))}
                  <AnimatePresence>
                    {formData.accommodation === "OTHERS" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <input name="accommodationOther" value={formData.accommodationOther} onChange={handleChange} placeholder="Please specify" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionCard>

              {/* How did you hear */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100/80 mt-6">
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center ring-1 ring-red-100">
                    <Globe className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">How did you hear about us?</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hearAboutOptions.map(opt => (
                    <RadioCard key={opt} name="hearAbout" value={opt} label={opt} checked={formData.hearAbout === opt} onChange={handleChange} />
                  ))}
                </div>
                <AnimatePresence>
                  {formData.hearAbout === "Others" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3"
                    >
                      <input name="hearAboutOther" value={formData.hearAboutOther} onChange={handleChange} placeholder="Please specify" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Submit */}
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

function ParentFields({ prefix, formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="sm:col-span-2">
        <input
          name={`${prefix}Name`}
          value={formData[`${prefix}Name`]}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300"
        />
      </div>
      <input name={`${prefix}Occupation`} value={formData[`${prefix}Occupation`]} onChange={handleChange} placeholder="Occupation" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}Workplace`} value={formData[`${prefix}Workplace`]} onChange={handleChange} placeholder="Place of work" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}HomeAddress`} value={formData[`${prefix}HomeAddress`]} onChange={handleChange} placeholder="Home address" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}City`} value={formData[`${prefix}City`]} onChange={handleChange} placeholder="City / Town" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}State`} value={formData[`${prefix}State`]} onChange={handleChange} placeholder="State" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}OfficeAddress`} value={formData[`${prefix}OfficeAddress`]} onChange={handleChange} placeholder="Office address" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}Phone`} value={formData[`${prefix}Phone`]} onChange={handleChange} placeholder="Telephone" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
      <input name={`${prefix}Email`} value={formData[`${prefix}Email`]} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3.5 rounded-2xl bg-white ring-1 ring-gray-200 outline-none text-sm focus:ring-2 focus:ring-red-400 hover:ring-gray-300" />
    </div>
  )
}

export default UndergraduateApplicationForm
