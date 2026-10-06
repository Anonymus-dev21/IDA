import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AnimatedSection } from "../ui/AnimatedSection";

export function BusinessAreas() {
  return (
    <section id="capacidades" className="section-space bg-surface" aria-labelledby="areas-title">
      <div className="page-shell">
        <AnimatedSection><p className="eyebrow text-brand-blue">Nuestras áreas</p><h2 id="areas-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Dos campos de trabajo. Una misma forma de hacer ingeniería.</h2></AnimatedSection>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <AnimatedSection className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-brand-deep p-7 text-white sm:p-10">
            <img src="/assets/institutional/road-control.webp" width="1665" height="944" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent" />
            <div className="relative">
              <p className="eyebrow text-cyan-300">01 · Seguridad y Control Vial</p>
              <h3 className="mt-4 max-w-md font-display text-4xl font-semibold tracking-tight">Sistemas para el tránsito y su gestión.</h3>
              <p className="mt-5 max-w-lg leading-7 text-slate-200">Sentinel 24, Sentinel Doppler-S y LPR, junto con servicios de instalación, mantenimiento y procesamiento.</p>
              <Link className="button button-light mt-7" to="/seguridad-vial">Conocer soluciones <HiArrowRight size={18} /></Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-brand-dark p-7 text-white sm:p-10">
            <img src="/assets/development/pcb-illustration.jpg" width="547" height="365" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent" />
            <div className="relative">
              <p className="eyebrow text-cyan-300">02 · Desarrollo y Fabricación</p>
              <h3 className="mt-4 max-w-md font-display text-4xl font-semibold tracking-tight">Electrónica diseñada para cada proyecto.</h3>
              <p className="mt-5 max-w-lg leading-7 text-slate-200">Diseño electrónico, firmware, PCB, prototipado, fabricación e integración.</p>
              <Link className="button button-light mt-7" to="/desarrollo-y-fabricacion">Conocer capacidades <HiArrowRight size={18} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
