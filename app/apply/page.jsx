"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, GraduationCap, BookOpen, BookCheck } from 'lucide-react'
import NavBar from '../NavBar'
import Footer from '../Footer'

const Apply = () => {
  const forms = [
    {
      title: "Undergraduate Programme Application",
      description: "Apply for A-Level, Foundation Year, or Diploma programmes",
      icon: GraduationCap,
      link: "/apply/undergraduate",
      color: "red"
    },
    {
      title: "Degree Course Application",
      description: "Apply for Bachelor's degree programmes",
      icon: BookOpen,
      link: "/apply/degree",
      color: "blue"
    },
    {
      title: "Master's Programme Application",
      description: "Apply for postgraduate Master's programmes",
      icon: FileText,
      link: "/apply/masters",
      color: "purple"
    },
    {
      title: "IELTS Registration",
      description: "Register for IELTS test and training",
      icon: BookCheck,
      link: "/apply/ielts",
      color: "red"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Application Forms
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Choose the appropriate application form for your desired programme at British AUC University Pathway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Forms Selection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forms.map((form, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={form.link}
                  className="block group bg-white rounded-2xl border-2 border-gray-200 hover:border-red-500 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-${form.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <form.icon className={`w-8 h-8 text-${form.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {form.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {form.description}
                  </p>
                  <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Apply Now</span>
                    <ArrowLeft className="w-5 h-5 rotate-180 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Information Section */}
          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Before You Apply
            </h3>
            <p className="text-gray-700 mb-4">
              Please ensure you have the following documents ready before starting your application:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>2 passport-sized photographs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Copy of birth certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Copy of passport photo page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Copy of NECO/WAEC/IGCSE results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Transcript from current school</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Personal statement</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need help with your application?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
            >
              Contact Our Admissions Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Apply
