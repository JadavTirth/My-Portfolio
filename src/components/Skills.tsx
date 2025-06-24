
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "Yaml", "JavaScript"],
      description: "Core languages for Android and web development and deploy"
    },
    {
      category: "Frameworks",
      skills: [ "React Native", "Bootstrap"],
      description: "Modern frameworks for building cross-platform applications"
    },
    {
      category: "Libraries & Tools",
      skills: [
        "Linux",
        "Ubantu",
        "AWS",
        "Docker",
      ],
      description: "Specialized tools for data management, networking, and Deployment"
    },
    {
      category: "Software & Tools",
      skills: [
        "Android Studio",
        "Git",
        "GitHub",
        "VS Code",

      ],
      description: "Development environments and collaborative tools"
    },
    {
    category: "DevOps & Automation",
    skills: [
      "Jenkins",
      "Docker"
    ],
    description: "Tools and platforms for continuous integration, infrastructure as code, and monitoring"
  }
  ];

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <h2 className="section-title dark:text-gray-100">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover transition-all ${
              activeCategory === category.category ? "ring-2 ring-primary" : ""
            }`}
            onMouseEnter={() => setActiveCategory(category.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <h3 className="text-xl font-bold mb-4 dark:text-white">{category.category}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <HoverCard key={skill}>
                  <HoverCardTrigger>
                    <Badge
                      variant="secondary"
                      className="text-sm py-1.5 px-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-primary dark:text-blue-300 cursor-pointer transition-all hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  </HoverCardTrigger>
                  <HoverCardContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                    <div className="text-sm">
                      <p className="font-medium">{skill}</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Experienced in {skill} development and implementation
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
