import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import DetailedCard from "./DetailedCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Ph.D. Management Portal",
      brief: "A robust portal for managing Ph.D. student records, automating administrative tasks with seamless user experience.",
      description: "Developed and deployed a Ph.D. Management Portal to automate academic workflows, including Student Database Management, Stipend Tracking, and Exam Invigilation Duty Allocation. Implemented an optimized algorithm for invigilation duties, operational since March 2023, managing 7+ exam seasons seamlessly.",
      imageSrc: "https://media.istockphoto.com/id/1326051977/vector/academic-hat-and-stack-of-textbooks-abstract-educational-icon.jpg?s=612x612&w=0&k=20&c=Dyu5bhmZLmLC_Zbe-vAAtke2WojPjO5ECSD_LjfPpa8=",
      viewSource: "https://github.com/atyant20039/IP-PhD-Management-Portal",
      note: "The Website is hoted on College Network, so it is not accessible from outside.",
      viewSite: "https://drive.google.com/drive/folders/17CO5-ou_N7diD3YrhLwfxYspxbNxPvZN?usp=sharing",
    },
    {
      title: "Distributed URL Shortener",
      brief: "A scalable, high-performance URL shortener system with distributed synchronization and load balancing.",
      description: "Designed and developed a distributed URL shortener system that uses Base-62 encoding for efficient short URL generation. Leveraged Apache ZooKeeper for distributed counter synchronization, NGINX for load balancing, and Docker for containerized deployment. The system ensures high availability, fault tolerance, and scalability to handle high traffic volumes seamlessly.",
      imageSrc: "https://m.media-amazon.com/images/I/510sFVU23DL.png",
      viewSource: "https://github.com/Ayush0520/url-shortener-distributed-architecture"
    },
    {
      title: "3D-Printer VR Model",
      brief: "Immersive VR experience with integrated eye-tracking analytics.",
      description: "Developed an immersive 3D VR model of a 3D printer with integrated eye-tracking capabilities to analyze user behavior. Extracted metrics like Blink Rate, Saccade, and Fixation to evaluate user interaction, aiding research on the Cognitive Theory of Multimedia Learning.",
      imageSrc: "https://koala.sh/api/image/v2-ernez-rja2i.jpg?width=1216&height=832&dream",
      viewSite: "https://drive.google.com/file/d/1zoF0fCmLwBdMY_vVpUP3iQuq9yDX3nSg/view?usp=sharing",
      poster: "https://drive.google.com/file/d/1riSiw9XUbRsh5RBaHIEJ9gNOR1aU0gRN/view?usp=sharing",
      note: "Presented at RIISE 2024, IIIT Delhi’s Annual Research Expo."
    },
    {
      title: "Face-ID Authentication Website",
      brief: "Secure biometric authentication using FaceNet and Keras.",
      description: "Developed a website enabling users to register and log in using facial recognition for secure, password-free authentication. Leveraged the FaceNet model with Keras to process face images, enhancing security and eliminating the need for passwords.",
      imageSrc: "https://static.vecteezy.com/system/resources/previews/004/996/078/non_2x/face-identification-line-icon-facial-recognition-system-sign-biometric-facial-detection-pictogram-face-id-icon-on-white-background-face-id-scanning-process-illustration-vector.jpg",
      viewSource: "https://github.com/Ayush0520/Facial-Authentication-System",
      note: "Hosted on the college network for project demonstration and later removed."
    },
    {
      title: "LokOS Automation",
      brief: "Automated testing and performance optimization for bulk data uploads.",
      description: "Collaborated with the Ministry of Rural Development to test and identify issues in the LokOS mobile application. Developed automated tests using Appium to evaluate app performance under bulk data uploads and varying network conditions, providing detailed reports and proposing solutions like data compression and resumable uploads to improve reliability.",
      imageSrc: "https://support.lokos.in/logo.php",
      viewSource: "https://github.com/vibhorag101/LokOS_Automation",
      note: "Conducted in collaboration with the Ministry of Rural Development, India."
    },
    {
      title: "YouTube-Layer",
      brief: "A secure cloud-based platform for YouTubers and Editors to collaborate on video content.",
      description: "Developing a cloud-based collaboration platform enabling YouTubers and Editors to securely manage video workflows without sharing full YouTube account access. The platform integrates YouTube APIs for video uploads, Azure Key Vault for secure credential management, and Azure Blob Storage for secure file handling. Key features include secure user management, collaboration workflows, and video approval pipelines.",
      imageSrc: "https://cdn.pixabay.com/photo/2021/05/24/16/24/youtube-6279763_1280.png",
      viewSource: "https://github.com/Ayush0520/youtube-layer",
      note: "Project is currently in progress, demonstrating secure and scalable cloud-based video collaboration."
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
              brief={project.brief}
              imageSrc={project.imageSrc}
              onSeeMoreClick={() => handleSeeMore(project)}
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
