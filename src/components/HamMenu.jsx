import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react'

const HamMenu = () => {
  const [activeLink, setActiveLink] = useState(null); // Track the clicked link

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const arrowAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm text-white z-50 flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setActiveLink(null)} // Reset on clicking outside
      >
        <ul className="space-y-8 text-3xl font-bold uppercase tracking-widest text-center">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className="relative group cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLink(link.name); // Set the active link
              }}
            >
              {activeLink === link.name ? (
                // Arrow animation replaces the text
                <motion.div
                  className="flex space-x-2"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={arrowAnimation}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="w-6 h-6 border-t-4 border-r-4 border-white rotate-45"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: i * 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { delay: i * 0.1 },
                      }}
                    />
                  ))}
                </motion.div>
              ) : (
                // Default text
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:text-gray-300 transition-all duration-300"
                >
                  {link.name}
                </motion.span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default HamMenu;
