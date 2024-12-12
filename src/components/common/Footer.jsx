import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa6";
import { BsRocket } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {

  return (
    <footer className="bg-[#f0f0f0] text-center">
        <div className="py-16">
            <div className="flex flex-col items-center">
                <FaPaperPlane size={50} className="mb-6"/>
                <h2 className="text-3xl font-serif font-bold mb-4 tracking-wide">GET IN TOUCH!</h2>
                <p className="text-gray-700 mb-8 max-w-md text-lg leading-relaxed">
                    Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
                </p>
                <div className="flex justify-center items-center mt-8">
                    <a
                        href="mailto:ayush08august@gmail.com?subject=Hello%20Ayush!&body=Hi%20Ayush,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20to%20you.%0A%0ARegards,%0A%5BYour%20Name%5D"
                        className="px-10 py-3 border-2 border-gray-800 text-gray-800 font-serif text-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
                    >
                        Say Hello
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-[#222222] py-8 relative">
            <div className="flex justify-center space-x-4 px-4 mb-4">
                {/* Social Media Icons with Smooth Transitions and Lift on Hover */}
                <a 
                    href="https://leetcode.com/u/Ayush_0520/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded transition-all duration-300 hover:bg-[#F89F1B] hover:-translate-y-2"
                >
                    <SiLeetcode className="text-white text-2xl" />
                </a>
                <a
                    href="https://open.spotify.com/user/31bf27ssbjbyllaxz4dto4i6g3pu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded transition-all duration-300 hover:bg-[#1DB954] hover:-translate-y-2"
                >
                    <i className="fab fa-spotify text-white text-2xl"></i>
                </a>
                <a
                    href="https://github.com/Ayush0520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded transition-all duration-300 hover:bg-[#333] hover:-translate-y-2"
                >
                    <i className="fab fa-github text-white text-2xl"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/ayush0520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded transition-all duration-300 hover:bg-[#0077B5] hover:-translate-y-2"
                >
                    <i className="fab fa-linkedin text-white text-2xl"></i>
                </a>
            </div>

            {/* Rocket with Hover Effect */}
            <div className="flex justify-center items-center mt-8">
                <div
                    className="relative group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <BsRocket className="text-white text-4xl transition-transform duration-300 group-hover:scale-125"/>
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-12 opacity-0 group-hover:opacity-100 text-gray-400 text-sm transition-opacity duration-300 whitespace-nowrap">
                        Beam me up, Scotty!
                    </span>
                </div>
            </div>

            <p className="text-gray-500 mt-12">&copy; Ayush Singh 2024</p>
        </div>
    </footer>
  );
};

export default Footer;

