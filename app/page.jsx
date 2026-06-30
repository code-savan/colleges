"use client"

import React, { useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, BookOpen, Globe, Award, Users, School, Star, CheckCircle2, ArrowRight, Flag } from 'lucide-react'
import Image from 'next/image'

// Dynamically import NavBar and Footer with SSR enabled for better performance
const NavBar = dynamic(() => import('./NavBar'), { ssr: true })
const Footer = dynamic(() => import('./Footer'), { ssr: true })

const programmes = [
  {
    title: "Undergraduate Degree Programmes",
    description: "Explore 24 undergraduate degree courses across Business, Computing, Psychology, Law, and more.",
    icon: GraduationCap,
    features: ["24 degree courses", "Multiple study locations", "Global recognition"],
    image: "/1.jpg",
    blurDataURL: "/1-lqip.jpg",
    link: "/courses/degrees"
  },
  {
    title: "Postgraduate & Master's Programmes",
    description: "Advance your career with 21 postgraduate programmes including MSc, MA, and specialized certifications.",
    icon: Award,
    features: ["21 master's courses", "Flexible study modes", "Career advancement"],
    image: "/5.jpg",
    blurDataURL: "/5-lqip.jpg",
    link: "/courses/masters"
  },
  {
    title: "A-Level Programme",
    description: "Internationally recognized qualification opening doors to top-tier universities worldwide.",
    icon: BookOpen,
    features: ["Expert teachers", "Robust curriculum", "Global recognition"],
    image: "/2.jpg",
    blurDataURL: "/2-lqip.jpg"
  },
  {
    title: "International Foundation Year",
    description: "Bridge the gap between secondary education and university-level study with specialized pathways.",
    icon: School,
    features: ["Business pathway", "Engineering pathway", "Law pathway"],
    image: "/3.jpg",
    blurDataURL: "/3-lqip.jpg"
  },
  {
    title: "Diploma",
    description: "Earn university credits while completing the equivalent of the first and second years of a degree programme.",
    icon: Users,
    features: ["Direct university pathway", "Credit transfer", "Smooth transition"],
    image: "/4.jpg",
    blurDataURL: "/4-lqip.jpg"
  },
  {
    title: "SELT Preparation",
    description: "Comprehensive preparation for Secure English Language Tests including PTE, IELTS, TOEFL, and more.",
    icon: Globe,
    features: ["Language proficiency", "Test strategies", "Practice tests"],
    image: "/9.jpg",
    blurDataURL: "/9-lqip.jpg"
  }
]

const features = [
  { title: "Academic Excellence", description: "Comprehensive curriculum aligned with global standards", icon: Award, stats: "95% Success Rate" },
  { title: "Personal Support", description: "Individualized academic guidance and mentorship", icon: Users, stats: "1:2 Teacher Ratio" },
  { title: "Global Recognition", description: "Partnerships with top universities worldwide", icon: Star, stats: "100+ Partners" }
]

const whyChooseFeatures = [
  {
    title: "Cost Effectiveness",
    description:
      "Studying at the British AUC University Pathway Centre saves parents a significant cost of studying the same programme in the United Kingdom or around the world. Parents can save 70–80% of study costs for having their wards study their first and second year of university education with the British AUC University Pathway Centre.",
    icon: Star
  },
  {
    title: "Academic Excellence",
    description:
      "British AUC University Pathway Centre boasts over fifteen (15) years of preparing and sending students to universities around the world. Our academic faculty maintains a high standard of teaching and mentorship, ensuring that students meet the globally acceptable academic requirements for progression into prestigious universities in the United Kingdom, United States, Canada, etc.",
    icon: Award
  },
  {
    title: "Comprehensive Curriculum Aligned with Global Education Standards",
    description:
      "The British AUC University Pathway offers international qualifications that are recognized worldwide. These qualifications primarily align with the international curriculum and are therefore studied under strict conditions in tandem with global best practices.",
    icon: BookOpen
  },
  {
    title: "Tailored Learning Experience",
    description:
      "Our courses are designed to meet the specific needs of students transitioning to an international university. We employ the Oxbridge (Oxford and Cambridge) tutorial teaching system, providing each student with a tailored academic learning experience.",
    icon: Users
  },
  {
    title: "Guaranteed University Progression",
    description:
      "Students who finish our International University Foundation Programme are guaranteed progression to over sixty-one (61) universities in the United Kingdom and twenty-three (23) universities in the United States of America and Canada. This gives the students a wide range of options to choose a university that is in alignment with their academic goals.",
    icon: GraduationCap
  },
  {
    title: "Expert Guidance/Counseling Department and Strong University Placement Record",
    description:
      "British AUC University Pathway has over fifteen (15) years of expertise in education guidance and counselling, as well as an extensive record of placing international students at Russell Group universities in the United Kingdom and Ivy League universities around the world. Therefore, rest assured that no matter the academic condition of the student, our professional University Placement team will get the student to the right university.",
    icon: Globe
  },
  {
    title: "State-of-the-Art Facility with 24-Hour CCTV Recordings",
    description:
      "Our centre offers well-equipped modern classrooms with digital facilities to support students’ learning experience and foster a community of academic advancement and integration. British AUC University Pathway Centre is safe and secure with CCTV cameras in every classroom and space to ensure the safety and security of students in our facility.",
    icon: School
  }
]

