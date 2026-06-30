"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  BookCheck,
  FileText,
  ChevronRight,
  ClipboardList,
  Phone,
  CheckCircle2
} from 'lucide-react'
import NavBar from '../NavBar'
import Footer from '../Footer'

const forms = [
  {
    title: "Undergraduate Programme",
    description: "A-Level, Foundation Year, or Diploma programmes",
    icon: GraduationCap,
    link: "/apply/undergraduate",
    badge: "UG",
    color: "bg-red-50 ring-red-100 text-red-500",
  },
  {
    title: "Degree Course",
    description: "Bachelor's degree programmes",
    icon: BookOpen,
    link: "/apply/degree",
    badge: "DG",
    color: "bg-orange-50 ring-orange-100 text-orange-500",
  },
  {
    title: "Master's Programme",
    description: "Postgraduate Master's programmes",
    icon: FileText,
    link: "/apply/masters",
    badge: "PG",
    color: "bg-purple-50 ring-purple-100 text-purple-500",
  },
  {
    title: "IELTS Registration",
    description: "IELTS test and training registration",
    icon: BookCheck,
    link: "/apply/ielts",
    badge: "IELTS",
    color: "bg-emerald-50 ring-emerald-100 text-emerald-500",
  },
]

function Card({ form, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={form.link}
        className="group block bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-gray-100/80 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl ${form.color} flex items-center justify-center ring-1`}>
            <form.icon className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{form.badge}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
          {form.title}
        </h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          {form.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
          <span>Apply Now</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}

const Apply = () => {
  return (
    <div className="min-h-screen w-full bg-[#fafbfc]">
      <NavBar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
                <ClipboardList className="w-4.5 h-4.5 text-red-500" />
              </div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Applications</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Application Forms
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Choose the appropriate application form for your desired programme at British AUC University Pathway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative -mt-6 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {forms.map((form, i) => (
              <Card key={form.title} form={form} index={i} />
            ))}
          </div>

          {/* Before You Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100/80"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Before You Apply</h2>
                <p className="text-sm text-gray-400">Documents you&apos;ll need ready</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "2 passport-sized photographs",
                "Copy of birth certificate",
                "Copy of passport photo page",
                "Copy of NECO/WAEC/IGCSE results",
                "Transcript from current school",
                "Personal statement",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 ring-1 ring-gray-100"
                >
                  <div className="w-7 h-7 rounded-lg bg-red-50 ring-1 ring-red-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100/80 inline-block w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900">Need help with your application?</p>
                    <p className="text-xs text-gray-400">Our admissions team is here to assist you</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-sm hover:shadow-md shrink-0"
                >
                  Contact Admissions
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Apply
