import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import CP from "./components/CP";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative min-h-screen flex flex-col text-foreground overflow-x-hidden">
      {/* Elegant base gradient */}
      <motion.div
        className="fixed inset-0 -z-25"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 50,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "400% 400%",
          backgroundImage:
            theme === "light"
              ? "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)"
              : "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
          opacity: theme === "light" ? 0.3 : 0.5,
        }}
      />

      {/* Sophisticated floating orbs */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        {/* Primary large orb */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "600px",
            height: "600px",
            background: theme === "light" 
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.08) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.12) 50%, transparent 70%)",
            left: "10%",
            top: "15%"
          }}
          animate={{ 
            x: [0, 120, -60, 0], 
            y: [0, -80, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />

        {/* Secondary medium orb */}
        <motion.div
          className="absolute rounded-full blur-2xl"
          style={{
            width: "450px",
            height: "450px",
            background: theme === "light" 
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(165, 180, 252, 0.06) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(165, 180, 252, 0.1) 50%, transparent 70%)",
            right: "15%",
            top: "40%"
          }}
          animate={{ 
            x: [0, -90, 140, 0], 
            y: [0, 110, -70, 0],
            scale: [1, 0.7, 1.3, 1]
          }}
          transition={{ 
            duration: 70, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />

        {/* Tertiary accent orb */}
        <motion.div
          className="absolute rounded-full blur-xl"
          style={{
            width: "350px",
            height: "350px",
            background: theme === "light" 
              ? "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(110, 231, 183, 0.05) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(110, 231, 183, 0.08) 50%, transparent 70%)",
            left: "55%",
            bottom: "20%"
          }}
          animate={{ 
            x: [0, 70, -100, 0], 
            y: [0, -90, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 80, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />

        {/* Elegant small orb */}
        <motion.div
          className="absolute rounded-full blur-lg"
          style={{
            width: "250px",
            height: "250px",
            background: theme === "light" 
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(196, 181, 253, 0.04) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(196, 181, 253, 0.06) 50%, transparent 70%)",
            right: "25%",
            bottom: "35%"
          }}
          animate={{ 
            x: [0, -50, 80, 0], 
            y: [0, 60, -40, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />

        {/* Professional subtle grid */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"]
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "50px 50px",
            backgroundImage: theme === "light"
              ? "radial-gradient(circle, rgba(71, 85, 105, 0.015) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(148, 163, 184, 0.02) 1px, transparent 1px)",
            opacity: 0.6
          }}
        />

        {/* Floating accent particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: theme === "light" 
                ? `rgba(${i % 2 === 0 ? '59, 130, 246' : '99, 102, 241'}, 0.4)` 
                : `rgba(${i % 2 === 0 ? '147, 197, 253' : '165, 180, 252'}, 0.6)`,
              left: `${20 + i * 15}%`,
              top: `${25 + i * 15}%`
            }}
            animate={{
              x: [0, 40 + i * 15, -30, 0],
              y: [0, -35 - i * 10, 45, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 25 + i * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          />
        ))}

        {/* Depth enhancement overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              theme === "light" 
                ? "radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)"
                : "radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.04) 0%, transparent 60%)",
              theme === "light" 
                ? "radial-gradient(ellipse at 70% 70%, rgba(99, 102, 241, 0.02) 0%, transparent 60%)"
                : "radial-gradient(ellipse at 70% 70%, rgba(99, 102, 241, 0.04) 0%, transparent 60%)",
              theme === "light" 
                ? "radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.015) 0%, transparent 60%)"
                : "radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 60%)",
              theme === "light" 
                ? "radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)"
                : "radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.04) 0%, transparent 60%)"
            ]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Header
        onHamburgerClick={() => setSideNavOpen(true)}
        isMenuOpen={sideNavOpen}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      <main className="flex-grow pt-20 outline-none" tabIndex={-1}>
        <About />
        <Skills />
        <Academics />
        <Projects />
        <CP />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;