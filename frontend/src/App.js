import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [aboutRes, projectsRes, expRes, eduRes] = await Promise.all([
        axios.get(`${API_URL}/about`),
        axios.get(`${API_URL}/projects`),
        axios.get(`${API_URL}/experience`),
        axios.get(`${API_URL}/education`)
      ]);
      
      setAbout(aboutRes.data);
      setProjects(projectsRes.data);
      setExperience(expRes.data);
      setEducation(eduRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">{about?.name || 'Portfolio'}</h1>
          <ul className="nav-links">
            <li><button onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
            <li><button onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button></li>
            <li><button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button></li>
            <li><button onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {activeSection === 'home' && about && (
          <section className="hero">
            <div className="hero-content">
              <h2>{about.title}</h2>
              <p>{about.bio}</p>
              <div className="skills">
                <h3>Skills</h3>
                <div className="skill-tags">
                  {about.skills?.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="social-links">
                {about.socialLinks?.github && <a href={about.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {about.socialLinks?.linkedin && <a href={about.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                {about.socialLinks?.twitter && <a href={about.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project._id} className="project-card">
                  {project.image && <img src={project.image} alt={project.title} />}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags?.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="experience">
            <h2>Experience</h2>
            <div className="timeline">
              {experience.map(exp => (
                <div key={exp._id} className="timeline-item">
                  <div className="timeline-content">
                    <h3>{exp.position}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="date">{exp.startDate} - {exp.endDate || 'Present'}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="education">
            <h2>Education</h2>
            <div className="timeline">
              {education.map(edu => (
                <div key={edu._id} className="timeline-item">
                  <div className="timeline-content">
                    <h3>{edu.degree} in {edu.field}</h3>
                    <p className="school">{edu.school}</p>
                    <p className="year">{edu.graduationYear}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contact' && about && (
          <section className="contact">
            <h2>Get In Touch</h2>
            <div className="contact-info">
              {about.email && <p><strong>Email:</strong> <a href={`mailto:${about.email}`}>{about.email}</a></p>}
              {about.phone && <p><strong>Phone:</strong> {about.phone}</p>}
              {about.location && <p><strong>Location:</strong> {about.location}</p>}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2024 {about?.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;