import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Academics() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const academics = [
    {
      logo: "/assets/logos/iit_bhu.png",
      alt: "IIT BHU Logo",
      title: "Indian Institute of Technology (BHU) Varanasi",
      link: "https://iitbhu.ac.in/dept/civ",
      program: "B.Tech in Civil Engineering",
      year: "2023 – 2027",
      scoreLabel: "CGPA",
      score: "8.14 / 10",
    },
    {
      logo: "/assets/logos/sps_rohini.jpg",
      alt: "SPS Rohini Logo",
      title: "Sachdeva Public School, Rohini",
      link: "https://www.spsrohini.com/",
      program: "CBSE (Class XII - 2022, Class X - 2020)",
      year: "Graduated: 2022",
      scoreLabel: "Percentage",
      score: "Class XII - 92.80%, Class X - 97.00%",
    },
  ];

  return (
    <section id="academics" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 leading-tight flex justify-center items-center gap-4 text-foreground relative z-10"
        >
          <GraduationCap className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px]" />
          <span>Education</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 flex flex-col gap-10"
        >
          {academics.map((edu, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="bg-neutral-100/50 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:border-primary/40 hover:-translate-y-1 p-6 sm:p-7">
                <div className="flex gap-6 items-center">
                  {/* Logo */}
                  <div className="w-16 h-16 flex-shrink-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shadow-md rounded-xl p-1 overflow-hidden">
                    <img
                      src={edu.logo}
                      alt={edu.alt}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col text-left gap-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {edu.title}
                    </h3>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline hover:text-foreground dark:hover:text-primary-foreground/70 font-medium transition-colors duration-200"
                    >
                      {edu.program}
                    </a>
                    <div className="text-sm text-muted-foreground mt-2 space-y-1">
                      <p>
                        <span className="font-medium text-foreground/80">Year:</span>{" "}
                        {edu.year}
                      </p>
                      <p>
                        <span className="font-medium text-foreground/80">{edu.scoreLabel}:</span>{" "}
                        {edu.score}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}