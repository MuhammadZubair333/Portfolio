import React, { useState } from "react";
import { Code, Layers, Terminal, Sparkles, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const [hoveredTag, setHoveredTag] = useState(null);

  const sections = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      tags: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS"],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      tags: ["React", "Tailwind CSS", "SFML", "NumPy", "Pandas"],
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Tools & Platforms",
      tags: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Sublime Text"],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Interests",
      tags: ["Competitive Programming", "DSA", "Machine Learning", "Web Development"],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="relative z-10"
        >
          {/* Heading */}
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 leading-tight flex justify-center items-center gap-4 text-foreground"
          >
            <Settings2 className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px]" />
            Skills & Interests
          </motion.h2>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map(({ icon, title, tags }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm">
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, i) => (
                    <span
                      key={tag}
                      onMouseEnter={() => setHoveredTag(`${title}-${i}`)}
                      onMouseLeave={() => setHoveredTag(null)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                        ${
                          hoveredTag === `${title}-${i}`
                            ? "scale-105 shadow-md"
                            : "scale-100"
                        }
                        bg-neutral-100 dark:bg-neutral-800
                        text-neutral-800 dark:text-neutral-200
                        border border-neutral-300 dark:border-neutral-600
                        hover:bg-neutral-200 dark:hover:bg-neutral-700
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}