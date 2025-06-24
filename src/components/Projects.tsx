
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import udhari from "../../assets/udhari.png"
import tfs from "../../assets/logo_transprentmin.png"
import android from "../../assets/chatapp.jpg"
import gita18 from "../../assets/gita18 (1).png"

export default function Projects() {
  const projects = [
    {
      title: "Udhari App",
      description: "Finance management app with Kotlin, MVI architecture, RoomDB, and voice command controls.",
      image: udhari,
      technologies: ["Kotlin", "MVI", "RoomDB", "Voice Commands"],
      github: "https://github.com/Henil-chhipani/udhari",
      live: "https://udhari.pages.dev/",
    },
    {
      title: "Track For Safe",
      description: "Disaster management system with location and weather data, admin panel with user tracking.",
      image: tfs,
      technologies: ["Android", "Firebase", "Maps API", "Location Tracking"],
      github: "https://github.com/Henil-chhipani/Track_For_Safe",
      live: "",
    },
    {
      title: "Chat App",
      description: "Chat application with MVVM architecture and push notifications.",
      image: android,
      technologies: ["Kotlin", "MVVM", "Firebase", "Push Notifications"],
      github: "https://github.com/Henil-chhipani/chatapplication",
      live: "",
    },
    {
      title: "Gita18 App",
      description: "Bhagavad Gita app on Play Store with 1k+ downloads.",
      image: gita18,
      technologies: ["Android", "Java", "UI Design"],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.bhagavadgita.gita18&pcampaignid=web_share",
    },
  ];

  return (
    <section id="projects" className="section-container ">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover"
          >
            <div className="aspect-video bg-gray-100">
              <div className="w-full h-full flex items-center justify-center">
                {/* Replace with actual project image when available */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className=" font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-blue-50 hover:bg-blue-100 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Check out more of my projects on GitHub:
        </p>
        <Button asChild>
          <a
            href="https://github.com/Henil-chhipani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={18} />
            <span>View All Projects</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
