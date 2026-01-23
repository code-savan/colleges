import React from 'react'
import Link from 'next/link'
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
  Globe
} from 'lucide-react'
import { masterCourses } from '../../degrees/masterCoursesData'
import { AnimatedSection, AnimatedHero } from './ClientWrapper'

// This function generates the static params for all master's course pages
export function generateStaticParams() {
  return masterCourses.map((course) => ({
    id: course.id,
  }))
}

const CourseDetailPage = async ({ params }) => {
  const resolvedParams = await params
  const courseId = resolvedParams.id

  // Find the course
  const course = masterCourses.find(c => c.id === courseId)

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
                href="/courses/masters"
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
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />

      {/* Hero Section - Clean and Simple */}
      <section className="relative bg-white border-b border-gray-200 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/courses/masters"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to All Courses</span>
          </Link>

          <AnimatedHero>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {course.award}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {course.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {course.title}
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mb-8">
              {course.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Clock className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-xs text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-900">{course.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-xs text-gray-500">Study Mode</div>
                  <div className="font-semibold text-gray-900">{course.mode}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Award className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-xs text-gray-500">Qualification</div>
                  <div className="font-semibold text-gray-900">{course.award}</div>
                </div>
              </div>
            </div>
          </AnimatedHero>
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
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                  Course Overview
                </h2>
                  <p className="text-gray-700 leading-relaxed text-sm">
                  {course.overview}
                </p>
                </div>
              </AnimatedSection>

              {/* Key Features */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-600" />
                  Key Features
                </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                        className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                        <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Career Paths */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-600" />
                  Career Opportunities
                </h2>
                  <p className="text-gray-700 mb-4 text-sm">
                  Graduates of this programme can pursue various career paths including:
                </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.careerPaths.map((career, index) => (
                    <div
                      key={index}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{career}</span>
                    </div>
                  ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Entry Requirements */}
              <AnimatedSection delay={0.4}>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-600" />
                  Entry Requirements
                </h2>
                  <ul className="space-y-2">
                    {course.entryRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                {/* Study Locations */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-600" />
                    Study Locations
                  </h3>
                  <div className="space-y-2">
                    {course.locations.map((location, index) => (
                      <div
                        key={index}
                          className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                          <Globe className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{location}</span>
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
