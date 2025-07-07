import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// This container will orchestrate the animation for the whole page
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time delay between each child animating in
    },
  },
};

// This variant will be used by each item in the container
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


// --- Child Component (No changes needed) ---
const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-4 flex flex-col h-full"
    >
      {/* Image at top */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>

      {/* Description */}
      <p className="text-base text-muted-foreground mb-3">{project.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Watch Demo Button */}
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-100 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-200"

      >
        Watch Demo
      </a>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";


// --- Main Projects Component ---
function ProjectsComponent() {
  const projectsData = useMemo(
  () => [
    {
      title: "Style Studio",
      desc: "A modern and responsive fashion e-commerce website built with WordPress, WooCommerce, and Elementor.",
      tags: ["WordPress", "WooCommerce", "Elementor"],
      image: "/assets/logos/st.png", // Add image to /public/assets/projects/
      demoLink: "https://drive.google.com/file/d/1WriiUV9Mf__FUymgkKH8a6KHihWlCtVY/view?usp=sharing",
    },
    {
      title: "LearnBridge",
      desc: "A custom LMS platform for online learning, created using TutorLMS and Elementor for a seamless experience.",
      tags: ["WordPress", "TutorLMS", "LMS", "Elementor"],
      image: "/assets/logos/lb.png",
      demoLink: "https://drive.google.com/file/d/1N37xV8ARsUbXIjRn69562VQ5WrmtjRW7/view?usp=sharing",
    },
    {
      title: "Savage",
      desc: "A stylish and modern e-commerce site tailored for fashion products and optimized for mobile users.",
      tags: ["WordPress", "E-Commerce", "Responsive Design"],
      image: "/assets/logos/sav.png",
      demoLink: "https://drive.google.com/file/d/1jD21-7PHnZkH6QexLKBRX5Bp3PHPsU0f/view?usp=sharing",
    },
  ],
  []
);


  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      {/* 1. This is the SINGLE animation container for the whole page. */}
      {/* It uses `animate`, not `whileInView`, for guaranteed execution. */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        {/* Item 1: The header text block */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
                <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
                Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Here are some of the projects I’ve worked on, including eCommerce websites, LMS platforms, and AI-based tools. Each project showcases my eye for design, practical development skills, and a commitment to user-friendly functionality.
            </p>
        </motion.div>

        {/* Item 2: The entire project card grid animates in as one block... */}
        <motion.div
          // It is ALSO a container for its own children (the cards)
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Export the memoized component in a standard way
export default memo(ProjectsComponent);