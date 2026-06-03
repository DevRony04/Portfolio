import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Milestone } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Academics and theoretical engineering foundations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* B.Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md border border-gray-800 hover:border-gray-700/80 shadow-xl transition-all duration-300"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-1 flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <span className="text-blue-400 font-semibold text-sm sm:text-base whitespace-nowrap">
                    July 2022 - June 2026
                  </span>
                </div>
                
                <div>
                  <h4 className="text-lg text-gray-300 font-semibold leading-tight">
                    Computer Science & Engineering (or equivalent)
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Maulana Abul Kalam Azad University of Technology (MAKAUT)
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 font-bold text-sm">
                    CGPA: 7.52 / 10.0
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-800/80 space-y-2">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Key Focus Coursework
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems", "System Design & SDLC"].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 bg-gray-800/30 rounded text-xs text-gray-450 border border-gray-850"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* High School Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md border border-gray-800 hover:border-gray-700/80 shadow-xl transition-all duration-300"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mt-1 flex-shrink-0">
                <Milestone className="w-6 h-6" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Higher Secondary Education
                  </h3>
                  <span className="text-purple-400 font-semibold text-sm sm:text-base whitespace-nowrap">
                    2020 - 2022
                  </span>
                </div>
                
                <div>
                  <h4 className="text-lg text-gray-300 font-semibold leading-tight">
                    Science & Computer Application Stream
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    West Bengal Council of Higher Secondary Education (WBCHSE)
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-bold text-sm">
                    Percentage: 85%
                  </span>
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
