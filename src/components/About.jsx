import { Card } from "./ui/card";
import { Github, Linkedin, Mail, FileText, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const socialLinks = [
    {
      href: "https://github.com/shashank2401",
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/shashankraj2401/",
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
    },
    {
      href: "mailto:shashankraj0124@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
    },
  ];

  const tags = [
    "Competitive Programming",
    "Data Structures",
    "Algorithms",
    "C++",
    "Problem Solving",
    "Web Development",
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
      >
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-neutral-500/20 animate-spin group-hover:animate-none group-hover:border-primary group-hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.3)] transition-all duration-500 ease-out" style={{ animationDuration: "10s" }} />
              
              {/* Image with hover scale and glow */}
              <img
                src="/assets/MyPhoto.jpg"
                alt="Shashank Raj"
                className="rounded-full object-cover w-full h-full border-4 border-white dark:border-neutral-900 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mx-auto md:mx-0">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">About Me</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 dark:from-white dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
                Shashank Raj
              </span>
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>IIT (BHU) Varanasi</span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              I’m a passionate student with a strong interest in{" "}
              <span className="text-foreground font-medium">competitive programming</span> and tackling challenging problems. I love crafting efficient solutions and exploring new technologies.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              {socialLinks.map(({ href, icon, title }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all"
                  title={title}
                >
                  {icon}
                </a>
              ))}

              <a
                href="https://drive.google.com/file/d/135ph1omrsyypG7_FAffFYp27_c9UQQPR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}