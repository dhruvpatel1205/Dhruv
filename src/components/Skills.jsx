// components/Skills.jsx
import React from "react";
import skillsData from "../Data/skillsData.json";

const Skills = () => {
  //   const skillsData = [
  //     { name: "C" },
  //     { name: "C++" },
  //     { name: "Java" },
  //     { name: "Python" },
  //   ];

  return (
    <>
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 -z-10" />
      <div id="skills" className="relative min-h-screen py-16 flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h1>
          <p className="text-lg text-white">
            Here are some of my skills.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg border border-blue-800 p-4">
            {skillsData.map((language) => (
              <div
                key={language.name}
                className="px-4 py-1 rounded-md transition-transform transform hover:scale-100 hover:shadow-lg ml-4 mb-4"
              >
                <div className="group inline-block">
                  <p className="text-lg font-semibold relative text-white">
                    {language.name}
                    <span className="absolute bottom-0 left-0 bg-purple-800 h-0.5 w-0 transition-all group-hover:w-full"></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
