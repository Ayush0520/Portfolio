import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DetailedCard = ({ project, onClose }) => {
  const { title, description, imageSrc, viewSource, viewSite, note, poster, techStack = [] } = project;

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md bg-black/50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-4 sm:my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative h-56 sm:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000 ease-out"
          />
          <h3 className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-3xl sm:text-5xl text-white z-20 font-serif tracking-tight">{title}</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/20 hover:bg-black/40 text-white rounded-full p-2.5 transition-all duration-300 z-20 backdrop-blur-sm hover:rotate-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-8 space-y-6">
          {techStack.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          )}

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            {description}
          </motion.p>
          
          {note && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg"
            >
              <p className="text-amber-700 text-sm">{note}</p>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {viewSource && (
              <a
                href={viewSource}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-base w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Source Code</span>
              </a>
            )}

            {viewSite && (
              <a
                href={viewSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#69a79c] hover:bg-[#558c7e] text-white rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-base w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="font-medium">Live Demo</span>
              </a>
            )}

            {poster && (
              <a
                href={poster}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-base w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Watch Poster</span>
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailedCard;