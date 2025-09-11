
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Core Java", "Python", "C++"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Libraries & Frameworks",
      skills: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "GraphQL", "Mongoose", "SpringBoot", "Hibernate"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Tools & Software",
      skills: ["Docker", "Kubernetes", "Postman", "Maven", "Webpack", "JIRA", "AWS", "Git"],
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "AI Fields",
      skills: ["Gen AI", "LLMS", "RAG Pipeline", "LangChain", "MCP Servers", "AI Tools Expert"],
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Core Subjects",
      skills: ["Data Structures & Algorithms", "OOP", "CI/CD", "SDLC", "Operating System", "DBMS", "System Design", "Agile & Scrum"],
      color: "from-indigo-400 to-purple-400"
    }
  ];

  const additionalSkills = [
    "RESTful API Design & Integration",
    "Cloud Services",
    "AI Integration (Chatbots, OpenAI APIs, Gemini APIs)",
    "Problem Solving & Debugging"
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Additional Skills
            </h3>
            <ul className="space-y-2">
              {additionalSkills.map((skill) => (
                <li key={skill} className="text-gray-300 text-sm">
                  • {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Hobbies
            </h3>
            <ul className="space-y-2">
              {hobbies.map((hobby) => (
                <li key={hobby} className="text-gray-300 text-sm">
                  • {hobby}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                >
                  {language}
                </span>
              ))}
            </div>
          </motion.div>

          
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
