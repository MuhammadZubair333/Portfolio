import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
<footer className="w-full bg-muted/40 backdrop-blur-sm border-t border-border pt-8 pb-10 mt-32">
    <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-5">
      <div className="text-sm text-muted-foreground">
        © 2025 Shashank Raj. All rights reserved.
      </div>

      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/shashank2401"
          title="GitHub"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition duration-200 hover:scale-110"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/shashankraj2401/"
          title="LinkedIn"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition duration-200 hover:scale-110"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="mailto:shashankraj0124@gmail.com"
          title="Email"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition duration-200 hover:scale-110"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  </footer>
  );
}