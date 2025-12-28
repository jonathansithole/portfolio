import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, FileText, ExternalLink, 
  Code, ChevronRight, Send, Terminal, Sparkles, Filter,
  ArrowLeft, ArrowRight, Monitor, Smartphone, Layout, Database, Cpu,
  Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, CheckCircle,
  Play, Maximize2, Image as ImageIcon, Globe
} from 'lucide-react';

// Import from your constants file
import { 
  PROJECT_EXPERIENCE, 
  TECH_STACK, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS,
  CORE_SKILLS 
} from './constants';

// ==========================================
// 1. PROJECT GALLERY COMPONENT
// ==========================================

// This component handles the slideshow of your project screenshots
const ProjectGallery = ({ project }: { project: typeof PROJECT_EXPERIENCE[0] }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Use images from constants, or fallbacks if missing
  // @ts-ignore: Assuming 'images' is added to constants.ts
  const images = project.images && project.images.length > 0 ? project.images : [
    `https://via.placeholder.com/1200x675/0f172a/334155?text=${encodeURIComponent(project.title)}`,
    "https://via.placeholder.com/1200x675/0f172a/334155?text=Dashboard+View",
    "https://via.placeholder.com/1200x675/0f172a/334155?text=Mobile+Interface"
  ];

  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + images.length) % images.length);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <div className="flex flex-col h-full bg-slate-950">
      
      {/* Main Image Display */}
      <div className="relative flex-grow bg-black/50 flex items-center justify-center overflow-hidden group">
        
        {/* Main Image */}
        <img 
          src={images[activeImage]} 
          alt={`${project.title} screenshot ${activeImage + 1}`}
          className="max-h-full max-w-full object-contain transition-opacity duration-300 shadow-2xl"
        />

        {/* Navigation Arrows (Only show if multiple images) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-3 rounded-full bg-slate-900/80 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 border border-slate-700"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-3 rounded-full bg-slate-900/80 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 border border-slate-700"
            >
              <ArrowRight size={24} />
            </button>
          </>
        )}

        {/* Image Counter Badge */}
        <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white text-xs font-mono px-3 py-1.5 rounded-full border border-slate-700 backdrop-blur-md">
          IMG {activeImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Strip */}
      <div className="h-24 bg-slate-900 border-t border-slate-800 flex items-center gap-3 px-6 overflow-x-auto custom-scrollbar">
        {images.map((img: string, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative h-16 w-28 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
              activeImage === idx ? 'border-blue-500 opacity-100 ring-2 ring-blue-500/20' : 'border-transparent opacity-40 hover:opacity-80'
            }`}
          >
            <img src={img} alt="thumb" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

const Navbar = ({ activeTab, setTab }: { activeTab: string, setTab: (t: string) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setTab('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">JS</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">JONATHAN SITHOLE</span>
        </div>
        
        
        <div className="flex items-center gap-1 sm:gap-6">
          {['home', 'projects', 'about', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setTab(tab)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors capitalize ${
                activeTab === tab ? 'text-blue-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <a
  href="public/documents/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
>
  <FileText size={16} />
  View CV
</a>

        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 py-16 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">JS</div>
          <span className="font-bold text-2xl tracking-tight text-white">JONATHAN SITHOLE</span>
        </div>
        <p className="text-slate-400 text-sm md:text-base max-w-sm leading-relaxed mb-4">
          Interested in collaborating or hiring me? <span className="text-white font-semibold">Check out my project repositories</span> and <span className="text-white font-semibold">get in touch</span> to discuss your next project.
        </p>
      </div>
      <div className="flex gap-6 mt-6 md:mt-0">
        <a href="https://github.com/jonathansithole" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Github size={28} /></a>
        <a href="https://linkedin.com/in/jonathan-sithole-474427188" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Linkedin size={28} /></a>
        <a href="mailto:Jonathansithole21@gmail.com" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Mail size={28} /></a>
        <a href="tel:+2763365620" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Phone size={28} /></a>
      </div>
    </div>
    <div className="mt-12 text-center text-slate-500 text-sm">
       {new Date().getFullYear()} Jonathan Sithole. All rights reserved.
    </div>
  </footer>
);

// --- Pages ---
interface Project {
  title: string;
  year: string;
  technologies: string[];
  highlights: string[];
  images?: string[];
}

interface RecentProjectsProps {
  projects: Project[];
  setTab: (t: string) => void;
}

const Home = ({ setTab }: { setTab: (t: string) => void }) => {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                  <img src="public/images/headshot.png" alt="Jonathan Sithole" className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105" onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/150"; }} />
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-300 pb-1">Jonathan Sithole</h1>
                <p className="text-xl text-blue-500 font-medium mt-2">Master of Informatics Student & Developer</p>
              </div>
              
            </div>
              <div className="center flex gap-6 mt-6 md:mt-0"> 
        <a href="https://github.com/jonathansithole" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Github size={28} /></a>
        <a href="https://linkedin.com/in/jonathan-sithole-474427188" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Linkedin size={28} /></a>
        <a href="mailto:Jonathansithole21@gmail.com" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Mail size={28} /></a>
        <a href="tel:+2763365620" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"><Phone size={28} /></a>
      </div>
            <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm">
             
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm">
                <MapPin size={16} className="text-blue-500" /> Pretoria, South Africa
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Open to Opportunities
              </div>
            
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left pt-2">
            <p className="text-slate-300 max-w-2xl leading-relaxed text-lg">
              Full Stack Developer and Informatics Master's student specializing in building scalable web applications and data-driven systems. 
              I bridge the gap between complex backend logic and intuitive frontend design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => setTab("projects")} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20">
                View My Projects
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
                <FileText size={18} /> Download Résumé
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-200">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(TECH_STACK).map(([category, items]) => (
            <div key={category} className="p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/60 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
              <h3 className="text-sm font-bold mb-4 text-slate-200 flex items-center gap-2 uppercase tracking-wider">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map(item => (
                  <span key={item} className="px-2.5 py-1 bg-slate-800/80 text-slate-400 text-xs font-medium rounded-md border border-slate-700/50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    <section className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-2 text-white">Recent Projects</h2>
          <p className="text-slate-400">Highlights from my development portfolio.</p>
        </div>

        <button
          onClick={() => setTab("projects")}
          className="hidden sm:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
        >
          Explore all
          <ArrowLeft
            className="rotate-180 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECT_EXPERIENCE.slice(0, 2).map((project, index) => (
          <HoverSlideshowCard key={index} project={project} setTab={setTab} />
        ))}
      </div>

    </section>
    </div>
  );
};

interface HoverSlideshowCardProps {
  project: Project;
  setTab: (t: string) => void;
}

const HoverSlideshowCard = ({ project, setTab }: HoverSlideshowCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
  let interval: number;
  if (hovering && project.images.length > 1) {
    interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 1500);
  } else {
    setCurrentImage(0);
  }
  return () => clearInterval(interval);
}, [hovering, project.images.length]);

  return (
    <div
      className="bg-slate-900 border border-slate-800 p-8 rounded-3xl transition-all group hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Hover Slideshow */}
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-slate-800">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Project Info */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-bold bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
          {project.year}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-xs text-blue-300 bg-blue-900/20 px-2.5 py-1 rounded border border-blue-900/30"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="space-y-3 mb-8">
        {project.highlights.slice(0, 2).map((h, i) => (
          <li key={i} className="text-sm text-slate-400 flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setTab("projects")}
        className="text-sm font-bold text-white flex items-center gap-2 group-hover:gap-3 transition-all"
      >
        View Details <ArrowLeft className="rotate-180" size={16} />
      </button>
    </div>
  );
};

// ==========================================
// 3. PROJECT EXPLORER (With Gallery & Links)
// ==========================================

const ProjectExplorer = ({ setTab }: { setTab: (t: string) => void }) => {
  // We store the whole project object to pass data to the modal
  const [previewProject, setPreviewProject] = useState<typeof PROJECT_EXPERIENCE[0] | null>(null);

  return (
    <div className="py-24 max-w-6xl mx-auto px-4 relative">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects Explorer</h1>
        <p className="text-slate-400">A detailed look at my technical deliverables and academic projects.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PROJECT_EXPERIENCE.map((project, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold uppercase rounded border border-slate-700">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="px-4 py-2 bg-slate-950 rounded-lg text-slate-400 font-mono text-sm border border-slate-800">
                  {project.year}
                </span>
                
                {/* View Project Button */}
                <button 
                  onClick={() => setPreviewProject(project)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-900/20 group-hover:scale-105"
                >
                  <Monitor size={16} fill="currentColor" /> View Project
                </button>
              </div>
            </div>
            
            <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800/50">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Key Contributions & Highlights</h4>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* --- PREVIEW MODAL (GALLERY & LINKS) --- */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[90vh] md:h-[85vh]">
            
            {/* Modal Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-slate-800 bg-slate-900 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{previewProject.title}</h3>
                <p className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                  <ImageIcon size={14} /> Interface Gallery 
                  <span className="text-slate-600">•</span>
                  {previewProject.technologies.slice(0,3).join(', ')}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* Live Link Button */}
                {/* @ts-ignore: Assuming 'link' is added to constants.ts */}
                {previewProject.link && (
                  <a 
                    // @ts-ignore
                    href={previewProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-green-900/20"
                  >
                    <Globe size={16} /> Visit Live Site
                  </a>
                )}
                
                {/* GitHub Repo Button */}
                {/* @ts-ignore: Assuming 'repo' is added to constants.ts */}
                {previewProject.repo && (
                  <a 
                    // @ts-ignore
                    href={previewProject.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-slate-700"
                  >
                    <Github size={16} /> Code
                  </a>
                )}

                <button 
                  onClick={() => setPreviewProject(null)}
                  className="p-2 ml-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body: Gallery */}
            <div className="flex-grow overflow-hidden bg-black flex flex-col relative">
               <ProjectGallery project={previewProject} />
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center text-xs text-slate-500">
              <span>Use arrow keys to navigate images</span>
              <span>Full-stack implementation showcased via screenshots</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ... (AboutView and ContactView remain the same) ...

const AboutView = () => (
    <div className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 mb-16 border-b border-slate-800 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-40 h-40 shrink-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
            <img src="public/images/headshot.png" alt="Jonathan Sithole" className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/150"; }} />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white">Jonathan Sithole</h1>
            <p className="text-xl text-blue-500 font-medium mt-2">Master of Informatics Student & Developer</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800"><MapPin size={16} className="text-blue-500" /> Pretoria, South Africa</div>
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open to Opportunities</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 justify-center items-start">
        <div className="lg:w-1/3 space-y-12 flex flex-col">
          <section className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold mb-6 text-white">About Me</h1>
            <p className="text-slate-400 leading-relaxed text-base">
              I’m Jonathan Sithole, a Master of Commerce in Informatics student with a focus on Information Systems. I have hands-on experience in software and web development, systems design, and data analysis through academic projects and freelance tech support.
            </p>
          </section>
          <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white justify-center lg:justify-start"><Award className="text-yellow-500" size={20} /> Core Competencies</h3>
            <ul className="space-y-3 text-center lg:text-left">
              {CORE_SKILLS.map((skill, i) => (
                <li key={i} className="text-sm text-slate-300 flex items-start gap-2 justify-center lg:justify-start"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{skill}</li>
              ))}
            </ul>
          </section>
          <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white justify-center lg:justify-start"><Award className="text-purple-500" size={20} /> Certifications</h3>
            <ul className="space-y-3 text-center lg:text-left">
              {CERTIFICATIONS.map((cert, i) => (<li key={i} className="text-sm text-slate-300 border-b border-slate-700 pb-2 last:border-0">{cert}</li>))}
            </ul>
          </section>
        </div>
        <div className="lg:w-2/3 space-y-16 flex flex-col items-center lg:items-start w-full">
          <section className="w-full">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white justify-center lg:justify-start"><Briefcase className="text-blue-500" /> Work Experience</h3>
            <div className="relative border-l border-slate-700 ml-0 lg:ml-4 space-y-12 w-full">
              {WORK_EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative pl-0 lg:pl-8 group w-full">
                  <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-blue-400 text-sm font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    {exp.highlights.map((h, i) => (<li key={i} className="text-sm text-slate-400 flex items-start gap-2"><ChevronRight size={14} className="mt-0.5 text-blue-500 shrink-0" />{h}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white justify-center lg:justify-start"><GraduationCap className="text-green-500" /> Education</h3>
            <div className="grid gap-6 justify-items-center lg:justify-items-stretch w-full">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:border-green-500/40 hover:shadow-lg transition-all flex flex-col sm:flex-row justify-between items-center w-full">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h4 className="font-bold text-white text-lg">{edu.qualification}</h4>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-green-900/20 text-green-400 text-xs font-bold rounded-full border border-green-900/30">{edu.period || edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
  
  const ContactView = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('sending');
      setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      }, 1500);
    };
  
    return (
      <div className="py-24 max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8 mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white">Get In Touch</h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Detail-oriented Information Systems graduate. Passionate about solving real-world business problems through technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+27633675620" className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Phone size={20} /></div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Me</p>
                <p className="text-white font-semibold">+27 63 367 5620</p>
              </a>
              <a href="mailto:Jonathansithole21@gmail.com" className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Mail size={20} /></div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
                <p className="text-white font-semibold text-sm truncate">Jonathansithole21@gmail.com</p>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Your Name</label>
                  <input type="text" required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} placeholder="Recruiter Name" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Email</label>
                  <input type="email" required value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} placeholder="name@company.com" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Message</label>
                  <textarea rows={4} required value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} placeholder="Hi Jonathan, I'd like to discuss a role..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-white resize-none" />
              </div>
              <button type="submit" disabled={status === 'sending' || status === 'success'} className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'success' ? 'bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'} {status === 'idle' && <Send size={18} />}
              </button>
          </form>
        </div>
      </div>
    );
  };

// ==========================================
// 4. MAIN APP ENTRY
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home setTab={setActiveTab} />;
      case 'projects': return <ProjectExplorer setTab={setActiveTab} />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView />;
      default: return <Home setTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar activeTab={activeTab} setTab={setActiveTab} />
      <main className="flex-grow pt-16">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}