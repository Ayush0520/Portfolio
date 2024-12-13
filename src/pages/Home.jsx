import React from "react";
import { Link, Element } from 'react-scroll';
import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import Layout from "../layout/Layout";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Technologies from "../components/Technologies";
import Achievement from "../components/Achievement";


const Home = () => {
  
  return (
    <Layout title="Ayush's Portfolio - Home Page" description="Landing page of the Website.">
      <section>
        {/* Intro Section */}
        <div className="bg-gradient-to-b from-[#f0f4f8] to-[#e8eef3] min-h-screen flex items-center relative pt-16 overflow-hidden">

          {/* Floating Elements */}
          <div className="absolute top-10 left-16 w-16 h-16 sm:w-24 sm:h-24 bg-[#69a79c] opacity-20 rotate-45" />
          <div className="absolute bottom-16 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#558c7e] opacity-30 rounded-lg hidden sm:block" />
          <div className="absolute top-1/4 left-1/3 w-10 h-10 sm:w-16 sm:h-16 bg-[#c7e7e5] opacity-25 blur-md" />

          <div className="container mx-auto px-4 sm:px-8 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-0">
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left px-4 sm:px-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#2e3a59] leading-tight">
                Hi, my name is <br />
                <span className="text-[#69a79c]">Ayush.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#5a6476] font-medium leading-relaxed">
                I’m a <span className="font-semibold italic text-[#2e3a59]">Software Developer</span> from Mumbai, India{" "}
                <br />
                Passionate about crafting{" "}
                <span className="text-[#69a79c] font-medium">scalable applications</span>, writing{" "}
                <span className="text-[#69a79c] font-medium">technical blogs</span>, and sharing my journey in the world of{" "}
                <br />
                <span className="text-[#69a79c] font-medium">software development</span>.
              </p>

              <div className="flex justify-center md:justify-start items-center space-x-4">
                <Link
                  to="projectsSection"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="cursor-pointer"
                >
                  <button
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-[#69a79c] text-white font-serif text-sm sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-[#558c7e] transition flex items-center space-x-2"
                  >
                    <span>View My Work</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative flex justify-center md:-mt-20"
            >
              {/* Circular Frame */}
              <div className="relative flex items-center justify-center rounded-full border-4 border-dotted border-green-500 p-2 sm:p-4">
                <Avatar className="relative z-10 rounded-full w-48 h-48 md:w-full md:h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Technologies/>
      <Experience/>
      <section>
        {/* Resume Section */}
        <div
          className="h-80 w-full flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.livemint.com/lm-img/img/2024/08/26/1600x900/christopher-gower-m_HRfLhgABo-unsplash_1724660492647_1724660500830.jpg')",
          }}
        >
          {/* Translucent Content Box */}
          <div className="bg-black/50 flex flex-col items-center justify-center p-8 text-center w-full h-full">
          <h2 className="text-4xl font-serif text-white mb-6 tracking-wide uppercase drop-shadow-lg">
            Check Out My Résumé!
          </h2>
          <a
            href="your-resume-url.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-white text-white rounded-full text-lg font-semibold tracking-wider shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Grab A Copy
          </a>
          </div>
        </div>
      </section>
      <Element name="projectsSection" className="scroll-mt-20">
        <Projects/>
      </Element>
      <Achievement/>
    </Layout>
  );
};

export default Home;
