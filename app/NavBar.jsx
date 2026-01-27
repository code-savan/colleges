"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

// Remove courses from navLinks, add after Admissions render only
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/admissions/", label: "Admissions" },
  // Courses dropdown appears after Admissions
  { href: "/college-life/", label: "College Life" },
  { href: "/fees-and-accommodation/", label: "Fees & Accommodation" },
  { href: "/contact/", label: "Contact Us" },
  //   { href: "/apply", label: "Apply" },
]

const coursesDropdown = [
  { href: "/courses/degrees", label: "Degrees" },
  { href: "/courses/diplomas", label: "Diplomas" },
  { href: "/courses/masters", label: "Masters" },
]

const NavBar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
    setIsMobileCoursesOpen(false)
  }

  // To close dropdown if clicked outside
  React.useEffect(() => {
    if (!isCoursesOpen) return
    const handler = (event) => {
      if (
        !event.target.closest(".courses-dropdown-desktop") &&
        !event.target.closest(".courses-trigger-desktop")
      ) {
        setIsCoursesOpen(false)
      }
    }
    window.addEventListener("click", handler)
    return () => window.removeEventListener("click", handler)
  }, [isCoursesOpen])

  return (
    <nav className="w-full fixed top-0 z-50 border-b bg-white border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/collegeslogos.png"
              alt="British AUC University Pathway"
              width={160}
              height={160}
              className="h-12 w-auto"
              priority
              fetchPriority="high"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href

              // After Admissions (idx === 2), insert Courses dropdown
              if (idx === 3) {
                // Render Courses Dropdown before rendering this link (College Life)
                return (
                  <React.Fragment key={link.href}>
                    {/* Courses Dropdown (Desktop) */}
                    <div className="relative">
                      <button
                        type="button"
                        className={`courses-trigger-desktop relative font-normal transition-all duration-200 text-xs lg:text-sm flex items-center gap-1 select-none ${
                          pathname.startsWith("/courses")
                            ? "text-black"
                            : "text-[#1e1e1e]"
                        }`}
                        onClick={() => setIsCoursesOpen(v => !v)}
                        aria-haspopup="true"
                        aria-expanded={isCoursesOpen}
                      >
                        Courses
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isCoursesOpen ? "rotate-180" : ""
                          }`}
                        />
                        {pathname.startsWith("/courses") && (
                          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-400" />
                        )}
                      </button>
                      {isCoursesOpen && (
                        <div className="courses-dropdown-desktop absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {coursesDropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                                pathname === item.href
                                  ? "text-red-500 bg-red-50"
                                  : "text-gray-900 hover:bg-gray-100"
                              }`}
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Then render College Life */}
                    <Link
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
                  </React.Fragment>
                )
              }

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
            className="md:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href

                // After Admissions (idx === 2), insert Courses dropdown
                if (idx === 3) {
                  return (
                    <React.Fragment key={link.href}>
                      {/* Courses Dropdown on Mobile */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsMobileCoursesOpen(v => !v)}
                          className="flex items-center w-full font-medium text-gray-800 transition-all duration-150"
                          aria-haspopup="true"
                          aria-expanded={isMobileCoursesOpen}
                        >
                          Courses
                          <ChevronDown
                            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                              isMobileCoursesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isMobileCoursesOpen && (
                          <div className="pl-4 pt-2">
                            {coursesDropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setIsMobileCoursesOpen(false)
                                }}
                                className={`block py-1 font-normal text-[15px] transition-colors ${
                                  pathname === item.href ? "text-red-500" : "text-gray-700"
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Then render College Life */}
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-medium transition-all duration-200
                          ${isActive
                            ? 'text-red-400'
                            : 'text-gray-800'}`}
                      >
                        {link.label}
                      </Link>
                    </React.Fragment>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium transition-all duration-200
                      ${isActive
                        ? 'text-red-400'
                        : 'text-gray-800'}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors text-center mt-4"
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
