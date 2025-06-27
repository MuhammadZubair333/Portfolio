import { ExternalLink, Swords } from "lucide-react";
import { motion } from "framer-motion";

export default function CP() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cpPlatforms = [
    {
      name: "Codeforces",
      logo: "/assets/logos/codeforces.png",
      handle: "shashank2401",
      profileUrl: "https://codeforces.com/profile/shashank2401",
      stats: [
        { label: "Max Rating", value: "1600" },
        { label: "Rank", value: "Expert" },
      ],
    },
    {
      name: "CodeChef",
      logo: "/assets/logos/codechef.svg",
      handle: "shashankraj24",
      profileUrl: "https://www.codechef.com/users/shashankraj24",
      stats: [
        { label: "Max Rating", value: "1954" },
        { label: "Rank", value: "4-Star" },
      ],
    },
    {
      name: "LeetCode",
      logo: "/assets/logos/leetcode.png",
      handle: "shashank2401",
      profileUrl: "https://leetcode.com/u/shashank2401/",
      stats: [
        { label: "Max Rating", value: "2022" },
        { label: "Badge", value: "Knight" },
      ],
    },
    {
      name: "AtCoder",
      logo: "/assets/logos/atcoder.png",
      handle: "shashank24",
      profileUrl: "https://atcoder.jp/users/shashank24",
      stats: [
        { label: "Max Rating", value: "927" },
        { label: "Rank", value: "6 Kyu" },
      ],
    },
  ];

  const highlights = [
    {
      text: "Solved over ",
      linkText: "900+ problems",
      href: "https://codolio.com/profile/shashank24",
      rest: " across multiple CP platforms, enhancing algorithmic thinking and coding efficiency.",
    },
    {
      text: "Participated in more than ",
      linkText: "100 contests",
      href: "https://codolio.com/profile/shashank24",
      rest: ", consistently testing and improving my problem-solving skills.",
    },
    {
      text: "Ranked among the top with a ",
      linkText: "Global Rank of 847",
      href: "https://codeforces.com/contest/2114/standings/participant/211255102#p211255102",
      rest: " in Codeforces Round 1027 (Div. 3).",
    },
    {
      text: "Achieved a notable ",
      linkText: "Global Rank of 849",
      href: "https://codeforces.com/contest/2090/standings/participant/206688395#p206688395",
      rest: " in Codeforces Round 1012 (Div. 2).",
    },
    {
      text: "Earned a ",
      linkText: "Top 100 finish (Rank 99)",
      href: "https://www.codechef.com/rankings/START154D?itemsPerPage=100&order=asc&page=1&sortBy=rank",
      rest: " in CodeChef Starters 154 (Div. 4).",
    },
    {
      text: "Demonstrated strong performance with a ",
      linkText: "Global Rank of 120",
      href: "https://www.codechef.com/rankings/START187B?itemsPerPage=100&order=asc&page=1&sortBy=rank",
      rest: " in CodeChef Starters 187 (Div. 2).",
    },
  ];

  return (
    <section id="cp" className="max-w-6xl mx-auto my-32 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
      >
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl sm:text-5xl font-bold mb-16 tracking-tight flex items-baseline justify-center gap-4 text-foreground relative z-10"
        >
          <Swords className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px]" />
          <span>Competitive Programming</span>
        </motion.h2>

        {/* Platforms */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
        >
          {cpPlatforms.map((platform, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="bg-muted/60 dark:bg-muted/70 backdrop-blur-md border border-border/40 dark:border-border/60 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-background shadow-md border border-border/60 mb-4">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    className={`w-full h-full object-contain ${platform.name === "CodeChef" ? "dark:invert" : ""}`}
                  />
                </div>
                <div className="text-lg font-semibold text-foreground">{platform.name}</div>
                <div className="text-sm text-muted-foreground mt-1 mb-1">
                  <span className="text-foreground/80">Handle:</span>{" "}
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition"
                  >
                    {platform.handle}
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
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-3 flex items-center gap-1 text-primary font-medium text-sm hover:underline dark:hover:text-primary-foreground/70 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Profile
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          <div className="bg-muted/60 dark:bg-muted/70 backdrop-blur-md border border-border/40 dark:border-border/60 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Highlights</h3>
            <p className="text-base text-muted-foreground mb-4">
              <a
                href="https://codolio.com/profile/shashank24"
                className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Codolio Profile for more details
              </a>
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base text-muted-foreground">
              {highlights.map((item, index) => (
                <li key={index}>
                  {item.text}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline dark:hover:text-primary-foreground/70 font-medium transition"
                  >
                    {item.linkText}
                  </a>
                  {item.rest}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}