import React, { useState, useCallback, useMemo, memo } from "react";
import { Code, Layers, Terminal, Sparkles, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

// Memoized skill tag component to prevent unnecessary re-renders
const SkillTag = memo(({ tag, index, sectionTitle, hoveredTag, onHover, onLeave }) => {
  const tagId = `${sectionTitle}-${index}`;
  const isHovered = hoveredTag === tagId;
  
  return (
    <span
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-150 transform-gpu ${
        isHovered 
          ? 'bg-neutral-200 dark:bg-neutral-700' 
          : 'bg-neutral-100 dark:bg-neutral-800'
      } text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700`}
    >
      {tag}
    </span>
  );
});

SkillTag.displayName = 'SkillTag';

// Memoized skill section component
const SkillSection = memo(({ section, hoveredTag, onTagHover, onTagLeave, variants }) => {
  const { icon, title, tags } = section;
  
  // Memoize tag elements to prevent recreation on hover state changes
  const tagElements = useMemo(() => 
    tags.map((tag, i) => {
      const tagId = `${title}-${i}`;
      return (
        <SkillTag
          key={tag}
          tag={tag}
          index={i}
          sectionTitle={title}
          hoveredTag={hoveredTag}
          onHover={() => onTagHover(tagId)}
          onLeave={onTagLeave}
        />
      );
    }), [tags, title, hoveredTag, onTagHover, onTagLeave]
  );

  return (
    <motion.div
      variants={variants.cardVariant}
      className="rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 transform-gpu"
      style={{ willChange: 'transform, box-shadow' }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm transform-gpu">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {tagElements}
      </div>
    </motion.div>
  );
});

SkillSection.displayName = 'SkillSection';

// Move static data outside component
const SKILLS_SECTIONS = [
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

export default memo(function Skills() {
  const [hoveredTag, setHoveredTag] = useState(null);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleTagHover = useCallback((tagId) => {
    setHoveredTag(tagId);
  }, []);

  const handleTagLeave = useCallback(() => {
    setHoveredTag(null);
  }, []);

  // Memoize animation variants to prevent object recreation
  const animationVariants = useMemo(() => ({
    containerVariant: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { 
          staggerChildren: 0.1, 
          delayChildren: 0.1,
          ease: "easeOut"
        },
      },
    },
    headingVariant: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.4, ease: "easeOut" } 
      },
    },
    cardVariant: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    }
  }), []);

  // Memoize main motion div props
  const mainMotionProps = useMemo(() => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 }
  }), []);

  // Memoize animated wrapper props
  const wrapperMotionProps = useMemo(() => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: animationVariants.containerVariant
  }), [animationVariants.containerVariant]);

  // Memoize skill sections to prevent recreation unless hoveredTag changes
  const skillSections = useMemo(() => 
    SKILLS_SECTIONS.map((section) => (
      <SkillSection
        key={section.title}
        section={section}
        hoveredTag={hoveredTag}
        onTagHover={handleTagHover}
        onTagLeave={handleTagLeave}
        variants={animationVariants}
      />
    )), [hoveredTag, handleTagHover, handleTagLeave, animationVariants]
  );

  return (
    <section id="skills" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        {...mainMotionProps}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
        style={{ 
          willChange: 'transform, opacity',
          transform: 'translateZ(0)' // Force layer creation
        }}
      >
        {/* Optimized Glow Background */}
        <div 
          className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-xl opacity-25 pointer-events-none z-0 rounded-3xl"
          style={{ transform: 'translateZ(0)' }}
        />

        {/* Animated Wrapper */}
        <motion.div
          {...wrapperMotionProps}
          className="relative z-10"
        >
          {/* Heading */}
          <motion.h2
            variants={animationVariants.headingVariant}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 leading-tight flex justify-center items-center gap-4 text-foreground"
          >
            <Settings2 className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px] transform-gpu" />
            Skills & Interests
          </motion.h2>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillSections}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});