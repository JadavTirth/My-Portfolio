
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { initScrollReveal } from "@/utils/scrollReveal";

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      {/* <div className="reveal">
        <Experience />
      </div> */}
      <div className="reveal">
        <Projects />
      </div>
      {/* <div className="reveal">
        <Achievements />
      </div> */}
      {/* <div className="reveal">
        <YouTube />
      </div> */}
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
