"use client"

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  GraduationCap,
  BookOpen,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Award,
  Users,
  Target,
  Headphones,
  BookMarked,
  PenTool,
  MessageSquare,
  ChevronDown,
  ExternalLink,
  ArrowRight,
  DollarSign,
  Sparkles,
  Shield,
  Sun,
  Moon,
  Copy,
  Check,
  Timer,
  FileText,
  Globe,
  Building2,
  Phone,
  Mail,
} from 'lucide-react'

const NavBar = dynamic(() => import('../../NavBar'), { ssr: true })
const Footer = dynamic(() => import('../../Footer'), { ssr: true })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
}

const ieltsTypes = [
  {
    title: "IELTS Academic",
    description: "Take this test if you want to study at an undergraduate or postgraduate level, or join a professional organisation anywhere in the world without UK Visas and Immigration requirements.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    badge: "University Entry",
  },
  {
    title: "IELTS General Training",
    description: "Take this test if you want to study at a degree level or work anywhere in the world without UK Visas and Immigration requirements.",
    icon: Award,
    gradient: "from-emerald-500 to-teal-500",
    badge: "Work & Migration",
  },
  {
    title: "IELTS for UK Visas",
    description: "UK government-approved Secure English Language Tests for those who need a Work/Spouse Visa, or who are planning to study a course below degree level.",
    icon: Shield,
    gradient: "from-violet-500 to-purple-500",
    badge: "UK Government Approved",
  },
]

const ieltsUkviTypes = [
  {
    title: "IELTS for UKVI Academic",
    description: "For test-takers wishing to study at the undergraduate or postgraduate level, and for those seeking professional registration in the UK with UK Visas and Immigration requirements.",
  },
  {
    title: "IELTS for UKVI General Training",
    description: "For test-takers wishing to migrate to the UK and for those wishing to train or study below degree level under UK Visas and Immigration requirements.",
  },
  {
    title: "IELTS for UKVI Life Skills",
    description: "For those applying for family visa, extension to family, spouse, or partner visa, indefinite leave to remain or citizenship.",
    subItems: [
      { level: "A1", description: "For those who need to prove their English speaking and listening skills for 'family of a settled person' visas." },
      { level: "A2 (UK only)", description: "For those applying for extension to Family, Spouse or Partner visa." },
      { level: "B1", description: "For those applying for indefinite leave to remain or citizenship." },
    ],
  },
]

const testFormat = [
  {
    title: "Listening",
    time: "30 min + 10 min transfer",
    icon: Headphones,
    questions: "40 questions",
    color: "blue",
    parts: [
      { name: "Part 1", desc: "A conversation between two people in an everyday social context." },
      { name: "Part 2", desc: "A monologue set in an everyday social context." },
      { name: "Part 3", desc: "A conversation between up to four people in an educational context." },
      { name: "Part 4", desc: "A monologue on an academic subject." },
    ],
  },
  {
    title: "Reading",
    time: "60 minutes",
    icon: BookMarked,
    questions: "40 questions",
    color: "emerald",
    parts: [
      { name: "Academic Reading", desc: "Three long texts from books, journals, magazines, and newspapers." },
      { name: "General Training Reading", desc: "Three sections with texts focusing on survival skills in an English-speaking country." },
    ],
  },
  {
    title: "Writing",
    time: "60 minutes",
    icon: PenTool,
    questions: "2 mandatory tasks",
    color: "amber",
    parts: [
      { name: "Task 1 (20 min / 150 words)", desc: "Describe data from a graph/chart/table/diagram (Academic) or write a letter (General)." },
      { name: "Task 2 (40 min / 250 words)", desc: "Write an essay in response to a point of view, argument, or problem." },
    ],
  },
  {
    title: "Speaking",
    time: "11–14 minutes",
    icon: MessageSquare,
    questions: "Face-to-face interview",
    color: "rose",
    parts: [
      { name: "Part 1", desc: "Introduction and general interview about yourself, home, family, work, and interests." },
      { name: "Part 2", desc: "Long turn — talk about a topic for up to 2 minutes after 1 minute of preparation." },
      { name: "Part 3", desc: "Two-way discussion about abstract ideas linked to the topic in Part 2." },
    ],
  },
]

