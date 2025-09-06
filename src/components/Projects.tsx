import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";

import Ecommerce from "../assets/ecommerce.jpg";
import Fintech from "../assets/fintech.jpg";
import Bihebari from "../assets/bihebari.jpg";
import Chalau from "../assets/Chalau.png";
import Bihebariweb from "../assets/Bihebari Web.png";
import Sadacreatives from "../assets/Sadacreatives.png";
import Gandakitravels from "../assets/Gandakitravels.png";
import Urban from "../assets/Urban.png";
import Kishancare from "../assets/Kishancare.png";
import Anime from "../assets/Anime.png";
import Soham from "../assets/Soham.jpg";
import Chatty from "../assets/chatty.jpg";
import Medical from "../assets/medical.webp";
import Sohamweb from "../assets/Sohamweb.jpg";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  type: string;
  image: string;
  link?: string; // Optional link field
}

const Projects = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(0.05);

  const projects: Project[] = [
    {
      title: "Soham",
      description:
        "Designing and developing a Meditation app with a calming user experience and guided sessions.",
      tags: ["Figma", "React Native", "Meditation", "UX", "Android", "iOS"],
      year: "2025",
      type: "Mobile Application",
      image: Soham,
    },
    {
      title: "Medicare",
      description:
        "Developing a Medical app with a calming user experience and providing medical services.",
      tags: ["React Native", "FastAPI", "Medical", "Android", "iOS"],
      year: "2025",
      type: "Mobile Application",
      image: Medical,
    },
    {
      title: "Chatty",
      description:
        "A simple chatbot app made using python and streamlit for developing it's user interface.",
      tags: ["Chatty", "Chatbot", "Python", "Streamlit", "Google_Gemini"],
      year: "2025",
      type: "Mobile Application",
      image: Chatty,
      link: "https://neesschat.streamlit.app/",
    },
    {
      title: "Soham Web",
      description:
        "Upcoming Project: Soham web page, that gives a brief introduction about Soham Mobile Application.",
      tags: ["UI/UX", "Figma", "React JS"],
      year: "_____",
      type: "Web Page",
      image: Sohamweb,
    },
    {
      title: "Bihebari",
      description:
        "Designed a Bihebari app for meaningful matchmaking with an intuitive user experience.",
      tags: ["UI/UX", "Prototype", "Mobile", "iOS/Android", "Figma"],
      year: "2025",
      type: "Mobile Application Design",
      image: Bihebari,
    },
    {
      title: "Bihebari Web",
      description:
        "Bihebari web page, that gives a brief introduction about Bihebari Mobile Application",
      tags: ["UI/UX", "Figma", "React JS"],
      year: "2025",
      type: "Web App",
      image: Bihebariweb,
      link: "https://bihebari.netlify.app/",
    },
    {
      title: "Sada Creatives",
      description:
        "Designed our company’s landing page with a focus on clean layout, engaging visuals, and smooth user experience.",
      tags: ["UI/UX", "Figma", "Next JS", "Laravel"],
      year: "2053",
      type: "Mobile App",
      image: Sadacreatives,
      link: "https://sadacreatives.com.au/",
    },
    {
      title: "Gandaki Travels",
      description:
        "Designed a travel booking website with a user-friendly layout and engaging visuals for seamless booking experience.",
      tags: ["Travel", "UI/UX", "Figma"],
      year: "2025",
      type: "Web Portal",
      image: Gandakitravels,
    },
    {
      title: "Urban Photo Studio",
      description:
        "Designed a photo studio website for booking photography and videography sessions for special occasions.",
      tags: ["UI/UX", "Figma", "Photo", "Video"],
      year: "2023",
      type: "Mobile App",
      image: Urban,
    },
    {
      title: "Chalau",
      description:
        "Contributed to the Chalau app design, enabling users to easily browse and rent vehicles with a smooth, user-friendly experience.",
      tags: ["UI/UX", "Mobile", "E-commerce", "AR", "iOS/Android"],
      year: "2025",
      type: "Mobile Application Design",
      image: Chalau,
      link: "https://play.google.com/store/apps/dev?id=8621787848835121707&amp%3Bhl=es_US",
    },
    {
      title: "Kishancare",
      description:
        "Contributed to Kishancare web design, major focused for providing easeness to the local farmers.",
      tags: ["Healthcare", "Portal", "UX"],
      year: "2024",
      type: "Web Portal",
      image: Kishancare,
      link: "https://kishancare.com/",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none opacity-15"
      >
        <div
          className="absolute top-32 right-32 w-36 h-36 border border-neon-cyan/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-32 w-20 h-20 border border-neon-pink/30 rounded-lg rotate-45 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Showcasing design solutions that solve real problems and create
            meaningful impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-glass-border hover-lift interactive-card p-6 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-6">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover rounded-md border border-glass-border group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground font-poppins group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="font-poppins flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{project.type}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed font-poppins">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 font-poppins">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-poppins"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Overlay Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-100 font-poppins">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground magnetic-btn font-poppins"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 font-poppins" />
                      Visit
                    </Button>
                  </a>
                ) : (
                  <span className="text-white text-sm font-medium font-poppins">
                    Currently in Development Stage.
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 font-poppins">
          <Button
            size="lg"
            variant="outline"
            className={`glass-card ${
              showAll
                ? "border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background font-poppins"
                : "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background font-poppins"
            }`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
