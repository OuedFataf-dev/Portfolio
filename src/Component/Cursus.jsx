import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col gap-6 px-4"> {/* Ajout de px-4 pour éviter que le contenu touche les bords */}
      {data.map((event, index) => (
        <div
          key={index}
          className="w-full max-w-6xl rounded-lg bg-primary text-white shadow-lg p-4 relative"
          data-aos="fade-up"
        >
          {/* ✅ En-tête */}
          <div className="border-b-2 border-white/30 px-4 py-2 flex justify-between items-center">
            <div className="text-lg font-semibold">{event.name}</div>
            <div className="italic text-sm">{event.date}</div>
          </div>

          {/* ✅ Contenu */}
          <div className="p-4 text-sm break-words">{event.contenu}</div>

          {/* ✅ Flèche à droite */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <FaArrowRight className="text-white text-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
