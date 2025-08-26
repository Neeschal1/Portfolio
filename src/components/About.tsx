import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Lightbulb } from "lucide-react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";

const About = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(0.1);

  const values = [
    {
      icon: User,
      title: "User-Centered",
      description: "Every design decision starts with understanding user needs and behaviors."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on creating solutions that drive business objectives and user satisfaction."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Constantly exploring new design trends and technologies to stay ahead."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Parallax background elements */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 border border-neon-purple/20 rounded-full animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-neon-cyan/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate designer with 5+ years of experience creating digital experiences 
            that users love and businesses value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Design Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is invisible - it guides users effortlessly toward their goals 
                while creating moments of delight. My approach combines analytical thinking with 
                creative problem-solving to craft interfaces that are both beautiful and functional.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {["Figma", "Sketch", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing", "Design Systems"].map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background glass-card"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <Card className="glass-card border-glass-border hover-lift interactive-card p-8 animate-slide-in-right">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Core Values
              </h4>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;