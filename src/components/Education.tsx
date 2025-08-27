import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";

const Education = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.1);

  const educationList = [
    {
      institution: "Tribhuvan University",
      degree: "BSc CSIT",
      year: "2023 - Present",
      details: "Currently pursuing Bachelor of Science in Computer Science and Information Technology, focusing on software development, UI/UX design, and AI.",
    },
    {
      institution: "Kalika Manavgyan Secondary School",
      degree: "School Leaving Certificate(SLC)",
      year: "2024",
      details: "Completed School Leaving Certificate(SLC) or +2 in Science, Majoring Biology and Mathematics subjects from Kalika Manavgyan Secondary School, Kalikanagar, Butwal.",
    },
    {
      institution: "Shree Janata Secondary School",
      degree: "Secondary Education Examination(SEE)",
      year: "2019 - 2022",
      details: "Completed Secondary Education Examination(SEE) from Shree Janta Secondary School, Pipara-02, Banganga, Kapilvastu, Nepal.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Parallax decorations */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none opacity-10"
      >
        <div className="absolute top-16 left-16 w-32 h-32 border border-neon-blue/30 rounded-full animate-float" />
        <div
          className="absolute bottom-16 right-16 w-24 h-24 border border-neon-purple/30 rounded-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            My academic journey and professional learning experiences
          </p>
        </div>

        <div className="space-y-4">
          {educationList.map((edu, index) => (
            <Card
              key={index}
              className="glass-card border-glass-border hover-lift interactive-card p-4 cursor-pointer flex justify-between items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleOpen(index)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground font-poppins">
                  {edu.institution}
                </h3>
                <p className="text-sm text-muted-foreground font-poppins">
                  {edu.degree} | {edu.year}
                </p>
                <div
                  className={`overflow-hidden transition-all duration-300 mt-2 ${
                    openIndex === index ? "max-h-16" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-muted-foreground font-poppins">{edu.details}</p>
                </div>
              </div>
              <div className="ml-4 text-primary flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
