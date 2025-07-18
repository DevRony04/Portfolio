import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  const certificates = [
    {
      title: "AWS Certified Developer - Associate Certification",
      issuer: "Infosys Springboard",
      date: "June 8, 2025",
      link: "https://drive.google.com/file/d/1ytA4Eq8s0taJgACjKqEPODZEre7SQ2d5/view",
      gradient: "from-orange-500 to-red-700"
    },
    {
      title: "Certificate of Achievement: TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "June 19, 2025",
      link: "https://drive.google.com/file/d/1QWmj3Suq3rlV1tluuGuTzaz1YFZqMF54/view",
      gradient: "from-blue-500 to-indigo-700"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "JP Morgan Chase & Co.",
      date: "July 5th, 2025",
      link: "https://drive.google.com/file/d/1bepavuv6ii1_0ZSW7ZK5qnNikfbH3K2b/view",
      gradient: "from-green-500 to-emerald-700"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      date: "18th July, 2025",
      link: "https://drive.google.com/file/d/11b6GsQrR3d4go3_Q6NdZdKtE7MIRB5BV/view?usp=sharing",
      gradient: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certificates
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${cert.gradient} text-white text-sm font-semibold mb-4`}>
                Certified
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {cert.title}
              </h3>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-300">
                  <span className="font-semibold">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Date:</span> {cert.date}
                </p>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${cert.gradient} rounded-lg font-semibold text-white hover:opacity-90 transition-opacity duration-200`}
              >
                <ExternalLink size={18} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
