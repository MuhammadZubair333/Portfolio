import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useRef, useState, useMemo } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    status: 'idle', // idle, loading, success, error
    message: ''
  });

  // Memoize animation variants
  const sectionHeadingVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }), []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }), []);

  // Memoize motion props
  const sectionMotionProps = useMemo(() => ({
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: "easeOut" },
  }), [isInView]);

  const headingMotionProps = useMemo(() => ({
    variants: sectionHeadingVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  }), [sectionHeadingVariants, isInView]);

  const containerMotionProps = useMemo(() => ({
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  }), [containerVariants, isInView]);

  const formMotionProps = useMemo(() => ({
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  }), [containerVariants, isInView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // Option 1: Using Formspree (free service)
      const response = await fetch('https://formspree.io/f/mldnaeeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormState({ 
          status: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        e.target.reset();
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setFormState({ status: 'idle', message: '' });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if form submission fails
      const subject = encodeURIComponent('Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      
      window.location.href = `mailto:shashankraj0124@gmail.com?subject=${subject}&body=${body}`;
      
      setFormState({ 
        status: 'success', 
        message: 'Opening your email client...' 
      });
      
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' });
      }, 3000);
    }
  };

  const StatusMessage = ({ status, message }) => {
    if (status === 'idle') return null;

    const variants = {
      hidden: { opacity: 0, y: -10, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" }
      }
    };

    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
          status === 'success' 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
            : status === 'error'
            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
        }`}
      >
        {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
        {status === 'success' && <CheckCircle2 className="w-4 h-4" />}
        {status === 'error' && <AlertCircle className="w-4 h-4" />}
        {message}
      </motion.div>
    );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto mt-32 mb-16 px-4 sm:px-8">
      <motion.div
        ref={ref}
        {...sectionMotionProps}
        className="rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-2xl p-10 md:p-16 relative overflow-hidden transform-gpu"
      >
        <div className="absolute -inset-2 bg-gradient-to-br from-neutral-400/10 via-neutral-500/10 to-neutral-700/10 blur-2xl opacity-25 pointer-events-none z-0 rounded-3xl" />

        <motion.h2
          {...headingMotionProps}
          className="text-3xl sm:text-5xl font-bold text-center mb-12 tracking-tight flex items-center justify-center gap-3 text-foreground relative z-10"
        >
          <Mail className="w-7 h-7 sm:w-11 sm:h-11 text-primary drop-shadow-sm translate-y-[1px]" />
          <span>Contact</span>
        </motion.h2>

        <motion.div
          {...containerMotionProps}
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
            {...formMotionProps}
            onSubmit={handleSubmit}
            className="w-full max-w-xl p-6 sm:p-8 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md border border-border/40 dark:border-border/60 rounded-2xl shadow-xl space-y-4"
          >
            <StatusMessage status={formState.status} message={formState.message} />
            
            <motion.div variants={itemVariants}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                disabled={formState.status === 'loading'}
                className="text-foreground disabled:opacity-50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                disabled={formState.status === 'loading'}
                className="text-foreground disabled:opacity-50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                required
                disabled={formState.status === 'loading'}
                className="resize-y text-foreground disabled:opacity-50"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={formState.status === 'loading'}
                className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}