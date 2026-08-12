import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="hero-overlay absolute inset-0 opacity-80" />
      <div className="container-page relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.24em] text-accent uppercase"
        >
          {eyebrow}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-ink-foreground/75 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
