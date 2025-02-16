import './App.css';
import Navbar from './Component/navbar';
import DynamicText from './DynamicText';
import SkillCard from './Component/Competences';
//import Services from './Component/ServiceCard';
import ServiceData from './data.json';
import skillsData from './data.json';
import Experience from './Component/Cursus';
import CursusData from './data.json'
import Services from './ServiceCard';
import Timeline from './Component/Trait'
import Portfolio from './Component/Mon_portfolio';
import mobile from './assets/mobile.png'
import mobile2 from './assets/mobil.png'
import "aos/dist/aos.css";



//import AnimatedCard from './Component/ContactForm';
import ContactForm from './Component/ContactForm';
function App() {
  const Img1=[
    {
       image:mobile
    }
  ]
    
  
  const Img2=[
    {
       image:mobile2
    }
  ]
  
  const Img3=[
    {
       image:'image.png'
    }
  ]  
  return (
    <>
      <Navbar />
      <div id="home" className="min-h-screen w-full bg-blue-500">
        <div className="flex items-center h-32 bg-blue-500 p-5">
          <h1 className="text-2xl md:text-4xl font-bold text-white">OUEDRAOGO FATAF</h1>
        </div>
        <h2>
          <DynamicText />
        </h2>
        <p className="italic text-white text-3xl p-8">
          Développeur web et mobile passionné, je suis spécialisé <br />
          dans la conception et le développement d'applications web <br />
          et mobiles personnalisées. Maîtrisant un large éventail de <br />
          technologies web, je suis à l'aise aussi bien sur le front-end <br />
          que sur le back-end. Mon objectif est de contribuer à des <br />
          projets innovants en mettant à profit mes compétences techniques.
        </p>
      </div>
      <div id="competences">
        <div>
          <div>   </div>
          <div className="text-center p-20 italic text-6xl font-bold">COMPETENCES</div> 
          <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-12 p-12 mt-10 mx-auto">
            <SkillCard title="Mes Compétences" skills={skillsData.skills1 || []} />
            <SkillCard title="Compétences Web" skills={skillsData.skills2 || []} />
          </div>
        </div>
      </div>
      <div id="services" className="text-center p-4 italic text-6xl font-bold">SERVICES</div>
      <div>
        <Services services={ServiceData.services1 || []} />
        <Services services={ServiceData.services2 || []} />
      </div>
      <div id="cursus" className="text-center p-20 italic text-6xl font-bold">CURSUS</div>
      <div className="flex items-center justify-between px-10">
        <div className="w-1/3 flex justify-start mb-20 p-1 ">
          <Experience data={CursusData.eventsLeft1 || []} />
        </div>
        <div className="w-1/3 flex justify-center ">
          <Timeline />
        </div>
        <div className="w-1/3 flex justify-end mt-10">
          <Experience data={CursusData.eventsRight2 || []} />
        </div>
      </div>
      <div className="flex items-center justify-between px-10">
        <div className="w-1/3 flex justify-start mb-20 p-4 max-w-6xl  ">
          <Experience data={CursusData.eventsLeft3 || []} />
        </div>
        <div className="w-1/3 flex justify-center ">
          <Timeline />
        </div>
        <div className="w-1/3 flex justify-end mt-10">
          <Experience data={CursusData.eventsRight4 || []} />
        </div>
      </div>
      <div id="portfolio" className="text-center p-4 italic text-6xl font-bold">Mon Portfolio</div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-12 p-12 mx-auto'>
      <Portfolio data={Img1} />
      <Portfolio data={Img2} />
      </div>
             



       
      <div id="contact" className="text-center p-4 italic text-6xl font-bold">Contactez-moi</div>
      <div className=' flex text-center justify-center'>
        <ContactForm/>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-center italic">
            Copyright © {new Date().getFullYear()} - Créé par Fataf T | Tous les droits réservés
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;