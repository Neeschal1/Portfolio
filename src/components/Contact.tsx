import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Dribbble, Facebook } from "lucide-react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";

const Contact = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.05);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neeschalpok04@gmail.com",
      href: "mailto:neeschalpok04@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9867418552",
      href: "tel:+977 9867418552"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kapilvastu, Nepal",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nischal-pokhrel-6543632b7/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/nischal.pokharel.598234", label: "GitHub" },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Parallax decorations */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 border border-neon-blue/30 rounded-full animate-float" />
        <div className="absolute bottom-16 right-16 w-24 h-24 border border-neon-purple/30 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div ref={scrollRef} className="max-w-6xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="glass-card border-glass-border interactive-card p-8 animate-slide-in-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send a Message
                </h3>
                <p className="text-muted-foreground">
                  I'll get back to you within 24 hours.
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary magnetic-btn"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
          
          {/* Contact info */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg glass-card border border-glass-border hover-lift group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg glass-card border border-glass-border hover-lift group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Call to action */}
            <Card className="glass-card border-glass-border p-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Whether you need a complete design overhaul or just want to optimize your current interface, 
                  I'm here to help turn your vision into reality.
                </p>
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-secondary"
                >
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;