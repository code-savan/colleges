/* eslint-disable @typescript-eslint/no-unused-vars */
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
      <section className="relative bg-gradient-to-br from-red-50 via-white to-gray-50 pt-28 pb-8 overflow-hidden">
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
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
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
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
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
