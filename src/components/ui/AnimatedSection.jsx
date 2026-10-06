import { motion, useReducedMotion } from "motion/react";

export function AnimatedSection({ children, className = "", delay = 0, immediate = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion || immediate ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion || immediate ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
