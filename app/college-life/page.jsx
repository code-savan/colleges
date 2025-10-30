/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Users, Star, Heart, Briefcase, Home, Activity, Smile, Calendar, MapPin, Clock, Coffee, Music, Book, Camera, Gamepad2, ChevronRight, CheckCircle2 } from 'lucide-react'
import NavBar from '../NavBar'
import Footer from '../Footer'

const sections = [
  {
    icon: Users,
    title: "A Supportive Community",
    desc: "A welcoming, diverse student body and staff dedicated to creating an inclusive and supportive environment.",
    image: "/1.jpg",
    features: ["Diverse student body", "Mentorship programmes", "Peer support groups", "International community"]
  },
  {
    icon: Star,
    title: "Clubs and Societies",
    desc: "Join a range of clubs and societies, from academic to hobby-based, including music and sports.",
    image: "/3.jpg",
    features: ["20+ active clubs", "Student-led initiatives", "Cultural societies", "Academic clubs"]
  },
  {
    icon: Activity,
    title: "Campus Events and Activities",
    desc: "Enjoy regular events, guest lectures, workshops, and social mixers to enhance your college experience.",
    image: "/5.jpg",
    features: ["Weekly events", "Guest speakers", "Workshops", "Social gatherings"]
  },
  {
    icon: Heart,
    title: "Sport and Fitness",
    desc: "Maintain a healthy lifestyle with a variety of sports facilities and fitness programmes.",
    image: "/9.jpg",
    features: ["Modern gym", "Sports teams", "Fitness classes", "Outdoor activities"]
  },
  {
    icon: Home,
    title: "Accommodation",
    desc: "Modern and comfortable accommodation options to suit students' needs.",
    image: "/7.jpg",
    features: ["On-campus housing", "24/7 security", "Study spaces", "Common areas"]
  },
  {
    icon: Briefcase,
    title: "Career Development",
    desc: "Explore career options, prepare for the job market, and find internships aligned with your academic interests.",
    image: "/2.jpg",
    features: ["Career counseling", "CV workshops", "Job fairs", "Internship placements"]
  },
  {
    icon: Smile,
    title: "Student Well-being",
    desc: "Access counseling, mental health support, and wellness programmes to thrive academically and professionally.",
    image: "/4.jpg",
    features: ["Counseling services", "Mental health support", "Wellness programmes", "Health clinic"]
  }
]

const campusHighlights = [
  { icon: Coffee, title: "Student Café", desc: "Relax and socialize in our modern café" },
  { icon: Book, title: "Library", desc: "24/7 access to extensive resources" },
  { icon: Music, title: "Music Room", desc: "Practice and perform in dedicated spaces" },
  { icon: Gamepad2, title: "Recreation Area", desc: "Unwind with games and entertainment" }
]

const upcomingEvents = [
  { date: "Sept 15", title: "Freshers' Week", type: "Social" },
  { date: "Sept 22", title: "Career Fair", type: "Professional" },
  { date: "Oct 5", title: "Cultural Festival", type: "Cultural" },
  { date: "Oct 12", title: "Sports Day", type: "Sports" }
]

const CollegeLife = () => {
  const [activeSection, setActiveSection] = useState(0)
  const activeData = sections[activeSection]

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-gray-50 pt-28 pb-16 overflow-hidden">
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
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              College <span className="text-red-600">Life</span>
            </h1>
            <p className="text-md font-medium text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant campus community where learning extends beyond the classroom.
              Discover opportunities to grow, connect, and thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students" },
              { number: "20+", label: "Clubs & Societies" },
              { number: "50+", label: "Annual Events" },
              { number: "95%", label: "Student Satisfaction" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Navigation */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Explore Campus Life</h3>
                <div className="space-y-3">
                  {sections.map((section, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setActiveSection(idx)}
                      className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                        activeSection === idx
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activeSection === idx ? 'bg-white/20' : 'bg-red-50'
                      }`}>
                        <section.icon className={`w-6 h-6 ${
                          activeSection === idx ? 'text-white' : 'text-red-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{section.title}</div>
                      </div>
                      {activeSection === idx && (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Feature Image */}
                  <div className="relative h-[550px] rounded-2xl overflow-hidden mb-8 shadow-xl">
                    <Image
                      src={activeData.image}
                      alt={activeData.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <activeData.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{activeData.title}</h2>
                      </div>
                      <p className="text-lg text-white/90">{activeData.desc}</p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {activeData.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus <span className="text-red-600">Highlights</span>
            </h2>
            <p className="text-lg text-gray-600">Discover what makes our campus special</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                  <highlight.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-red-600">Events</span>
            </h2>
            <p className="text-lg text-gray-600">Join us for these exciting campus activities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{event.date}</div>
                    <div className="text-xs text-red-600 font-medium">{event.type}</div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900">{event.title}</h3>
              </motion.div>
            ))}
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
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the vibrant campus life at British AUC University Pathway
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
                Schedule a Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CollegeLife
