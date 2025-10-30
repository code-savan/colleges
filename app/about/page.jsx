/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BookOpen, Target, Heart, Globe, Users, Award, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react'
import NavBar from '../NavBar'
import Footer from '../Footer'

const stats = [
  { value: "95%", label: "Success Rate", icon: Award },
  { value: "1:12", label: "Teacher Ratio", icon: Users },
  { value: "100+", label: "Partner Universities", icon: Globe },
  { value: "50+", label: "Countries Represented", icon: Heart }
]

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "We maintain the highest standards of academic rigour to prepare students for success at top universities worldwide."
  },
  {
    icon: Target,
    title: "Student-Centered Approach",
    description: "Every student receives personalised attention and support tailored to their unique academic journey and goals."
  },
  {
    icon: Heart,
    title: "Inclusive Community",
    description: "We foster a diverse and welcoming environment where students from all backgrounds can thrive and succeed."
  },
  {
    icon: Sparkles,
    title: "Innovation in Education",
    description: "We embrace modern teaching methods and technology to deliver engaging and effective learning experiences."
  }
]

const milestones = [
  { year: "2018", event: "British AUC University Pathway established" },
  { year: "2019", event: "First cohort of students enrolled" },
  { year: "2020", event: "Expanded programme offerings" },
  { year: "2021", event: "Achieved 95% university progression rate" },
  { year: "2023", event: "Partnered with 100+ universities globally" },
  { year: "2024", event: "Celebrating excellence in education" }
]

const About = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        {/* <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fee2e2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        /> */}
        {/* <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">British AUC</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students to achieve their dreams through world-class education and personalised pathways to prestigious universities globally.
            </p>
          </motion.div>
        </div> */}
      </section>



      {/* Who We Are Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Who We <span className="text-red-600">Are</span>
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="text-md leading-relaxed">
                  British AUC University Pathway offers a vibrant and supportive learning environment dedicated to helping students achieve international qualifications at a lower cost and a pathway towards their dream international university and destination.
                </p>
                <p className="text-md leading-relaxed">
                  We provide comprehensive courses for 2 to 3 years of UK university-level education. Students who complete our International Year Two programme can progress to the final year of their UK degree, thus saving the student and their parent huge fees.
                </p>
                <p className="text-md leading-relaxed">
                  British AUC University Pathway partners with leading institutions around the world offering a global education that opens doors to international career opportunities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/hero.png"
                  alt="Students studying"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-red-200 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

        {/* Stats Section */}
        <section className="pt-5 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center border rounded-xl border-red-500/30 border-l-2 border-l-red-500/70 flex items-center justify-center w-fit py-2 px-4 gap-3 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl ">
                  <stat.icon className="w-4 h-4 text-red-600" />
                </div>
                <div>
                <div className="text-lg md:text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-[12px] font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Aim</span>
              </h2>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                The aim of British AUC University Pathway is to provide students with an accessible high quality educational foundation that equips them with the knowledge, skills and qualifications necessary to gain admission into prestigious universities across the UK, US, Canada, Australia and New Zealand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensure students meet international academic standards and university entry requirements",
                "Enhance students' academic and personal development through a comprehensive foundation curriculum",
                "Offer a global education experience, preparing students for success in diverse and competitive professional environments",
                "Provide a seamless transition from secondary education to undergraduate studies, expanding access"
              ].map((aim, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 border-l-2 border-l-red-500/70"
                >
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 text-[14px] font-medium">{aim}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at British AUC University Pathway
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group border p-3 cursor-pointer border-red-500/10 rounded-xl"
              >
                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                    <value.icon className="w-7 h-7 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-[14px] font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      {/* <section className="py-20 bg-gradient-to-br from-red-50 to-white"> */}
        {/* <div className="max-w-7xl mx-auto px-6"> */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones in our mission to transform education
            </p>
          </motion.div> */}

          {/* <div className="relative max-w-4xl mx-auto"> */}
            {/* Timeline line */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-200" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="text-red-600 font-bold text-xl mb-2">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div> */}
      {/* </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-md text-gray-300 mb-8">
              Join thousands of students who have successfully progressed to their dream universities
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
                href="/colleges/programmes"
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                View Programmes
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
