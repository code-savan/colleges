"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import NavBar from '../../NavBar'
import Footer from '../../Footer'

const DegreeApplicationForm = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />

      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Application Forms</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Degree Course Application Form
          </h1>
          <p className="text-lg text-white/90">
            Apply for Bachelor&apos;s degree programmes
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen className="w-20 h-20 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            This application form is currently under development. Please check back soon or contact our admissions team for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Forms
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DegreeApplicationForm
