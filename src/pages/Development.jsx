import { HiArrowRight, HiCheck } from "react-icons/hi";
import { Capabilities } from "../components/sections/Capabilities";
import { Contact } from "../components/sections/Contact";
import { EngineeringProcess } from "../components/sections/EngineeringProcess";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { development } from "../content/development";

export function Development() {
  return (
    <main className="pt-[72px]">
      <section className="relative isolate overflow-hidden bg-brand-deep py-20 text-white sm:py-28" aria-labelledby="development-title">
        <img src="/assets/development/LPRIMG.png" width="547" height="365" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-brand-deep opacity-75" />
        <div className="page-shell">
          <AnimatedSection immediate>
            <p className="eyebrow text-cyan-300">Área de IDEA Ingeniería</p>
            <h1 id="development-title" className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">Desarrollo y Fabricación Electrónica</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">Diseñamos, construimos y probamos electrónica para aplicaciones específicas, desde el esquema inicial hasta el equipo terminado.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-space bg-white" aria-labelledby="disciplines-title">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedSection><p className="eyebrow text-brand-blue">Qué hacemos</p><h2 id="disciplines-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Del esquema al equipo en funcionamiento.</h2></AnimatedSection>
          <AnimatedSection delay={0.1}><ul className="divide-y divide-border border-y border-border">{development.disciplines.map((item) => <li key={item} className="flex gap-4 py-5 leading-7 text-slate-700"><HiCheck className="mt-1 shrink-0 text-brand-blue" size={20} />{item}</li>)}</ul></AnimatedSection>
        </div>
      </section>
      <Capabilities />
      <section className="relative isolate flex min-h-[340px] items-center overflow-hidden bg-brand-deep bg-cover bg-center bg-scroll py-16 text-white sm:min-h-[420px] sm:bg-fixed sm:py-20" style={{ backgroundImage: "url('/assets/development/software-embedded-hero.png')" }} aria-label="Software y sistemas embebidos">
        <div className="absolute inset-0 -z-10 bg-brand-deep/75" />
        <div className="page-shell flex justify-center text-center">
          <AnimatedSection className="max-w-2xl">
            <p className="eyebrow text-cyan-300">Electrónica y software</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Hardware y código trabajando como un solo sistema.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">Desarrollamos firmware, interfaces y sistemas embebidos para que cada equipo responda con precisión en su entorno de uso.</p>
          </AnimatedSection>
        </div>
      </section>
      <EngineeringProcess />
      <section id="proyectos" className="section-space bg-surface" aria-labelledby="projects-title">
        <div className="page-shell">
          <AnimatedSection><p className="eyebrow text-brand-blue">Desarrollos realizados</p><h2 id="projects-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Algunos proyectos de IDEA.</h2></AnimatedSection>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {development.projects.map((project, index) => <AnimatedSection key={project.name} delay={index * 0.08} className="flex flex-col rounded-[1.5rem] border border-border bg-white p-7 sm:p-9">
              <p className="eyebrow text-brand-blue">{project.name}</p>
              <h3 className="mt-8 font-display text-3xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-5 flex-1 leading-7 text-muted">{project.description}</p>
              <a className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue hover:text-brand-dark" href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel} <HiArrowRight size={18} /></a>
            </AnimatedSection>)}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
