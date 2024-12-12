import React from "react";

const ExperienceCard = ({ year, role, company, description, technologies }) => {
  return (
    <div className="relative pt-12 p-6 bg-white shadow-md rounded-md mb-6 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
      {/* Year ribbon */}
      <div className="absolute top-2 left-0 w-auto px-4 h-12 bg-[#69a79c] text-white text-sm font-bold flex items-center justify-center whitespace-nowrap rounded-tr-lg rounded-br-lg shadow-md">
        {year}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-800 mt-3">{role}</h3>
      <p className="text-sm text-gray-500">{company}</p>
      <ul className="list-disc pl-5 marker:text-gray-500 text-gray-600 text-sm mt-4 mb-3">
        {description.map((item, index) => (
          <li key={index} className="leading-6">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full shadow-sm transform transition duration-300 hover:bg-[#69a79c] hover:text-white hover:scale-y-105"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
