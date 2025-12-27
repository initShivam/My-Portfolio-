import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronDown, 
  Send, 
  ExternalLink, 
  Github, 
  Download,
  MapPin,
  Mail,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, SOCIAL_LINKS, EDUCATION } from './constants';
import ChatBot from './ChatBot';

// --- Utility Components ---

const SectionTitle = ({ children, subtitle }: { children?: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark-bg/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">
            SS<span className="text-slate-900 dark:text-white">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-slate-100 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-800 dark:text-slate-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.tagline}. I transform raw data into 
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> actionable stories</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-primary-500/25"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href= "/resume.pdf" 
                target="_blank"
                download
                className="px-8 py-3 rounded-full bg-transparent border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} /> Resume
              </a>
            </div>

            <div className="mt-12 flex gap-6 justify-center lg:justify-start text-slate-500 dark:text-slate-400">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <link.icon size={28} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Profile Image Section */}
        <div className="flex-1 relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-600 rounded-[50%] rotate-6 opacity-30 blur-2xl animate-pulse" />
              <div className="relative aspect-[3/3] w-[350px] rounded-[50%]  overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                 <img 
                   src={PERSONAL_INFO.profileImage} 
                   alt={PERSONAL_INFO.name} 
                   className="w-full h-full object-relative"
                 />
              </div>
            </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-card transition-colors duration-300">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionTitle subtitle="A little more about who I am and what I do.">About Me</SectionTitle>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-slate-50 dark:bg-dark-bg rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800"
         >
           <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-center">
             {PERSONAL_INFO.summary}
           </p>
         </motion.div>
       </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0b1121] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My technical toolkit and proficiency levels.">
          Technical Expertise
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold dark:text-slate-100">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My professional journey and education.">
          Experience & Education
        </SectionTitle>

        <div className="space-y-12">
          {EXPERIENCE.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Connector - Mobile only shows left border, Desktop uses center line idea but simplified for clean look */}
              <div className="md:flex gap-8 items-start group">
                {/* Date Column */}
                <div className="hidden md:block w-48 text-right pt-1">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">{item.date}</span>
                  <div className="text-xs text-slate-500 mt-1">{item.location}</div>
                </div>

                {/* Content Card */}
                <div className="relative flex-1 bg-slate-50 dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                   {/* Mobile Date */}
                   <div className="md:hidden mb-2">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">{item.date}</span>
                   </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                  <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4">{item.company}</h4>
                  
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center py-8">
            <div className="h-px w-24 bg-slate-300 dark:bg-slate-700" />
          </div>

          {/* Education Section */}
          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8 flex items-center justify-center gap-2">
               <GraduationCap className="text-primary-500" /> Education
             </h3>
             <div className="grid md:grid-cols-2 gap-6">
                {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 dark:bg-dark-card p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-center"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                    <p className="text-primary-600 dark:text-primary-400 text-sm mt-1">{edu.school}</p>
                    <p className="text-slate-500 text-xs mt-2">{edu.year}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0b1121] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Applying data concepts to solve real-world problems.">
          Featured Projects
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  View Case Study <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Looking for a data analyst? Let's connect.">
          Get In Touch
        </SectionTitle>

        <div className="bg-slate-50 dark:bg-dark-card rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                  <MapPin size={16} /> {PERSONAL_INFO.location}
                </p>
              </div>
              <div className="pt-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">Connect</h4>
                <div className="flex gap-4">
                   {SOCIAL_LINKS.map(link => (
                     <a 
                      key={link.platform} 
                      href={link.url} 
                      className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-all"
                    >
                       <link.icon size={20} />
                     </a>
                   ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-bold shadow-lg shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {formState === 'idle' && <>Send Message <Send size={18} /></>}
                {formState === 'submitting' && 'Sending...'}
                {formState === 'success' && 'Message Sent!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-slate-800 text-center">
    <p className="text-slate-500 dark:text-slate-400 text-sm">
      © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
    </p>
  </footer>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-primary-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <ChatBot />
      <Footer />
    </div>
  );
}