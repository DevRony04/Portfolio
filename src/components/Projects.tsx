
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Forever – Full-Stack E-Commerce Platform",
      subtitle: "Frontend | Backend | Admin Panel",
      description: "Comprehensive e-commerce solution with React.js frontend, Node.js/Express.js backend, and MongoDB database.",
      features: [
        "Secure user authentication, payment integration, and order tracking",
        "Admin dashboard for product and inventory management",
        "Responsive design with optimized performance",
        "Implemented real-time cart updates and automatic inventory adjustment to prevent over-ordering and ensure accurate stock management."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Payment Integration"],
      liveDemo: "https://ecommerce-frontend-omega-brown.vercel.app/",
      github: "https://github.com/DevRony04/ecommerce-app",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "VehiQL – AI-Powered Car Marketplace",
      subtitle: "AI Integration | Next.js | Full-Stack",
      description: "AI-powered car marketplace using Next.js, Arcjet, Clerk, Supabase, PostgreSQL, and Gemini API integration.",
      features: [
        "Server-side rendering with conversational search and intelligent recommendations",
        "Secure authentication and real-time data handling with advanced bot protection",
        "Responsive design with optimized performance and global deployment",
        "After admin login, the dashboard enables automatic extraction of car details using AI from user input and seamlessly adds it to the car listings."
      ],
      tech: ["Next.js", "Arcjet", "Clerk", "Supabase", "PostgreSQL", "Gemini API"],
      liveDemo: "https://vehiql2-devrony04s-projects.vercel.app/",
      github: "https://github.com/DevRony04/vehiql2",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Resumind – AI Powered Resume Analyser",
      subtitle: "Frontend | AI Integration | File Storage",
      description: "Smart resume evaluation platform that analyzes resumes using AI and provides real-time feedback to job seekers.",
      features: [
        "AI-powered resume scoring with Junni.ai for keyword optimization, formatting checks, and industry-standard evaluation.",
        "Seamless SPA navigation using React Router v6 across resume upload, analysis, and feedback views.",
        "Secure cloud-based resume upload and storage using Puter.js and Puter Storage API.",
        "Responsive, modular UI built with React for high performance and scalability across all devices."
      ],
      tech: ["React.js (Router v6)", "Junie AI", "Puter.js", "Puter Storage API"],
      liveDemo: "https://ai-resume-analyzer-pearl.vercel.app/",
      github: "https://github.com/DevRony04/ai-resume-analyzer",
      gradient: "from-fuchsia-600 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}>
                    {project.subtitle}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg font-semibold text-gray-300 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
