import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Portfolio Data - Stored in Frontend
  const portfolioData = {
    about: {
      name: 'Islam Mhareeq',
      title: 'Full Stack Developer & Software Engineering Student',
      bio: 'Passionate software engineering student with expertise in designing and building full-stack applications. Proficient in Java, Python, C/C++, C#, and JavaScript. Experienced with modern backend technologies including Node.js, Express, ASP.NET Core, and Django. Strong database management skills with MySQL and MongoDB. Seeking to contribute innovative solutions to forward-thinking software development teams.',
      email: 'islammhareeq12@gmail.com',
      phone: '0532200387',
      location: 'Be\'er Sheva, Israel',
      skills: [
        'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express',
        'Python', 'Django', 'Flask', 'Java', 'C/C++', 'C#',
        'ASP.NET Core', 'MongoDB', 'MySQL', 'SQLite', 'Redis',
        'Solidity', 'Web3', 'Docker', 'Git/GitHub', 'REST APIs',
        'HTML5', 'CSS3', 'Bootstrap', 'Leaflet.js',
        'Power BI', 'Google Sheets', 'Pandas', 'NumPy', 'Jenkins', 'Linux'
      ],
      socialLinks: {
        github: 'https://github.com/IslamMhareeq',
        linkedin: 'https://www.linkedin.com/in/islam-mhareeq-04aa51272/'
      }
    },
    projects: [
      {
        title: 'EduLink – Educational Networking Platform',
        description: 'Built authentication system and profile management features with job & workshop boards supporting 300+ active users. Designed modal-based issue reporting system and deployed on Heroku with auto-scaling capabilities for seamless performance.',
        image: 'https://via.placeholder.com/400x300?text=EduLink+Platform',
        tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap', 'Heroku'],
        link: 'https://edulink-platform.herokuapp.com',
        github: 'https://github.com/MahmoodAbuGneam/EduLink'
      },
      {
        title: 'CityFix – Urban Issue Tracker',
        description: 'Led backend refactor implementing Role-Based Access Control (RBAC) and GitHub Actions CI/CD pipeline. Integrated interactive Leaflet map enabling citizens to report, locate, and track urban infrastructure issues. Achieved 70% reduction in critical bugs.',
        image: 'https://via.placeholder.com/400x300?text=CityFix+Tracker',
        tags: ['Flask', 'MongoDB', 'Leaflet.js', 'Docker', 'GitHub Actions', 'RBAC'],
        link: 'https://cityfix-tracker.com',
        github: 'https://github.com/IslamMhareeq/CityFix'
      },
      {
        title: 'Smart Sprouts – Interactive Learning App',
        description: 'Developed gamified educational platform with math, Hebrew, and English content for first-grade students using JSON content pipeline architecture. Implemented reward system with in-game currency mechanics. User testing confirmed significant engagement increase.',
        image: 'https://via.placeholder.com/400x300?text=Smart+Sprouts+App',
        tags: ['C#', '.NET', 'WinForms', 'Unity GUI', 'Gamification'],
        link: '#',
        github: 'https://github.com/IslamMhareeq/The-smart-sprouts'
      },
      {
        title: 'Decentralized Marketplace (Capstone)',
        description: 'Developed smart contract with escrow and dispute resolution mechanisms deployed on Goerli testnet. Built responsive front-end using React and Web3.js for seamless blockchain interactions. Demonstrates understanding of distributed systems.',
        image: 'https://via.placeholder.com/400x300?text=Decentralized+Marketplace',
        tags: ['Solidity', 'Truffle', 'React', 'Web3.js', 'Blockchain', 'Ethereum'],
        link: '#',
        github: '#'
      }
    ],
    experience: [
      {
        company: 'Perach Mentorship Program',
        position: 'Volunteer Mentor',
        startDate: '2023',
        endDate: '2025',
        description: 'Provide weekly mentorship to students focusing on behavioral development and personal growth. Build trusting relationships to support emotional and academic progress. Plan and implement engaging activities to encourage positive behavior and motivation.',
        current: false
      },
      {
        company: 'Siraj NGO',
        position: 'Software-Engineering Awareness Sessions',
        startDate: '2023',
        endDate: '2023',
        description: 'Introduced high school students to software engineering studies and career pathways. Shared real-world development experiences and inspired next generation of developers.',
        current: false
      }
    ],
    education: [
      {
        school: 'Sami Shamoon College of Engineering',
        degree: 'B.A Software Engineering',
        field: 'Software Engineering',
        graduationYear: '2027',
        description: 'Relevant Coursework: Software Testing and Quality Assurance, Data Structures, Introduction to Computer Science, Computer Architecture, Data Security, Software Project Management, Operating Systems, Introduction to Blockchain Technology.'
      },
      {
        school: 'Maaref & Elevation',
        degree: 'Data Analyst Certificate',
        field: 'Data Analysis',
        graduationYear: '2025',
        description: 'Advanced SQL, data cleansing, statistics, Google Sheets, and Power BI dashboards. Final project: end-to-end analysis of a retail database with actionable visualizations and insights.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {portfolioData.about.name}
          </h1>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:static top-16 left-0 right-0 md:top-auto bg-slate-900 md:bg-transparent p-4 md:p-0 w-full md:w-auto`}>
            {['home', 'projects', 'experience', 'education', 'contact'].map(section => (
              <li key={section}>
                <button
                  onClick={() => {
                    setActiveSection(section);
                    setMenuOpen(false);
                  }}
                  className={`capitalize font-medium transition ${
                    activeSection === section
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {portfolioData.about.title}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                {portfolioData.about.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 hover:from-cyan-500/20 hover:to-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6">
              {portfolioData.about.socialLinks.github && (
                <a
                  href={portfolioData.about.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-medium transition transform hover:scale-105"
                >
                  <Github size={20} /> GitHub
                </a>
              )}
              {portfolioData.about.socialLinks.linkedin && (
                <a
                  href={portfolioData.about.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-medium transition transform hover:scale-105"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              )}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-cyan-500/50 rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:opacity-75 transition"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-cyan-500 hover:bg-cyan-600 rounded text-sm font-medium transition"
                        >
                          View
                        </a>
                      )}
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded text-sm font-medium transition"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-bold">Experience</h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-cyan-500/50 rounded-lg p-6 transition hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{exp.position}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-bold">Education</h2>
            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-cyan-500/50 rounded-lg p-6 transition hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-blue-400 font-medium">{edu.school}</p>
                    </div>
                    <span className="text-sm text-slate-400">{edu.graduationYear}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="space-y-8 animate-fadeIn">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 max-w-2xl space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a
                    href={`mailto:${portfolioData.about.email}`}
                    className="text-cyan-400 font-medium hover:text-cyan-300 transition"
                  >
                    {portfolioData.about.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" size={24} />
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-cyan-400 font-medium">{portfolioData.about.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-cyan-400 font-medium">{portfolioData.about.location}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-400">
          <p>&copy; 2024 {portfolioData.about.name}. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}