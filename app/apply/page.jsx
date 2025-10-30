/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NavBar from '../NavBar'

const Apply = () => (
  <div className="min-h-screen w-full">
    <NavBar />
    <section className="relative min-h-screen flex items-center justify-center">

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Complete Your Application</h1>
          <p className=" text-gray-600 mb-8 font-medium text-[15px]">Ready to join British AUC University Pathway? Click below to complete your application form and start your journey to a prestigious university degree.</p>
          <Link
            href="#" // Replace with actual application form link if available
            className="inline-flex items-center gap-2 bg-red-500 text-gray-100 px-8 py-3 rounded-xl hover:bg-red-600 transition-colors text-lg font-medium text-[15px]"
          >
            Complete Application Form
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
)

export default Apply
