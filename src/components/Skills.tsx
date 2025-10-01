import { Card } from "@/components/ui/card";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";
import { FaFigma, FaReact, FaPython, FaJava, FaJs, FaPhoenixFramework } from "react-icons/fa";
import { SiNumpy, SiPandas, SiFastapi, SiTailwindcss, SiPython, SiPytorch, SiPlotly } from "react-icons/si";
import { MdBrush, MdDesignServices, MdFormatPaint } from "react-icons/md";

const Skills = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.1);

  const skillCategories = [
    {
      title: "UI/UX Design",
      color: "neon-pink",
      skills: [
        { name: "Figma", icon: FaFigma },
        { name: "Canva", icon: MdBrush },
        { name: "Wireframing", icon: FaPhoenixFramework  },
        { name: "Prototyping", icon: MdDesignServices },
      ],
    },
    {
      title: "Development",
      color: "neon-cyan",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "Javascript", icon: FaJs },
        { name: "ReactNative", icon: FaReact },
        { name: "FastAPI", icon: SiFastapi },
      ],
    },
    {
      title: "AI",
      color: "neon-cyan",
      skills: [
        { name: "Numpy", icon: SiNumpy },
        { name: "Pandas", icon: SiPandas },
        { name: "Matplotlib", icon: SiPlotly },
        { name: "PyTorch", icon: SiPytorch },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            My toolkit of modern technologies that I am familiar to
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card border-glass-border hover-lift interactive-card p-7 font-poppins"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 font-poppins">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex flex-col items-center justify-center p-4 w-24 font-poppins h-24 bg-${category.color}/20 rounded-xl border border-${category.color}/30 shadow-md hover:shadow-${category.color}/50 hover:scale-110 transition-all duration-300 ring-1 ring-${category.color}/40`}
                  >
                    <skill.icon
                      className={`text-${category.color} w-10 h-10 mb-2 animate-bounce-slow font-poppins`}
                    />
                    <span className="text-sm font-medium text-foreground text-center font-poppins">
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
