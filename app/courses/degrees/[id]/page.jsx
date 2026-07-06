import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer'
import {
  GraduationCap,
  MapPin,
  Clock,
  Calendar,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Globe,
  Briefcase,
  BookMarked,
  UserCheck,
  Building2,
  Sparkles
} from 'lucide-react'
import { degreeCourses } from '../coursesData'
import { AnimatedSection, AnimatedHero } from './ClientWrapper'

// This function generates the static params for all course pages
export function generateStaticParams() {
  return degreeCourses.map((course) => ({
    id: course.id,
  }))
}

const CourseDetailPage = async ({ params }) => {
  const resolvedParams = await params
  const courseId = resolvedParams.id

  // Find the course
  const course = degreeCourses.find(c => c.id === courseId)

  // If course not found, show a default/placeholder
  if (!course) {
    return (
      <div className="min-h-screen w-full bg-white">
        <NavBar />
        <div className="pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Details Coming Soon</h1>
              <p className="text-gray-600 mb-8">
                Detailed information for this course will be available soon. Course ID: {courseId}
              </p>
              <Link
                href="/courses/degrees"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Courses
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full ">
      <NavBar />

      {/* Hero Section with Background Image */}
      <section className="relative pt-20 pb-16 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={
              course.id === 'llb-law'
                ? "https://arden.ac.uk/themes/arden/images/styles/course_hero_1440px_x2/public/2021-03/node_1545.webp"
                : "https://arden.ac.uk/themes/arden/images/styles/course_hero_1440px_x2/public/2022-04/node_3721.webp"
            }
            alt={course.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:from-black/70 lg:via-black/50 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 min-h-[400px] lg:h-[500px]">
          <Link
            href="/courses/degrees"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-6 lg:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to All Courses</span>
          </Link>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative lg:h-full">
            {/* Left: Course Title */}
            <AnimatedHero className="flex-1 lg:absolute lg:bottom-10 w-full lg:w-auto">
              <div className="mb-4 lg:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                  {course.title}
                </h1>
              </div>

              {/* Breadcrumb */}
              <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80">
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                <span>→</span>
                <Link href="/courses/degrees" className="hover:text-white transition-colors">COURSES</Link>
                <span>→</span>
                <Link href="/courses/degrees" className="hover:text-white transition-colors">UNDERGRADUATE</Link>
                <span>→</span>
                <span className="text-white font-medium">LAW DEGREE</span>
              </nav>
            </AnimatedHero>

            {/* Right: Floating Summary Card */}
            <AnimatedSection delay={0.2} className="w-full lg:w-[450px] shrink-0 lg:absolute lg:right-0 lg:-bottom-10 mt-6 lg:mt-0">
              <div className="bg-white shadow-xl lg:shadow-2xl p-5 sm:p-6 rounded-lg lg:rounded-none">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Summary</h2>

                {/* Study Level */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Study Level</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">{course.award}</p>
                </div>

                {/* Award */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Award</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">Degree</p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {/* Full Time */}
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Full Time</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">{course.duration}</p>
                  </div>

                  {/* Part Time */}
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Part Time</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">{course.duration}+</p>
                  </div>
                </div>

                {/* Delivery Mode */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Delivery Mode</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">British AUC University Study Centre, Blended-Learning, Online</p>
                </div>

                {/* Apply Button */}
                <Link
                  href="/apply"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 mb-3 shadow-lg"
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                  Course Overview
                </h2>
                  <div className="text-gray-700 leading-relaxed space-y-3 text-sm font-medium">
                    {course.overview.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Modules Section */}
              {course.modules && (
                <AnimatedSection delay={0.15}>
                  <div className="bg-white rounded-lg">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookMarked className="w-5 h-5 text-gray-600" />
                      Course Structure
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <p className="text-gray-700 text-sm font-medium">
                          With this professionally focused law degree, you&apos;ll learn practical skills for your future employability. At the start of level 6, you will have the opportunity to select a degree pathway that aligns with your career goals.
                        </p>
                      </div>

                      {/* Level 4 */}
                      <div className="rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{course.modules.level4.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.modules.level4.courses.map((module, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm font-medium">
                              <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                              <span className="text-gray-700">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Level 5 */}
                      <div className="rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{course.modules.level5.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.modules.level5.courses.map((module, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm font-medium">
                              <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                              <span className="text-gray-700">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Level 6 Pathways */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">{course.modules.level6.title}</h3>

                        {course.modules.level6.pathways.map((pathway, idx) => (
                          <div key={idx} className="rounded-lg">
                            <h4 className="text-base font-bold text-gray-900 mb-3">{pathway.name}</h4>

                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-600 mb-2">Core modules:</p>
                              <div className="space-y-1">
                                {pathway.core.map((module, mIdx) => (
                                  <div key={mIdx} className="flex items-start gap-2 text-sm pl-3 font-medium">
                                    <span className="text-gray-500">•</span>
                                    <span className="text-gray-700">{module}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {pathway.optional && (
                              <div>
                                <p className="text-xs font-semibold text-gray-600 mb-2">Optional modules:</p>
                                <div className="space-y-2 pl-3">
                                  {Object.entries(pathway.optional).map(([block, modules], bIdx) => (
                                    <div key={bIdx}>
                                      <p className="text-xs text-gray-500 mb-1">{block.replace(/([A-Z])/g, ' $1').trim()}:</p>
                                      <div className="space-y-1 pl-3">
                                        {modules.map((module, mIdx) => (
                                          <div key={mIdx} className="flex items-start gap-2 text-sm font-medium">
                                            <span className="text-gray-400">▪</span>
                                            <span className="text-gray-600">{module}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                          <p className="text-xs text-gray-700 font-medium">
                            <strong>Note:</strong> If you decide not to opt for one of the designated pathways, you will automatically be placed on the SQE path with the EU Law and Legal Dissertation modules.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Key Features */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gray-600" />
                  Key Features
                </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Study and Career Support */}
              {course.support && (
                <AnimatedSection delay={0.25}>
                  <div className="bg-white rounded-lg">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-gray-600" />
                      Study and Career Support
                    </h2>
                    <div className="space-y-4">
                      {course.support.map((item, idx) => (
                        <div key={idx} className="rounded-lg">
                          <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed font-medium">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Career Paths */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-gray-600" />
                    Career Prospects
                </h2>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      A law degree provides you with a wide range of transferable skills that can be used in a variety of professions. You&apos;ll learn how to research and critically analyse information, communicate effectively, and reach reasoned conclusions.
                </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.careerPaths.map((career, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{career}</span>
                    </div>
                  ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Meet the Faculty */}
              {course.faculty && (
                <AnimatedSection delay={0.35}>
                  <div className="bg-white rounded-lg">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-600" />
                      Meet the Faculty
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      {course.id === 'llb-law' ? (
                        <div className="relative w-40 h-50 shrink-0 rounded-lg overflow-hidden border border-gray-200">
                          <Image
                            src="/llb-law.png"
                            alt={course.faculty.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                          <Users className="w-12 h-12 text-gray-400" />
                        </div>
                      )}

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{course.faculty.name}</h3>
                        <p className="text-gray-600 font-medium mb-3 text-sm">{course.faculty.title}</p>
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">{course.faculty.bio}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Industry Partnership */}
              {course.industryPartnership && (
                <AnimatedSection delay={0.4}>
                  <div className="bg-white rounded-lg">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-600" />
                      Industry Skills
                    </h2>
                    <div className="rounded-lg">
                      <h3 className="text-base font-bold text-gray-900 mb-2">{course.industryPartnership.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">{course.industryPartnership.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Entry Requirements */}
              <AnimatedSection delay={0.45}>
                <div className="bg-white rounded-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-600" />
                  Entry Requirements
                </h2>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
                    Arden University considers applications on a case by case basis. If you have significant work experience, qualifications gained elsewhere, or a degree that isn&apos;t a clear pathway to this degree - we are happy to discuss your application.
                  </p>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Eligibility</h3>
                  <ul className="space-y-2">
                    {course.entryRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                {/* Delivery Mode */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      Delivery Mode
                  </h3>
                  <div className="space-y-2">
                    {["British AUC University Study Centre", "Blended-Learning", "Online"].map((mode, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <Globe className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{mode}</span>
                      </div>
                    ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Apply Now Card */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-gray-900 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">Ready to Apply?</h3>
                    <p className="text-gray-300 mb-4 text-sm">
                    Start your application today and take the first step towards your future.
                  </p>
                  <Link
                    href="/apply"
                      className="w-full inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 mb-2"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Apply Now
                  </Link>
                  <Link
                    href="/admissions"
                      className="w-full inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                  </div>
                </AnimatedSection>

                {/* Contact Card */}
                <AnimatedSection delay={0.4}>
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-2">Need More Information?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our admissions team is here to help answer your questions.
                  </p>
                  <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                  </div>
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

export default CourseDetailPage
