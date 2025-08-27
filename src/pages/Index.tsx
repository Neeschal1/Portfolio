import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Team from "@/components/MyTeam";
import Education from "@/components/Education";

const Index = () => {
  const [showEmailCard, setShowEmailCard] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Pass the function to trigger email card */}
      <Navigation onHireMeClick={() => setShowEmailCard(true)} />

      <main>
        <section id="home">
          {/* Pass state and setter to Hero */}
          <Hero showEmailCard={showEmailCard} setShowEmailCard={setShowEmailCard} />
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
  );
};

export default Index;
