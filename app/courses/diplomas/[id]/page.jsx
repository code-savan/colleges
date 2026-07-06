import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer'
import {
  GraduationCap,
  MapPin,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Globe,
  Building2,
  DollarSign,
  TrendingUp,
  ChevronRight
} from 'lucide-react'
import { diplomaCourses } from '../diplomaCoursesData'
import { AnimatedSection, AnimatedHero } from './ClientWrapper'

export function generateStaticParams() {
  return diplomaCourses.map((course) => ({
    id: course.id,
  }))
}

const DiplomaDetailPage = async ({ params }) => {
  const resolvedParams = await params
  const courseId = resolvedParams.id

  const course = diplomaCourses.find(c => c.id === courseId)

  if (!course) {
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <NavBar />
        <div className="pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Details Coming Soon</h1>
              <p className="text-gray-600 mb-8">
                Detailed information for this course will be available soon. Course ID: {courseId}
              </p>
              <Link
                href="/courses/diplomas"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Diplomas
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full">
      <NavBar />

      {/* Hero Section with Background Image */}
      <section className="relative pt-20 pb-16 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://arden.ac.uk/themes/arden/images/styles/course_hero_1440px_x2/public/2022-04/node_3721.webp"
            alt={course.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:from-black/70 lg:via-black/50 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 min-h-[400px] lg:h-[500px]">
          <Link
            href="/courses/diplomas"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-6 lg:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to All Diplomas</span>
          </Link>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative lg:h-full">
            {/* Left: Course Title */}
            <AnimatedHero className="flex-1 lg:absolute lg:bottom-10 w-full lg:w-auto">
              <div className="mb-4 lg:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 lg:mb-4 leading-tight md:w-[70%]">
                  {course.title}
                </h1>
              </div>

              {/* Breadcrumb */}
              <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80">
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                <span>→</span>
                <Link href="/courses/diplomas" className="hover:text-white transition-colors">COURSES</Link>
                <span>→</span>
                <Link href="/courses/diplomas" className="hover:text-white transition-colors">DIPLOMA</Link>
                <span>→</span>
                <span className="text-white font-medium">INFORMATION TECHNOLOGY</span>
              </nav>
            </AnimatedHero>

            {/* Right: Floating Summary Card */}
            <AnimatedSection delay={0.2} className="w-full lg:w-[450px] shrink-0 lg:absolute lg:right-0 lg:-bottom-10 mt-6 lg:mt-0">
              <div className="bg-white shadow-xl lg:shadow-2xl p-5 sm:p-6 rounded-lg lg:rounded-none">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Summary</h2>

                {/* Study Level */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1">Study Level</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">{course.award}</p>
                </div>

                {/* Award */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1">Award</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">Diploma</p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Duration */}
                  <div>
                    <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">{course.duration}</p>
                  </div>

                  {/* Cost */}
                  <div>
                    <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1">Cost</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 line-through">€5,950</span>
                      <span className="text-base sm:text-lg font-bold text-gray-900">€3,570</span>
                    </div>
                    <div className="text-xs text-green-600 font-semibold">Save 40%</div>
                  </div>
                </div>

                {/* Delivery Mode */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1">Delivery Mode</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">British AUC University Study Centre, Blended-Learning, Online</p>
                </div>

                {/* Apply Button */}
                <Link
                  href="/apply"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 mb-3 shadow-lg"
                >
                  Apply today
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>

                {/* Speak to Advisor Button */}
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
                >
                  Speak to an advisor
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <AnimatedSection delay={0.1} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  Course Overview
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                  {course.overview}
                </p>
              </AnimatedSection>

              {/* Key Features */}
              <AnimatedSection delay={0.2} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gray-600" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Course Modules */}
              <AnimatedSection delay={0.3} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  Course Modules
                </h2>
                <p className="text-gray-700 text-sm mb-6">
                  The Level 3 Diploma in Information Technology has 6 modules:
                </p>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Assignments */}
              <AnimatedSection delay={0.35} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  Assignments
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                  Students need to complete the following assignment unit titles for the Level 3 course:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.assignments.map((assignment, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-xs font-bold rounded-full shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 text-sm font-medium">{assignment}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* How It Works */}
              <AnimatedSection delay={0.4} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-600" />
                  How It Works
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                  {course.howItWorks}
                </p>
              </AnimatedSection>

              {/* Awarding Body */}
              <AnimatedSection delay={0.45} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-gray-600" />
                  Awarding Body
                </h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.awardingBody.name}</h3>
                  <p className="text-gray-700 text-sm mb-3">{course.awardingBody.description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{course.awardingBody.regulator}</p>
                </div>
              </AnimatedSection>

              {/* Career Prospects */}
              <AnimatedSection delay={0.5} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  Career Prospects
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {course.careerProspectDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.careerPaths.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" />
                      <span className="text-gray-800 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* University Progression */}
              <AnimatedSection delay={0.55} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-600" />
                  University Progression
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                  {course.universityProgression.description}
                </p>
                <p className="text-gray-900 font-semibold text-sm mb-3">Some examples include:</p>
                <ul className="space-y-2">
                  {course.universityProgression.universities.map((university, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                      <ChevronRight className="w-4 h-4 text-purple-600 shrink-0" />
                      {university}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Entry Requirements */}
              <AnimatedSection delay={0.6} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  Entry Requirements
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-900 font-semibold text-sm mb-3">Am I eligible for this programme?</p>
                  <ul className="space-y-3">
                    {course.entryRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Scholarship & Payment Info */}
                <AnimatedSection delay={0.2} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    Scholarship & Payment
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-green-700 font-semibold">Special Offer</span>
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">-40%</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-400 line-through">€5,950</span>
                        <span className="text-xl font-bold text-green-900">€3,570</span>
                      </div>
                      <p className="text-xs text-green-700">/year · Limited time discount</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-600 font-semibold mb-2">PAYMENT PLAN</div>
                      <p className="text-sm text-gray-700 leading-relaxed">{course.paymentPlan}</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Apply Now Card */}
                <AnimatedSection delay={0.3} className="bg-gray-900 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Start your application today and take the first step towards your future.
                  </p>
                  <Link
                    href="/apply"
                    className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 mb-3"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Apply Now
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </AnimatedSection>

                {/* Need More Info Card */}
                <AnimatedSection delay={0.4} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Need More Information?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our admissions team is here to help answer your questions.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DiplomaDetailPage
