import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Team } from "../components/sections/Team";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="overflow-hidden bg-surface py-12 sm:py-16" aria-labelledby="about-page-title">
        <div className="page-shell grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-14">
          <AnimatedSection immediate>
            <p className="eyebrow text-brand-blue">Sobre IDEA</p>
            <h1 id="about-page-title" className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">Ingeniería construida desde la experiencia.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Somos profesionales de ingeniería electrónica que trabajamos sobre problemas concretos, combinando desarrollo, fabricación, pruebas e implementación para llevar cada proyecto a la práctica.</p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.08} className="relative min-h-64 overflow-hidden rounded-[1.5rem] bg-brand-deep sm:min-h-80">
            <img src="/assets/brand/nosotros.jpg" width="3000" height="1152" alt="Espacio de trabajo para desarrollo electrónico" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/65 to-transparent" />
            <div className="absolute right-5 top-5 z-10">
              <div className="brand-logo"><img src="/assets/brand/idea-logo-white.png" alt="IDEA Ingeniería" /></div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <About />
      <Team />
      <Contact />
    </main>
  );
}
