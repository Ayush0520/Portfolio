import React from "react";

const ProjectCard = ({ title, brief, imageSrc, onSeeMoreClick }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30 rounded-xl">
      <div className="h-96 w-full">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-xl"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h3 className="text-2xl font-semibold font-serif text-white mb-10">{title}</h3>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {brief}
        </p>
        <button
          className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow-md shadow-black/60 hover:bg-white hover:text-[#69a79c] transition"
          onClick={onSeeMoreClick}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
