import { motion } from "framer-motion";
import { Code, Layers, Settings, Database, Brain, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Core Java", "Python", "C++"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "group-hover:border-blue-500/50",
      glowColor: "group-hover:shadow-blue-500/10",
      textColor: "from-blue-400 to-cyan-400"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      skills: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "GraphQL", "Mongoose", "SpringBoot", "Hibernate"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/50",
      glowColor: "group-hover:shadow-purple-500/10",
      textColor: "from-purple-400 to-pink-400"
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-5 h-5 text-emerald-400" />,
      skills: ["Docker", "Kubernetes", "Postman", "Maven", "Webpack", "AWS", "Git", "GitHub Actions"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/50",
      glowColor: "group-hover:shadow-emerald-500/10",
      textColor: "from-emerald-400 to-teal-400"
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-5 h-5 text-orange-400" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "InfluxDB"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "group-hover:border-orange-500/50",
      glowColor: "group-hover:shadow-orange-500/10",
      textColor: "from-orange-400 to-red-400"
    },
    {
      title: "AI & Agents",
      icon: <Brain className="w-5 h-5 text-yellow-400" />,
      skills: ["Gen AI", "LLMs", "RAG Pipeline", "LangChain", "MCP Servers", "Ollama", "Gemini & OpenAI APIs"],
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "group-hover:border-yellow-500/50",
      glowColor: "group-hover:shadow-yellow-500/10",
      textColor: "from-yellow-400 to-orange-400"
    },
    {
      title: "Core CS Subjects",
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      skills: ["Data Structures & Algorithms", "OOP", "System Design", "Operating Systems", "DBMS", "CI/CD", "Agile & Scrum"],
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "group-hover:border-indigo-500/50",
      glowColor: "group-hover:shadow-indigo-500/10",
      textColor: "from-indigo-400 to-purple-400"
    }
  ];

  const additionalSkills = [
    "RESTful API Design & Integration",
    "Microservices Architecture",
    "Performance Optimization (Lighthouse 95+)",
    "Asynchronous Event-Driven Pipelines (Kafka)"
  ];

  const hobbies = [
    "Building tech side-projects",
    "Competitive programming on LeetCode",
    "Trekking & Travelling",
    "Playing Football",
    "Long Distance MotorCycle Rides",
    "Fitness Workouts"
  ];

  const languages = ["English", "Hindi", "Bengali"];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Competencies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Expertise built through professional internship work, academic theory, and engineering scalable side projects.
          </p>
        </motion.div>

        {/* Primary Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`group relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-800 ${category.borderColor} shadow-lg ${category.glowColor} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} border border-white/5`}>
                  {category.icon}
                </div>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${category.textColor} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800/40 rounded-lg text-xs text-gray-300 border border-gray-850 hover:bg-gray-800 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800"
          >
            <h3 className="text-base font-bold mb-4 text-blue-400">
              Focus Areas & Paradigms
            </h3>
            <ul className="space-y-2.5">
              {additionalSkills.map((skill) => (
                <li key={skill} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800"
          >
            <h3 className="text-base font-bold mb-4 text-emerald-400">
              Interests & Drive
            </h3>
            <ul className="space-y-2.5">
              {hobbies.map((hobby) => (
                <li key={hobby} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-bold mb-4 text-purple-400">
                Languages spoken
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-gray-800/40 rounded-lg text-xs text-gray-300 border border-gray-850"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/50 mt-6 text-center md:text-left">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block mb-1">Algorithms Base</span>
              <span className="text-xs text-gray-400">LeetCode Profile: </span>
              <a 
                href="https://leetcode.com/u/RonyDevX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline font-semibold"
              >
                RonyDevX
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
