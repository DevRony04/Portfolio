import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "InLighnX Global Pvt. Ltd.",
      period: "10/06/2025 - 10/09/2025",
      location: "",
      highlights: [
        "Developed Forever, a full-stack e-commerce platform with secure authentication, payment gateway, order tracking, and an admin dashboard.",
        "Built VehiQL, an AI-powered car marketplace with conversational search, AI-driven recommendations, and secure authentication/bot protection.",
        "Designed Resumind, an AI-based resume analyzer providing real-time scoring, feedback, and secure resume storage.",
        "Created a personal portfolio website with a modern, responsive UI using React, Tailwind, and TypeScript.",
        "Delivered production-grade performance improvements (Lighthouse +20–35%) and reduced load times, improving UX across projects.",
        "Tech stack :- React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind, TypeScript, Clerk, Supabase, Arcjet, Gemini API.",
      ],
      gradient: "from-blue-500 to-purple-600",
      certificateText:
        "Completed a 3-month Full Stack Development Internship at InLighnX Global Pvt. Ltd. (10/06/2025 – 10/09/2025), contributing across the stack on production-grade projects.",
      certificateLink:
        "https://drive.google.com/file/d/1w9RQXYieS1vR6uVLRqXya6QipWpJHA02/view",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative">
                <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${exp.gradient} rounded-full`}></div>
                <div className="pl-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-blue-400 font-semibold">{exp.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <p className="text-xl text-gray-300">{exp.company}</p>
                    {exp.location ? (
                      <span className="text-sm text-gray-400">{exp.location}</span>
                    ) : null}
                  </div>
                  {"certificateText" in exp && (
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {(exp as any).certificateText}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {"certificateLink" in exp && (
                    <div className="mt-6">
                      <a
                        href={(exp as any).certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${exp.gradient} rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200`}
                      >
                        View Experience Letter
                      </a>
                    </div>
                  )}
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