const locations = [
  "Abeokuta", "Abuja", "Ajah", "Akure", "Asaba", "Benin", "Calabar",
  "Enugu", "Festac", "Lagos Mainland (Gbagada & Ikeja)", "Ibadan",
  "Ikorodu", "Lagos Island (Ikoyi)", "Ilorin", "Kano", "Osogbo",
  "Port Harcourt", "Surulere", "Uyo", "Warri", "Yaba",
]

const timetable = [
  { day: "Monday", morning: "09:00am – 11:00am", afternoon: "12:00noon – 02:00pm" },
  { day: "Tuesday", morning: "09:00am – 11:00am", afternoon: "12:00noon – 02:00pm" },
  { day: "Wednesday", morning: "Free (Assignment)", afternoon: "Free (Assignment)" },
  { day: "Thursday", morning: "09:00am – 11:00am", afternoon: "12:00noon – 02:00pm" },
  { day: "Friday", morning: "09:00am – 11:00am", afternoon: "12:00noon – 02:00pm" },
]

const trainingFees = [
  { duration: "1 Week", fee: "₦115,600.00" },
  { duration: "2 Weeks", fee: "₦186,200.00" },
  { duration: "1 Month", fee: "₦295,800.00" },
]

const sectionAccentColors = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  rose: "bg-rose-100 text-rose-700 border-rose-200",
}

