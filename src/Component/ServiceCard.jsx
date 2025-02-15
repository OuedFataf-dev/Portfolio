import  React, {useEffect} from "react";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const iconMapper = {
  FaCode: <FaCode className="text-4xl text-blue-500" />,
  FaPaintBrush: <FaPaintBrush className="text-4xl text-blue-500" />,
  FaBullhorn: <FaBullhorn className="text-4xl text-blue-500" />,
  FaMobileAlt: <FaMobileAlt className="text-4xl text-blue-500" />,
  FaLaptopCode: <FaLaptopCode className="text-4xl text-blue-500" />,
  FaChalkboardTeacher: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
};
 


const Services = ({ services }) => {
    useEffect (()=>{
        AOS.init({ duration:1000});
     
     
     
      }, []);
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="relative bg-white rounded-lg shadow-lg p-6 text-center border-2 border-blue-500 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl 
                       border-l-8 border-r-8 
                       before:content-[''] before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 
                       before:w-6 before:h-6 before:bg-blue-500 before:rotate-45"
                       
          >
            {iconMapper[service.icon]} {/* Affichage de l'icône */}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
