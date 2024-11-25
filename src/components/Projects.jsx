import React, { useState } from "react";
import projectsData from "../Data/projectsData.json";
import ProjectPopup from "./ProjectPopup";


const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="relative min-h-screen">
      {/* Fixed background gradients */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 -z-10" />

      {/* Animated gradient orbs */}
      <div className="fixed top-1/3 -right-48 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-1/4 -left-24 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 relative">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .slice(0, showAll ? projectsData.length : 3)
            .map((project) => (
              <div key={project.id} className="h-full">
                <div
                  className="bg-black relative card group rounded-lg shadow-lg transition-all duration-300 overflow-auto no-scrollbar"
                  style={{
                    height: "360px",
                  }}
                >
                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    <h2 className="text-lg font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h2>
                    <div className="text-sm text-orange-300 mb-2">
                      {project.category}
                    </div>
                    <p className="text-gray-300">
                      {project.description}
                    </p>
                    <div className="text-gray-300 flex-grow">
                      <a href={project.githubLink}
                        className="mt-2 block bg-purple-800 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 position:absolute margin-left:auto">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={toggleShowAll}
          className="relative group overflow-hidden rounded-lg mx-auto mt-8 block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50 transition-transform duration-300 group-hover:scale-105" />
          <span className="relative px-6 py-2 block bg-black bg-opacity-90 text-white font-medium transition-all duration-300 group-hover:bg-opacity-50">
            {showAll ? "Show Less" : "Show All"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
