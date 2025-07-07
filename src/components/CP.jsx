import React, { memo, useMemo } from "react";
import { ExternalLink, Swords } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// Master container for the entire section
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Nested container for lists/grids inside the section
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Single variant for all items that animate in
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


// --- Child Components (Unchanged) ---
const PlatformCard = React.memo(({ platform }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col items-center text-center h-full"
  >
    <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-background shadow border border-border/60 mb-4">
      <img
        src={platform.logo}
        alt={`${platform.name} Logo`}
        className={`w-full h-full object-contain ${
          platform.name === "CodeChef" ? "dark:invert" : ""
        }`}
        loading="lazy"
      />
    </div>
    <div className="text-lg font-semibold text-foreground">{platform.name}</div>
    <div className="text-sm text-muted-foreground mt-1 mb-1">
      <span className="text-foreground/80">Provider:</span>{" "}
      <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition">
        {platform.Provider}
      </a>
    </div>
    <div className="flex flex-col gap-[2px] text-sm text-muted-foreground mb-3">
      {platform.stats.map((stat, i) => (
        <div key={i}>
          {stat.label}:{" "}
          <span className="font-medium text-foreground/80">{stat.value}</span>
        </div>
      ))}
    </div>
    <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 flex items-center gap-1 text-primary font-medium text-sm hover:underline dark:hover:text-primary-foreground/70 transition">
      <ExternalLink className="w-4 h-4" />
      View Certficate
    </a>
  </motion.div>
));
PlatformCard.displayName = "PlatformCard";

const HighlightItem = React.memo(({ item }) => (
  <motion.li variants={itemVariants}>
    {item.text}
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:hover:text-primary-foreground/70 font-medium transition">
      {item.linkText}
    </a>
    {item.rest}
  </motion.li>
));
HighlightItem.displayName = "HighlightItem";


// --- Main Component ---
function CompetitiveProgrammingComponent() {
  const cpPlatforms = useMemo(() => [
    { name: "Google Data Analytics Professional Certificate", logo: "/assets/logos/gcc1.png", Provider: "Coursera", profileUrl: "https://coursera.org/share/19ea8531986abac81107bbed19894608", stats: [{ label: "Issued", value: "May 2025" }, { label: "Type", value: "Professional" }] },
    { name: "Google Prompting Essentials", logo: "/assets/logos/gcc2.png", Provider: "Coursera", profileUrl: "https://coursera.org/share/fa1d4d4f035e12f575d460bc13013a67", stats: [{ label: "Issued", value: "June 2025" }, { label: "Type", value: "Specialization" }] },
    { name: "Wordpress Internship Certificate", logo: "/assets/logos/gcc3.png", Provider: "Internncraft", profileUrl: "https://drive.google.com/file/d/1bw_fAQ8huFrbDGX__zPlgCxnWnLryV2i/view?usp=sharing", stats: [{ label: "Issued", value: "Dec 2024" }, { label: "Type", value: "Internship" }] },
    { name: "Basics of HTML/CSS for Beginners", logo: "/assets/logos/ss.jpg", Provider: "OpenWeaver", profileUrl: "https://drive.google.com/file/d/1iJ3C5EC0FvWwcW5EJgFudIjfVQw4uWd7/view?usp=sharing", stats: [{ label: "Issued", value: "May 2024" }, { label: "Type", value: "Beginner" }] },
  ], []);

  const highlights = useMemo(() => [
    { text: "Earned the ", linkText: "Google Data Analytics Professional Certificate", href: "https://coursera.org/share/19ea8531986abac81107bbed19894608", rest: " which covered data cleaning, visualization, and analysis using Excel, SQL, and R." },
    { text: "Completed ", linkText: "Google's Prompting Essentials", href: "https://coursera.org/share/fa1d4d4f035e12f575d460bc13013a67", rest: " ,learned the fundamentals of crafting effective prompts for generative AI tools." },
    { text: "Successfully finished a ", linkText: "2-month internship at InternnCraft", href: "https://drive.google.com/file/d/1bw_fAQ8huFrbDGX__zPlgCxnWnLryV2i/view?usp=sharing", rest: " as a WordPress Developer, working on live client projects and theme customization." },
    { text: "Built multiple responsive websites using ", linkText: "WordPress,", rest: " including an LMS platform and an eCommerce fashion store, integrating plugins like TutorLMS and WooCommerce." },
    { text: "Gained hands-on experience in hosting, domain setup, plugin integration, and user interface design. "},
    { text: "Developed strong proficiency in ", linkText: "Elementor,",  rest: " custom theme modification, and WordPress admin workflows." },
  ], []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full space-y-16"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl">
          {/* --- THIS IS THE FIXED HEADING --- */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-2 sm:gap-4 text-foreground text-center">
            <Swords className="w-8 h-8 text-primary drop-shadow-sm flex-shrink-0" />
            <span>Certification</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My learning journey includes hands-on courses and certifications that reflect my dedication to web development, AI, and practical skills. Here are a few highlights.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-5xl">
          <motion.div
            variants={listContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cpPlatforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <div className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Highlights
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              <a href="https://codolio.com/profile/shashank24" className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition font-medium" target="_blank" rel="noopener noreferrer">
              Here are some key highlights from my certification journey.
              </a>
            </p>
            <motion.ul
              variants={listContainerVariants}
              className="list-disc ml-5 space-y-2 text-base text-muted-foreground"
            >
              {highlights.map((item, index) => (
                <HighlightItem key={index} item={item} />
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default React.memo(CompetitiveProgrammingComponent);