
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <div className={`w-4 h-4 bg-gradient-to-r ${
              i % 3 === 0 ? 'from-blue-400 to-purple-400' :
              i % 3 === 1 ? 'from-purple-400 to-pink-400' :
              'from-pink-400 to-blue-400'
            } rounded-full opacity-60`} />
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DM
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            DEEPYAMAN MONDAL
          </motion.h1>
          
          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-2 text-lg">
              {['Full Stack Developer', 'React.js', 'Node.js', 'AI Tools Expert'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="tel:+917439665040"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 7439665040
              </span>
            </motion.a>
            <motion.a
              href="mailto:deepyamanmondal7@gmail.com"
              className="group px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                deepyamanmondal7@gmail.com
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center opacity-50">
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