function SectionHeading({ badge, title, highlight, description, center = true }) {
  return (
    <motion.div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 space-y-4`} {...fadeUp}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
        {title} <span className="text-red-600">{highlight}</span>
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 transition-colors font-medium"
    >
      {copied ? (
        <><Check className="w-3.5 h-3.5" /> Copied</>
      ) : (
        <><Copy className="w-3.5 h-3.5" /> Copy</>
      )}
    </button>
  )
}

function AccordionItem({ section, idx, isOpen, onToggle }) {
  const colorMap = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", icon: "text-blue-600", dot: "bg-blue-500" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", icon: "text-emerald-600", dot: "bg-emerald-500" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", icon: "text-amber-600", dot: "bg-amber-500" },
    rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", icon: "text-rose-600", dot: "bg-rose-500" },
  }
  const c = colorMap[section.color] || colorMap.blue

  return (
    <motion.div
      layout
      className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`shrink-0 w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center`}>
            <section.icon className={`w-5 h-5 ${c.icon}`} />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{section.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 mt-0.5">
              <Timer className="w-3.5 h-3.5" />
              {section.time}
              <span className="text-gray-300">•</span>
              <FileText className="w-3.5 h-3.5" />
              {section.questions}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 px-5 sm:px-6 py-5 space-y-4">
              {section.parts.map((part, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <div className={`shrink-0 w-1.5 h-1.5 rounded-full ${c.dot} mt-2`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{part.name}</p>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{part.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const IeltsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null)
  const [copied, setCopied] = useState(false)

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* ============================== HERO ============================== */}
      <section className="relative pt-28 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, black 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-100/30 to-transparent" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-red-200/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-lg shadow-red-200">
              <GraduationCap className="w-4 h-4" />
              IELTS Registration & Training
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight">
              IELTS{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Registration and Training
              </span>{' '}
              in Nigeria
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get expert preparation and registration support for your IELTS test.
              Comprehensive training programs designed to help you achieve your target score.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-md"
              >
                Speak to an Advisor
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                Weekly test dates
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                21+ locations nationwide
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-red-400" />
                Expert tutors
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== IELTS TYPES ============================== */}
      <section className="py-20 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Choose Your Test"
            title="Types of"
            highlight="IELTS"
            description="Select the right IELTS test based on your goals — whether it's university admission, professional registration, or UK visa requirements."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {ieltsTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center shadow-md`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {type.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-red-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* UKVI Section */}
          <motion.div {...fadeUp} className="mt-16">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-white px-6 py-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <Shield className="w-[18px] h-[18px] text-red-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">IELTS for UK Visas and Immigration (UKVI)</h3>
                  <p className="text-xs text-gray-500">UK government-approved Secure English Language Tests</p>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {ieltsUkviTypes.map((type, idx) => (
                  <div key={idx} className="px-6 py-3.5 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-gray-900">{type.title}</h4>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{type.description}</p>
                        {type.subItems && (
                          <div className="mt-3 pl-4 border-l-2 border-red-200 space-y-2.5">
                            {type.subItems.map((sub) => (
                              <div key={sub.level}>
                                <span className="text-xs font-semibold text-red-600">Life Skills {sub.level}:</span>
                                <p className="text-xs text-gray-500 mt-0.5">{sub.description}</p>
                              </div>
                            ))}
                            <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                              <p className="text-xs text-amber-800">
                                <strong>Note:</strong> If you have passed a UKVI Life Skills test within the last 2 years, do not retake the same test.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== STATS ============================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Test Info"
            title="Test Dates, Fees, and"
            highlight="Locations"
            description="Everything you need to know about scheduling your IELTS test in Nigeria."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">Flexible</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Test Dates</h3>
              <p className="text-sm text-gray-600">IELTS test dates are available almost every week, depending on your chosen location.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">21+ Locations</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Test Locations</h3>
              <div className="flex flex-wrap gap-1.5">
                {locations.map((loc) => (
                  <span key={loc} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                    {loc}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-100/50 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">One-time Fee</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Test Fee</h3>
              <p className="text-sm text-gray-500 mb-2">The cost of the IELTS Test is:</p>
              <p className="text-3xl font-bold text-red-600 tracking-tight">NGN 355,000</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================== REGISTRATION ============================== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Get Started"
            title="Registering for"
            highlight="IELTS"
            description="Follow these simple steps to register for your IELTS test."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-3 space-y-5"
            >
              <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">What You Need to Register</h3>
                <div className="space-y-4">
                  {[
                    { icon: BookMarked, text: <><strong>A valid passport.</strong> Your ID must be valid at the time of booking and on test day.</> },
                    { icon: Users, text: <>If you&apos;re <strong>under 18</strong>, your parents must register online on your behalf.</> },
                    { icon: Shield, text: <><strong>IELTS is not recommended</strong> for anyone under 16.</> },
                    { icon: FileText, text: <>Proof of payment to the designated account details below.</> },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mt-0.5">
                        <item.icon className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 text-white h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur">
                      <Building2 className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-lg font-bold">Payment Details</h3>
                  </div>

                  <div className="space-y-5">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1 font-medium">Bank Name</p>
                      <p className="text-base font-semibold flex items-center justify-between">
                        Guaranty Trust Bank Plc
                        <CopyButton text="Guaranty Trust Bank Plc" />
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1 font-medium">Account Name</p>
                      <p className="text-sm font-semibold flex items-center justify-between">
                        British American University Consultant Ltd
                        <CopyButton text="British American University Consultant Ltd" />
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1 font-medium">Account Number</p>
                      <p className="text-2xl font-bold text-red-400 flex items-center justify-between tracking-wider">
                        0154290855
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText("0154290855")
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2000)
                          }}
                          className="inline-flex items-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                          {copied ? (
                            <><Check className="w-3.5 h-3.5" /> Copied</>
                          ) : (
                            <><Copy className="w-3.5 h-3.5" /> Copy</>
                          )}
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      <strong className="text-red-400">NB:</strong> Use your full name (as in your passport) as the payment reference.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================== PREPARATION ============================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, black 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading
            badge="Expert Guidance"
            title="Preparing for Your"
            highlight="IELTS Test"
            description="Get ready for your IELTS Test with British AUC University Pathway Expert Tutors."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Group Classes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join a group class and learn alongside fellow test-takers. Our group sessions provide a collaborative learning environment where you can practice and improve together.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Private Sessions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Opt for a private session for one-on-one attention. In-house or online instruction with experienced instructors who will help you ace the test.
              </p>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-6">
            <div className="bg-gradient-to-r from-red-50 via-white to-amber-50 rounded-2xl border border-red-100 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our IELTS preparation classes will help you become familiar with the test format and boost your confidence in your English skills. Even if you&apos;re highly skilled in English, we still recommend that you prepare thoroughly for your test with our in-house or online experienced instructors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== TEST FORMAT ============================== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Test Structure"
            title="The IELTS"
            highlight="Test Format"
            description="The IELTS is built out of four core sections. Total test time: about <strong>2 hours and 44 minutes</strong>. Listening, Reading, and Writing are completed on the same day; Speaking may be scheduled separately."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {testFormat.map((section, idx) => (
              <motion.div key={section.title} variants={itemVariants}>
                <AccordionItem
                  section={section}
                  idx={idx}
                  isOpen={expandedSection === idx}
                  onToggle={() => setExpandedSection(expandedSection === idx ? null : idx)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================== TIMETABLE ============================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Schedule"
            title="IELTS"
            highlight="Lecture Time-Table"
            description="IELTS (International English Language Testing System) Lecture Schedule"
          />

          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Weekdays</th>
                      <th className="px-6 py-4 text-left font-semibold">Morning</th>
                      <th className="px-6 py-4 text-left font-semibold">Afternoon</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {timetable.map((row, idx) => (
                      <tr
                        key={row.day}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className={`px-6 py-4 font-semibold text-gray-900 ${
                          row.day === "Wednesday" ? "text-amber-700" : ""
                        }`}>
                          <div className="flex items-center gap-2">
                            {row.day === "Wednesday" && <Sun className="w-4 h-4 text-amber-500" />}
                            {row.day}
                          </div>
                        </td>
                        <td className={`px-6 py-4 ${
                          row.morning === "Free (Assignment)" ? "text-amber-600" : "text-gray-700"
                        }`}>{row.morning}</td>
                        <td className={`px-6 py-4 ${
                          row.afternoon === "Free (Assignment)" ? "text-amber-600" : "text-gray-700"
                        }`}>{row.afternoon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== TRAINING FEES ============================== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Investment"
            title="IELTS"
            highlight="Training Fees"
            description="Flexible training packages to suit your preparation needs."
          />

          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trainingFees.map((row, idx) => (
                <div
                  key={row.duration}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{row.duration}</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{row.fee}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== PAYMENT ============================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="How to Pay"
            title=""
            highlight="Payment Information"
            description="Make your payment using the details below."
          />

          <motion.div {...fadeUp} className="max-w-lg mx-auto">
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold">Bank Transfer Details</h3>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-1">
                  <p className="text-xs text-gray-400 font-medium">Bank</p>
                  <p className="text-base font-semibold">Guaranty Trust Bank Plc</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-1">
                  <p className="text-xs text-gray-400 font-medium">Account Name</p>
                  <p className="text-sm font-semibold">British American University Consultant Ltd</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                  <p className="text-xs text-gray-400 font-medium">Account Number</p>
                  <p className="text-2xl font-bold text-red-400 tracking-widest flex items-center justify-between">
                    0154290855
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("0154290855")
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="inline-flex items-center gap-1.5 text-sm bg-white/10 hover:bg-white/20 text-red-300 px-3 py-1.5 rounded-lg transition-all font-medium"
                    >
                      {copied ? (
                        <><Check className="w-3.5 h-3.5" /> Copied!</>
                      ) : (
                        <><Copy className="w-3.5 h-3.5" /> Copy Number</>
                      )}
                    </button>
                  </p>
                </div>

                <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <strong className="text-red-400">NB:</strong> Use your full name (as it appears in your passport) as the payment reference.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Need Help? Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-red-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Start Your Journey Today
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Ready to Ace Your{' '}
              <span className="text-red-400">IELTS?</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Register today and start your IELTS preparation journey with expert tutors.
              Achieve the score you need for your future.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5"
              >
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/10 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                Speak to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IeltsPage
