import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      year: "Jan 2024 – Present",
      role: "Software Developer",
      company: "GEP (Full-time)",
      description: [
        "Spearheaded the integration of Field Services application into the Smart application, enhancing functionality, streamlining workflows, and improving operational efficiency across the app ecosystem.",
        "Revamping and modernizing the architecture of the Smart app, replacing legacy systems with a scalable and high-performance structure to boost speed, maintainability, and user experience.",
        "Overseeing and maintaining the Inventory application, managing bug fixes and ensuring stable performance until its integration into the Smart platform.",
      ],
      technologies: ["React Native", "Redux", "Mobile Development", "Code Refactoring"],
    },
    {
      year: "Jan, 2022 – Dec, 2023",
      role: "Managed Network Expert (Instructor)",
      company: "Chegg India",
      description: [
        "Solved complex Computer Science and Engineering questions in subjects such as Data Structures and Algorithms, Database Management Systems, Network Security, Computer Networks, and Operating Systems.",
        "Provided clear, step-by-step explanations and diagrams to ensure comprehensive understanding for learners.",
        "Delivered accurate, well-researched solutions adhering to academic integrity guidelines, maintaining high-quality standards.",
      ],
      technologies: ["Data Structures", "Algorithms", "DBMS", "Network Security", "Operating Systems"],
    },
    {
      year: "Jul, 2023 – Dec, 2023",
      role: "Web Developer",
      company: "IIITD (in collaboration with the Ph.D. Admin Office and Prof. Pankaj Jalote)",
      description: [
        "Designed, developed, and deployed a Ph.D. Management Portal on the college network, streamlining academic administrative tasks for Ph.D. administrators and students.",
        "Student Database Management: Streamlined profile creation, yearly reviews, and thesis review processes.",
        "Stipend Management: Automated stipend tracking and contingency logbook updates for improved accuracy.",
        "Exam Invigilation Duty Allocation: Engineered and implemented an optimized algorithm for fair and efficient duty assignment.",
        "Developed and deployed the Exam Invigilation Algorithm, successfully operational since March 2023, and used across 7+ exam seasons to allocate invigilation duties seamlessly.",
      ],
      technologies: ["Django", "ReactJS", "TailwindCSS", "SQL", "Automation", "Web Development"]
    },
    {
      year: "Jul, 2023 – Dec, 2023",
      role: "VR Developer",
      company: "Melange Lab, IIITD",
      description: [
        "Developed an immersive 3D Printing Machine Virtual Reality (VR) model for a research study evaluating the redundancy principle from the Cognitive Theory of Multimedia Learning (CTML) in 3D VR-based learning environments.",
        "Incorporated advanced Eye-Tracking functionality for Oculus Pro devices and processed user data to extract Blink Rate, Saccade Values, and Fixation Metrics, enabling in-depth analysis of user behavior and experience.",
        "Leveraged user behavior insights to iteratively enhance the VR model, optimizing learning experiences for factual, conceptual, and procedural knowledge acquisition in immersive environments.",
        "Presented the VR model at RIISE 2024, IIIT Delhi’s Annual Research Expo, showcasing its innovative design, technical advancements, and research relevance."
      ],
      technologies: ["Virtual Reality", "OpenXR", "Oculus Pro", "Eye-Tracking", "Unity Game Engine", "User Experience Analysis"]
    },
    {
      year: "May, 2023 – July, 2023",
      role: "Software Engineer Intern",
      company: "GEP Worldwide",
      description: [
        "Designed and developed a high-performance Console Application using C# to automate bulk data uploads from Excel spreadsheets to MySQL databases, streamlining data management workflows.",
        "Implemented automated data processing pipelines, reducing manual errors and improving data accuracy, resulting in enhanced operational efficiency.",
        "Conducted comprehensive testing in Development (Dev) and User Acceptance Testing (UAT) environments, ensuring seamless production deployment and reliability of the application."
      ],
      technologies: ["C#", "Excel Automation", "MySQL", "Data Processing", "Quality Assurance"]
    },
    {
      year: "Jan, 2023 – May, 2023",
      role: "Researcher",
      company: "Networks Lab, IIITD (in collaboration with the Ministry of Rural Development)",
      description: [
        "Automated the testing of the LokOS application using Appium, focusing on SHG profile uploads to identify performance bottlenecks under varying network conditions.",
        "Conducted thorough performance testing by simulating data uploads of SHGs containing black and color images (3.18MB and 21MB) at different network speeds (256Kbps, 512Kbps, and 1Mbps).",
        "Identified key issues impacting data upload efficiency, including lack of upload resumption, uncompressed image files, and absence of upload progress visibility.",
        "Proposed critical improvements, such as image compression, resumable uploads, and data fragmentation based on network conditions, to enhance data transfer reliability.",
      ],
      technologies: ["Java", "Appium", "Charles Proxy", "MITM Proxy", "Test Automation", "Mobile Performance Testing"],
    },
  ];

  return (
    <section>
      <div className="relative bg-gradient-to-b from-[#f0f4f8] to-[#e8eef3] py-12 px-5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(105, 167, 156, 0.1)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-800 relative inline-block">
            Experience
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block h-1 w-20 bg-gradient-to-r from-[#69a79c] to-blue-500 absolute left-1/2 transform -translate-x-1/2 mt-2"
            />
          </h2>
          <p className="text-gray-600 text-md mt-5">
            A showcase of my journey through various roles, solving problems, building scalable systems,
            and enhancing user experiences across industries.
          </p>
        </motion.div>

        {/*Experience Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-lg mx-auto mb-16"
        >
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-102 transition-all duration-300">
            <div className="text-center space-y-2">
              <p className="text-2xl font-medium text-gray-600">Total Experience</p>
              <p className="text-4xl font-bold text-[#69a79c]">1+ Years</p>
              <p className="text-gray-500">of Professional Excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline with original card format */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            className="w-0.5 bg-gradient-to-b from-[#69a79c] to-blue-500"
          />
        </div>

        <motion.div className="relative max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
