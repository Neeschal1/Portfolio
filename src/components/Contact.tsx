import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "lucide-react";
import { useScrollAnimation, useParallax } from "../hooks/use-Parallax";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const scrollRef = useScrollAnimation();
  const parallaxRef = useParallax(-0.05);

  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neeschalpok04@gmail.com",
      href: "mailto:neeschalpok04@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9867418552",
      href: "tel:+9779867418552",
    },
    { icon: MapPin, label: "Location", value: "Kapilvastu, Nepal", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nischal-pokhrel-6543632b7/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/Neeschal1", label: "GitHub" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/nischal.pokharel.598234",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nees_c_hal/",
      label: "Instagram",
    },
  ];

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
    <section className="py-20 px-6 relative overflow-hidden font-poppins">
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
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Ready to bring your next project to life? Let's discuss how we can
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 font-poppins">
          {/* Contact form */}
          <Card className="glass-card border-glass-border interactive-card p-8 animate-slide-in-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins">
                  Send a Message
                </h3>
                <p className="text-muted-foreground font-poppins">
                  I'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 font-poppins">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="bg-background/50 border-border focus:border-primary font-poppins"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none font-poppins"
                    required
                  />
                </div>
                <Button
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary magnetic-btn font-poppins"
                >
                  <Send className="mr-2 h-5 w-5 font-poppins" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact info & social links */}
          <div className="space-y-8 animate-slide-in-right font-poppins">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                Get In Touch
              </h3>
              <div className="space-y-4 font-poppins">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg glass-card border border-glass-border hover-lift group font-poppins"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors font-poppins">
                      <item.icon className="h-5 w-5 text-primary font-poppins" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-poppins">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors font-poppins">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 font-poppins">
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
          </div>
        </div>

        {/* Footer Schedule a Call card */}
        <div className="mt-12">
          <Card className="glass-card border-glass-border p-6">
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-semibold text-foreground font-poppins">
                Ready to Start Your Project?
              </h4>
              <p className="text-muted-foreground text-sm font-poppins">
                Whether you need a complete design overhaul or just want to
                optimize your current interface, I'm here to help turn your
                vision into reality.
              </p>
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-secondary font-poppins"
              >
                Schedule a Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
