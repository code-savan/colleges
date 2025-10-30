"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/admissions/", label: "Admissions" },
  { href: "/programmes/", label: "Programmes" },
  { href: "/college-life/", label: "College Life" },
  { href: "/fees-and-accommodation/", label: "Fees & Accommodation" },
//   { href: "/apply", label: "Apply" },
]

const NavBar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="w-full fixed top-0 z-50 border-b bg-white border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/collegeslogo.png"
              alt="British AUC Colleges"
              width={160}
              height={160}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-normal transition-all duration-200 text-xs lg:text-sm
                    ${isActive
                      ? 'text-black'
                      : 'text-[#1e1e1e]'}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-400" />
                  )}
                </Link>
              )
            })}

            {/* CTA Button */}
            <Link
              href="/apply"
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium transition-all duration-200
                      ${isActive
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors text-center mt-4"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
