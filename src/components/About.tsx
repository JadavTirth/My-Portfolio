import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import imge from "../../assets/ps2.jpg"

export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title dark:text-white">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover mb-6">
            <div className="aspect-square rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20 w-40 h-40 animate-float">
              {/* Placeholder for profile image - replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-300 flex items-center justify-center text-xl font-bold text-primary dark:text-blue-300">
                <img src={imge}/>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 dark:text-white">
              Tirth A. Jadav
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Devops Engineer
            </p>

            <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
              <MapPin size={18} className="mr-2 text-primary" />
              <span>Junagadh, Gujrat, India</span>
            </div>

            {/* <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
              <GraduationCap size={18} className="mr-2 text-primary" />
              <span>8.2/10 CGPA</span>
            </div> */}

            <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
              <Briefcase size={18} className="mr-2 text-primary" />
              <span>Open to opportunities</span>
            </div>

            <SocialLinks className="justify-center" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover">
            <h3 className="text-xl font-bold mb-4 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A passionate DevOps enthusiast currently pursuing a B.E. in
              Computer Engineering at Shantilal Shah Engineering College, in the
              7th semester.{" "}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 card-hover">
            <h3 className="text-xl font-bold mb-4 dark:text-white">
              Education
            </h3>
            <div className="mb-0">
              <h4 className="font-semibold dark:text-white">
                B.Tech in Information Technology
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Shantilal Shah Government Engineering College, GTU
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                2022 - 2026
              </p>
              {/* <p className="text-primary font-medium">CGPA: 8.2/10</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
