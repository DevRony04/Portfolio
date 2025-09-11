import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const skills = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "AI Integration", "System Design"];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Profile Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/photo.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            DEEPYAMAN MONDAL
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
          >
            Full Stack Developer & AI Enthusiast
          </motion.div>

          {/* Animated Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm sm:text-base border border-gray-700 hover:border-blue-400/50 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 px-4"
          >
            Passionate Full Stack Developer with expertise in the MERN stack, AI integration, and system design. 
            I build scalable web applications with intuitive user experiences and robust backend architectures.
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:deepyamanmondal7@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" /></svg>
              Download Resume
            </a>
            
            <div className="flex gap-4">
              <a
                href="tel:+917439665040"
                className="p-4 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/DevRony04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepyaman-mondal-8592a3265/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/DevRony04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9 4.2a1 1 0 011.4.1l3.7 4.1a1 1 0 01-1.5 1.3l-3-3.3-6.9 7.6 3 3.3a1 1 0 01-1.5 1.3l-3.7-4.1a1 1 0 01.1-1.4l7.9-8.8z" fill="#FFA116"/>
                  <path d="M18.5 14.5H12a1 1 0 100 2h6.5a1 1 0 100-2z" fill="#B3B3B3"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
