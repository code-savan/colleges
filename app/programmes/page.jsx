// /* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, BookOpen, Globe, Calendar, CheckCircle2, Clock, Award, Users, Star, School, Target, BookCheck } from 'lucide-react'
import NavBar from '../NavBar'
import Footer from '../Footer'

const programData = [
  {
    id: 'a-level',
    title: "Cambridge A-Level Programme",
    shortTitle: "A-Level",
    icon: GraduationCap,
    level: "Pre-University",
    duration: "2 Years",
    color: "red",
    summary: "The Cambridge A-Level qualification is one of the most respected pathways to university admission. Widely accepted in the UK, Australia, the US, and Canada.",
    highlights: [
      "Globally recognized qualification",
      "Direct university entry pathway",
      "Flexible subject combinations",
      "Develops critical thinking skills"
    ],
    details: {
      "Entry Requirements": "5 credit passes at A grade from WAEC/NECO/GCSE in English and four other relevant subjects",
      "Qualification": "Cambridge AS and A Level",
      "Start Dates": "September and January",
      "Subjects Available": ["Accounting", "Biology", "Business", "Chemistry", "English Language", "Spanish", "Sociology", "History", "Information Technology", "Computer Science", "Mathematics", "Physics", "Economics", "Business Studies"],
      "Career Progression": ["Science", "Mathematics", "Arts & Humanities", "Social Sciences", "Engineering", "Business and Finance"]
    }
  },
  {
    id: 'foundation',
    title: "International Foundation Year",
    shortTitle: "Foundation Year",
    icon: BookOpen,
    level: "Level 3",
    duration: "2 Semesters",
    color: "red",
    summary: "A one-year preparatory programme to help students meet academic and language requirements for university entry. Offers progression to over 60 UK, USA, and Canadian universities.",
    highlights: [
      "Guaranteed university progression",
      "60+ partner universities",
      "Integrated English language support",
      "Multiple pathway options"
    ],
    details: {
      "Duration": "2 Semesters",
      "Qualification": "RQF Level 3",
      "Entry Requirements": "5 credit passes at A grade from WAEC/NECO/GCSE in English and four other relevant subjects",
      "Start Dates": "September and January",
      "Available Pathways": ["Business & Management", "Accounting & Finance", "Law & Legal Studies", "IT/Data Science/Cybersecurity", "Health & Social Care", "Engineering", "Creative Arts & Media"]
    }
  },
  {
    id: 'year-one',
    title: "International Year One",
    shortTitle: "Year One",
    icon: School,
    level: "Level 4",
    duration: "3 Semesters",
    color: "red",
    summary: "A one-year programme equivalent to the first year of a UK university degree. Progress to the second year of a UK degree or International Year Two.",
    highlights: [
      "Equivalent to UK first year",
      "Direct progression to year 2",
      "University-level teaching",
      "Credit transfer opportunities"
    ],
    details: {
      "Duration": "3 Semesters",
      "Qualification": "RQF Level 4",
      "Entry Requirements": "International Foundation Year diploma or A-Level result or equivalent",
      "Start Dates": "September and January",
      "Available Courses": ["Business & Management", "Accounting & Finance", "Law & Legal Studies", "IT/Data Science/Cybersecurity", "Health & Social Care", "Marketing", "International Relations"]
    }
  },
  {
    id: 'year-two',
    title: "International Year Two",
    shortTitle: "Year Two",
    icon: Award,
    level: "Level 5",
    duration: "3 Semesters",
    color: "red",
    summary: "A one-year programme equivalent to the second year of a UK university degree. Progress to the final year of a UK bachelor's degree.",
    highlights: [
      "Equivalent to UK second year",
      "Final year entry pathway",
      "Specialised subject focus",
      "Cost-effective degree option"
    ],
    details: {
      "Duration": "3 Semesters",
      "Qualification": "RQF Level 5",
      "Entry Requirements": "International Year One qualification or equivalent",
      "Start Dates": "September and January",
      "Available Courses": ["Business & Management", "Accounting & Finance", "Law & Legal Studies", "IT/Data Science/Cybersecurity", "Health & Social Care", "Psychology", "Tourism & Hospitality"]
    }
  },
  {
    id: 'ossd',
    title: "Canadian Ontario Secondary School Diploma (OSSD)",
    shortTitle: "OSSD",
    icon: Globe,
    level: "High School",
    duration: "Flexible",
    color: "red",
    summary: "A highly regarded Canadian qualification providing access to top universities in Canada, the UK, US, and Australia.",
    highlights: [
      "Canadian high school diploma",
      "No standardised exit exams",
      "70% coursework based",
      "Global university recognition"
    ],
    details: {
      "Available Courses": ["Health Science", "Engineering", "Business", "Social Sciences", "Creative Arts", "Computer Science", "Environmental Science"],
      "Requirements": "Pass 30 credit courses, complete 40 hours of community involvement, and pass the Ontario Secondary School Literacy Test (OSSLT)",
      "Assessment": "Continuous assessment throughout the programme",
      "University Destinations": "Direct entry to universities in Canada, UK, USA, Australia, and more"
    }
  },
  {
    id: 'test-prep',
    title: "Test Preparation Programmes",
    shortTitle: "Test Prep",
    icon: BookCheck,
    level: "Supplementary",
    duration: "Varies",
    color: "red",
    summary: "Comprehensive preparation for international standardised tests required for university admission.",
    highlights: [
      "Expert test preparation",
      "Practice tests included",
      "Score improvement guarantee",
      "Flexible scheduling"
    ],
    details: {
      "Available Tests": ["SAT", "TOEFL", "IELTS", "PTE Academic"],
      "Format": "Intensive preparation courses with mock exams",
      "Duration": "4-12 weeks depending on programme",
      "Features": "Small class sizes, personalised feedback, test-taking strategies, official practice materials"
    }
  }
]

