import { AnimatedSection } from "../ui/AnimatedSection";

export function HomeIntroduction() {
  return (
    <section className="section-space bg-white" aria-labelledby="intro-title">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
        <AnimatedSection><p className="eyebrow text-brand-blue">La empresa</p></AnimatedSection>
        <AnimatedSection delay={0.08}>
          <h2 id="intro-title" className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">IDEA reúne ingeniería, desarrollo y fabricación en un mismo equipo.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Somos ingenieros y técnicos electrónicos. Trabajamos desde el análisis de cada necesidad hasta las pruebas y la puesta en funcionamiento de los equipos.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
