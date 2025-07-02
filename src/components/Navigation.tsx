
import { motion } from "framer-motion";

interface NavigationProps {
  currentPage: number;
  goToPage: (index: number) => void;
  pages: Array<{ id: string; title: string }>;
}

const Navigation = ({ currentPage, goToPage, pages }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            DEEPYAMAN MONDAL
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => goToPage(index)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {page.title}
                {currentPage === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <div className="text-sm text-gray-300">
              {pages[currentPage].title}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
