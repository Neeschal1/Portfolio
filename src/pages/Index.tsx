import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Team from "@/components/MyTeam";
import Education from "@/components/Education";
import "./Loader.css"; // Make sure this CSS has fade-out animation as discussed
import Experience from "@/components/Experience";

const Index = () => {
  const [showEmailCard, setShowEmailCard] = useState(false);
  const [loading, setLoading] = useState(true); // Loader visible initially
  const [fadeOut, setFadeOut] = useState(false); // Fade-out state for loader

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setLoading(false), 800); // Remove loader after animation
    }, 2000); // Loader duration (2s)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Loader */}
      {loading && (
        <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
          <div className="loader">
            <div></div>
            <div></div>
          </div>
          <p>Loading...</p>
        </div>
      )}

      {/* Main UI */}
      <div
        className={`transition-transform duration-700 ease-out ${
          !loading ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Navigation */}
        <Navigation onHireMeClick={() => setShowEmailCard(true)} />

        {/* Main Sections */}
        <main>
          <section id="home">
            <Hero
              showEmailCard={showEmailCard}
              setShowEmailCard={setShowEmailCard}
            />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="teams">
            <Team />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
