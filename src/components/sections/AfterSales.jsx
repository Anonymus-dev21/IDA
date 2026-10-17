import { motion, useReducedMotion } from "motion/react";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { roadSafety } from "../../content/roadSafety";
import { AnimatedSection } from "../ui/AnimatedSection";

export function AfterSales({ compact = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="postventa" className="section-space bg-brand-dark text-white" aria-labelledby="after-sales-title">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <AnimatedSection>
          <p className="eyebrow text-cyan-300">Servicio postventa</p>
          <h2 id="after-sales-title" className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">El respaldo es continuo.</h2>
          <p className="mt-6 max-w-lg leading-7 text-slate-300">Acompañamos a nuestros clientes con garantía, actualizaciones y asistencia para integrar los equipos a sistemas existentes.</p>
          {compact && <Link className="button button-light mt-8" to="/seguridad-vial#postventa">Conocer el servicio <HiArrowRight size={18} /></Link>}
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {(compact ? [roadSafety.afterSales[0], roadSafety.afterSales[2]] : roadSafety.afterSales).map((benefit) => (
              <motion.li key={benefit} whileHover={!compact && !reduceMotion ? { y: -6, scale: 1.01 } : {}} transition={{ duration: 0.2 }} className={`flex gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 leading-6 text-slate-100 ${compact ? "" : "transition-colors hover:border-cyan-300/40 hover:bg-white/10"}`}><HiCheck className="mt-1 shrink-0 text-cyan-300" size={18} />{benefit}</motion.li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