const Page = () => {
  const [activeProgramme, setActiveProgramme] = useState(0)

  // Optimize INP by preventing unnecessary re-render
  const handleProgrammeClick = useCallback((i) => {
    if (activeProgramme !== i) setActiveProgramme(i)
  }, [activeProgramme])

  // Memoize programme data to prevent unnecessary re-renders
  const activeProgrammeData = useMemo(() => programmes[activeProgramme], [activeProgramme])

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-50 pt-10">
        <div className="absolute inset-0">
          {/* Local hero image with blurPlaceholder for fastest LCP */}
          <Image
            alt="University Education"
            src="/hero.jpg"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="/hero-lqip.jpg"
            className="object-cover object-center opacity-10"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/80 to-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className="inline-flex items-center gap-2 shadow-sm bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold"
                >
                  <Flag className="w-4 h-4" />
                  BRITISH AUC UNIVERSITY PATHWAY
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Achieve your UK degree studying at <span className="text-red-600">British AUC University Study Centre</span>
                </h1>
                <p className="text-sm text-gray-800/90 leading-relaxed">
                  Welcome to British AUC University Study Centre, where you can earn your qualification directly with us. Through our university programmes, you will gain the skills, knowledge, and support you need to graduate with an internationally recognised degree, opening pathways to rewarding careers and further academic opportunities worldwide. Begin your degree journey with us today.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 items-stretch">
                {/* Degree Course */}
                <Link
                  href="/courses/degrees/llb-law"
                  className="group border-2 rounded-lg p-2 border-blue-400/80 bg-white shadow-sm hover:shadow-md transition-all hover:border-blue-600 flex flex-col h-full"
                >
                  <div className="text-[10px] md:text-xs font-bold text-blue-600 group-hover:text-blue-700 line-clamp-2 mb-1">
                    LLB (Hons) Law
                  </div>
                  <div className="text-[9px] md:text-[10px] text-gray-600 mb-2 grow">
                    Undergraduate
                  </div>
                  <div className="text-[9px] md:text-[10px] text-blue-600 group-hover:underline font-medium">
                    View Course →
                  </div>
                </Link>

                {/* Diploma Course */}
                <Link
                  href="/courses/diplomas/diploma-information-technology"
                  className="group border-2 rounded-lg p-2 border-green-400/80 bg-white shadow-sm hover:shadow-md transition-all hover:border-green-600 flex flex-col h-full"
                >
                  <div className="text-[10px] md:text-xs font-bold text-green-600 group-hover:text-green-700 line-clamp-2 mb-1">
                    Diploma in IT
                  </div>
                  <div className="text-[9px] md:text-[10px] text-gray-600 mb-2 grow">
                    Level 3 Diploma
                  </div>
                  <div className="text-[9px] md:text-[10px] text-green-600 group-hover:underline font-medium">
                    View Course →
                  </div>
                </Link>

                {/* Master's Course */}
                <Link
                  href="/courses/masters/msc-data-science"
                  className="group border-2 rounded-lg p-2 border-purple-400/80 bg-white shadow-sm hover:shadow-md transition-all hover:border-purple-600 flex flex-col h-full"
                >
                  <div className="text-[10px] md:text-xs font-bold text-purple-600 group-hover:text-purple-700 line-clamp-2 mb-1">
                    MSc Data Science
                  </div>
                  <div className="text-[9px] md:text-[10px] text-gray-600 mb-2 grow">
                    Postgraduate
                  </div>
                  <div className="text-[9px] md:text-[10px] text-purple-600 group-hover:underline font-medium">
                    View Course →
                  </div>
                </Link>
              </div>

              {/* View All Courses Link */}
              <div className="mt-3 text-center">
                <Link
                  href="/courses/degrees"
                  className="inline-flex items-center gap-1 text-xs md:text-sm text-red-600 hover:text-red-700 font-semibold hover:underline"
                >
                  <span>View All Courses</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-3/3 rounded-2xl overflow-hidden border border-gray-200 group shadow-lg">
                <Image
                  src="/hero.jpg"
                  alt="Education"
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  placeholder="blur"
                  blurDataURL="/hero-lqip.jpg"
                  className="object-top object-cover group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:w-24 md:h-24 w-16 h-16 bg-red-600 rounded-2xl -z-10" />
              <div className="absolute md:-top-6 md:-left-6 -top-4 -left-4 md:w-32 md:h-32 w-20 h-20 border-2 border-red-600/40 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="relative py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Academic <span className="text-red-600">Programmes & Pathways</span>
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              From A-Levels to Master&apos;s degrees - comprehensive academic programmes designed to ensure your success in international education.
            </p>
          </div>

          {/* Desktop Sidebar View */}
          <div className="hidden md:grid md:grid-cols-12 gap-6 items-start">
            {/* Compact Sidebar */}
            <div className="md:col-span-5 lg:col-span-4 h-full flex flex-col gap-3">
              {programmes.map((programme, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleProgrammeClick(index)}
                  tabIndex={0}
                  className={`w-full flex-1 flex flex-col justify-center text-left p-3 rounded-lg transition-all duration-200 focus:ring-2 ring-red-500 focus:outline-none group ${
                    activeProgramme === index
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-red-300'
                  }`}
                  aria-current={activeProgramme === index}
                  style={{ minHeight: 0 }} // allows flex-1 to work cleanly
                >
                  <div className="flex items-center gap-3">
                    <div className={`shrink-0 p-2 rounded-lg transition-colors ${
                      activeProgramme === index
                        ? 'bg-white/20'
                        : 'bg-red-50 group-hover:bg-red-100'
                    }`}>
                      <programme.icon className={`w-5 h-5 ${
                      activeProgramme === index ? 'text-white' : 'text-red-600'
                    }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm leading-tight ${
                        activeProgramme === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {programme.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                      activeProgramme === index
                        ? 'text-white translate-x-0'
                        : 'text-gray-400 -translate-x-1 group-hover:translate-x-0'
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Display Panel */}
            <div className="md:col-span-7 lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgramme}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]"
                >
                  <Image
                    src={activeProgrammeData.image}
                    alt={activeProgrammeData.title}
                    fill
                    sizes="(min-width: 1280px) 700px, (min-width: 768px) 500px, 100vw"
                    placeholder="blur"
                    blurDataURL={activeProgrammeData.blurDataURL}
                    className="object-cover object-top"
                    loading={activeProgramme === 0 ? "eager" : "lazy"}
                    fetchPriority={activeProgramme === 0 ? "high" : "auto"}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 mb-2">
                        <activeProgrammeData.icon className="w-4 h-4 text-white" />
                        <span className="text-xs font-medium text-white/90">
                          {activeProgrammeData.link ? 'Degree Programme' : 'Pathway Programme'}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {activeProgrammeData.title}
                    </h3>
                      <p className="text-white/90 text-sm md:text-base max-w-2xl leading-relaxed">
                        {activeProgrammeData.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mt-4">
                        {activeProgrammeData.features.map((feature, idx) => (
                        <div
                          key={idx}
                            className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/10"
                          >
                            <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                            <span className="text-xs font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {activeProgrammeData.link && (
                        <div className="pt-3">
                          <Link
                            href={activeProgrammeData.link}
                            className="inline-flex items-center gap-2 bg-white text-red-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 text-sm shadow-lg"
                          >
                            <span>Explore Courses</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-4" role="tablist">
            {programmes.map((programme, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-gray-200">
                <button
                  type="button"
                  tabIndex={0}
                  className={`w-full text-left p-5 transition-colors duration-200 focus:outline-none ${
                    activeProgramme === index
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  aria-expanded={activeProgramme === index}
                  aria-controls={`programme-panel-${index}`}
                  onClick={() => handleProgrammeClick(index)}
                >
                  <div className="flex items-start gap-3">
                    <programme.icon className={`w-6 h-6 shrink-0 ${
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
                </button>
                <AnimatePresence>
                  {activeProgramme === index && (
                    <motion.div
                      id={`programme-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="relative aspect-video w-full">
                        <Image
                          src={programme.image}
                          alt={programme.title}
                          fill
                          sizes="100vw"
                          placeholder="blur"
                          blurDataURL={programme.blurDataURL}
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                          <div className="space-y-3">
                            {programme.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-white/90 bg-black/40 backdrop-blur-md rounded-lg p-3"
                              >
                                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                                <span className="text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                            {programme.link && (
                              <Link
                                href={programme.link}
                                className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 text-sm mt-2"
                              >
                                <span>Explore Courses</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Speech Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Welcome Message</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-10">
              A Word from Our<br />
              <span className="text-red-600">Academic Director</span>
            </h2>

            {/* Image + Speech row */}
            <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start max-w-5xl mx-auto text-left">
              {/* Image */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="relative mx-auto w-40 md:w-full max-w-[180px]">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
                      <Image
                        src="/vitalis.jpeg"
                        alt="Vitalis Nwaogu"
                        fill
                        className="object-cover object-center"
                        sizes="180px"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-gray-900 text-sm">Vitalis Nwaogu</p>
                      <p className="text-xs text-gray-500">Academic Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speech */}
              <div className="md:col-span-4">
                <div className="space-y-4 text-gray-600 leading-relaxed text-xs md:text-sm">
                  <p>
                    My name is <strong className="text-gray-900">Vitalis Nwaogu</strong> and it is my pleasure to welcome you to British AUC University Pathway. An institution dedicated to academic excellence, global opportunities, and student success. Whether you are a prospective student, parent, educational partner, or visitor, I thank you for taking the time to learn more about who we are and what we stand for.
                  </p>
                  <p>
                    Here at the British AUC University Pathway, we have a Study Centre were we are committed to coaching students through internationally recognised educational pathways that prepare them for success at leading universities around the world. Our focus extends beyond academic achievement; we are passionate about developing confident, responsible, and globally minded individuals who are equipped to make meaningful contributions to their communities and professions.
                  </p>
                  <p>
                    Our Study Centre is built on the principles of excellence, integrity, innovation, and personalised student support. We recognise that every student&apos;s journey is unique, and we take pride in providing expert guidance from the initial application process through to successful university placement and beyond. Every member of our team is committed to ensuring that our students receive the highest standard of academic and professional support throughout their educational journey.
                  </p>
                  <p>
                    As the global education landscape continues to evolve, British AUC University Pathway remains steadfast in its commitment to delivering quality programmes, fostering international partnerships, and embracing innovative approaches that prepare students for the opportunities and challenges of the future.
                  </p>
                  <p>
                    We are proud of the trust placed in us by our students, parents, and partners for over 16 years and we remain dedicated to maintaining the highest standards of professionalism, transparency, and service excellence.
                  </p>
                  <p>
                    Whether your aspiration is to pursue undergraduate studies, postgraduate education, professional qualifications, or specialised international pathway programmes, we are honoured to be part of your journey toward achieving your academic and career ambitions.
                  </p>
                  <p>
                    Thank you for considering British AUC University Pathway. We look forward to welcoming you into our community and partnering with you as you take the next step towards a successful global future.
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 md:hidden">
                  <p className="font-bold text-gray-900 text-sm">Vitalis Nwaogu</p>
                  <p className="text-xs text-gray-500">Academic Director, British AUC University Pathway</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full text-red-600 text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose<br />
              <span className="text-red-600">British AUC University Pathway?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set us apart and prepare you for global academic success
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 w-full"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-red-100 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-16 h-16 bg-linear-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-red-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src="/hero.png"
                alt="Education"
                fill
                className="object-cover object-center"
                loading="lazy"
                fetchPriority="auto"
              />
              <div className="absolute inset-0 bg-linear-to-r from-red-700/50 to-red-600/50 backdrop-blur-sm" />
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
