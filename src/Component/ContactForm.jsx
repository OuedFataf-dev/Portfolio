import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Fonction pour gérer les changements de champ
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mjkgapyy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
      } else {
        setStatus("Erreur lors de l'envoi, veuillez réessayer.");
      }
    } catch (error) {
      setStatus("Une erreur s'est produite.");
    }
  };

  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Section gauche */}
        <div>
          <p className="italic text-gray-400 mb-4">
            Pour toute question ou collaboration, n’hésitez pas à me contacter.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 border-2 border-blue-500 rounded-lg">
                <FaMapMarkerAlt className="text-xl text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Adresse</h4>
                <p className="text-gray-400">OUAGADOUGOU</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 border-2 border-blue-500 rounded-lg">
                <FaPhone className="text-xl text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Téléphone</h4>
                <p className="text-gray-400">0731 0559</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 border-2 border-blue-500 rounded-lg">
                <FaEnvelope className="text-xl text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-400">ouedraogofataf75@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-blue-400 text-2xl hover:text-white">
              <FaGithub />
            </a>
            <a href="#" className="text-blue-400 text-2xl hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <div className="relative flex items-center justify-center w-[300px] h-[350px] bg-[#07182E] rounded-2xl overflow-hidden">
          {/* Effet d'animation */}
          <div className="absolute w-[100px] h-[130%] bg-gradient-to-b from-cyan-400 to-pink-500 animate-rotate"></div>

          {/* Fond intérieur */}
          <div className="absolute inset-1 bg-[#07182E] rounded-xl"></div>

          {/* Contenu du formulaire */}
          <div className="relative z-10 text-white w-[90%]">
            <h2 className="text-xl font-semibold text-center mb-4">Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Votre Nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-2 rounded bg-[#0A1A35] border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-2 rounded bg-[#0A1A35] border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Écrire votre message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="p-2 rounded bg-[#0A1A35] border border-cyan-400 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              ></textarea>
              <button type="submit" className="p-2 bg-cyan-400 rounded-lg text-[#07182E] font-bold hover:bg-cyan-500 transition">
                Envoyer
              </button>
            </form>
            {status && <p className="text-center mt-2 text-green-400">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
