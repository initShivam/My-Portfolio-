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
import { webview } from 'framer-motion/client';

export const PERSONAL_INFO = {
  name: "Shivam Singh",
  title: "Aspiring Data Analyst",
  tagline: "Turning Data into Business Insights",
  email: "initshivam@gmail.com",
  location: "Vapi, Gujarat, India",
  // Replace this URL with your actual profile picture path (e.g., "/profile.jpg" or a hosted URL)
  profileImage: "Untitled design (2).png", 
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
  url: "https://mail.google.com/mail/?view=cm&fs=1&to=initshivam@gmail.com",
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
      { name: "Machine Learning Basics (Theory)", level: 60 },
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
  },
  {
    title: "Web Devlopment",
    icon: webview,
    skills: [
      { name: "HTML5", level: 70 },
      { name: "CSS", level: 75 },
      { name: "BOOTSTRAP", level: 50 },
      { name: "Django (python)", level: 70 },
      { name: "Flask (python)", level: 60 },
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "CodSoft",
    date: "June 2025 - July 2025", 
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
  },
  {
    id: 4,
    role: "Data Analysis and Machine Learning Intern",
    company: "NIELIT",
    date: "sep 2022 - Sep 2022",
    location: "Daman and Diu",
    description: [
      "Applied Python, pandas, NumPy for data cleaning, manipulation, and visualization",
      "Conducted EDA to identify trends and supported ML model development using scikit-learn",
      "Gained practical experience in machine learning workflows and data-driven analysis"
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
  },
  {
    degree: "SSC (Secondary School Certificate)",
    school: "Gujarat Secondary and Higher Secondary Education Board",
    year: "2021"
  }
];

// Inferred projects based on skills since specific project details were light in PDF
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Super Sales Dashboard",
    description: "Built interactive sales dashboard analyzing revenue, profit by region, category, and time periodCleaned data with Power Query, designed star schema data model with fact/dimension tables Created DAX measures for KPIs (Total Sales, Profit Margin) identifying top products and underperforming regions",
    tags: ["Power BI", "DAX", "Data Storytelling"],
    image: "/superstoresales.png"
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    description: "An interactive Power BI dashboard tracking KPI reporting, sales trends, and customer retention metrics. Inspired by real-world retail data analysis.",
    tags: ["Power BI", "DAX", "Data Storytelling"],
    image: "/salesdashboard.png"
  },
  {
    id: 3,
    title: "To-Do-List",
    description: "This is a Flask-based To-Do List web application that allows users to register, log in, and manage tasks securely. The project demonstrates the use of Flask Blueprints, SQLAlchemy ORM, user authentication, and Jinja2 templates",
    tags: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP","FLASK"],
    image: "/Todolist.png"
  },
  {
    id: 4,
    title: "Django Expense Tracker Application",
    description: "A Django-based Expense Tracker web application that helps users track income, expenses, and current balance with secure authentication. The project demonstrates Django fundamentals such as models, views, authentication, admin customization, and ORM aggregation",
    tags: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP","FLASK"],
    image: "/expense.png"
  }
];