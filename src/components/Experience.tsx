import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "InLighnX Global Pvt. Ltd.",
      period: "June 2025 - Dec 2025",
      location: "Remote",
      certificateText:
        "Completed a 6-month Full Stack Development Internship at InLighnX Global Pvt. Ltd., contributing across frontend and backend modules for production-grade applications.",
      highlights: [
        "Collaborated cross-functionally to build and deploy a production-grade full-stack e-commerce platform, achieving a 95+ Google Lighthouse rating via optimized API endpoints and asset bundling.",
        "Co-developed VehiQL, an AI-powered car marketplace featuring conversational search with Gemini API, implementing advanced bot protection (Arcjet) and rate limiting for secure handling of concurrent traffic.",
        "Engineered Resumind, an AI-driven resume scoring platform, optimizing backend request routing and file parsers to achieve low-latency evaluation responses (~200ms).",
        "Designed and shipped highly interactive, responsive portfolio layouts using React, TypeScript, and Tailwind CSS, focusing on cross-browser accessibility and performance."
      ],
      techStack: [
        "React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", 
        "MongoDB", "Supabase", "Clerk Auth", "Arcjet", "Gemini API", "Tailwind CSS"
      ],
      gradient: "from-blue-500 to-purple-600",
      glowColor: "shadow-blue-500/10 hover:border-blue-500/40"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Professional background and software development internships.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          
          {/* Vertical line indicator */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-900/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md border border-gray-800 shadow-xl transition-all duration-300 ${exp.glowColor} pl-12 sm:pl-16`}
            >
              {/* Floating Timeline Icon */}
              <div className={`absolute left-0 sm:left-4 top-6 w-8 h-8 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/10 z-10 translate-x-[2px] sm:translate-x-0`}>
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="space-y-4">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">
                      {exp.company} <span className="text-gray-500 text-sm font-normal">• {exp.location}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm sm:text-base whitespace-nowrap bg-blue-500/5 px-3.5 py-1.5 rounded-xl border border-blue-500/10 self-start md:self-center">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Internship completion text */}
                <p className="text-sm text-gray-400 italic">
                  {exp.certificateText}
                </p>

                {/* Key Achievements/Highlights */}
                <ul className="space-y-3.5 pt-2">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed text-gray-350">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges Used */}
                <div className="pt-5 border-t border-gray-800/80">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mb-2.5">
                    Technologies Employed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-800/20 rounded text-xs text-gray-400 border border-gray-850 hover:border-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
