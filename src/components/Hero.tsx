import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div>

      <div className="text-center max-w-3xl mx-auto staggered-animation">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Jadav Tirth</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Devops Engineer
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          passionate about automating workflows and optimizing infrastructure.
          Let's build scalable and reliable systems together.{" "}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button asChild size="lg" className="animate-pulse">
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="hover:scale-105 transition-transform"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-primary" />
      </a>
    </section>
  );
}
