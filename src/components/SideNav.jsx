// src/components/SideNav.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  BrainCircuit,
  GraduationCap,
  FolderKanban,
  Swords,
  Mail,
  X,
} from "lucide-react";

const navLinks = [
  { href: "#about", icon: User, text: "About" },
  { href: "#skills", icon: BrainCircuit, text: "Skills" },
  { href: "#academics", icon: GraduationCap, text: "Education" },
  { href: "#projects", icon: FolderKanban, text: "Projects" },
  { href: "#cp", icon: Swords, text: "CP" },
  { href: "#contact", icon: Mail, text: "Contact" },
];

export default function SideNav({ open, onClose }) {
  const navVariants = {
    closed: {
      x: "100%",
      opacity: 0.5,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 30,
        mass: 0.8,
        when: "afterChildren",
      },
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 30,
        mass: 0.8,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".side-nav-panel") && !e.target.closest(".hamburger")) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 80;
      const yOffset = -headerHeight - 10;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={open ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, pointerEvents: "none" },
          visible: { opacity: 0.4, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-40 lg:hidden"
        onClick={onClose}
      />

      <motion.nav
        initial={false}
        animate={open ? "open" : "closed"}
        variants={navVariants}
        className="side-nav-panel fixed top-0 right-0 w-[270px] h-screen bg-card shadow-lg z-50 flex flex-col p-6 pt-8 transform-gpu"
        aria-label="Main Navigation"
      >
        <motion.button
          variants={itemVariants}
          className="self-end text-muted-foreground hover:text-primary transition-colors duration-300 hover:rotate-90 cursor-pointer p-2 -mr-2 mb-8"
          aria-label="Close Menu"
          type="button"
          onClick={onClose}
        >
          <X className="w-7 h-7" />
        </motion.button>

        <ul className="flex-1 flex flex-col gap-6">
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={itemVariants}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex flex-row items-center justify-start gap-4 text-foreground text-lg font-medium transition-colors duration-200 py-2 w-full"
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
              >
                <link.icon className="w-5 h-5 flex-shrink-0 inline-block" />
                <span className="leading-none inline-block">{link.text}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}