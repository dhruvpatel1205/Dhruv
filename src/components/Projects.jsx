// components/Projects.jsx
import React, { useState, useEffect } from "react";
import projectsData from "../Data/projectsData.json";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setVisibleProjects(
      showAllProjects ? projectsData : projectsData.slice(0, 3)
    );
  }, [showAllProjects]);

  return (
    <div
      id="projects"
      className="bg-red-300 text-white min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <a
              key={project.id}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all transform"
            >
              <div className="text-sm text-gray-400 mb-2">
                {project.category}
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {projectsData.length > 3 && (
          <div className="mt-8">
            {showAllProjects ? (
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowAllProjects(false)}
              >
                Hide
              </button>
            ) : (
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowAllProjects(true)}
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
