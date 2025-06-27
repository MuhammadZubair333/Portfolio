import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";

// Memoized ProjectCard component to prevent unnecessary re-renders
const ProjectCard = memo(({ project, index }) => {
  const cardItemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }), []);

  return (
    <motion.div variants={cardItemVariants} className="h-full">
      <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl flex flex-col h-full p-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1">
        <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-base text-muted-foreground mb-4 flex-grow">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-3 mb-5 mt-auto">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          {project.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.href}
              className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/60 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.type === "code" ? (
                <Code className="w-4 h-4" />
              ) : (
                <ExternalLink className="w-4 h-4" />
              )}
              {link.type === "code" ? "Code" : "Demo"}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function Projects() {
  // Move static data outside component or use useMemo to prevent recreation
  const projectsData = useMemo(() => [
    {
      title: "Text File Compressor",
      desc: "Built a robust, lossless text file compressor in C++ using the LZW algorithm, applying OOP and advanced algorithms. Achieved ~44% file size reduction on real-world files with efficient compression and decompression.",
      tags: ["C++", "LZW Algorithm", "OOPS"],
      links: [{ type: "code", href: "https://github.com/shashank2401/file-compressor-in-cpp" }],
    },
    {
      title: "Pathfinding Visualizer",
      desc: "Interactive C++/SFML visualizer for Dijkstra's and A* algorithms. Features dynamic obstacles, diagonal movement, OOP, and optimized data structures for smooth, real-time animations.",
      tags: ["C++", "SFML", "Dijkstra's", "A*", "OOPS", "Data Structures"],
      links: [{ type: "code", href: "https://github.com/shashank2401/pathfinding-visualizer-in-cpp" }],
    },
    {
      title: "Codeforces Visualizer",
      desc: "A minimal web app to view and compare Codeforces profiles. Shows key stats, rating history, and performance trends with clean visualizations. Built for fast, distraction-free, side-by-side comparisons.",
      tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Codeforces API"],
      links: [
        { type: "demo", href: "https://cf-visualizer-rho.vercel.app" },
        { type: "code", href: "https://github.com/shashank2401/cf-visualizer" },
      ],
    },
    {
      title: "GitHub Profile Visualizer",
      desc: "A dynamic app for exploring and comparing GitHub user profiles. Visualizes rich statistics, activity timelines, and repository insights, including a contribution heatmap. Supports side-by-side comparisons and offers both dark and light modes.",
      tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "GitHub API"],
      links: [
        { type: "demo", href: "https://github-profile-visualizer-six.vercel.app/" },
        { type: "code", href: "https://github.com/shashank2401/github-profile-visualizer" },
      ],
    },
    {
      title: "Weather App",
      desc: "A sleek, responsive weather application delivering real-time weather updates for any city. Features location-based forecasts, intuitive search suggestions, and seamless toggling between Celsius and Fahrenheit.",
      tags: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
      links: [
        { type: "demo", href: "https://weather-app-zeta-three-62.vercel.app/" },
        { type: "code", href: "https://github.com/shashank2401/weather-app" },
      ],
    },
    {
      title: "Soil-Water Characteristic Curve Prediction",
      desc: "Used Artificial Neural Networks (ANNs) to predict SWCC parameters from soil properties for plastic soils. Improved geotechnical prediction for slope stability and foundation design.",
      tags: ["Python", "TensorFlow", "ANN", "Soil Mechanics", "Data Analysis"],
      links: [
        { type: "code", href: "https://github.com/shashank2401/swcc-prediction-using-ann" },
      ],
    },
  ], []);

  // Memoize animation variants to prevent object recreation
  const containerVariants = useMemo(() => ({
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }), []);

  const headerVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  }), []);

  const sectionVariants = useMemo(() => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  }), []);

  const gridVariants = useMemo(() => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: containerVariants,
  }), [containerVariants]);

  return (
    <section id="projects" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        {...sectionVariants}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
      >
        {/* Glow effect - moved to pseudo-element for better performance */}
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 leading-tight flex justify-center items-center gap-4 text-foreground relative z-10"
          {...headerVariants}
        >
          <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px]" />
          <span>Projects</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch relative z-10"
          {...gridVariants}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}