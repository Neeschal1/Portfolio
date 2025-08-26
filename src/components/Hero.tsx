import { Button } from "./ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useParallax } from "../hooks/use-Parallax";
import ParticleField from "./ParticleField";
import heroImage from "../assets/react.jpg";
import bgimg from "../assets/bgimg.jpg";

const Hero = () => {
  const parallaxBg = useParallax(-0.3);
  const parallaxElements = useParallax(0.2);

  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      {/* Particle field */}
      <ParticleField />
      
      {/* Parallax background image */}
      <div 
        ref={parallaxBg}
        className="absolute inset-0 opacity-40 parallax-bg"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6 animate-scale-in">
             NEES C HAL
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-in-left">
              Crafting digital experiences that blend creativity with functionality. 
              Transforming ideas into intuitive, beautiful interfaces.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary animate-pulse-glow group magnetic-btn"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background glass-card hover-lift magnetic-btn"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-neon-cyan" />
        </div>
      </div>
      
      {/* Enhanced floating elements with parallax */}
      <div ref={parallaxElements} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-neon-blue/30 rounded-full animate-float glow-primary" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-neon-purple/30 rounded-lg animate-float glow-secondary" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-neon-cyan/30 rotate-45 animate-float glow-accent" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 left-1/2 w-8 h-8 border border-neon-pink/40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-20 right-10 w-14 h-14 border border-neon-blue/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default Hero;
