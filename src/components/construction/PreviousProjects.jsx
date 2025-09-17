import React from "react";
import { latestProjects } from "../data/data";

const PreviousProjects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold my-6">
          Previous Projects
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Here are some of our previous projects
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-8 flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {latestProjects.map((project) => (
          <div
            className="relative group flex-shrink-0 w-64 sm:w-72 md:w-80 h-auto"
            key={project.id}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md p-2">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-white text-xs sm:text-sm mt-1">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousProjects;
