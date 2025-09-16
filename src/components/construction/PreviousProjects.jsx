import React from "react";
import { latestProjects } from "../data/data";

const PreviousProjects = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold my-6">Previous Projects</h2>
          <p className="text-gray-600 mt-1">
            Here are some of our previous projects
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-4 p-4">
          {latestProjects.map((project) => (
            <div className="relative group flex w-80 h-auto" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-white text-center px-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviousProjects;
