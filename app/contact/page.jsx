"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'admin@britishauc.com',
      link: 'mailto:admin@britishauc.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 805 900 0097',
      link: 'tel:+2348059000097'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Abuja-FCT, Nigeria',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9AM - 5PM',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero */}
      <section className="relative bg-linear-to-br from-gray-900 via-red-900 to-gray-900 pt-32 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6"
            >
              <Mail className="w-4 h-4" />
              We&apos;re Here to Help
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get in <span className="text-red-400">Touch</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <info.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600">{info.details}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      placeholder="+234 (0) 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="accommodation">Accommodation</option>
                      <option value="fees">Fees & Payment</option>
                      <option value="programmes">Programme Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Campus
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We welcome prospective students and their families to visit our campus.
                Experience our facilities, meet our staff, and get a feel for student life at British AUC.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-100 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm">
                      Kingfem GA247, Plot 264<br />
                      Ahmadu Bello Way<br />
                      Abuja-FCT, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-100 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Map View</p>
                <p className="text-sm text-gray-500 mt-2">Interactive map coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
