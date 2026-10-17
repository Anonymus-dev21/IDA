import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";
import { MetricValue } from "../ui/MetricValue";

export function AboutPreview() {
  return (
    <section id="nosotros" className="section-space bg-surface" aria-labelledby="about-preview-title">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
        <AnimatedSection>
          <p className="eyebrow text-brand-blue">Sobre IDEA</p>
          <h2 id="about-preview-title" className="mt-4 max-w-lg font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Experiencia que se traduce en equipos funcionando.</h2>
          <p className="mt-6 max-w-xl leading-7 text-muted">El equipo fundador de IDEA posee 20 años de experiencia profesional en el área de la ingeniería electrónica. Experiencia comprobable en el desarrollo, fabricación e implementación de hardware y firmware y software.</p>
          <Link className="button mt-8" to="/nosotros">Conocer IDEA <HiArrowRight size={18} /></Link>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:gap-8">
          {siteContent.metrics.map((metric) => <div key={metric.label}><MetricValue metric={metric} className="block font-display text-3xl font-semibold text-brand-dark sm:text-4xl" /><span className="mt-2 block text-sm text-muted">{metric.label}</span></div>)}
        </AnimatedSection>
      </div>
    </section>
  );
}
