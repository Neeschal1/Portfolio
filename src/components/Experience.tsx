import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card"; // use same Card wrapper like Contact

const Experience = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.08);

  const experiences = [
    {
      company: "Yuwasoft Technologies",
      role: "UI/UX Designer Intern",
      duration: "September 2024 – December 2024",
      details:
        "Contributed to the design of modern and intuitive user interfaces. Created wireframes, prototypes, and high-fidelity mockups while ensuring usability and accessibility standards.",
    },
    {
      company: "Sada Creatives",
      role: "UI/UX Designer & Mobile Application Developer Intern",
      duration: "January 2025 – March 2025",
      details:
        "Worked on end-to-end mobile app design and development. Conducted usability testing, iterated on feedback, and collaborated with developers to deliver responsive and engaging products.",
    },
    {
      company: "Sada Creatives",
      role: "UI/UX Designer & Mobile Application Developer",
      duration: "April 2024 – Present",
      details:
        "Leading the design and development of cross-platform mobile applications. Focused on crafting pixel-perfect UIs, improving performance, and integrating innovative features that enhance user experience.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Parallax background shapes */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none opacity-10"
      >
        <div className="absolute top-16 right-40 w-36 h-36 border border-neon-pink/30 rounded-full animate-float" />
        <div
          className="absolute bottom-16 left-28 w-28 h-28 border border-neon-cyan/30 rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Internships & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            A journey of hands-on learning, collaboration, and growth.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Central glowing line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-20 relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary animate-pulse border-4 border-background z-10" />

                {/* Content card (Contact style) */}
                <Card
                  className={`glass-card border border-glass-border hover-lift max-w-md p-6 group ${
                    index % 2 === 0
                      ? "mr-auto text-left rounded-tl-2xl rounded-br-2xl"
                      : "ml-auto text-right rounded-tr-2xl rounded-bl-2xl"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground font-poppins">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm text-primary font-medium font-poppins">
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3 font-poppins">
                    {exp.duration}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-poppins">
                    {exp.details}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
