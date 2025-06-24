
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-3">Tirth A. Jadav</h2>
            <p className="text-gray-400">Devops Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks className="mb-4" />
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-900 dark:bg-gray-700 border-gray-700 dark:border-gray-600 hover:bg-gray-700 dark:hover:bg-gray-600 animate-float"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
