// src/components/SideNav.jsx
import { useEffect } from "react";

const navLinks = [
  { href: "#about", icon: "fa-regular fa-user", text: "About" },
  { href: "#skills", icon: "fa-solid fa-brain", text: "Skills" },
  { href: "#academics", icon: "fa-solid fa-graduation-cap", text: "Education" },
  { href: "#projects", icon: "fa-solid fa-briefcase", text: "Projects" },
  { href: "#cp", icon: "fa-solid fa-trophy", text: "CP" },
  { href: "#contact", icon: "fa-solid fa-envelope", text: "Contact" },
];

export default function SideNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleClick = (e) => {
      if (
        !e.target.closest(".side-nav") &&
        !e.target.closest(".hamburger")
      ) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClick);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClick);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Scroll with offset for sticky header
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      // Offset for sticky header (80px)
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };

  return (
    <nav
      className={`side-nav fixed top-0 right-0 w-[270px] h-screen bg-white shadow-lg z-30 flex flex-col p-9 pt-8 transition-all duration-300 ${
        open ? "open" : ""
      }`}
      aria-label="Main Navigation"
      style={{ right: open ? 0 : "-300px", display: open ? "flex" : "none" }}
    >
      {open && (
        <button
          className="close-btn self-end text-2xl text-[#444] bg-none border-none mb-7 transition-transform duration-300 hover:rotate-90 cursor-pointer"
          aria-label="Close Menu"
          type="button"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
      <ul className="flex-1">
        {navLinks.map((link) => (
          <li key={link.href} className="mb-7">
            <a
              href={link.href}
              className="flex items-center gap-4 text-[#222] text-[1.15em] hover:text-[#5a48fa] transition"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <i className={`${link.icon} text-[#5a48fa] text-[1.25em] w-6 text-center`}></i>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
