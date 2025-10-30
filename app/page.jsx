"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, BookOpen, Globe, Award, Users, School, Star, CheckCircle2, ArrowRight, Flag } from 'lucide-react'
import Image from 'next/image'
import NavBar from './NavBar'
import Footer from './Footer'

const programmes = [
  {
    title: "A-Level Programme",
    description: "Internationally recognized qualification opening doors to top-tier universities worldwide.",
    icon: GraduationCap,
    features: ["Expert teachers", "Robust curriculum", "Global recognition"],
    image: "/1.jpg"
  },
  {
    title: "International Foundation Year",
    description: "Bridge the gap between secondary education and university-level study with specialized pathways.",
    icon: BookOpen,
    features: ["Business pathway", "Engineering pathway", "Law pathway"],
    image: "/3.jpg"
  },
  {
    title: "International Year One & Two",
    description: "Earn university credits while completing the equivalent of the first and second years of a degree programme.",
    icon: School,
    features: ["Direct university pathway", "Credit transfer", "Smooth transition"],
    image: "/5.jpg"
  },
  {
    title: "SELT Preparation",
    description: "Comprehensive preparation for Secure English Language Tests including PTE, IELTS, TOEFL, and more.",
    icon: Globe,
    features: ["Language proficiency", "Test strategies", "Practice tests"],
    image: "/9.jpg"
  }
]

const features = [
  {
    title: "Academic Excellence",
    description: "Comprehensive curriculum aligned with global standards",
    icon: Award,
    stats: "95% Success Rate"
  },
  {
    title: "Personal Support",
    description: "Individualized academic guidance and mentorship",
    icon: Users,
    stats: "1:12 Teacher Ratio"
  },
  {
    title: "Global Recognition",
    description: "Partnerships with top universities worldwide",
    icon: Star,
    stats: "100+ Partners"
  }
]

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

const Page = () => {
  const [activeProgramme, setActiveProgramme] = useState(0)

  return (
    <div className="min-h-screen w-full bg-white">2
      <NavBar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-50 border pt-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940"
            alt="University Education"
            fill
            className="object-cover object-center opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 shadow-sm bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  <Flag className="w-4 h-4" />
                  BRITISH AUC UNIVERSITY PATHWAY
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Your Pathway to <span className="text-red-600">Prestigious University Undergraduate Degree</span>
                </h1>
                <p className="text-sm text-gray-800/90 leading-relaxed">
                  Welcome to British AUC University Pathway, we help you prepare for entry into leading universities worldwide. Our programmes provide the skills and support you need to succeed, offering a smooth transition to top global institutions. Start your journey with us today.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center border-2 rounded-lg md:py-2 md:px-1 p-[2px] border-red-400/80 cursor-pointer flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="md:text-[16px] text-[15px] font-bold text-red-600">{feature.stats}</div>
                    <div className="text-xs text-gray-700 font-medium">{feature.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative aspect-[3/3] rounded-2xl overflow-hidden border border-gray-200 group cursor-pointer shadow-lg"
              >
                <Image
                  src="/hero.jpg"
                  alt="Education"
                  fill
                  className="object-top object-cover group-hover:scale-105 transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 group-hover:scale-105 transition-transform duration-500 md:w-24 md:h-24 w-16 h-16 bg-red-600 rounded-2xl -z-10" />
              <div className="absolute md:-top-6 md:-left-6 -top-4 -left-4 md:w-32 md:h-32 w-20 h-20 border-2 border-red-600/40 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Pathway Programmes
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Comprehensive academic preparation designed to ensure your success in international education.
            </p>
          </motion.div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
            {/* Program List */}
            <div className="md:col-span-4 space-y-4">
              {programmes.map((programme, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveProgramme(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeProgramme === index
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <programme.icon className={`w-6 h-6 ${
                      activeProgramme === index ? 'text-white' : 'text-red-600'
                    }`} />
                    <div>
                      <h3 className="font-semibold mb-1">{programme.title}</h3>
                      <p className={`text-sm ${
                        activeProgramme === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {programme.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Program Details - Desktop */}
            <div className="md:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgramme}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl h-[580px]"
                >
                  <Image
                    src={programmes[activeProgramme].image}
                    alt={programmes[activeProgramme].title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {programmes[activeProgramme].title}
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {programmes[activeProgramme].features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-red-400" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden"
              >
                <motion.button
                  onClick={() => setActiveProgramme(index)}
                  className={`w-full text-left p-6 rounded-t-2xl transition-all duration-300 ${
                    activeProgramme === index
                      ? 'bg-red-600 text-white rounded-b-none'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-2xl border border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <programme.icon className={`w-6 h-6 ${
                      activeProgramme === index ? 'text-white' : 'text-red-600'
                    }`} />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{programme.title}</h3>
                      <p className={`text-sm ${
                        activeProgramme === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {programme.description}
                      </p>
                    </div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {activeProgramme === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={programme.image}
                          alt={programme.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <div className="grid grid-cols-1 gap-2">
                            {programme.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-white/90 bg-black/50 backdrop-blur-lg rounded-xl p-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0" />
                                <span className="text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden flex flex-col items-center justify-center ">
        <div className="absolute inset-0 bg-black " />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[#0A0F1C] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[#0A0F1C] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-red-400 block">British AUC University Pathway?</span>
            </h2>
          </motion.div>

          <div className=" md:flex md:flex-wrap gap-8 justify-center">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300" style={{ width: "calc(33.3333% - 30px)" }}
              >
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl transform -rotate-6 group-hover:rotate-3 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-[18px] font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 mb-4 text-[14px]">{feature.description}</p>
                {feature.stats && (
                  <div className="text-2xl font-bold text-red-400">{feature.stats}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="/hero.png"
                alt="Education"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/50 to-red-600/50 backdrop-blur-sm" />
            </div>

            <div className="relative py-10 px-6 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your International Education Journey?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Contact us today to learn more about our programmes and how we can help you achieve your academic goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#programmes"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/30 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page
