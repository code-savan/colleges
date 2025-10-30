/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0F1C] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-2">
            <Link href="/colleges" className="inline-block">
              <Image
                src="/collegeslogo.png"
                alt="British AUC Colleges"
                width={140}
                height={140}
                className="h-12 w-auto "
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your pathway to prestigious university undergraduate degrees. We help you prepare for entry into leading universities worldwide.
            </p>
            {/* Social Links */}
            {/* <div className="flex space-x-3 pt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/colleges/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/colleges/programmes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link href="/colleges/admissions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/colleges/college-life" className="text-gray-400 hover:text-white transition-colors text-sm">
                  College Life
                </Link>
              </li>
              <li>
                <Link href="/colleges/fees-and-accommodation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fees & Accommodation
                </Link>
              </li>
              <li>
                <Link href="/colleges/apply" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programmes</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/colleges/programmes#a-level" className="text-gray-400 hover:text-white transition-colors text-sm">
                  A-Level Program
                </Link>
              </li>
              <li>
                <Link href="/colleges/programmes#foundation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  International Foundation Year
                </Link>
              </li>
              <li>
                <Link href="/colleges/programmes#year-one" className="text-gray-400 hover:text-white transition-colors text-sm">
                  International Year One & Two
                </Link>
              </li>
              <li>
                <Link href="/colleges/programmes#selt" className="text-gray-400 hover:text-white transition-colors text-sm">
                  SELT Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Kingfem GA247, Plot 264 Ahmadu Bello Way, Abuja-FCT, Nigeria</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+2348059000097" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +2348059000097
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@britishauc.edu" className="text-gray-400 hover:text-white transition-colors text-sm">
                admin@britishauc.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to Newsletter</h4>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 British AUC University Pathway. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
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
