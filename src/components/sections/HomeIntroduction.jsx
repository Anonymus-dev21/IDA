import { AnimatedSection } from "../ui/AnimatedSection";

export function HomeIntroduction() {
  return (
    <section className="section-space bg-white" aria-labelledby="intro-title">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
        <AnimatedSection className="relative min-h-64 overflow-hidden rounded-[1.5rem] bg-brand-deep sm:min-h-80">
          <img src="/assets/development/pcb-illustration.jpg" width="1600" height="900" loading="lazy" alt="Placa electrónica en proceso de diseño" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">Diseño, software y fabricación en un mismo equipo.</p>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <p className="eyebrow text-brand-blue">Ingeniería electrónica aplicada</p>
          <h2 id="intro-title" className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">IDEA reúne ingeniería, desarrollo y fabricación en un mismo equipo.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Somos ingenieros y técnicos electrónicos. Trabajamos desde el análisis de cada necesidad hasta las pruebas y la puesta en funcionamiento de los equipos.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
