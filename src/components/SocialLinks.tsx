
import {  Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Docker,  Github } from "@react-symbols/icons";


export default function SocialLinks({ className = "" }) {
  const socialLinks = [
    {
      icon: <Github  />,
      href: "https://github.com/JadavTirth",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/jadav-tirth-138353320/",
      label: "LinkedIn",
    },
    {
      icon:<Docker  />,
      href: "https://hub.docker.co  m/repositories/jadavtirth",
      label: "DockerHub", 
    },
    
    
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          size="icon"

          className="rounded-full card-hover border-gray-300 "
          asChild
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
