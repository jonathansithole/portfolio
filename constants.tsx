import { Project, ProjectType, TechnicalFocus, Experience } from './types';

export const TECH_STACK = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
  Backend: ['Node.js', 'PostgreSQL', 'AWS', 'Express', 'REST APIs', 'Spring Boot', 'PHP', 'Java'],
  Tools: [
    'Docker',
    'ESLint',
    'CI/CD',
    'Git',
    'GitHub',
    'AnyDesk',
    'TeamViewer',
    'VS Code',
    'Jira',
    'CloudWatch'
  ],
  Database: [
    'MySQL',
    'PostgreSQL',
    'Firebase Firestore',
    'Firebase Realtime Database',
    'Firebase Authentication',
    'Cloud Functions',
    'pgAdmin',
    'Microsoft Access',
    'phpMyAdmin',
    'SQL'
  ],
  Additional: ['API Development', 'Computer Repair & Support', 'Software Testing']
};

export const CORE_SKILLS = [
  'Teaching & Learning Support',
  'Effective Communication & Interpersonal Skills',
  'Digital literacy and e-learning technologies',
  'Time management and organizational skills',
  'Critical thinking and problem-solving',
  'Multilingual language proficiency',
  'Data organization and analysis',
  'Research & Academic Writing'
];

export const EDUCATION = [
  {
    qualification: 'Master of Commerce in Informatics with Information Systems',
    institution: 'North-West University',
    period: 'In Progress'
  },
  {
    qualification: 'Bachelor of Commerce Honours in Information Systems',
    institution: 'North-West University',
    year: '2023'
  },
  {
    qualification: 'Bachelor of Commerce in Information Systems',
    institution: 'North-West University',
    year: '2022'
  }
];

export const PROJECT_EXPERIENCE = [
     {
    id: 'gamification',
    title: 'Gamified Java Learning Platform',
    year: '2025',
    link: 'https://gamificationproject-fea30.firebaseapp.com/', 
    repo: 'https://github.com/jonathansithole/java-realm', 
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'NoSQL', 'Design Science Research'],
    images: [
      '/images/gamification-home.png',
      '/images/gamification-leaderboard.png',
      '/images/gamification-modules.png'
    ],
    highlights: [
      'Developed a web-based learning environment designed to combat high attrition rates in undergraduate Java programming courses',
      'Implemented core gamification mechanics including points, digital badges, and real-time leaderboards using Firebase Realtime Database',
      'Applied Design Science Research (DSR) methodology to iteratively refine the application based on student feedback and engagement metrics',
      'Integrated personalized feedback loops to enhance self-efficacy and knowledge retention for complex Object-Oriented Programming (OOP) concepts'
    ]
  },
  {
    id: 'healthconnect',
      title: 'HealthConnectSA (Hospital Floor Management System)',
    year: '2024',
      link: 'https://healthconnectsa.rf.gd/', 
    repo: 'https://github.com/jonathansithole/healthconnect',
    images: [
      '/images/healthconnecthome.png',
      '/images/healthconnectdashboard.png', 
      '/images/healthconnectvitals.png'
      
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Agile'],
    highlights: [
      'Developed a cloud-based healthcare platform to address patient record silos in South African public hospitals',
      'Implemented Role-Based Access Control (RBAC) for Doctors, Nurses, and Admins to ensure POPIA/HIPAA compliance',
      'Engineered critical modules for Patient Admissions, Real-Time Vitals Monitoring with alert triggers, and Medication Management',
      'Designed a normalized MySQL database to handle complex relationships between patient history, lab results, and appointments',
      'Utilized Agile methodology with user stories to iterate on features like automated discharge summaries and secure login authentication'
    ]
  },
    {
  id: 'wolmerdaycare',
  title: 'Wolmer Clever Kids Day & After Care Website',
  year: '2024',
  link: 'https://wolmerdaycare.free.nf/?i=1',
  repo: '',
  images: [
    '/images/wolmerhome.png'
   
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  highlights: [
    'Designed and developed a website for Wolmer Clever Kids Day & After Care, a local childcare facility, to establish a professional online presence',
    'Showcased key information including programs offered, age groups, operating hours, and contact details for parents and guardians',
    'Implemented a clean, responsive layout to ensure accessibility across mobile, tablet, and desktop devices',
    'Improved parent engagement by centralising enquiries and daycare information through a simple and user-friendly web interface'
  ]
}


];

export const WORK_EXPERIENCE = [
  {
    role: 'Junior Web Developer',
    company: 'Kaributech AI',
    period: 'Dec 2022 – Apr 2023',
    highlights: [
      'Developed APIs in Spring Boot to streamline processes',
      'Implemented AWS Lambda functions in Python for efficiency',
      'Created and maintained database schemas using pgAdmin',
      'Deployed serverless functions on AWS',
      'Used Jira for project reporting and CloudWatch for debugging'
    ]
  },
  {
    role: 'Waitron',
    company: 'Spur Steak Ranches – Nina Park, Pretoria',
    period: '2018 – 2019',
    highlights: [
      'Managed customer relationships and enhanced dining experiences',
      'Compiled and analysed sales reports',
      'Ensured efficient order processing and customer satisfaction'
    ]
  },
  {
    role: 'Founder & PC Technician',
    company: 'Tech Plug',
    period: '2019 – Present',
    highlights: [
      'Completed 100+ Windows installations and upgrades',
      'Provided remote support using AnyDesk and TeamViewer',
      'Performed data recovery and hardware diagnostics',
      'Managed client communication and service delivery'
    ]
  },
  {
    role: 'Reading Development Assistant',
    company: 'North-West University',
    period: '2025 – Present',
    highlights: [
      'Assisted with tracking attendance and academic progress',
      'Provided individual support to students',
      'Coordinated communication between students and facilitators'
    ]
  }
];

export const CERTIFICATIONS = [
  'Problem-Solving Certification (IBM)'
];
