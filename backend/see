// seed.js - Add sample data to MongoDB
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch(err => console.error('✗ Connection error:', err));

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
    linkedin: String
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

const sampleData = async () => {
  try {
    // Clear existing data
    await About.deleteMany({});
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});

    // About - Perfect Profile
    const about = new About({
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
    });
    await about.save();

    // Projects - Exactly as in CV
    const projects = [
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
        description: 'Led backend refactor implementing Role-Based Access Control (RBAC) and GitHub Actions CI/CD pipeline. Integrated interactive Leaflet map enabling citizens to report, locate, and track urban infrastructure issues. Achieved 70% reduction in critical bugs through improved testing and deployment practices.',
        image: 'https://via.placeholder.com/400x300?text=CityFix+Tracker',
        tags: ['Flask', 'MongoDB', 'Leaflet.js', 'Docker', 'GitHub Actions', 'RBAC'],
        link: 'https://cityfix-tracker.com',
        github: 'https://github.com/IslamMhareeq/CityFix'
      },
      {
        title: 'Smart Sprouts – Interactive Learning App',
        description: 'Developed gamified educational platform with math, Hebrew, and English content for first-grade students using JSON content pipeline architecture. Implemented reward system with in-game currency mechanics. User testing confirmed significant engagement increase and positive learning outcomes.',
        image: 'https://via.placeholder.com/400x300?text=Smart+Sprouts+App',
        tags: ['C#', '.NET', 'WinForms', 'Unity GUI', 'Gamification'],
        link: '#',
        github: 'https://github.com/IslamMhareeq/The-smart-sprouts'
      },
      {
        title: 'Decentralized Marketplace (Capstone)',
        description: 'Developed smart contract with escrow and dispute resolution mechanisms deployed on Goerli testnet. Built responsive front-end using React and Web3.js for seamless blockchain interactions. Demonstrates understanding of distributed systems and cryptocurrency fundamentals.',
        image: 'https://via.placeholder.com/400x300?text=Decentralized+Marketplace',
        tags: ['Solidity', 'Truffle', 'React', 'Web3.js', 'Blockchain', 'Ethereum'],
        link: '#',
        github: '#'
      }
    ];
    await Project.insertMany(projects);

    // Experience - Exactly as in CV
    const experiences = [
      {
        company: 'Perach Mentorship Program',
        position: 'Volunteer Mentor',
        startDate: '2023',
        endDate: '2025',
        description: 'Provide weekly mentorship to two pupils, focusing on behavioral development and personal growth. Build trusting relationships to support emotional and academic progress. Plan and implement engaging activities to encourage positive behavior and motivation.',
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
    ];
    await Experience.insertMany(experiences);

    // Education - Exactly as in CV
    const educations = [
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
    ];
    await Education.insertMany(educations);

    console.log('✓ Sample data added successfully!');
    console.log('✓ Portfolio data is perfect and ready!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding data:', error);
    process.exit(1);
  }
};

sampleData();