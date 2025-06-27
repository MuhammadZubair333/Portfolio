import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  const sectionHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulated)");
    e.target.reset();
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto mt-32 mb-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        {/* Heading */}
        <motion.h2
          variants={sectionHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-12 tracking-tight flex items-center justify-center gap-3 text-foreground relative z-10"
        >
          <Mail className="w-7 h-7 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px]" />
          <span>Contact</span>
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-8 relative z-10"
        >
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-2xl"
          >
            I'm always open to new opportunities, collaborations, and discussions.
            <br />
            Feel free to reach out!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 text-primary text-lg font-medium"
          >
            <Mail className="w-5 h-5" />
            <a
              href="mailto:shashankraj0124@gmail.com"
              className="hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              shashankraj0124@gmail.com
            </a>
          </motion.div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onSubmit={handleSubmit}
            className="w-full max-w-xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md border border-border/40 dark:border-border/60 rounded-2xl shadow-xl space-y-4"
          >
            <motion.div variants={itemVariants}>
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="text-foreground"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="text-foreground"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Textarea
                rows={4}
                placeholder="Your Message"
                required
                className="resize-y text-foreground"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Send Message <Send className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}