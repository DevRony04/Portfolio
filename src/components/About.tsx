import { motion } from "framer-motion";

const About = () => {
  const features = [
    { icon: "🚀", title: "Full Stack Development", desc: "MERN Stack Expert" },
    { icon: "🤖", title: "AI Integration", desc: "OpenAI & Gemini APIs" },
    { icon: "☁️", title: "Cloud Services", desc: "AWS Certified Developer" },
    { icon: "🔧", title: "System Design", desc: "Scalable Architectures" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-300 space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                🚀 I'm a passionate <span className="text-blue-400 font-semibold">Systems & Full-Stack Engineer</span> with experience in building robust, high-throughput, and scalable web architectures. My technical expertise spans across <span className="text-purple-400 font-semibold">Java (Spring Boot / Spring Cloud)</span>, <span className="text-orange-400 font-semibold">Python (FastAPI)</span>, and <span className="text-blue-400 font-semibold">TypeScript (React & Next.js)</span>, coupled with modern event streaming and microservices patterns.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                In my professional experience as a <span className="text-emerald-400 font-semibold">Software Developer Intern</span>, I contributed to production-grade applications where I specialized in database optimization, secure authentication, API acceleration, and system resilience patterns (e.g. circuit breakers, rate limiting).
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg leading-relaxed"
              >
                I enjoy engineering end-to-end architectures—whether it's setting up an event-driven ingestion pipeline with <span className="text-cyan-400 font-semibold">Apache Kafka</span>, utilizing time-series databases like <span className="text-teal-400 font-semibold">InfluxDB</span> and relational databases like <span className="text-indigo-400 font-semibold">PostgreSQL</span>, or integrating computer vision models like <span className="text-pink-400 font-semibold">YOLOv8</span> into real-time applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg leading-relaxed"
              >
                I bring a strong foundation in <span className="text-yellow-400 font-semibold">Data Structures, Algorithms</span>, and <span className="text-green-400 font-semibold">System Design</span> principles. I thrive in high-standard engineering cultures that value testing coverage, performance monitoring, clean code documentation, and scalable system architectures.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
              >
                Let's connect and build something impactful together! 🚀
              </motion.div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-white mb-1">{feature.title}</div>
                  <div className="text-sm text-gray-400">{feature.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)] rounded-3xl"></div>

              {/* Animated elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${20 + (i * 8)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-40"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
