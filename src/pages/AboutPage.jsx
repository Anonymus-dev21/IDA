import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Team } from "../components/sections/Team";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="section-space bg-surface" aria-labelledby="about-page-title">
        <div className="page-shell">
          <AnimatedSection immediate>
            <p className="eyebrow text-brand-blue">La empresa</p>
            <h1 id="about-page-title" className="mt-4 font-display text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">Nosotros</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">IDEA Ingeniería S.R.L. está integrada por ingenieros y técnicos electrónicos. Investigamos, desarrollamos, probamos y fabricamos sistemas para necesidades concretas.</p>
          </AnimatedSection>
        </div>
      </section>
      <About />
      <Team />
      <Contact />
    </main>
  );
}
