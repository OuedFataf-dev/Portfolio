import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Mettre à jour la section active
    }
  };

  // Ajouter un écouteur d'événement pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "competences","services", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg z-50 py-4 px-6 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fataf</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                onClick={(e) => scrollToSection("home", e)}
                className={`cursor-pointer block py-2 px-3 italic rounded-sm ${
                  activeSection === "home"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => scrollToSection("competences", e)}
                className={`cursor-pointer block py-2 px-3 italic rounded-sm ${
                  activeSection === "competences"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                }`}
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                onClick={(e) => scrollToSection("services", e)}
                className={`cursor-pointer block py-2 px-3 italic rounded-sm ${
                  activeSection === "services"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                }`}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                onClick={(e) => scrollToSection("portfolio", e)}
                className={`cursor-pointer block py-2 px-3 italic rounded-sm ${
                  activeSection === "portfolio"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                }`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={(e) => scrollToSection("contact", e)}
                className={`cursor-pointer block py-2 px-3 italic rounded-sm ${
                  activeSection === "contact"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;