import React, { useState } from "react";
import projectsData from "../Data/projectsData.json";
import ProjectPopup from "./ProjectPopup";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      id="projects"
      className="bg-black text-white text-gray-800 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .slice(0, showAll ? projectsData.length : 3)
            .map((project) => (
              <div key={project.id} className="h-full">
                <div
                  className="bg-gray-800 p-4 rounded-lg shadow hover:bg-opacity-50 transition-opacity duration-300 overflow-auto no-scrollbar"
                  style={{
                    height: "360px",
                  }}
                >
                  <h2 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h2>
                  <div className="text-sm text-orange-300 mb-2">
                    {project.category}
                  </div>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                  <div className="mb-1 mt-3">
                    <a href={project.githubLink}
                      className="block bg-teal-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700 position:absolute margin-left:auto">Github</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {!showAll && (
          <button
            onClick={toggleShowAll}
            className="block mx-auto mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
          >
            Show All
          </button>
        )}
        {showAll && (
          <button
            onClick={toggleShowAll}
            className="block mx-auto mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
          >
            Hide
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
