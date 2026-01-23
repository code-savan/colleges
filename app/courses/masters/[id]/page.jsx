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

// Temporary placeholder courses array (to be removed once coursesData is imported)
const degreeCoursesOld = [
  {
    id: "bsc-psychology",
    title: "BSc (Hons) Psychology",
    category: "Psychology & Social Sciences",
    award: "Undergraduate",
    locations: ["Birmingham", "Leeds", "London", "Manchester", "Online"],
    description: "Develop a deep understanding of human behavior and mental processes.",
    duration: "3 years full-time",
    mode: "Full-time / Part-time",
    overview: "Our BSc (Hons) Psychology degree provides comprehensive coverage of core psychological topics including cognitive psychology, developmental psychology, social psychology, and biological psychology. You'll gain practical research skills and theoretical knowledge that prepares you for a career in psychology or related fields.",
    keyFeatures: [
      "Accredited by the British Psychological Society (BPS)",
      "Hands-on research opportunities",
      "Expert faculty with industry experience",
      "State-of-the-art psychology laboratories",
      "Option to specialize in final year",
      "Work placement opportunities"
    ],
    careerPaths: [
      "Clinical Psychologist",
      "Educational Psychologist",
      "Counsellor",
      "Human Resources Specialist",
      "Research Assistant",
      "Mental Health Worker"
    ],
    entryRequirements: [
      "A-Level: ABB-BBC or equivalent",
      "International Baccalaureate: 30-32 points",
      "BTEC: DDM in a related subject",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  },
  {
    id: "bsc-psychology-counselling",
    title: "BSc (Hons) Psychology with Counselling",
    category: "Psychology & Social Sciences",
    award: "Undergraduate",
    locations: ["Birmingham", "Leeds", "London", "Manchester", "Online"],
    description: "Combine psychology with practical counselling skills.",
    duration: "3 years full-time",
    mode: "Full-time / Part-time",
    overview: "This degree combines the scientific study of psychology with the practical application of counselling skills. You'll learn evidence-based therapeutic approaches while developing a deep understanding of human behavior, making you well-prepared for careers in mental health and counselling.",
    keyFeatures: [
      "BPS accreditation pathway",
      "Counselling skills development",
      "Supervised practice placements",
      "Integration of theory and practice",
      "Small group tutorials",
      "Access to counselling supervision"
    ],
    careerPaths: [
      "Counsellor",
      "Psychotherapist",
      "Mental Health Practitioner",
      "Student Support Officer",
      "Community Support Worker",
      "Youth Worker"
    ],
    entryRequirements: [
      "A-Level: ABB-BBC or equivalent",
      "International Baccalaureate: 30-32 points",
      "BTEC: DDM in a related subject",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  },
  {
    id: "ba-business-management",
    title: "BA (Hons) Business Management",
    category: "Business & Management",
    award: "Undergraduate",
    locations: ["Berlin", "Birmingham", "Leeds", "London", "Manchester", "Nottingham", "Online"],
    description: "Build essential business leadership and management skills.",
    duration: "3 years full-time",
    mode: "Full-time / Part-time / Online",
    overview: "Our Business Management degree equips you with the skills and knowledge to excel in today's dynamic business environment. You'll study core business disciplines including marketing, finance, operations, and strategy, while developing leadership and entrepreneurial capabilities.",
    keyFeatures: [
      "Industry-recognized qualification",
      "Live business projects",
      "Guest lectures from business leaders",
      "International study opportunities",
      "Professional mentorship programme",
      "Entrepreneurship support"
    ],
    careerPaths: [
      "Business Manager",
      "Management Consultant",
      "Project Manager",
      "Business Analyst",
      "Operations Manager",
      "Entrepreneur"
    ],
    entryRequirements: [
      "A-Level: ABB-BBC or equivalent",
      "International Baccalaureate: 30-32 points",
      "BTEC: DDM in Business or related subject",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  },
  {
    id: "bsc-health-care-management",
    title: "BSc (Hons) Health and Care Management",
    category: "Health & Social Care",
    award: "Undergraduate",
    locations: ["Berlin", "Birmingham", "Leeds", "London", "Manchester", "Online"],
    description: "Lead and manage healthcare services effectively.",
    duration: "3 years full-time",
    mode: "Full-time / Part-time / Online",
    overview: "This degree prepares you for leadership roles in healthcare and social care settings. You'll develop management skills specific to the healthcare sector, understanding policy, finance, quality improvement, and patient-centered care delivery.",
    keyFeatures: [
      "Healthcare sector focus",
      "NHS and private sector insights",
      "Quality improvement methodologies",
      "Healthcare policy understanding",
      "Work-based learning opportunities",
      "Professional networking events"
    ],
    careerPaths: [
      "Healthcare Manager",
      "Hospital Administrator",
      "Care Home Manager",
      "Health Services Manager",
      "Clinical Operations Manager",
      "Healthcare Consultant"
    ],
    entryRequirements: [
      "A-Level: BBC-BCC or equivalent",
      "International Baccalaureate: 28-30 points",
      "BTEC: DMM in Health or related subject",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  },
  {
    id: "bsc-forensic-criminal-investigation",
    title: "BSc (Hons) Forensic and Criminal Investigation",
    category: "Criminology & Law",
    award: "Undergraduate",
    locations: ["Online"],
    description: "Master forensic techniques and criminal investigation methods.",
    duration: "3 years full-time",
    mode: "Online",
    overview: "Combine forensic science with criminal investigation in this cutting-edge degree. You'll learn evidence collection, analysis techniques, and investigative procedures used in modern law enforcement and forensic laboratories.",
    keyFeatures: [
      "Virtual forensic laboratory",
      "Crime scene simulation",
      "Expert practitioner input",
      "Latest forensic technologies",
      "Legal and ethical frameworks",
      "Research-informed teaching"
    ],
    careerPaths: [
      "Forensic Scientist",
      "Crime Scene Investigator",
      "Forensic Analyst",
      "Intelligence Analyst",
      "Police Officer",
      "Private Investigator"
    ],
    entryRequirements: [
      "A-Level: BBC-BCC or equivalent",
      "International Baccalaureate: 28-30 points",
      "BTEC: DMM in a related subject",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  },
  // Add more courses with full details as needed...
  // For brevity, I'll add abbreviated versions for the remaining courses
  {
    id: "bsc-policing-criminal-investigation",
    title: "BSc (Hons) Policing and Criminal Investigation",
    category: "Criminology & Law",
    award: "Undergraduate",
    locations: ["Online"],
    description: "Prepare for a career in policing and criminal justice.",
    duration: "3 years full-time",
    mode: "Online",
    overview: "This degree is designed for those aspiring to join or progress within policing and law enforcement. You'll study criminal law, investigation techniques, and police procedures while developing critical thinking and decision-making skills.",
    keyFeatures: [
      "Police service curriculum alignment",
      "Investigation methodologies",
      "Criminal justice system understanding",
      "Professional ethics training",
      "Case study analysis",
      "Policing research methods"
    ],
    careerPaths: [
      "Police Officer",
      "Detective",
      "Intelligence Officer",
      "Border Force Officer",
      "Prison Officer",
      "Security Manager"
    ],
    entryRequirements: [
      "A-Level: BBC-BCC or equivalent",
      "International Baccalaureate: 28-30 points",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  },
  {
    id: "llb-law",
    title: "LLB (Hons) Law",
    category: "Criminology & Law",
    award: "Undergraduate",
    locations: ["Birmingham", "London", "Manchester", "Online"],
    description: "Gain a comprehensive understanding of legal principles.",
    duration: "3 years full-time",
    mode: "Full-time / Part-time / Online",
    overview: "Our qualifying law degree provides you with comprehensive knowledge of the legal system and core legal principles. This degree is the first step towards becoming a practicing solicitor or barrister.",
    keyFeatures: [
      "Qualifying Law Degree (QLD)",
      "Mock courtroom facilities",
      "Legal clinic experience",
      "Professional skills development",
      "Expert legal practitioners teaching",
      "Mooting competitions"
    ],
    careerPaths: [
      "Solicitor",
      "Barrister",
      "Legal Advisor",
      "Paralegal",
      "Legal Consultant",
      "Compliance Officer"
    ],
    entryRequirements: [
      "A-Level: ABB-BBC or equivalent",
      "International Baccalaureate: 30-32 points",
      "English Language: IELTS 6.5 (no band less than 6.0)"
    ]
  },
  {
    id: "bsc-computing",
    title: "BSc (Hons) Computing",
    category: "Computing & Technology",
    award: "Undergraduate",
    locations: ["Berlin", "Birmingham", "Leeds", "London", "Manchester", "Online"],
    description: "Develop software engineering and computing expertise.",
    duration: "3 years full-time",
    mode: "Full-time / Part-time / Online",
    overview: "Gain practical computing skills and theoretical knowledge in software development, systems architecture, and emerging technologies. This degree prepares you for a successful career in the tech industry.",
    keyFeatures: [
      "Industry-standard technologies",
      "Software development projects",
      "Cloud computing experience",
      "Cybersecurity fundamentals",
      "AI and machine learning modules",
      "Industry placement opportunities"
    ],
    careerPaths: [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Web Developer",
      "Database Administrator",
      "DevOps Engineer"
    ],
    entryRequirements: [
      "A-Level: BBC-BCC or equivalent",
      "International Baccalaureate: 28-30 points",
      "English Language: IELTS 6.0 (no band less than 5.5)"
    ]
  }
  // Additional courses would follow the same pattern...
]

const CourseDetailPage = ({ params }) => {
  const courseId = params.id

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
                href="/courses/degree"
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
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/courses/masters"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          <AnimatedHero className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                {course.award}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                {course.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {course.title}
            </h1>

            <p className="text-xl text-white/90 max-w-3xl">
              {course.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Duration</div>
                  <div className="font-semibold">{course.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Study Mode</div>
                  <div className="font-semibold">{course.mode}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Qualification</div>
                  <div className="font-semibold">{course.award}</div>
                </div>
              </div>
            </div>
          </AnimatedHero>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Overview */}
              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-red-600" />
                  Course Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {course.overview}
                </p>
              </AnimatedSection>

              {/* Key Features */}
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Career Paths */}
              <AnimatedSection delay={0.3}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  Career Opportunities
                </h2>
                <p className="text-gray-700 mb-4">
                  Graduates of this programme can pursue various career paths including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.careerPaths.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100"
                    >
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Entry Requirements */}
              <AnimatedSection delay={0.4}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-red-600" />
                  Entry Requirements
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <ul className="space-y-3">
                    {course.entryRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Study Locations */}
                <AnimatedSection delay={0.2} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    Study Locations
                  </h3>
                  <div className="space-y-2">
                    {course.locations.map((location, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <Globe className="w-4 h-4 text-red-600" />
                        <span className="text-gray-700 font-medium">{location}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Apply Now Card */}
                <AnimatedSection delay={0.3} className="bg-linear-to-br from-red-600 to-red-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
                  <p className="text-white/90 mb-6 text-sm">
                    Start your application today and take the first step towards your future.
                  </p>
                  <Link
                    href="/apply"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Apply Now
                  </Link>
                  <Link
                    href="/admissions"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 mt-3"
                  >
                    Learn More
                  </Link>
                </AnimatedSection>

                {/* Contact Card */}
                <AnimatedSection delay={0.4} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Need More Information?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our admissions team is here to help answer your questions.
                  </p>
                  <Link
                    href="/admissions"
                    className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
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

export default CourseDetailPage
