"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/collegeslogo.png"
                alt="British AUC University Pathway"
                width={160}
                height={160}
                className="h-14 w-auto transition-transform group-hover:scale-105"
                loading="lazy"
                fetchPriority="auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your pathway to prestigious university undergraduate degrees. We help you prepare for entry into leading universities worldwide.
            </p>

            {/* Social Links - Ready to be uncommented when needed */}
            {/* <div className="flex space-x-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about/", label: "About Us" },
                { href: "/courses/degrees/", label: "Degree Courses" },
                { href: "/courses/masters/", label: "Master's Courses" },
                { href: "/admissions/", label: "Admissions" },
                { href: "/college-life/", label: "College Life" },
                { href: "/fees-and-accommodation/", label: "Fees & Accommodation" },
                { href: "/contact/", label: "Contact Us" },
                { href: "/apply/", label: "Apply Now" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Our Programmes
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/#programmes", label: "A-Level Program" },
                { href: "/#programmes", label: "International Foundation Year" },
                { href: "/#programmes", label: "Diploma" },
                { href: "/#programmes", label: "SELT Preparation" },
                { href: "/courses/degrees/", label: "Undergraduate Degrees" },
                { href: "/courses/masters/", label: "Postgraduate Masters" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                  <MapPin size={18} className="text-red-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Kingfem GA247, Plot 264<br />
                    Ahmadu Bello Way<br />
                    Abuja-FCT, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Phone size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <a
                  href="tel:+2348059000097"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  +234 805 900 0097
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors">
                  <Mail size={18} className="text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <a
                  href="mailto:admin@britishauc.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  admin@britishauc.com
                </a>
              </li>
            </ul>

            {/* Newsletter - Ready to be uncommented when needed */}
            {/* <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 British AUC University Pathway. All rights reserved.
            </p>

            {/* Legal Links - Ready to be uncommented when needed */}
            {/* <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
