
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const FloatingCube = () => {
  return (
    <Box args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#8B5CF6" />
    </Box>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Summary
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                🚀 I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with hands-on experience in building robust, scalable, and high-performing web applications. My expertise lies in the <span className="text-purple-400 font-semibold">MERN stack</span> — React.js, Node.js, Express.js, and MongoDB — along with a strong foundation in Core Java and modern development tools.
              </p>
              
              <p>
                I have successfully developed and deployed dynamic e-commerce platforms, AI-integrated applications, and secure user authentication systems. My focus is on creating intuitive and responsive user interfaces, optimized backend APIs, and seamless user experiences across devices.
              </p>
              
              <p>
                I bring a strong problem-solving mindset and thrive in collaborative environments that push the limits of innovation. In addition to development, I have practical experience with <span className="text-green-400 font-semibold">system design principles</span>, Microsoft Certified Professional (MCP) server environments, and the integration of AI tools to enhance business functionality.
              </p>
              
              <p>
                I'm continuously exploring emerging technologies and believe in building solutions that are not only functional but also <span className="text-yellow-400 font-semibold">future-ready</span>. Open to exciting opportunities and collaborations in software engineering, product development, and AI-driven innovation.
              </p>
              
              <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Let's connect and build something impactful together! 🚀
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 w-full"
          >
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingCube />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
