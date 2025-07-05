import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <div className="pl-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
                  <span className="text-blue-400 font-semibold">September 2022 - August 2026</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-xl text-gray-300">MCKV Institute of Engineering, MAKAUT</p>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-800 to-purple-800 rounded-full text-white font-semibold">
                      CGPA: 7.5/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              <div className="pl-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Higher Secondary Education</h3>
                  <span className="text-purple-400 font-semibold">July 2020 - June 2022</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-xl text-gray-300">West Bengal Council of Higher Secondary Education</p>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
                      Percentage: 85%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
