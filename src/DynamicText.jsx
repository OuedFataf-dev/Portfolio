import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const elements = ["Conception", "Design", "Développeur Web"];

const DynamicText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-32 bg-bleu-500">
      <motion.div
        key={index} // Permet l'animation fluide
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-white"
      >
        {elements[index]}
      </motion.div>
    </div>
  );
};

export default DynamicText;
