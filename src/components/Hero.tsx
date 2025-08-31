import { Button } from "./ui/button";
import { ArrowDown, Download, Mail, Send, X } from "lucide-react";
import { useParallax } from "../hooks/use-Parallax";
import ParticleField from "./ParticleField";
import bgimg from "../assets/bgimg.jpg";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import Resume from './Resume.pdf'

interface HeroProps {
  showEmailCard: boolean;
  setShowEmailCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero = ({ showEmailCard, setShowEmailCard }: HeroProps) => {
  const [loading, setLoading] = useState(false);

  const parallaxBg = useParallax(-0.3);
  const parallaxElements = useParallax(0.2);

  // Lock background scroll when email card is open
  useEffect(() => {
    if (showEmailCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showEmailCard]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jkr5u0i",
        "template_on5v0z8",
        e.currentTarget,
        "CDHiM_sHalHtjAG3Q"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message, please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start cosmic-bg overflow-hidden">
      <ParticleField />

      {/* Background */}
      <div
        ref={parallaxBg}
        className="absolute inset-0 opacity-40 parallax-bg"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl px-12 md:px-20">
        <div className="space-y-4 animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground mb-1 text-white">
            Hi, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-gradient animate-scale-in font-poppins">
            Neeschal Pokharel
          </h1>
          <p className="text-xl md:text-1xl text-muted-foreground leading-relaxed animate-slide-in-left font-poppins text-left mt-2">
            Crafting digital experiences that blend creativity with
            functionality. Transforming ideas into intuitive, beautiful
            interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary animate-pulse-glow group magnetic-btn"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <a href={Resume} download="Neeschal_Pokharel_Resume.pdf">
  <Button
    variant="outline"
    size="lg"
    className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background glass-card hover-lift magnetic-btn"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Button>
</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-12 animate-bounce">
          <ArrowDown className="h-6 w-6 text-neon-cyan" />
        </div>
      </div>

      {/* Floating shapes */}
      <div
        ref={parallaxElements}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-20 h-20 border border-neon-blue/30 rounded-full animate-float glow-primary" />
        <div
          className="absolute top-40 right-20 w-16 h-16 border border-neon-purple/30 rounded-lg animate-float glow-secondary"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 border border-neon-cyan/30 rotate-45 animate-float glow-accent"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-60 left-1/2 w-8 h-8 border border-neon-pink/40 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-14 h-14 border border-neon-blue/20 rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Sliding Email Card as Modal */}
      {showEmailCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 py-10">
          <Card className="relative w-96 p-6 shadow-xl glass-card animate-slide-in-right m-5 animate-slide-out-left">
            {/* Cross button */}
            <button
              className="absolute top-3 right-3 text-muted-foreground hover:text-red-500"
              onClick={() => setShowEmailCard(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Send a Message
              </h4>
              <p className="text-muted-foreground text-sm">
                I'll get back to you within 24 hours.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
                <Button
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary magnetic-btn"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
};

export default Hero;
