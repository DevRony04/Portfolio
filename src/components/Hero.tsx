import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Award, Zap, Cpu, Code2 } from "lucide-react";

const Hero = () => {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-orange-400" />,
      label: "LeetCode Solver",
      value: "200+ Problems",
      desc: "Data Structures & Algorithms",
      link: "https://leetcode.com/u/RonyDevX/",
      color: "border-orange-500/30 hover:border-orange-500/60 shadow-orange-950/20"
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      label: "Architectures Built",
      value: "AI & Microservices",
      desc: "Kafka, InfluxDB, YOLOv8",
      color: "border-teal-500/30 hover:border-teal-500/60 shadow-teal-950/20"
    },
    {
      icon: <Award className="w-5 h-5 text-yellow-500" />,
      label: "AWS Credentials",
      value: "Developer Assoc.",
      desc: "AWS Certified Developer",
      link: "https://drive.google.com/file/d/1ytA4Eq8s0taJgACjKqEPODZEre7SQ2d5/view",
      color: "border-yellow-500/30 hover:border-yellow-500/60 shadow-yellow-950/20"
    },
    {
      icon: <Zap className="w-5 h-5 text-pink-400" />,
      label: "Performance Optimization",
      value: "95+ Lighthouse",
      desc: "Low-latency Web APIs",
      color: "border-pink-500/30 hover:border-pink-500/60 shadow-pink-950/20"
    }
  ];

  const coreSkills = [
    "Java / Spring Boot",
    "Kafka",
    "FastAPI / Python",
    "React / Next.js",
    "Docker",
    "PostgreSQL & InfluxDB"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text and Copy Section - Left (7 cols on large screens) */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Actively seeking SWE Roles
            </motion.div>

            {/* Headline Title */}
            <div className="space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg font-semibold tracking-wider text-blue-400 uppercase"
              >
                Hi, I'm Deepyaman Mondal
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none"
              >
                Building{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  High-Throughput Systems
                </span>{" "}
                & Intelligent Backends
              </motion.h1>
            </div>

            {/* Executive Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
            >
              Systems & Full-Stack Software Engineer with professional internship experience building production-grade architectures. Specialized in high-performance Web APIs, event-driven streaming, and low-latency computer vision pipelines. Dedicated to algorithm mastery and clean, resilient code.
            </motion.p>

            {/* Core Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5"
            >
              {coreSkills.map((skill, idx) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-gray-800/40 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-gray-300 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTAs and Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="mailto:deepyamanmondal7@gmail.com"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              >
                <Mail className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-800 border border-gray-700 rounded-xl font-semibold text-gray-200 hover:bg-gray-750 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                </svg>
                Download Resume
              </a>

              {/* Social icons row */}
              <div className="flex items-center justify-center gap-3 sm:ml-2">
                <a
                  href="tel:+917439665040"
                  className="p-3 border border-gray-800 rounded-xl bg-gray-900/40 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                  title="Call Me"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/DevRony04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 rounded-xl bg-gray-900/40 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepyaman-mondal-8592a3265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 rounded-xl bg-gray-900/40 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/RonyDevX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 rounded-xl bg-gray-900/40 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300 flex items-center justify-center"
                  title="LeetCode Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.88 9.88a1.373 1.373 0 0 0 0 1.94l6 6a1.373 1.373 0 0 0 1.94 0l9.88-9.88a1.374 1.374 0 0 0 0-1.94l-6-6a1.374 1.374 0 0 0-.979-.414zM8.355 12.54a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414zm4.242-4.243a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414z" fill="#FFA116" />
                    <path d="M16.192 11.233a.512.512 0 0 1-.223.447l-6.192 4.128a.512.512 0 0 1-.727-.142l-2.064-3.096a.512.512 0 0 1 .142-.727l6.192-4.128a.512.512 0 0 1 .727.142l2.064 3.096a.512.512 0 0 1-.083.473z" fill="#F8F8F8" />
                  </svg>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Graphic and Statistics Cards Section - Right (5 cols on large screens) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-8">
            
            {/* Visual Profile Avatar Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative select-none"
            >
              <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center overflow-hidden">
                  <img
                    src="/photo.jpg"
                    alt="Deepyaman Mondal Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback image source if photo.jpg is missing
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200";
                    }}
                  />
                </div>
              </div>
              
              {/* Outer floating orbiting rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-blue-400/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dotted border-purple-500/15"
              />
            </motion.div>

            {/* FAANG SWE Highlight Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {highlights.map((item, idx) => {
                const CardWrapper = item.link ? "a" : "div";
                const linkProps = item.link
                  ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`block p-4 rounded-2xl bg-gray-900/50 backdrop-blur-md border ${item.color} shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <CardWrapper {...(linkProps as any)} className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-xl bg-gray-800/60 border border-gray-700/50">
                          {item.icon}
                        </div>
                        {item.link && (
                          <span className="text-[10px] text-gray-500 border border-gray-800 rounded px-1.5 py-0.5 uppercase tracking-wider font-semibold group-hover:text-white">
                            Link
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="text-xl sm:text-2xl font-extrabold text-white leading-none">
                          {item.value}
                        </div>
                        <div className="text-xs font-semibold text-gray-200">
                          {item.label}
                        </div>
                        <div className="text-[10px] text-gray-400 font-light leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-xs mb-1.5 tracking-wider uppercase font-semibold text-gray-500">Explore Stack</span>
            <div className="w-5 h-9 border-2 border-gray-700 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-1 h-2 bg-blue-500 rounded-full mt-1.5"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
