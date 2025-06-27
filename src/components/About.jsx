import { Card } from "./ui/card";
import { Github, Linkedin, Mail, FileText, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo, memo } from "react";

// Memoized social link component to prevent unnecessary re-renders
const SocialLink = memo(({ href, icon, title, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    title={title}
  >
    {icon}
  </a>
));

SocialLink.displayName = 'SocialLink';

// Memoized tag component
const Tag = memo(({ tag }) => (
  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
    {tag}
  </span>
));

Tag.displayName = 'Tag';

// Move static data outside component to prevent recreation on every render
const SOCIAL_LINKS = [
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

const TAGS = [
  "Competitive Programming",
  "Data Structures",
  "Algorithms",
  "C++",
  "Problem Solving",
  "Web Development",
];

const RESUME_URL = "https://drive.google.com/file/d/135ph1omrsyypG7_FAffFYp27_c9UQQPR/view?usp=sharing";

export default memo(function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-10% 0px",
    // Reduce frequency of intersection checks
    threshold: 0.1
  });

  // Memoize animation variants to prevent object recreation
  const animationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      // Add will-change optimization
      willChange: "transform, opacity"
    }
  }), []);

  // Memoize social links to prevent recreation
  const socialLinksElements = useMemo(() => 
    SOCIAL_LINKS.map(({ href, icon, title }) => (
      <SocialLink
        key={title}
        href={href}
        icon={icon}
        title={title}
        className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all transform-gpu"
      />
    )), []
  );

  // Memoize tags to prevent recreation
  const tagElements = useMemo(() => 
    TAGS.map((tag) => <Tag key={tag} tag={tag} />), []
  );

  return (
    <section id="about" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        ref={sectionRef}
        initial={animationVariants.initial}
        animate={isInView ? animationVariants.animate : animationVariants.initial}
        transition={animationVariants.transition}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
        style={{ 
          // Force GPU acceleration and optimize for transforms
          willChange: isInView ? 'auto' : 'transform, opacity',
          transform: 'translateZ(0)' // Force layer creation
        }}
      >
        {/* Simplified background gradient - reduced blur for better performance */}
        <div 
          className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-xl opacity-25 pointer-events-none z-0 rounded-3xl"
          style={{ transform: 'translateZ(0)' }}
        />

        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="flex justify-center">
            <div className="group relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500 transform-gpu">
              <div
                className="absolute inset-0 rounded-full border border-neutral-500/20 group-hover:border-primary group-hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.3)] transition-all duration-500 ease-out transform-gpu"
                style={{ 
                  // Use CSS custom property for smoother animation
                  animation: 'spin 10s linear infinite',
                  animationPlayState: 'running',
                  willChange: 'transform'
                }}
              />
              <img
                src="/assets/MyPhoto.jpg"
                alt="Shashank Raj"
                loading="lazy" // Add lazy loading
                decoding="async" // Async decoding for better performance
                className="rounded-full object-cover w-full h-full border-4 border-white dark:border-neutral-900 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105 transform-gpu"
                style={{ 
                  willChange: 'transform, filter',
                  // Prevent layout shift
                  aspectRatio: '1/1'
                }}
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
              I'm a passionate student with a strong interest in{" "}
              <span className="text-foreground font-medium">competitive programming</span> and tackling challenging problems. I love crafting efficient solutions and exploring new technologies.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tagElements}
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              {socialLinksElements}

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all transform-gpu"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
});