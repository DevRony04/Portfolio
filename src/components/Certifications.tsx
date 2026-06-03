import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";

const Certifications = () => {
  const certificates = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Infosys Springboard",
      date: "June 8, 2025",
      link: "https://drive.google.com/file/d/1ytA4Eq8s0taJgACjKqEPODZEre7SQ2d5/view",
      gradient: "from-amber-600/20 to-orange-600/20",
      borderColor: "hover:border-orange-500/50",
      glowColor: "hover:shadow-orange-500/5",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "July 18, 2025",
      link: "https://drive.google.com/file/d/11b6GsQrR3d4go3_Q6NdZdKtE7MIRB5BV/view?usp=sharing",
      gradient: "from-pink-600/20 to-rose-600/20",
      borderColor: "hover:border-pink-500/50",
      glowColor: "hover:shadow-pink-500/5",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "July 5, 2025",
      link: "https://drive.google.com/file/d/1bepavuv6ii1_0ZSW7ZK5qnNikfbH3K2b/view",
      gradient: "from-blue-600/20 to-indigo-600/20",
      borderColor: "hover:border-blue-500/50",
      glowColor: "hover:shadow-blue-500/5",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "June 19, 2025",
      link: "https://drive.google.com/file/d/1QWmj3Suq3rlV1tluuGuTzaz1YFZqMF54/view",
      gradient: "from-emerald-600/20 to-teal-600/20",
      borderColor: "hover:border-emerald-500/50",
      glowColor: "hover:shadow-emerald-500/5",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Credentials & Certifications
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Professional milestones, vendor credentials, and technical workshops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col justify-between bg-gray-900/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md border border-gray-800 ${cert.borderColor} shadow-lg ${cert.glowColor} transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${cert.badgeColor} text-xs font-semibold`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Credential
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-850 border border-gray-800 text-gray-400 group-hover:text-white transition-colors duration-200">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="space-y-1.5 mb-6 text-sm text-gray-300">
                  <p>
                    <span className="text-gray-500 font-medium">Issuer:</span> {cert.issuer}
                  </p>
                  <p>
                    <span className="text-gray-500 font-medium">Issued Date:</span> {cert.date}
                  </p>
                </div>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br ${cert.gradient} hover:bg-opacity-100 border border-white/5 hover:border-white/10 rounded-xl font-semibold text-white transition-all duration-200 w-full`}
              >
                <ExternalLink size={16} />
                Verify Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
