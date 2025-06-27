import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Header({ onHamburgerClick, isMenuOpen, toggleTheme, currentTheme }) {
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

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-muted/70 dark:bg-muted/50 backdrop-blur-md shadow-md border-b border-border/40"
    >
      {/* Logo / Name */}
      <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-wide select-none">
        Shashank Raj
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-4">
        {/* Theme toggle button */}
        <button
          onClick={(e) => {
            toggleTheme();
            e.currentTarget.blur();
          }}
          type="button"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
        >
          {currentTheme === "light" ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </button>

        {/* Hamburger Menu */}
        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Toggle Menu"
          aria-pressed={isMenuOpen}
          className={`hamburger relative flex flex-col justify-center items-center w-10 h-10 z-50 cursor-pointer transition-transform duration-300 transform-gpu ${
            isMenuOpen ? "rotate-90" : ""
          }`}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-[2px] w-6 bg-primary rounded-sm my-[3px] transition-all duration-300 ease-in-out ${
                isMenuOpen && i === 0
                  ? "transform translate-y-[6px] rotate-45"
                  : isMenuOpen && i === 1
                  ? "opacity-0"
                  : isMenuOpen && i === 2
                  ? "transform -translate-y-[6px] -rotate-45"
                  : ""
              }`}
              style={{
                willChange: "transform",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
          ))}
        </button>
      </div>
    </motion.header>
  );
}