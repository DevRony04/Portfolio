import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="portfolio-container">
      <header className="header-section">
        <h1>DEEPYAMAN MONDAL</h1>
        <div className="contact-info">
          <span>+91 7439665040</span> | 
          <span>deepyamanmondal7@gmail.com</span> | 
          <a href="https://www.linkedin.com/in/deepyaman-mondal/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/deepyaman-mondal/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section className="summary-section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>Full Stack Developer with expertise in React.js, Node.js, and MongoDB. Experienced in building scalable e-commerce applications, AI-powered platforms, user authentication systems, and responsive web designs with strong problem-solving abilities.</p>
      </section>

      <section className="skills-section">
        <h2>TECHNICAL SKILLS</h2>
        <div className="skill-category">
          <h3>Frontend</h3>
          <p>HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS</p>
        </div>
        <div className="skill-category">
          <h3>Backend & Database</h3>
          <p>Node.js, Express.js, MongoDB, SQL, Firebase, Supabase</p>
        </div>
      </section>

      <section className="projects-section">
        <h2>PROJECTS</h2>
        <div className="project-item">
          <h3>Full-Stack E-Commerce Platform</h3>
          <p><em>Frontend | Backend | Admin Panel</em></p>
          <p>Comprehensive e-commerce solution with React.js frontend, Node.js/Express.js backend, and MongoDB database.</p>
          <ul>
            <li>Secure user authentication, payment integration, and order tracking</li>
            <li>Admin dashboard for product and inventory management</li>
            <li>Responsive design with optimized performance</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>VehiQL 2 – AI-Powered Car Marketplace</h3>
          <p><a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p>AI-powered car marketplace using Next.js, Supabase, and Gemini API integration.</p>
          <ul>
            <li>Server-side rendering with conversational search and intelligent recommendations</li>
            <li>Secure authentication and real-time data handling with advanced bot protection</li>
            <li>Responsive design with optimized performance and global deployment</li>
          </ul>
        </div>
      </section>

      <section className="education-section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p>April 2024 - Present</p>
          <p>MCKV Institute of Engineering, MAKAUT</p>
          <p>CGPA: 7.5/10</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary Education</h3>
          <p>2020 - 2022</p>
          <p>West Bengal Council of Higher Secondary Education</p>
          <p>Percentage: 85%</p>
        </div>
      </section>

      <section className="competencies-section">
        <h2>CORE COMPETENCIES</h2>
        <div className="competency-category">
          <h3>Additional Skills</h3>
          <p>Java DSA, AWS, Git, Problem Solving</p>
        </div>
        <div className="competency-category">
          <h3>Languages</h3>
          <p>English, Hindi (Proficient), Bengali (Native)</p>
        </div>
      </section>
    </div>
  )
}

export default App
