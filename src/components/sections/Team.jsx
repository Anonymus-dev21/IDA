import { motion, useReducedMotion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa";
import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionIntro } from "../ui/SectionIntro";

export function Team() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="equipo" className="section-space bg-white" aria-labelledby="team-title">
      <div className="page-shell">
        <AnimatedSection><SectionIntro titleId="team-title" eyebrow="Equipo" title="Las personas detrás de IDEA." text="Conozca a quienes llevan adelante nuestros desarrollos electrónicos." /></AnimatedSection>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {siteContent.team.map((person, index) => <AnimatedSection delay={index * 0.1} key={person.name}><motion.article whileHover={reduceMotion ? {} : { y: -6 }} transition={{ duration: 0.2 }} className="interactive-card group relative overflow-hidden border border-border bg-slate-50 p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-2xl bg-slate-200">
              <img src={person.image} width="900" height="760" loading="lazy" alt="" className="aspect-[16/9] w-full object-cover" />
              <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-full bg-brand-dark font-display text-lg font-semibold text-cyan-300">{person.initials}</span>
            </div>
            <div className="mt-7 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{person.name}</h3><ul className="mt-3 space-y-1 text-sm leading-6 text-muted">{person.roles.map((role) => <li key={role}>{role}</li>)}</ul></div><a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${person.name}`} className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-300 text-brand-dark transition hover:border-brand-blue hover:bg-brand-blue hover:text-white"><FaLinkedinIn /></a></div>
          </motion.article></AnimatedSection>)}
        </div>
      </div>
    </section>
  );
}
