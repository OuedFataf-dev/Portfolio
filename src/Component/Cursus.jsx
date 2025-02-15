import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const Experience = ({ data }) => {
  // ✅ Initialisation d'AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation en 1000ms (1s)
  }, []);

  return (
    <div className="flex flex-col gap-6">
    
        {data.map((event, index) => (
          <div
            key={index}
            className="block max-w-lg rounded-lg bg-primary max-w-6xl text-white shadow-lg p-4 relative"
            data-aos="fade-up" // ✅ Ajout de l'animation ici
          >
            {/* ✅ En-tête */}
            <div className="border-b-2 border-white/30 px-4 py-2 flex justify-between items-center">
              <div className="text-lg font-semibold">{event.name}</div>
              <div className="italic text-sm">{event.date}</div>
            </div>

            {/* ✅ Contenu */}
            <div className="p-4 text-sm">{event.contenu}</div>

            {/* ✅ Flèche à droite */}
            <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2">
              <FaArrowRight className="text-white text-2xl" />
            </div>
          </div>
        ))}
    
    </div>
  );
};

export default Experience;
