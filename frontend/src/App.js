import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

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
        tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap', 'Heroku'],
        github: 'https://github.com/MahmoodAbuGneam/EduLink'
      },
      {
        title: 'CityFix – Urban Issue Tracker',
        description: 'Led backend refactor implementing Role-Based Access Control (RBAC) and GitHub Actions CI/CD pipeline. Integrated interactive Leaflet map enabling citizens to report, locate, and track urban infrastructure issues. Achieved 70% reduction in critical bugs.',
        tags: ['Flask', 'MongoDB', 'Leaflet.js', 'Docker', 'GitHub Actions', 'RBAC'],
        github: 'https://github.com/IslamMhareeq/CityFix'
      },
      {
        title: 'Smart Sprouts – Interactive Learning App',
        description: 'Developed gamified educational platform with math, Hebrew, and English content for first-grade students using JSON content pipeline architecture. Implemented reward system with in-game currency mechanics. User testing confirmed significant engagement increase.',
        tags: ['C#', '.NET', 'WinForms', 'Unity GUI', 'Gamification'],
        github: 'https://github.com/IslamMhareeq/The-smart-sprouts'
      },
      {
        title: 'Decentralized Marketplace (Capstone)',
        description: 'Developed smart contract with escrow and dispute resolution mechanisms deployed on Goerli testnet. Built responsive front-end using React and Web3.js for seamless blockchain interactions. Demonstrates understanding of distributed systems.',
        tags: ['Solidity', 'Truffle', 'React', 'Web3.js', 'Blockchain', 'Ethereum'],
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
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">
            {portfolioData.about.name}
          </h1>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-button"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {['home', 'projects', 'experience', 'education', 'contact'].map(section => (
              <li key={section}>
                <button
                  onClick={() => {
                    setActiveSection(section);
                    setMenuOpen(false);
                  }}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="section home-section">
            <div className="hero-content">
              <h2 className="section-title">
                {portfolioData.about.title}
              </h2>
              <p className="bio-text">
                {portfolioData.about.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="skills-section">
              <h3>Skills & Technologies</h3>
              <div className="skills-container">
                {portfolioData.about.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {portfolioData.about.socialLinks.github && (
                <a
                  href={portfolioData.about.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={20} /> GitHub
                </a>
              )}
              {portfolioData.about.socialLinks.linkedin && (
                <a
                  href={portfolioData.about.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              )}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="section projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {portfolioData.projects.map((project, idx) => (
                <div key={idx} className="project-card">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-small btn-code"
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
          <section className="section experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="cards-container">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="card">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">{exp.position}</h3>
                      <p className="card-subtitle">{exp.company}</p>
                    </div>
                    <span className="card-date">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <p className="card-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section education-section">
            <h2 className="section-title">Education</h2>
            <div className="cards-container">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="card">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="card-subtitle">{edu.school}</p>
                    </div>
                    <span className="card-date">{edu.graduationYear}</span>
                  </div>
                  <p className="card-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-card">
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <p className="contact-label">Email</p>
                  <a
                    href={`mailto:${portfolioData.about.email}`}
                    className="contact-link"
                  >
                    {portfolioData.about.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-text">{portfolioData.about.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-text">{portfolioData.about.location}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 {portfolioData.about.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}