import React, { useState, useEffect } from "react";
import projectsData from "../Data/projectsData.json";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState({});

  useEffect(() => {
    setShowAllProjects(false);
    setExpandedDescription({});
  }, []);

  const handleToggleShowAll = () => {
    setShowAllProjects(!showAllProjects);
  };

  const toggleExpandDescription = (projectId) => {
    setExpandedDescription((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
    }));
  };

  const toggleReadLess = (projectId) => {
    setExpandedDescription((prevState) => ({
      ...prevState,
      [projectId]: false,
    }));
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
            .slice(0, showAllProjects ? projectsData.length : 3)
            .map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 flex flex-col"
                style={{
                  minHeight: expandedDescription[project.id] ? "auto" : "360px",
                  height: expandedDescription[project.id] ? "auto" : "360px",
                  //   transition: "min-height 10s, height 10s",
                }}
              >
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">
                      {project.category}
                    </div>
                    <h2 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h2>
                    <div
                      className="text-gray-300"
                      style={{
                        maxHeight: expandedDescription[project.id]
                          ? "none"
                          : "200px",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    {!expandedDescription[project.id] && (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => toggleExpandDescription(project.id)}
                      >
                        Read More
                      </button>
                    )}
                    {expandedDescription[project.id] && (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => toggleReadLess(project.id)}
                      >
                        Read Less
                      </button>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-center py-2 px-4 text-blue-500 hover:underline rounded-lg "
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {projectsData.length > 3 && (
          <div className="mt-8">
            {showAllProjects ? (
              <button
                className="text-blue-500 hover:underline"
                onClick={handleToggleShowAll}
              >
                Hide
              </button>
            ) : (
              <button
                className="text-blue-500 hover:underline"
                onClick={handleToggleShowAll}
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
