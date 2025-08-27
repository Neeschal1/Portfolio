import { Card } from "@/components/ui/card";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";
import { FaFigma, FaReact, FaPython, FaJava, FaJs } from "react-icons/fa";
import { SiNumpy, SiPandas, SiFastapi, SiTailwindcss } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const Skills = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.1);

  const skillCategories = [
    {
      title: "UI/UX Design",
      color: "neon-pink",
      skills: [
        { name: "Figma", icon: FaFigma },
        { name: "Wireframing", icon: MdDesignServices },
        { name: "Prototyping", icon: MdDesignServices },
      ],
    },
    {
      title: "Development",
      color: "neon-cyan",
      skills: [
        { name: "ReactNative", icon: FaReact },
        { name: "FastAPI", icon: SiFastapi },
      ],
    },
    {
      title: "Languages",
      color: "neon-cyan",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "Javascript", icon: FaJs },
      ],
    },
    {
      title: "AI & Data",
      color: "neon-pink",
      skills: [
        { name: "NumPy", icon: SiNumpy },
        { name: "Pandas", icon: SiPandas },
      ],
    },
  ];

  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Parallax decorations */}
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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My toolkit of modern technologies and design skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card border-glass-border hover-lift interactive-card p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex flex-col items-center justify-center p-4 w-24 h-24 bg-${category.color}/20 rounded-xl border border-${category.color}/30 shadow-md hover:shadow-${category.color}/50 hover:scale-110 transition-all duration-300 ring-1 ring-${category.color}/40`}
                  >
                    <skill.icon
                      className={`text-${category.color} w-10 h-10 mb-2 animate-bounce-slow`}
                    />
                    <span className="text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
