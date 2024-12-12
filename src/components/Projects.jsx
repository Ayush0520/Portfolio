import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import DetailedCard from "./DetailedCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Sports",
      description: "A project highlighting stunning visuals and creative designs.",
      imageSrc: "https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?cs=srgb&dl=pexels-king-siberia-1123639-2277981.jpg&fm=jpg",
      viewSource: "https://github.com/sports-project",
      note: "Optimized for desktop only.",
    },
    {
      title: "Beyond Builder",
      description: "Showcasing innovative development techniques and tools.",
      imageSrc: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
      viewSource: "https://github.com/beyond-builder",
    },
    {
      title: "Shooting Star",
      description: "Capturing out-of-the-box ideas and execution strategies.",
      imageSrc: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
      viewSource: "https://github.com/shooting-star",
      viewSite: "https://shooting-star-site.com",
    },
  ];

  const handleSeeMore = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gradient-to-b from-[#f0f4f8] to-[#e8eef3] py-16">
      <div className="container mx-auto px-8 max-w-screen-xl text-center">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-[#2e3a59] relative inline-block">
            Projects
            <span className="block h-1 w-20 bg-gradient-to-r from-teal-400 to-blue-500 absolute left-1/2 transform -translate-x-1/2 mt-2"></span>
          </h2>
          <p className="text-lg text-[#5a6476] mt-5 italic">
            "A collection of projects that showcase my journey as a developer."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              onSeeMoreClick={() => handleSeeMore(project)} // Pass the specific project data
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <DetailedCard project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Projects;
