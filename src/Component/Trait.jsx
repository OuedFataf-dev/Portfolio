import { FaUniversity } from "react-icons/fa";

const Timeline = () => {
  const events = [
    { id: 1, title: "Étape 1" },
    { id: 2, title: "Étape 2" },
    { id: 3, title: "Étape 3" },
  ];

  return (
    <div className="flex flex-col items-center relative">
      {events.map((event, index) => (
        <div key={event.id} className="flex flex-col items-center">
          {/* Ligne verticale sauf pour le premier élément */}
          {index !== 0 && <div className="w-1 h-24 bg-blue-500"></div>}

          {/* Icône */}
          <div className="flex items-center justify-center w-12 h-12 bg-white border-4 border-gray-300 rounded-full shadow-lg">
            <FaUniversity className="text-gray-600 text-2xl" />
          </div>

          {/* Texte de l'étape */}
         
        </div>
      ))}
    </div>
  );
};

export default Timeline;
