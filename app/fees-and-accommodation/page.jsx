"use client"

import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { CheckCircle2 } from 'lucide-react'

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
      <section className="relative bg-linear-to-br from-red-50 via-white to-gray-50 pt-28 pb-10 overflow-hidden">
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

        {/* Tuition Fee Per Year */}
        <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tuition Fee Per Year</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full text-left text-[14px]">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="px-4 py-3 font-semibold">S/N</th>
                  <th className="px-4 py-3 font-semibold">Programme</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                <tr>
                  <td className="px-4 py-3 font-medium">1</td>
                  <td className="px-4 py-3">A - Level</td>
                  <td className="px-4 py-3">₦6,729,000</td>
                  <td className="px-4 py-3">One Year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">2</td>
                  <td className="px-4 py-3">International Foundation Year</td>
                  <td className="px-4 py-3">₦6,729,000</td>
                  <td className="px-4 py-3">One Year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">3</td>
                  <td className="px-4 py-3">Ontario Secondary School Diploma</td>
                  <td className="px-4 py-3">₦6,729,000</td>
                  <td className="px-4 py-3">One Year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fees include</h3>
              <ul className="space-y-2 text-[14px] text-gray-800">
                {[
                  'Tuition fees',
                  'Application fees',
                  'Enrollment fees',
                  'Exam fees',
                  'Study materials',
                  'College T-shirt',
                  'University Application Support'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fees DO NOT include</h3>
              <ul className="space-y-2 text-[14px] text-gray-800">
                {['Accommodation', 'Medical Fees', 'Laboratory'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-600 mt-1" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-12 bg-gray-50">
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
            <p>Our recommended accommodation options are carefully chosen to provide:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">Security & Peace of Mind</span> – located in secure neighborhoods with reliable facilities.</li>
              <li><span className="font-semibold">Comfort & Convenience</span> – fully furnished apartments designed to make you feel at home from day one.</li>
              <li><span className="font-semibold">Easy Access</span> – just a short distance from campus, shopping areas, and essential services.</li>
              <li><span className="font-semibold">Choice & Flexibility</span> – from shared apartments for a lively student community experience to private units for those who prefer more independence.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Category</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-full text-left text-[14px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-700">
                    <th className="px-4 py-3 font-semibold">S/N</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Price</th>
                    <th className="px-4 py-3 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-800">
                  {[
                    { n: '1', type: 'Shortlet Apartment', price: '₦700,000', duration: 'Weekly' },
                    { n: '2', type: 'Air BnB', price: '₦315,000', duration: 'Weekly' },
                    { n: '3', type: 'Shared Hostels', price: '₦105,000', duration: 'Weekly' },
                    { n: '4', type: 'Hotel Apartment', price: '₦315,000', duration: 'Weekly' }
                  ].map((row) => (
                    <tr key={row.n}>
                      <td className="px-4 py-3 font-medium">{row.n}</td>
                      <td className="px-4 py-3">{row.type}</td>
                      <td className="px-4 py-3">{row.price}</td>
                      <td className="px-4 py-3">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[14px] text-gray-700 mt-4 max-w-4xl font-medium">
              For personalized assistance with accommodation, please reach out to our Admissions Office – we’ll be happy to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-linear-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
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
