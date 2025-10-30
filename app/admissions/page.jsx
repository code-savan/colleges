/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, GraduationCap, Users, Globe, Award, BookOpen, FileText, Calendar, Info, Calculator, ClipboardList, Star, School } from 'lucide-react'
import NavBar from '../NavBar'
import Footer from '../Footer'

const whyChooseFeatures = [
    {
      title: "Tailored Learning Experience",
      description: "Our courses are designed to meet the specific needs of students transitioning to university. We focus on academic excellence while developing key skills in critical thinking, research, and communication.",
      icon: BookOpen
    },
    {
      title: "Guaranteed University Progression",
      description: "Successful completion of the pathway guarantees progression to partner universities, including some of the prestigious institutions worldwide.",
      icon: GraduationCap
    },
    {
      title: "Expert Faculty and Personalized Support",
      description: "Our team of highly qualified educators and academic advisors provides personalized support throughout your journey ensuring you are well-prepared for university life.",
      icon: Users
    },
    {
      title: "English Language Support",
      description: "We offer specialized English language programmes to help students meet university language proficiency standards.",
      icon: Globe
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Study in a modern, well equipped environment that supports both academic and extracurricular activities.",
      icon: School
    }
  ]

const requiredDocs = [
  { icon: FileText, doc: "Original Credentials/Transcripts" },
  { icon: FileText, doc: "Birth Certificate" },
  { icon: FileText, doc: "Reference Letter from last school" },
  { icon: FileText, doc: "Medical Reports/Certificates" },
  { icon: FileText, doc: "Data Page of International Passport" }
]

const subjects = [
  "Accounts", "Biology", "Business Studies", "Chemistry", "Commerce", "Economics",
  "English Literature", "Geography", "Government", "History", "ICT", "Mathematics", "Physics"
]

const admissionSteps = [
  {
    step: "1",
    title: "Application",
    description: "Submit your application online with required documents",
    icon: ClipboardList
  },
  {
    step: "2",
    title: "Written Exam",
    description: "Take the entrance examination in English and three chosen subjects",
    icon: BookOpen
  },
  {
    step: "3",
    title: "Interview",
    description: "Attend an online/on-site interview with our admission team",
    icon: Users
  },
  {
    step: "4",
    title: "Enrollment",
    description: "Complete enrollment and begin your journey",
    icon: Award
  }
]

const Admissions = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-gray-50 pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fca5a5' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Admissions <span className="text-red-600">Guidelines</span>
            </h1>
            <p className="text-md text-gray-600 leading-relaxed font-medium">
            Our programme is designed to prepare students for academic success at leading universities in the UK, the US, Canada and across the globe. We offer an internationally recognized curriculum that equips students with the skills, knowledge and confidence to excel in higher education and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission <span className="text-red-600">Process</span>
            </h2>
            <p className="text-md text-gray-600 font-medium">Simple steps to join British AUC University Pathway</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {admissionSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full relative mb-4 z-10">
                    <span className="text-3xl font-bold text-red-600">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-[14px] font-medium md:w-[80%] mx-auto">{item.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-red-200 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">British AUC University Pathway?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support and world-class education to ensure your success
            </p>
          </motion.div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div> */}
           <div className=" md:flex md:flex-wrap gap-8 justify-center">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-red-300/5 hover:bg-red/10 backdrop-blur-sm border border-red-600/5 rounded-2xl p-6 transition-all duration-300 cursor-pointer" style={{ width: "calc(33.3333% - 30px)" }}
              >
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl transform -rotate-6 group-hover:rotate-3 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-700 mb-4 text-[14px]">{feature.description}</p>
                {feature.stats && (
                  <div className="text-2xl font-bold text-red-400">{feature.stats}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Admissions <span className="text-red-600">Assessment</span>
            </h2>

            {/* Stage I */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Stage I: Written Examination</h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 mb-6">
                  Candidates are required to take the British AUC University Pathway entrance examination. <br /> Successful Candidates in Stage I will proceed to Stage II. The exam is computer-based and comprises Use of English Language and any other THREE subjects in which the candidate has high competencies.
                </p>

                <h4 className="font-semibold text-gray-900 mb-4">Available Subjects:</h4>
                <div className="flex flex-wrap gap-3">
                  {subjects.map((subj, idx) => (
                    <span key={idx} className="bg-white border border-red-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-50 transition-colors">
                      {subj}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-2 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Candidates taking Mathematics, Physics, and Chemistry are advised to come with a scientific calculator and a pen.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage II */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Stage II: Interview</h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 mb-6">
                  Candidates will undergo an online/on-site oral interview after the successful completion of the entrance examination.
                </p>

                <h4 className="font-semibold text-gray-900 mb-4">Required Documents:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {requiredDocs.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-gray-700">{item.doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* <Calendar className="w-16 h-16 text-red-400 mx-auto mb-6" /> */}
            <h2 className="text-4xl font-bold text-white mb-4">
              Important Dates
            </h2>
            <p className="text-md font-medium text-gray-300 mb-8">
              Applications are open throughout the year with multiple intake periods
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
                href="/colleges/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Admissions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Admissions
