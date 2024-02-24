"use client";
import { useEffect } from "react";
import Welcome from "./pages/welcome";
import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-primary w-1 origin-top-right"
        style={{ scaleY }}
      ></motion.div>
      <Welcome />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
