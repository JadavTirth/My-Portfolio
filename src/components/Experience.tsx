
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Freelance SDE",
      company: "Playpower Labs",
      period: "Feb 2025 - Present",
      description:
        "Working as an Android Developer on the Oasis app, implementing camera enhancements and UI improvements.",
      skills: ["Android", "Kotlin", "UI/UX", "Camera APIs"],
      current: true,
    },
    {
      title: "Intern",
      company: "Playpower Labs",
      period: "July 2024 - Dec 2024",
      description:
        "Developed the Oasis camera app with advanced controls for underwater photography.",
      skills: ["Android", "Kotlin", "CameraX", "UI Design"],
      current: false,
    },
    {
      title: "Trainee",
      company: "Silver Touch Technologies",
      period: "Jan 2024 - July 2024",
      description:
        "Built projects like Exam Management System, Budget Manager, and Quiz App.",
      skills: ["Android", "Kotlin", "Firebase", "Room DB"],
      current: false,
    },
    {
      title: "Intern",
      company: "V2S Technology",
      period: "July 2023 - Aug 2023",
      description:
        "Contributed to the Gita18 app with 1k+ downloads on Play Store.",
      skills: ["Android", "Java", "UI Design"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Work Experience</h2>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex items-start md:justify-center"
          >
            <div className="absolute left-0 md:left-1/2 mt-1.5 w-5 h-5 -ml-2.5 md:-ml-2.5 rounded-full border-4 border-white bg-primary"></div>

            <Card className={`md:max-w-lg w-full card-hover md:mr-auto md:pr-8 ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-bold">
                      {experience.title} at {experience.company}
                    </CardTitle>
                    <CardDescription>{experience.period}</CardDescription>
                  </div>
                  {experience.current && (
                    <Badge className="bg-green-500 hover:bg-green-600">Current</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-gray-600">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-50 hover:bg-blue-100 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
