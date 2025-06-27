import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { memo, useCallback, useMemo } from "react";

// Move static animation config outside component
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

// Memoized hamburger line component
const HamburgerLine = memo(({ index, isMenuOpen }) => {
  const getLineClasses = useMemo(() => {
    const baseClasses = "block h-[2px] w-6 bg-primary rounded-sm my-[3px] transition-all duration-300 ease-in-out";
    
    if (!isMenuOpen) return baseClasses;
    
    if (index === 0) return `${baseClasses} transform translate-y-[6px] rotate-45`;
    if (index === 1) return `${baseClasses} opacity-0`;
    if (index === 2) return `${baseClasses} transform -translate-y-[6px] -rotate-45`;
    
    return baseClasses;
  }, [index, isMenuOpen]);

  return (
    <span
      className={getLineClasses}
      style={{
        willChange: "transform, opacity",
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
      }}
    />
  );
});

HamburgerLine.displayName = "HamburgerLine";

const Header = memo(({ onHamburgerClick, isMenuOpen, toggleTheme, currentTheme }) => {
  // Memoize theme toggle handler to prevent recreation
  const handleThemeToggle = useCallback((e) => {
    toggleTheme();
    e.currentTarget.blur();
  }, [toggleTheme]);

  // Memoize theme icon to prevent recreation
  const ThemeIcon = useMemo(() => {
    return currentTheme === "light" ? Moon : Sun;
  }, [currentTheme]);

  // Memoize aria label
  const themeAriaLabel = useMemo(() => {
    return `Switch to ${currentTheme === "light" ? "dark" : "light"} mode`;
  }, [currentTheme]);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-muted/70 dark:bg-muted/50 backdrop-blur-md shadow-md border-b border-border/40"
      style={{ 
        willChange: "transform",
        transform: "translate3d(0, 0, 0)"
      }}
    >
      {/* Logo / Name */}
      <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-wide select-none">
        Shashank Raj
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-4">
        {/* Theme toggle button */}
        <button
          onClick={handleThemeToggle}
          type="button"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 will-change-transform"
          aria-label={themeAriaLabel}
        >
          <ThemeIcon className="w-6 h-6" />
        </button>

        {/* Hamburger Menu */}
        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Toggle Menu"
          aria-pressed={isMenuOpen}
          className={`hamburger relative flex flex-col justify-center items-center w-10 h-10 z-50 cursor-pointer transition-transform duration-300 will-change-transform ${
            isMenuOpen ? "rotate-90" : ""
          }`}
          style={{ 
            transform: "translate3d(0, 0, 0)"
          }}
        >
          {[0, 1, 2].map((i) => (
            <HamburgerLine key={i} index={i} isMenuOpen={isMenuOpen} />
          ))}
        </button>
      </div>
    </motion.header>
  );
});

Header.displayName = "Header";

export default Header;