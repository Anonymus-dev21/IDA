import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionIntro } from "../ui/SectionIntro";

export function EngineeringProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space overflow-hidden bg-white" aria-labelledby="process-title">
      <div className="page-shell">
        <AnimatedSection><SectionIntro titleId="process-title" eyebrow="Forma de trabajo" title="Del problema a la solución." text="Cada proyecto comienza por comprender el problema de nuestros clientes. Luego diseñamos, probamos y ajustamos hasta tener un equipo listo para usar." /></AnimatedSection>
        <motion.ol initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.22 }} variants={{ hidden: {}, visible: { transition: { delayChildren: reduceMotion ? 0 : 0.1, staggerChildren: reduceMotion ? 0 : 0.1 } } }} className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />
          {siteContent.process.map((step) => <motion.li key={step.number} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }} whileHover={reduceMotion ? {} : { y: -6 }} className="process-card relative border border-border bg-slate-50 p-6 transition-colors hover:border-brand-cyan hover:bg-white">
            <span className="relative grid h-[60px] w-[60px] place-items-center rounded-full bg-brand-dark font-display font-semibold text-cyan-300 ring-8 ring-white text-lg">{step.number}</span>
            <h3 className="mt-10 font-display text-xl font-semibold text-ink">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
          </motion.li>)}
        </motion.ol>
      </div>
    </section>
  );
}
