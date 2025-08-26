import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";

import Ecommerce from '../assets/ecommerce.jpg'
import Fintech from '../assets/fintech.jpg'
import { useState } from "react";

const Projects = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(0.05);

  const projects = [
    {
      title: "FinTech Dashboard",
      description: "Complete redesign of a financial analytics platform with focus on data visualization and user workflow optimization.",
      tags: ["UI/UX", "Dashboard", "Data Viz", "B2B"],
      year: "2024",
      type: "Web App",
      image: Fintech
    },
    {
      title: "E-commerce Mobile App",
      description: "Native mobile app design for sustainable fashion brand with seamless shopping experience and AR try-on features.",
      tags: ["Mobile", "E-commerce", "AR", "iOS/Android"],
      year: "2023",
      type: "Mobile App",
      image: Ecommerce
    },
    {
      title: "FinTech Dashboard 2",
      description: "Another fintech project showcasing UI improvements and analytics dashboards.",
      tags: ["UI/UX", "Finance", "Analytics"],
      year: "2024",
      type: "Web App",
      image: Fintech
    },
    {
      title: "E-commerce Mobile App 2",
      description: "Second e-commerce mobile app design with AR try-on feature and smooth UX.",
      tags: ["Mobile", "E-commerce", "AR"],
      year: "2023",
      type: "Mobile App",
      image: Ecommerce
    },
    {
      title: "Healthcare Portal",
      description: "Patient portal redesign focusing on accessibility, clear information hierarchy, and appointment scheduling.",
      tags: ["Healthcare", "Portal", "UX"],
      year: "2022",
      type: "Web Portal",
      image: Fintech
    },
    {
      title: "E-commerce Mobile App 2",
      description: "Second e-commerce mobile app design with AR try-on feature and smooth UX.",
      tags: ["Mobile", "E-commerce", "AR"],
      year: "2023",
      type: "Mobile App",
      image: Ecommerce
    },
    {
      title: "Healthcare Portal",
      description: "Patient portal redesign focusing on accessibility, clear information hierarchy, and appointment scheduling.",
      tags: ["Healthcare", "Portal", "UX"],
      year: "2022",
      type: "Web Portal",
      image: Fintech
    },
    {
      title: "E-commerce Mobile App 2",
      description: "Second e-commerce mobile app design with AR try-on feature and smooth UX.",
      tags: ["Mobile", "E-commerce", "AR"],
      year: "2023",
      type: "Mobile App",
      image: Ecommerce
    },
    {
      title: "Healthcare Portal",
      description: "Patient portal redesign focusing on accessibility, clear information hierarchy, and appointment scheduling.",
      tags: ["Healthcare", "Portal", "UX"],
      year: "2022",
      type: "Web Portal",
      image: Fintech
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Show only first 4 projects if showAll is false
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-32 right-32 w-36 h-36 border border-neon-cyan/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-neon-pink/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing design solutions that solve real problems and create meaningful impact
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
                {/* Project image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover rounded-md border border-glass-border group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                {/* Project header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{project.type}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Project description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Overlay Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-100">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground magnetic-btn"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Case Study
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Prototype
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className={`glass-card ${showAll ? 'border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background' : 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background'}`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
