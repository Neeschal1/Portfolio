import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

import Neeschal from '../assets/Profile.jpg'
import Ashraya from '../assets/ashraya.jpg'
import Sushant from '../assets/Sushant.jpg'
import Aashish from '../assets/aashish.jpg'

const Team = () => {
  const teamMembers = [
    {
      name: "Nischal Pokhrel",
      role: "Beginner Product Developer",
      image: Neeschal,
      linkedin: "https://www.linkedin.com/in/nischal-pokhrel-6543632b7/",
      github: "#"
    },
    {
      name: "Ashraya Bashyal",
      role: "React Native Developer",
      image: Ashraya,
      linkedin: "https://www.linkedin.com/in/ashraya-bashyal-60119735b/",
      github: "#"
    },
    {
      name: "Sushant Pandey",
      role: "Backend Developer",
      image: Sushant,
      linkedin: "https://www.linkedin.com/in/sushant-pandey-5b2b02320/",
      github: "#"
    },
    {
      name: "Aashish Ghimire",
      role: "Graphics Designer",
      image: Aashish,
      linkedin: "#",
      github: "https://www.linkedin.com/in/aashish-ghimire-179641235/"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-poppins">
            Meet My Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Talented professionals driving creativity, development, and innovation.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-card border-glass-border hover-lift p-6 group flex flex-col items-center text-center transition-transform duration-300"
            >
              {/* Member image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-poppins">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-poppins">{member.role}</p>

              {/* Social buttons */}
              <div className="flex space-x-3">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="font-poppins bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Users className="mr-2 h-4 w-4 font-poppins" />
                    LinkedIn
                  </Button>
                </a>
                {/* <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
