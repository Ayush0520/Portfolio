import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { SiBytedance } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', link: "/" },
    { name: 'About', link: "/about" },
    { name: 'Blogs', link: "/blog" },
    {
      name: 'Contact',
      link: "#",
      onClick: () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-2xl" : "bg-gray-700"
      }`}
    >
      <div className={`container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center`}>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500"
          >
            <motion.div
              animate={{
                scale: theme === 'light' ? 1 : 0,
                rotate: theme === 'light' ? 0 : 180,
                opacity: theme === 'light' ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute' }}
            >
              <span className="text-3xl">☀️</span>
            </motion.div>
            <motion.div
              animate={{
                scale: theme === 'dark' ? 1 : 0,
                rotate: theme === 'dark' ? 0 : -180,
                opacity: theme === 'dark' ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute' }}
            >
              <span className="text-3xl">🌙</span>
            </motion.div>
          </button>
          
          <Link
            to="/"
            className="hover:scale-105 transition-all duration-300"
          >
            <span className="ml-2 font-serif text-xl tracking-wide text-white hover:text-gray-300">
              Ayush Singh
            </span>
          </Link>
        </div>
        
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              {link.onClick ? (
                <button
                  onClick={link.onClick}
                  className={`inline-block py-1 px-2 transition-all duration-300 hover:text-gray-400 
                    after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-300 
                    after:transition-all after:duration-300 hover:after:w-full ${
                      location.pathname === link.link
                        ? "text-white font-bold after:w-full"
                        : "text-gray-300"
                    }`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.link}
                  className={`inline-block py-1 px-2 transition-all duration-300 hover:text-gray-400 
                    after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-300 
                    after:transition-all after:duration-300 hover:after:w-full ${
                      location.pathname === link.link
                        ? "text-white font-bold after:w-full"
                        : "text-gray-300"
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}

          <li>
            <a
              href="/path-to-resume.pdf"
              download="Ayush_Resume.pdf"
              className="group relative flex items-center justify-center w-32 h-10 border-2 border-gray-300 rounded-full text-gray-300 font-semibold shadow-md transition-all duration-300 hover:bg-gray-300 hover:text-gray-800 overflow-hidden"
            >
              <span
                className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full"
              >
                Resume
              </span>

              <span
                className="absolute inset-0 flex items-center justify-center text-xl transition-transform duration-300 translate-y-full group-hover:translate-y-0"
              >
                <FaDownload />
              </span>
            </a>
          </li>
        </ul>

        <div
          role="button"
          tabIndex="0"
          aria-label="Toggle Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen(!open);
          }}
          className="p-2 md:hidden"
        >
          <RxHamburgerMenu size={30} className="text-white" />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm text-white z-50 flex flex-col justify-center items-center"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="w-full px-8"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="space-y-8 text-3xl font-bold uppercase tracking-widest text-center">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <Link
                        to={link.link}
                        onClick={() => setOpen(false)}
                        className="hover:text-gray-300 transition-all duration-300 inline-block"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
