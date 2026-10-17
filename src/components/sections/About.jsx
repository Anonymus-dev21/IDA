import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";
import { MetricValue } from "../ui/MetricValue";
import { SectionIntro } from "../ui/SectionIntro";

export function About() {
  return (
    <section id="nosotros" className="section-space bg-brand-dark" aria-labelledby="about-title">
      <div className="page-shell grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <AnimatedSection><SectionIntro titleId="about-title" eyebrow="Experiencia" title="20 años construyendo experiencia en cada proyecto." text="Partimos de necesidades concretas y las abordamos con criterio técnico: analizamos el contexto, desarrollamos una solución, la probamos y acompañamos su implementación." light /></AnimatedSection>
        <AnimatedSection delay={0.12}><p className="border-l-2 border-cyan-300 pl-6 font-display text-2xl font-medium leading-9 text-white">Entender, desarrollar, probar e implementar: una forma de trabajo que acerca la ingeniería a cada necesidad.</p></AnimatedSection>
      </div>
      <div className="page-shell mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {siteContent.metrics.map((metric) => <div key={metric.label} className="border-l border-cyan-300/35 pl-5"><MetricValue metric={metric} className="font-display text-3xl font-semibold text-white sm:text-4xl" /><span className="mt-2 block max-w-32 text-xs leading-5 text-slate-400">{metric.label}</span></div>)}
      </div>
    </section>
  );
}
