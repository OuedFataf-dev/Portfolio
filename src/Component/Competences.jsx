import React from "react";




// Composant SkillCard
function SkillCard({ title, skills }) {
  return (
     <>
     
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
     
      {/* Bannière */}
      <div className="absolute top-0 left-0 w-full bg-blue-500 text-white text-center py-3 rounded-t-lg">
        <h2 className="text-lg font-bold uppercase">{title}</h2>
      </div>

      {/* Liste des compétences */}
      <div className="mt-16">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <p className="text-gray-800 font-semibold">{skill.name}</p>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-blue-600 h-6 rounded-full text-sm flex items-center justify-end pr-3 text-white font-semibold"
                style={{ width: `${skill.level}%` }}
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
  
}


export default SkillCard