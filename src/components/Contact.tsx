
import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7439665040",
      href: "tel:+917439665040",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Mail,
      label: "Email",
      value: "deepyamanmondal7@gmail.com",
      href: "mailto:deepyamanmondal7@gmail.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/deepyaman-mondal-8592a3265/",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/DevRony04",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {contact.label}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Open to Opportunities
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Excited about collaborations in software engineering, product development, and AI-driven innovation. 
              Let's discuss how we can work together to create impactful solutions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:deepyamanmondal7@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="tel:+917439665040"
                className="px-8 py-3 border border-gray-600 rounded-full font-semibold text-gray-300 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-16 pt-8 border-t border-gray-800"
      >
        <p className="text-gray-400">
          © 2024 Deepyaman Mondal. Built with passion and code.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