const Programmes = () => {
  const [activeProgramme, setActiveProgramme] = useState(0)
  const activeData = programData[activeProgramme]

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-50 via-white to-gray-50 pt-28 pb-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fca5a5' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-red-600">Programmes</span>
            </h1>
            <p className="text-[14px] text-gray-600 max-w-3xl mx-auto font-medium">
            Our pathway programme helps you build the skills and knowledge you need to succeed at the university level. With friendly teachers, conducive learning classroom and a focus on your personal growth, we are here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:w-80">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Select a Programme</h3>
                <div className="space-y-2">
                  {programData.map((prog, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setActiveProgramme(idx)}
                      className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                        activeProgramme === idx
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        activeProgramme === idx ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <prog.icon className={`w-5 h-5 ${
                          activeProgramme === idx ? 'text-white' : 'text-red-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{prog.shortTitle}</div>
                        <div className={`text-sm ${
                          activeProgramme === idx ? 'text-red-100' : 'text-gray-500'
                        }`}>
                          {prog.level} • {prog.duration}
                        </div>
                      </div>
                      {activeProgramme === idx && (
                        <div className="w-1 h-8 bg-white rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgramme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Programme Header */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
                <div className="bg-linear-to-r from-red-600 to-red-700 p-8 text-white">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <activeData.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-1">{activeData.title}</h2>
                        <div className="flex items-center gap-4 text-red-100">
                          <span className="flex items-center gap-1 font-medium text-[14px]">
                            <Award className="w-4 h-4" />
                            {activeData.level}
                          </span>
                          <span className="flex items-center gap-1 font-medium text-[14px]">
                            <Clock className="w-4 h-4" />
                            {activeData.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-md font-medium text-gray-700 leading-relaxed">{activeData.summary}</p>
                </div>
              </div>

              {/* Programme Highlights */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {activeData.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-red-50 p-6 rounded-xl border border-red-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-600 mb-3" />
                    <p className="text-gray-800 font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              {/* Programme Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(activeData.details).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-red-600" />
                      {key}
                    </h3>
                    {Array.isArray(value) ? (
                      <div className="flex flex-wrap gap-2">
                        {value.map((item, i) => (
                          <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700">{value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* International University Foundation Programme */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International <span className="text-red-600">University Foundation Programme</span>
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              The International University Foundation Programme is tailored for students aiming to bridge the gap between secondary education and university-level study. It offers specialized pathways in Business, Engineering, IT, Law, and more, preparing students for undergraduate programmes at leading universities.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programme Overview</h3>
              <div className="space-y-3 text-gray-700 text-[14px]">
                <p>
                  This is a one-year preparatory program to help students meet the academic and language requirements for entry into a university degree programme. It focuses on improving English language proficiency, subject-specific knowledge, and study skills.
                </p>
                <p>
                  Upon completion, students typically gain entry into the first year of an undergraduate programme at a university. Our IUFP offers progression to over sixty United Kingdom, United States, and Canadian universities.
                </p>
                <p>
                  The minimum entry qualification for this programme is WAEC/NECO or GCSE qualifications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Degree Pathway</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-white text-gray-700 border-b border-gray-200">
                      <th className="px-4 py-3 font-semibold">Pathway</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {[
                      'Accounting/Banking/Business/Economics/Finance/ Management Pathway',
                      'Computing/Information Systems/Mathematics Pathway',
                      'Engineering Pathway',
                      'Law/Business & Criminology Pathway',
                      'Social Sciences Pathway',
                      'Media & Cultural Studies Pathway',
                      'Medical Sciences Pathway',
                      'Life Science/Pharmacy/Nursing Pathway',
                      'Linguistic & Modern Language Pathway'
                    ].map((p) => (
                      <tr key={p}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5" />
                          {p}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progression Universities */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">University Options on Completion of the IUFP</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">University</th>
                      <th className="px-4 py-3 font-semibold">University</th>
                      <th className="px-4 py-3 font-semibold">University</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(() => {
                      const list = ['Ashton University','Anglia Ruskin University','Keele University','Middlesex University','University Of Greenwich','Nottingham Trent University','University Of Hertfordshire','University Of Kent','University of Exeter (BSc Sociology)','University of Chester','University of Portsmouth','University of Bradford','St. Mary University London','University of Hertfordshire (Cairo)','Middlesex University (Dubai)','Middlesex University (Vacoas)']
                      const rows = Array.from({ length: Math.ceil(list.length / 3) }, (_, i) => list.slice(i * 3, i * 3 + 3))
                      return rows.map((row, idx) => (
                        <tr key={idx}>
                          {row.map((u, j) => (
                            <td key={j} className="px-4 py-3 text-gray-800">
                              {u ? <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{u}</div> : null}
                            </td>
                          ))}
                          {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, k) => (
                            <td key={`empty-${k}`} className="px-4 py-3" />
                          ))}
                        </tr>
                      ))
                    })()}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">University Options Via the International Year One Route</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">University</th>
                      <th className="px-4 py-3 font-semibold">University</th>
                      <th className="px-4 py-3 font-semibold">University</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(() => {
                      const list = ['Bournemouth University','City University of London','Cranfield University','Queen Mary University','University of Birmingham','University of Brighton','University of Bristol','University of Essex','University of Glasgow','University of Nottingham','Teesside University','Cardiff University','University of Westminster','University of York','The Law University','University of England','The Engineering Design Institute','Bangor University','Coventry University','Royal Holloway University (London)','University of Bedfordshire','Aberystwyth University','University of Hull','University of Sussex','Newcastle University','Hult International Business School','Liverpool Hope University','Liverpool John Moores University','London Metropolitan University','Regent University (London)','University of Strathclyde (Glasgow)','University of Surrey','University of Winchester','UWE Bristol','Drew University','London South Bank University']
                      const rows = Array.from({ length: Math.ceil(list.length / 3) }, (_, i) => list.slice(i * 3, i * 3 + 3))
                      return rows.map((row, idx) => (
                        <tr key={idx}>
                          {row.map((u, j) => (
                            <td key={j} className="px-4 py-3 text-gray-800">
                              {u ? <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{u}</div> : null}
                            </td>
                          ))}
                          {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, k) => (
                            <td key={`empty2-${k}`} className="px-4 py-3" />
                          ))}
                        </tr>
                      ))
                    })()}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Degree Progression Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Degree Progression Option</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Business & Related */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Accounting, banking, Business, economics, Finance + Management</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'BSc (Hons) Accounting','BSc (Hons) Accounting and Finance','BSc (Hons) Accounting and Business','BSc (Hons) Banking','BSc (Hons) Finance','BA (Hons) Business Administration','BSc (Hons) Business Management','BSc (Hons) Business Studies','BSc (Hons) Economics','BA (Hons) International Business','BA (Hons) Marketing','BSc (Hons) Marketing and Brand Management','BA (Hons) Advertisement','BA (Hons) Public Relations','BA (Hons) Advertisement, Public Relations and Media','BSc (Hons) Management','BSc (Hons) Hospitality Management','BSc (Hons) Events Management','BA (Hons) Human Resource Management','BSc (Hons) Construction Management','BSc (Hons) Tourism Management'
                    ].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Computing & Math */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Computing, Information System and Mathematics Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'BSc (Hons) Animation','BSc (Hons) Computing','BSc (Hons) Computer Science','BSc (Hons) Business Information System','BSc (Hons) Information Systems and Management','BSc (Hons) Information Technology','BSc (Hons) Internet Applications Development','BSc (Hons) Mathematics','BSc (Hons) Multimedia Computing','BSc (Hons) Web Systems Development'
                    ].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Engineering */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Engineering Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'BEng (Hons) Aerospace Engineering and Pilot Studies','BEng (Hons) Biomedical Engineering','BEng (Hons) Civil Engineering','BEng (Hons) Chemical Engineering','BEng (Hons) Computer Engineering','BEng (Hons) Electrical Engineering','BEng (Hons) Electrical and Electronic Engineering','BEng (Hons) Mechanical Engineering','BEng (Hons) Mechatronics and Robotics','BEng (Hons) Software Engineering'
                    ].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Law & Criminology */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Law, Business and Criminology</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {['LLB (Hons)','BA (Hons) Law','BA (Hons) Criminology','BA (Hons) Criminology with Psychology','BA (Hons) Law and Business'].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Social Sciences */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Social Sciences Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'BA (Hons) History','BSc (Hons) Sociology','BSc (Hons) Politics','BA (Hons) Sociology and Politics','BA (Hons) Psychology','BSc (Hons) International Relations','BSc (Hons) International Development','BSc (Hons) Environmental Science'
                    ].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Media & Cultural Studies */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Media and Cultural Studies Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {['BA (Hons) Media and Cultural Studies','BA (Hons) Communication and Media Studies','BA (Hons) Journalism and Communications'].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Medical Sciences */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Medical Sciences Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'MBBS Medicine','BSc (Hons) Medical Sciences','BSc (Hons) Biomedical Sciences','BSc (Hons) Biological Sciences','BSc (Hons) Biochemistry','BSc (Hons) Physics','BSc (Hons) Psychological Scienes'
                    ].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Life Sciences, Pharmacy & Nursing */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Life Sciences, Pharmacy and Nursing Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'BSc (Hons) Life Sciences','BSc (Hons) Dentistry','BSc (Hons) Pharmacy','BSc (Hons) Physiotherapy','BSc (Hons) Public Health','BSc (Hons) Nursing','BSc (Hons) Nutrition','BSc (Hons) Exercise and Sports Science'
                    ].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Linguistics & Modern Languages */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Linguistics and Modern Languages Pathway</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Degree Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {['BA (Hons) Modern Languages'].map((c) => (
                      <tr key={c}>
                        <td className="px-4 py-3 text-gray-800 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Level Programme */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">A Level Programme</h3>
            <p className="text-[15px] text-gray-700">
              The A-Level qualification is one of the most respected pathways to university admission. It is widely accepted in the leading universities in the United Kingdom, the United States, Canada, and Australia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="space-y-3 text-[14px] text-gray-700">
                <p>
                  The A-level programme is a two-year programme. The first year is called AS Level (Advanced Subsidiary) and student is expected to choose a minimum of four (4) courses, and the second year, which is A2 Level, students narrow to only three (3) courses.
                </p>
                <p>
                  During the programme, students study the basic concepts of their chosen subjects, often as a standalone qualification or as the foundation for the A-Level.
                </p>
                <p>
                  A2 Level, which is the second year, students delve deeper into the subjects, building on the knowledge from AS level and covering more advanced topics.
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">In this programme, you will</h4>
                  <ul className="space-y-2">
                    {[
                      'Study four AS Level subjects in year one',
                      'Study Three A2 Level subjects in year two',
                      'Take an A-Level examination at the end of year two'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-800"><CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">A-Level Subjects</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px] bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">Subject</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'Accounting','Biology','Business Studies','Chemistry','Commerce','Economics','English Literature','Geography','Government','History','ICT','Mathematics','Physics'
                    ].map((s) => (
                      <tr key={s}>
                        <td className="px-4 py-3 text-gray-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-600" />{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELT Preparation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure English Language Test (SELT) Preparation</h3>
            <p className="text-[14px] text-gray-700 mb-3">
              At British AUC University Pathway, we also offer specialized preparation for the Secure English Language Test (SELT), which includes Pearson Test of English (PTE), LanguageCert, IELTS, and TOEFL, among others. SELT is a vital requirement for university admission and visa applications. Our comprehensive SELT preparation course focuses on developing key language skills, including reading, writing, listening, and speaking, ensuring students achieve the required proficiency level.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">Admission Procedure</h3>
            <p className="text-[14px] text-gray-700 mb-6 text-center">
              There are two stages students must pass to be admitted into the British AUC University Pathway programme. At stage I, applicants are required to take the college’s entrance test. A successful completion of this stage takes the student to the next stage, which comprises an interview with the student. These processes help the faculty understand the student’s academic strengths and weaknesses so as to ascertain the student’s academic needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Stage I: Written Examination</h4>
                <p className="text-[14px] text-gray-700 mb-2">The Entrance Examination is computer-based and comprises three papers: Use of English Language and any other THREE subjects in which the candidate has high competencies.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Stage II: Interview</h4>
                <p className="text-[14px] text-gray-700 mb-3">Candidates will undergo an interview after the successful completion of the entrance examination. They are required to provide the following documents:</p>
                <ul className="space-y-2 text-[14px] text-gray-800">
                  {[
                    'Original Credentials/Transcripts.',
                    'Birth Certificate.',
                    'Reference Letter from their last school.',
                    'Medical Reports/Certificates.',
                    'Data Page of International Passport.'
                  ].map((d) => (
                    <li key={d} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{d}</li>
                  ))}
                </ul>
                <p className="text-[13px] text-gray-600 mt-3">Candidates taking Mathematics, Physics, and Chemistry are advised to come with a scientific calculator and a pen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 overflow-hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tuition Fee Per Year</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-[14px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-700">
                    <th className="px-4 py-3 font-semibold">S/N</th>
                    <th className="px-4 py-3 font-semibold">Programme</th>
                    <th className="px-4 py-3 font-semibold">Price</th>
                    <th className="px-4 py-3 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { n: '1', prog: 'A - Level', price: '₦6,729,000', duration: 'One Year' },
                    { n: '2', prog: 'International Foundation Year', price: '₦6,729,000', duration: 'One Year' },
                    { n: '3', prog: 'Ontario Secondary School Diploma', price: '₦6,729,000', duration: 'One Year' }
                  ].map((row) => (
                    <tr key={row.n}>
                      <td className="px-4 py-3 text-gray-800">{row.n}</td>
                      <td className="px-4 py-3 text-gray-900 font-medium">{row.prog}</td>
                      <td className="px-4 py-3 text-gray-800">{row.price}</td>
                      <td className="px-4 py-3 text-gray-800">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Fees include</h4>
                <ul className="space-y-2 text-[14px] text-gray-800">
                  {[
                    'Tuition fees','Application fees','Enrollment fees','Exam fees','Study materials','College T-shirt','University Application Support'
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Fees DO NOT include</h4>
                <ul className="space-y-2 text-[14px] text-gray-800">
                  {['Accommodation','Medical Fees','Laboratory'].map((f) => (
                    <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Accommodation</h3>
            <p className="text-[15px] text-gray-700">
              We know that where you live plays a big role in how well you learn and thrive. While we do not offer on-campus dormitories, we have partnered with trusted hospitality providers to ensure our A-Level students have access to safe, comfortable, and well-managed apartments.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="space-y-3 text-[14px] text-gray-700">
              <p>
                Our goal is to ensure every student enjoys a safe and supportive environment that allows them to focus on their studies and personal growth.
              </p>
              <p>Our recommended accommodation options are carefully chosen to provide:</p>
              <ul className="space-y-2 text-gray-800">
                {[
                  'Security & Peace of Mind – located in secure neighborhoods with reliable facilities.',
                  'Comfort & Convenience – fully furnished apartments designed to make you feel at home from day one.',
                  'Easy Access – just a short distance from campus, shopping areas, and essential services.',
                  'Choice & Flexibility – from shared apartments for a lively student community experience to private units for those who prefer more independence.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Category</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700">
                      <th className="px-4 py-3 font-semibold">S/N</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Price</th>
                      <th className="px-4 py-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { n: '1', type: 'Shortlet Apartment', price: '₦700,000', duration: 'Weekly' },
                      { n: '2', type: 'Air BnB', price: '₦315,000', duration: 'Weekly' },
                      { n: '3', type: 'Shared Hostels', price: '₦105,000', duration: 'Weekly' },
                      { n: '4', type: 'Hotel Apartment', price: '₦315,000', duration: 'Weekly' }
                    ].map((row) => (
                      <tr key={row.n}>
                        <td className="px-4 py-3 text-gray-800">{row.n}</td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.type}</td>
                        <td className="px-4 py-3 text-gray-800">{row.price}</td>
                        <td className="px-4 py-3 text-gray-800">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[14px] text-gray-700 mt-4">For personalized assistance with accommodation, please reach out to our Admissions Office – we’ll be happy to guide you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Take the first step towards your dream university today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/colleges/apply"
                className="bg-red-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors inline-flex items-center gap-2"
              >
                Apply Now
                <CheckCircle2 className="w-5 h-5" />
              </a>
              <a
                href="/colleges/admissions"
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                View Admission Requirements
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Programmes
