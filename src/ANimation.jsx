import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
];

const icons = [
  "🌎", // Exemple d'icônes (remplace par des images si nécessaire)
  "📊",
  "💰",
  "🔄",
];

export default function RotatingGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change l'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500">
      {/* Cercle contenant l'image centrale et les icônes */}
      <motion.div
        className="relative w-72 h-72 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center"
        animate={{ rotate: 360 }} // Animation de rotation
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Rotation infinie
      >
        {/* Image centrale qui change toutes les 3 secondes */}
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Rotating Content"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
        />

        {/* Icônes positionnées sur le cercle */}
        {icons.map((icon, index) => (
          <div
            key={index}
            className="absolute w-10 h-10 flex items-center justify-center text-white text-2xl bg-blue-700 rounded-full shadow-lg"
            style={{
              top: `${50 + 40 * Math.sin((index * 2 * Math.PI) / icons.length)}%`,
              left: `${50 + 40 * Math.cos((index * 2 * Math.PI) / icons.length)}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
