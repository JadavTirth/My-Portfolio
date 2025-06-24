
import { Award, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Achievements() {
  const achievements = [
    {
      title: "Best Beginner Hack",
      event: "Ahmedabad University Hackathon",
      description:
        "Created an online portal for electronics repair shops as part of the hackathon.",
    },
    {
      title: "Hackathon Participant",
      event: "Multiple Hackathons",
      description:
        "Participated in various hackathons, gaining valuable experience in rapid development and teamwork.",
    },
    {
      title: "Published App",
      event: "Google Play Store",
      description:
        "Published Gita18 app on Google Play Store, reaching over 1,000 downloads.",
    },
  ];

  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary w-6 h-6" />
              </div>
              <CardTitle>{achievement.title}</CardTitle>
              <CardDescription>{achievement.event}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Other Accomplishments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Developed multiple Android applications using modern architecture patterns",
            "Experience with integrating third-party libraries and APIs",
            "Strong focus on building accessible and user-friendly mobile interfaces",
            "Continuous learning and keeping up with the latest Android development trends",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
