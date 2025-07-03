
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";

const pages = [
  { id: 'hero', component: Hero, title: 'Home' },
  { id: 'about', component: About, title: 'About' },
  { id: 'skills', component: Skills, title: 'Skills' },
  { id: 'projects', component: Projects, title: 'Projects' },
  { id: 'education', component: Education, title: 'Education' },
  { id: 'certificates', component: Certificates, title: 'Certificates' },
  { id: 'contact', component: Contact, title: 'Contact' }
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      {/* Background particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Navigation 
        currentPage={currentPage} 
        goToPage={goToPage} 
        pages={pages}
      />
      
      {/* Main content area with proper scrolling */}
      <div className="relative z-10 pt-20">
        <AnimatePresence mode="wait" custom={direction}>
          <PageTransition key={currentPage} direction={direction}>
            <div className="min-h-screen overflow-y-auto">
              <CurrentComponent />
            </div>
          </PageTransition>
        </AnimatePresence>
      </div>

      {/* Page indicators - hidden on mobile for better UX */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3 hidden sm:block">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 block ${
              index === currentPage 
                ? 'bg-blue-400 shadow-lg shadow-blue-400/50' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows - responsive */}
      <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className="fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === pages.length - 1}
        className="fixed right-16 md:right-20 top-1/2 transform -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Page counter - responsive */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-3 md:px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-xs md:text-sm">
        <span className="text-blue-400 font-bold">{currentPage + 1}</span>
        <span className="text-gray-400"> / {pages.length}</span>
      </div>
    </div>
  );
};

export default Index;
