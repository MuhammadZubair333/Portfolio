import React, { useState, useEffect, useCallback, useMemo } from "react";
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

// Memoized background component to prevent unnecessary re-renders
const AnimatedBackground = React.memo(({ theme }) => {
  // Simplified animations with reduced complexity
  const baseGradientVariants = useMemo(() => ({
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 60, // Increased duration for smoother animation
        ease: "linear", // Changed to linear for better performance
      }
    }
  }), []);

  const orbAnimations = useMemo(() => ({
    primary: {
      x: [0, 120, -60, 0], 
      y: [0, -80, 100, 0],
      scale: [1, 1.1, 0.9, 1], // Reduced scale change
      transition: { 
        duration: 80, // Increased duration
        repeat: Infinity, 
        ease: "linear" // Changed to linear
      }
    },
    secondary: {
      x: [0, -90, 140, 0], 
      y: [0, 110, -70, 0],
      scale: [1, 0.8, 1.2, 1], // Reduced scale change
      transition: { 
        duration: 90, // Increased duration
        repeat: Infinity, 
        ease: "linear"
      }
    },
    tertiary: {
      x: [0, 70, -100, 0], 
      y: [0, -90, 50, 0],
      rotate: [0, 180, 360],
      transition: { 
        duration: 100, // Increased duration
        repeat: Infinity, 
        ease: "linear"
      }
    },
    quaternary: {
      x: [0, -50, 80, 0], 
      y: [0, 60, -40, 0],
      scale: [1, 1.05, 0.95, 1], // Reduced scale change
      transition: { 
        duration: 60, // Increased duration
        repeat: Infinity, 
        ease: "linear"
      }
    }
  }), []);

  const gradientStyle = useMemo(() => ({
    backgroundSize: "300% 300%", // Reduced from 400%
    backgroundImage: theme === "light"
      ? "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)"
      : "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
    opacity: theme === "light" ? 0.3 : 0.5,
  }), [theme]);

  const orbStyles = useMemo(() => ({
    primary: {
      width: "500px", // Reduced size
      height: "500px",
      background: theme === "light" 
        ? "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.06) 50%, transparent 70%)"
        : "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(147, 197, 253, 0.1) 50%, transparent 70%)",
      left: "10%",
      top: "15%"
    },
    secondary: {
      width: "400px", // Reduced size
      height: "400px",
      background: theme === "light" 
        ? "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(165, 180, 252, 0.05) 50%, transparent 70%)"
        : "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(165, 180, 252, 0.08) 50%, transparent 70%)",
      right: "15%",
      top: "40%"
    },
    tertiary: {
      width: "300px", // Reduced size
      height: "300px",
      background: theme === "light" 
        ? "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(110, 231, 183, 0.04) 50%, transparent 70%)"
        : "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(110, 231, 183, 0.06) 50%, transparent 70%)",
      left: "55%",
      bottom: "20%"
    },
    quaternary: {
      width: "200px", // Reduced size
      height: "200px",
      background: theme === "light" 
        ? "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(196, 181, 253, 0.03) 50%, transparent 70%)"
        : "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(196, 181, 253, 0.05) 50%, transparent 70%)",
      right: "25%",
      bottom: "35%"
    }
  }), [theme]);

  return (
    <>
      {/* Base gradient - simplified */}
      <motion.div
        className="fixed inset-0 -z-25"
        variants={baseGradientVariants}
        animate="animate"
        style={gradientStyle}
      />

      {/* Orbs with reduced complexity */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={orbStyles.primary}
          animate={orbAnimations.primary}
        />
        
        <motion.div
          className="absolute rounded-full blur-2xl"
          style={orbStyles.secondary}
          animate={orbAnimations.secondary}
        />
        
        <motion.div
          className="absolute rounded-full blur-xl"
          style={orbStyles.tertiary}
          animate={orbAnimations.tertiary}
        />
        
        <motion.div
          className="absolute rounded-full blur-lg"
          style={orbStyles.quaternary}
          animate={orbAnimations.quaternary}
        />

        {/* Simplified grid - static for better performance */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundSize: "40px 40px", // Slightly smaller
            backgroundImage: theme === "light"
              ? "radial-gradient(circle, rgba(71, 85, 105, 0.01) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(148, 163, 184, 0.015) 1px, transparent 1px)",
          }}
        />
      </div>
    </>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Optimized theme effect with cleanup
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Memoized callbacks to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const openSideNav = useCallback(() => setSideNavOpen(true), []);
  const closeSideNav = useCallback(() => setSideNavOpen(false), []);

  return (
    <div className="relative min-h-screen flex flex-col text-foreground overflow-x-hidden">
      <AnimatedBackground theme={theme} />
      
      <Header
        onHamburgerClick={openSideNav}
        isMenuOpen={sideNavOpen}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <SideNav open={sideNavOpen} onClose={closeSideNav} />
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