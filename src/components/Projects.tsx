import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Docker } from "@react-symbols/icons"; // optional for docker icon

export default function Projects() {
  const projects = [
    {
      title: "Notes App",
      description:
        "Deployed full-stack Notes application on AWS EC2 using Docker, MySQL, and Nginx with Docker Compose.",
      technologies: ["Docker", "Docker Compose", "MySQL", "Nginx", "AWS EC2"],
      dockerhub: "https://hub.docker.com/repository/docker/YOUR_USERNAME/notes-app", // replace with your Docker Hub URL
    },
    {
      title: "Import-Export Website",
      description:
        "A professional business website for import-export services built using React for frontend and Node.js for backend.",
      technologies: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/JadavTirth/import-export",
      live: "http://www.argoimex.com",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover"
          >
            {/* Removed project image */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
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
                {project.dockerhub && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.dockerhub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      🐳
                      <span>Docker Hub</span>
                    </a>
                  </Button>
                )}

                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
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
    </section>
  );
}
