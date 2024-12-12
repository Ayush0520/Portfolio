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
        "Specialize in building cross-platform mobile applications using React Native, with a strong emphasis on performance, seamless user experiences, and efficient code architecture.",
        "Demonstrated expertise in API integration and efficient state management using Redux, enhancing application responsiveness and reliability.",
        "Contributed to updating the base architecture of the application, improving scalability and maintainability for future development.",
      ],
      technologies: ["React Native", "Redux", "Mobile Development", "Scalability"],
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
      role: " Web Developer",
      company: "IIITD",
      description: [
        "Developed and deployed a Ph.D. Management Portal on the college network in collaboration with the Ph.D. Admin Office and Prof. Pankaj Jalote, streamlining academic administrative tasks for Ph.D. administrators and students.",
        "Automated critical processes, including:",
        "Student Database Maintenance: Profiles, Yearly Reviews, Thesis Reviews.",
        "Stipend Management and Contingency Logbook updates.",
        "Exam Invigilation Duty Allotment with an optimized algorithm.",
        "Implemented an Exam Invigilation Algorithm, currently in use by the college since March 2023, successfully allocating duties for 7+ exam seasons.",
      ],
      technologies: ["Django", "ReactJS", "TailwindCSS", "SQL", "Academic Portal"],
    },
    {
      year: "Jul, 2023 – Dec, 2023",
      role: "VR Developer",
      company: "Melange Lab, IIITD",
      description: [
        "Developed a cutting-edge 3D Printing Machine Virtual Reality (VR) model, leveraging advanced technologies and innovative design principles.",
        "Utilized OpenXR Libraries to ensure seamless compatibility and interoperability across various VR platforms, enhancing user experience and accessibility.",
        "Integrated Eye Tracking functionality specifically designed for Oculus Pro devices, enabling precise and intuitive control within the virtual environment."
      ],
      technologies: ["Virtual Reality", "OpenXR", "Oculus Pro", "Unity Game Engine"],
    },
    {
      year: "May, 2023 – July, 2023",
      role: "Software Engineer Intern",
      company: "GEP Worldwide",
      description: [
        "Developed a robust Console Application using C# to streamline bulk data uploads from Excel spreadsheets to MySQL databases, significantly improving operational efficiency.",
        "Implemented automated data entry processes, reducing manual errors and enhancing data accuracy compared to traditional methods.",
        "Engineered a practical software solution that optimized operational workflows, showcasing strong software development and problem-solving skills.",
        "Successfully deployed the application to production after rigorous testing in Development (Dev) and Quality Assurance (QAT) environments, ensuring reliability and effectiveness."
      ],
      technologies: ["C#", "Excel", "MySQL", "Automation"],
    },
    {
      year: "Jan, 2023 – May, 2023",
      role: "Researcher",
      company: "Networks Lab, IIITD",
      description: [
        "Conducted in-depth analysis of the LokOS Mobile Application's response time in collaboration with the Ministry of Rural Development.",
        "Developed automation scripts using the Appium Testing Framework for streamlining Self-Help Group (SHG) data creation.",
        "Utilized tools like Appium Inspector, Charles Proxy, and MITM Proxy for data packet analysis and decision-making.",
      ],
      technologies: ["Java", "Appium", "Charles Proxy", "MITM Proxy"],
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

        {/* New Experience Counter */}
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
