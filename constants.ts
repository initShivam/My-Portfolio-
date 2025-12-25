import { 
  Database, 
  Code2, 
  BarChart3, 
  Linkedin, 
  Mail, 
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { ExperienceItem, Project, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Shivam Singh",
  title: "Aspiring Data Analyst",
  tagline: "Turning Data into Business Insights",
  email: "initshivam@gmail.com",
  location: "Vapi, Gujarat, India",
  // Replace this URL with your actual profile picture path (e.g., "/profile.jpg" or a hosted URL)
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80", 
  // Replace with your actual resume PDF URL
  resumeUrl: "/resume.pdf", 
  summary: "I am an aspiring Data Analyst with a strong foundation in Python, SQL, Exploratory Data Analysis (EDA), and Power BI. Passionate about transforming raw data into meaningful business insights. My strength lies in consistent practice, hands-on learning, and a curiosity about real-world data problems.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/initshivam",
    icon: Linkedin
  },
  {
    platform: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Data Analysis",
    icon: BarChart3,
    skills: [
      { name: "Power BI & Dashboards", level: 85 },
      { name: "EDA (Exploratory Data Analysis)", level: 90 },
      { name: "Data Visualization", level: 85 },
      { name: "Statistical Analysis", level: 75 },
    ]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python (Pandas, NumPy)", level: 85 },
      { name: "Matplotlib & Seaborn", level: 80 },
      { name: "Machine Learning Basics", level: 60 },
    ]
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      { name: "SQL (Joins, CTEs)", level: 80 },
      { name: "Window Functions", level: 75 },
      { name: "Data Cleaning", level: 85 },
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "CodSoft",
    date: "June 2025 - Present", // Adjusting based on resume text which might be future dated or typo
    location: "Remote",
    description: [
      "Working on data science projects involving data cleaning and model building.",
      "Collaborating with peers to solve predictive analysis problems."
    ]
  },
  {
    id: 2,
    role: "Sales Executive",
    company: "Pulse Fitness GYM",
    date: "Mar 2024 - Aug 2024",
    location: "Vapi, Gujarat",
    description: [
      "Monitored and analyzed sales performance to identify areas for improvement.",
      "Developed strong customer relationships resulting in enhanced retention.",
      "Played a key role in increasing sales by implementing effective strategies."
    ]
  },
  {
    id: 3,
    role: "Networking Intern",
    company: "NIELIT",
    date: "July 2023 - Sep 2023",
    location: "Daman and Diu",
    description: [
      "Learned network configuration and troubleshooting.",
      "Collaborated with the team on IT infrastructure maintenance."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology - Computer Science",
    school: "RGPV University",
    year: "2024 - 2027"
  },
  {
    degree: "Diploma in Information Technology",
    school: "Gujarat Technological University",
    year: "2021 - 2024"
  }
];

// Inferred projects based on skills since specific project details were light in PDF
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    description: "An interactive Power BI dashboard tracking KPI reporting, sales trends, and customer retention metrics. Inspired by real-world retail data analysis.",
    tags: ["Power BI", "DAX", "Data Storytelling"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Exploratory Data Analysis (EDA) using Python to identify patterns in customer behavior and predict potential churn risks using statistical methods.",
    tags: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Retail Inventory SQL Analysis",
    description: "Complex SQL queries using CTEs and Window Functions to optimize inventory levels and analyze product performance across different regions.",
    tags: ["SQL", "Database Design", "Data Optimization"],
    image: "https://picsum.photos/600/400?random=3"
  }
];