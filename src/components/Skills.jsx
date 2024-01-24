// components/Skills.jsx
import React from "react";
import skillsData from "../Data/skillsData.json";

const Skills = () => {
  const skillsData = [
    { name: "C", proficiency: 70 },
    { name: "C++", proficiency: 80 },
    { name: "Java", proficiency: 90 },
    { name: "Python", proficiency: 85 },
  ];

  return (
    <div
      id="skills"
      className="bg-green-800 text-white min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <p className="text-lg">Here are some of my awesome skills.</p>

        <div className="mt-8">
          {skillsData.map((language) => (
            <div key={language.name} className="mb-4">
              <p className="text-lg font-semibold">{language.name}</p>
              <div className="bg-gray-300 h-4 rounded-md mt-2">
                <div
                  className="bg-green-500 h-full rounded-md"
                  style={{ width: `${language.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
