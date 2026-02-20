import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home/Home";
import NavBar from "./layouts/NavBar";
import ShootingStarsBackground from "./components/ShootingStarsBackground";
import TechSkillSection from "./sections/TechSkill/TechSkillSection";
import ProjectSection from "./sections/Project/ProjectSection";
import ServiceSection from "./sections/Service/ServiceSection";
import CredentialSection from "./sections/Credential/CredentialSection";
import ContactSection from "./sections/Contact/ContactSection";
import Footer from "./layouts/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import { AudioProvider, useAudio } from "./context/AudioContext";

const AudioStarter = () => {
  const { startBgMusic } = useAudio();
  useEffect(() => {
    startBgMusic();
  }, [startBgMusic]);
  return null;
};

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  // Set that the loading screen is initially visible
  const [isLoading, setIsLoading] = useState(true);

  // Set that the loading screen is visible before the main content is displayed
  useEffect(() => {
    if (hasStarted) {
      const timer = setTimeout(() => setIsLoading(false), 8500);
      return () => clearTimeout(timer);
    }
  }, [hasStarted]);

  return (
    <>
      <AudioProvider>
        {!hasStarted ? (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <button
              onClick={() => setHasStarted(true)}
              className="text-2xl sm:text-4xl text-yellow-500 star-wars-font border-2 border-yellow-500 rounded-xl px-10 py-6 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_30px_rgba(234,179,8,1)] transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.5)] tracking-widest"
            >
              Enter Galaxy
            </button>
          </div>
        ) : (
          <>
            <AudioStarter />
            <ShootingStarsBackground />
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <div className="overflow-x-hidden">
                <BrowserRouter>
                  <NavBar />
                  <section id="home">
                    <Home />
                  </section>
                  <section id="project">
                    <ProjectSection />
                  </section>
                  <section id="skill">
                    <TechSkillSection />
                  </section>
                  <section id="service">
                    <ServiceSection />
                  </section>
                  <section id="credential">
                    <CredentialSection />
                  </section>
                  <section id="contact">
                    <ContactSection />
                  </section>
                </BrowserRouter>
                <Footer />
              </div>
            )}
          </>
        )}
      </AudioProvider>
    </>
  );
}

export default App;
