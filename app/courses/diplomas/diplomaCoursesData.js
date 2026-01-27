// Shared course data for diploma programmes
export const diplomaCourses = [
  {
    id: "diploma-information-technology",
    title: "Diploma in Information Technology",
    category: "Computing & Technology",
    award: "Level 3 Diploma",
    locations: ["British AUC University Study Centre, Abuja, Nigeria"],
    description: "Are you looking to start your career in IT? The Level 3 Foundation Diploma in Information Technology is a 60-credit qualification. The objective of the course is to equip learners with the skills and knowledge required to work in the IT sector or to progress to further study.",
    duration: "6 - 9 months",
    mode: "Full-time",
    cost: "£2,500",
    scholarship: "40% Scholarship",
    paymentPlan: "Enrol with a £500 deposit and then £250 a month for 4 months, interest-free.",
    overview: "Businesses need IT to remain competitive and deliver the best products and services to their customers. As more businesses discover ways to leverage technology to their advantage, the demand for trained, specialised IT professionals continues to grow.\n\nThis qualification is designed to ensure that each learner has the opportunity to build sector knowledge and develop current skills and practices in areas such as computer systems, networks, coding, website development, mobile communications, cybersecurity, and social media for business.",
    keyFeatures: [
      "60-credit OTHM qualification",
      "Ofqual approved certification",
      "Flexible study schedule",
      "Start at any time",
      "40 hours guided learning per module",
      "30-50 hours optional materials per module",
      "Top-up to bachelor's degree available"
    ],
    modules: [
      {
        title: "Computer Systems",
        topics: [
          "Understand the purpose of computer systems",
          "Understand the purpose of computer system components",
          "Be able to configure computer systems"
        ]
      },
      {
        title: "Coding and Website Development",
        topics: [
          "Understand the purpose and types of coding",
          "Understand web architecture and components",
          "Be able to create interactive websites"
        ]
      },
      {
        title: "Networks",
        topics: [
          "Understand networking principles",
          "Understand how network hardware and software components are connected",
          "Understand the usage and security concerns related to networking"
        ]
      },
      {
        title: "Mobile Communications",
        topics: [
          "Understand the uses and features of mobile communication devices",
          "Understand the communication technologies used in mobile devices",
          "Understand the implications of mobile communications technology"
        ]
      },
      {
        title: "Cyber Security",
        topics: [
          "Understand cyber security",
          "Understand core terminology and key aspects of cyber security",
          "Understand cyber threat intelligence"
        ]
      },
      {
        title: "Social Media for Business",
        topics: [
          "Understand the importance of using social media in a business environment",
          "Understand the need for social media content planning and publishing in a business environment",
          "Be able to develop a policy and a plan to use social media in a business environment"
        ]
      }
    ],
    assignments: [
      "Computer systems",
      "Coding and website development",
      "Networks",
      "Mobile communication",
      "Cyber security",
      "Social media for business"
    ],
    howItWorks: "Students on our IT course can complete a Level 3 (60-credit) OTHM diploma, designed to equip them with the skills needed to succeed in the IT industry.\n\nThe course is completed at the British AUC University Study Centre, and you can start at any time; it's completely flexible. Each module consists of 40 hours of guided learning, with an additional 30-50 hours of optional materials, including recommended exercises, readings, digital resources, and self-test tasks.\n\nThe Diploma in Information Technology course consists of 6 modules and 6 written assignments. Each module includes 40 guided learning hours of material, with an additional 30 to 50 hours of optional materials comprising recommended exercises, readings, internet resources, and self-testing exercises. Assignments are approximately 2,000-3,000 words each.\n\nOnce you've passed your course, you'll be awarded an OTHM diploma, an Ofqual (Office of Qualifications and Examinations Regulation) approved qualification, and you'll be able to top up your qualification to a bachelor's degree at a range of UK universities.",
    awardingBody: {
      name: "OTHM",
      description: "OTHM is a UK-based Awarding Organisation regulated by Ofqual (Office of the Qualifications and Examinations Regulation).",
      regulator: "Ofqual (Office of Qualifications and Examinations Regulation) is the UK government body that regulates qualifications, exams, and assessments in England, ensuring they are high-quality, fair, and trusted, overseeing everything from GCSEs/A-Levels to vocational qualifications, maintaining standards, and building public confidence in the education system."
    },
    careerPaths: [
      "Junior Python Developer",
      "Trainee Software Developer",
      "IT Support Technician",
      "Software Support Assistant",
      "Digital Support Officer",
      "Data Assistant",
      "Automation or System Support Assistant"
    ],
    careerProspectDescription: "Whilst studying this course, students will develop their skills in programming, systems analysis and design, and software development. Upon successful completion of the course, students can pursue a career in IT within the public or private sector.",
    universityProgression: {
      description: "Upon completing this course, students can progress to a full BA or BSc degree programme at a variety of UK universities.",
      universities: [
        "Coventry University",
        "Anglia Ruskin University",
        "London Metropolitan University",
        "University of Derby",
        "Middlesex University"
      ]
    },
    entryRequirements: [
      "Must be at least 16 years old",
      "Full secondary education required",
      "Alternative entry based on work experience if secondary education not completed"
    ]
  }
]

// Get unique categories
export const categories = [...new Set(diplomaCourses.map(course => course.category))]
