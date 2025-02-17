import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const Experience = ({ data = [] }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Vérification si data est vide
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-gray-500">Aucune expérience disponible.</p>;
  }

  return (
    <div className="w-full max-w-4xl bg-blue-600 shadow-lg rounded-lg p-8 relative">
      {/* Bannière */}
      <div className="absolute top-0 left-0 w-full bg-blue-500 text-white text-center py-3 rounded-t-lg">
        <h2 className="text-lg font-bold uppercase">Expériences</h2>
      </div>

      {/* Liste des expériences */}
      <div className="mt-16">
        {data.map((event, index) => (
          <div
            key={index}
            className="mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Nom et date */}
            <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-2">
              <p className="text-gray-800 font-semibold">{event.name}</p>
              <span className="italic text-sm text-gray-600">{event.date}</span>
            </div>

            {/* Contenu avec gestion du texte */}
            <p className="text-gray-700 whitespace-normal">{event.contenu}</p>

            {/* Flèche */}
            <div className="flex justify-end mt-2">
              <FaArrowRight className="text-blue-600 text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
