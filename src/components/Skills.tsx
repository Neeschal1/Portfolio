import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Palette, Code, Users, Zap } from "lucide-react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";

const Skills = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.1);

  const skillCategories = [
    {
      icon: Palette,
      title: "UI/UX Design",
      color: "neon-blue",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Prototyping", level: 73 },
        { name: "Wireframing", level: 71 },
        { name: "Figma", level: 95 },
      ],
    },
    {
      icon: Code,
      title: "Frontend Development",
      color: "neon-purple",
      skills: [
        { name: "React Native", level: 58 },
        { name: "React JS", level: 58 },
        { name: "HTML/CSS", level: 37 },
      ],
    },
    {
      icon: Users,
      title: "Python and Backend",
      color: "neon-cyan",
      skills: [
        { name: "FastAPI (basic)", level: 51 },
        { name: "Analytics & Testing", level: 13 },
      ],
    },
    {
      icon: Zap,
      title: "AI Stuffs",
      color: "neon-pink",
      skills: [
        { name: "Python", level: 70 },
        { name: "NumPy", level: 30 },
        { name: "Pandas", level: 5 },
        { name: "Generative AI", level: 10 },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none opacity-10"
      >
        <div className="absolute top-20 left-20 w-40 h-40 border border-neon-blue/30 rounded-full animate-float" />
        <div
          className="absolute bottom-40 right-20 w-28 h-28 border border-neon-purple/30 rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card border-glass-border hover-lift interactive-card p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}
                  >
                    <category.icon
                      className={`h-6 w-6 text-${category.color}`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
