// server.js - Backend for Portfolio Website
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✓ MongoDB Atlas connected successfully'))
  .catch(err => {
    console.error('✗ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Define Schemas
const aboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  skills: [String],
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String
  }
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  tags: [String],
  link: String,
  github: String,
  createdAt: { type: Date, default: Date.now }
});

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: String,
  endDate: String,
  description: String,
  current: Boolean
});

const educationSchema = new mongoose.Schema({
  school: String,
  degree: String,
  field: String,
  graduationYear: String,
  description: String
});

// Models
const About = mongoose.model('About', aboutSchema);
const Project = mongoose.model('Project', projectSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Education = mongoose.model('Education', educationSchema);

// Routes
// Get About/CV Info
app.get('/api/about', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update About/CV Info
app.post('/api/about', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About(req.body);
    } else {
      Object.assign(about, req.body);
    }
    const saved = await about.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Project
app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Project
app.post('/api/projects', async (req, res) => {
  const project = new Project(req.body);
  try {
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Project
app.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    Object.assign(project, req.body);
    const updated = await project.save();
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Project
app.delete('/api/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Experience
app.get('/api/experience', async (req, res) => {
  try {
    const experience = await Experience.find().sort({ current: -1, startDate: -1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Experience
app.post('/api/experience', async (req, res) => {
  const exp = new Experience(req.body);
  try {
    const saved = await exp.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Education
app.get('/api/education', async (req, res) => {
  try {
    const education = await Education.find().sort({ graduationYear: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Education
app.post('/api/education', async (req, res) => {
  const edu = new Education(req.body);
  try {
    const saved = await edu.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));