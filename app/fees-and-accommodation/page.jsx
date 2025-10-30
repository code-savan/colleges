"use client"

import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../NavBar'
import Footer from '../Footer'

const fees = [
  { sn: 1, programme: "A - Level", price: "₦3,105,000", duration: "One Year" },
  { sn: 2, programme: "International Foundation Year", price: "₦3,105,000", duration: "One Year" },
  { sn: 3, programme: "Ontario Secondary School Diploma", price: "₦3,105,000", duration: "One Year" },
]

const otherFees = [
  { sn: 1, item: "Examination Fee" },
  { sn: 2, item: "Medical Fee" },
  { sn: 3, item: "Laboratory Fee" },
  { sn: 4, item: "Accommodation" },
]

const accommodation = [
  { sn: 1, type: "Shortlet Apartment", price: "₦700,000", duration: "Weekly" },
  { sn: 2, type: "Air BnB", price: "₦315,000", duration: "Weekly" },
  { sn: 3, type: "Shared Hostels", price: "₦105,000", duration: "Weekly" },
  { sn: 4, type: "Hotel Apartment", price: "₦315,000", duration: "Weekly" },
]

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-gray-50 pt-28 pb-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Fees <span className="text-red-600">& Accommodation</span>
            </h1>
            <p className="text-[14px] text-gray-600 max-w-3xl mx-auto font-medium">
              Transparent tuition and flexible living options tailored for our students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fees Table */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Fees</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid grid-cols-12 bg-gray-50 text-gray-700 font-semibold text-sm">
              <div className="col-span-2 p-4">S/N</div>
              <div className="col-span-5 p-4">Programme</div>
              <div className="col-span-3 p-4">Price</div>
              <div className="col-span-2 p-4">Duration</div>
            </div>
            <div>
              {fees.map((row, idx) => (
                <div key={row.sn} className={`grid grid-cols-12 text-sm text-gray-800 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="col-span-2 p-4 font-medium">{row.sn}</div>
                  <div className="col-span-5 p-4">{row.programme}</div>
                  <div className="col-span-3 p-4">{row.price}</div>
                  <div className="col-span-2 p-4">{row.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Fees */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Other Fees not included in the tuition fees</h3>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="grid grid-cols-12 bg-gray-50 text-gray-700 font-semibold text-sm">
                <div className="col-span-2 p-4">S/N</div>
                <div className="col-span-10 p-4">Item</div>
              </div>
              <div>
                {otherFees.map((row, idx) => (
                  <div key={row.sn} className={`grid grid-cols-12 text-sm text-gray-800 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="col-span-2 p-4 font-medium">{row.sn}</div>
                    <div className="col-span-10 p-4">{row.item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Accommodation</h2>
          </div>
          <div className="max-w-4xl text-gray-700 space-y-4 text-[14px] font-medium">
            <p>
              We know that where you live plays a big role in how well you learn and thrive. While we do not offer on-campus dormitories, we have partnered with trusted hospitality providers to ensure our A-Level students have access to safe, comfortable, and well-managed apartments.
            </p>
            <p>
              Our goal is to ensure every student enjoys a safe and supportive environment that allows them to focus on their studies and personal growth.
            </p>
            <p>
              Our recommended accommodation options are carefully chosen to provide:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">Security & Peace of Mind</span> – located in secure neighborhoods with reliable facilities.</li>
              <li><span className="font-semibold">Comfort & Convenience</span> – fully furnished apartments designed to make you feel at home from day one.</li>
              <li><span className="font-semibold">Easy Access</span> – just a short distance from campus, shopping areas, and essential services.</li>
              <li><span className="font-semibold">Choice & Flexibility</span> – from shared apartments for a lively student community experience to private units for those who prefer more independence.</li>
            </ul>
          </div>

          {/* Accommodation Table */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Category</h3>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="grid grid-cols-12 bg-gray-50 text-gray-700 font-semibold text-sm">
                <div className="col-span-2 p-4">S/N</div>
                <div className="col-span-6 p-4">Type</div>
                <div className="col-span-2 p-4">Price</div>
                <div className="col-span-2 p-4">Duration</div>
              </div>
              <div>
                {accommodation.map((row, idx) => (
                  <div key={row.sn} className={`grid grid-cols-12 text-sm text-gray-800 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="col-span-2 p-4 font-medium">{row.sn}</div>
                    <div className="col-span-6 p-4">{row.type}</div>
                    <div className="col-span-2 p-4">{row.price}</div>
                    <div className="col-span-2 p-4">{row.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-4xl text-gray-700 text-[14px] font-medium">
            <p>
              For personalized assistance with accommodation, please reach out to our Admissions Office – we’ll be happy to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to join British AUC University Pathway?</h3>
            <p className="text-white/90 mb-6">Contact us to learn more about fees, admissions and accommodation options.</p>
            <div className="flex justify-center gap-4">
              <a href="/colleges/apply" className="bg-white text-red-600 px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">Apply Now</a>
              {/* <a href="/colleges/contact" className="bg-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-colors">Contact Us</a> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
