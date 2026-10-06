import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionIntro } from "../ui/SectionIntro";

export function Capabilities() {
  const [primary, ...rest] = siteContent.capabilities;
  const reduceMotion = useReducedMotion();
  return (
    <section id="capacidades" className="section-space bg-surface" aria-labelledby="capabilities-title">
      <div className="page-shell">
        <AnimatedSection><SectionIntro titleId="capabilities-title" eyebrow="Capacidades" title="Ingeniería para cada etapa del proyecto." text="Podemos participar desde el primer diseño hasta la instalación, según lo que necesite cada proyecto." /></AnimatedSection>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <AnimatedSection className="rounded-3xl bg-brand-dark p-8 text-white sm:p-10">
            <span className="font-display text-sm font-semibold text-cyan-300">{primary.icon}</span><h3 className="mt-16 max-w-md font-display text-4xl font-semibold tracking-[-0.04em]">{primary.title}</h3><p className="mt-5 max-w-md leading-7 text-slate-300">{primary.text}</p>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((capability, index) => <AnimatedSection delay={index * 0.06} key={capability.title}><motion.article whileHover={reduceMotion ? {} : { y: -6, scale: 1.01 }} transition={{ duration: 0.2 }} className="interactive-card border border-border bg-white p-6 sm:p-7"><span className="font-display text-sm font-semibold text-brand-blue">{capability.icon}</span><h3 className="mt-10 font-display text-xl font-semibold text-ink">{capability.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{capability.text}</p><span className="card-arrow mt-6 block text-brand-blue" aria-hidden="true">↗</span></motion.article></AnimatedSection>)}
          </div>
        </div>
      </div>
    </section>
  );
}
