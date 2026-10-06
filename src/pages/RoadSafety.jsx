import { HiArrowRight, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AfterSales } from "../components/sections/AfterSales";
import { Contact } from "../components/sections/Contact";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { roadSafety } from "../content/roadSafety";

export function RoadSafety() {
  return (
    <main className="pt-[72px]">
      <section className="relative isolate overflow-hidden bg-brand-deep py-20 text-white sm:py-28" aria-labelledby="road-title">
        <img src="/assets/security-road/road-installation-render.webp" width="1666" height="944" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-brand-deep opacity-70" />
        <div className="page-shell">
          <AnimatedSection immediate>
            <p className="eyebrow text-cyan-300">Área de IDEA Ingeniería</p>
            <h1 id="road-title" className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">Seguridad y Control Vial</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">Desarrollamos equipos y servicios para la medición, el registro y la gestión de información vinculada al tránsito.</p>
            <a href="#postventa" className="group mt-5 inline-flex items-center gap-3 rounded-full border border-cyan-200/70 bg-cyan-300 px-4 py-[10px] text-left text-brand-deep shadow-[0_12px_32px_rgba(34,211,238,0.25)] transition duration-200 hover:-translate-y-1 hover:bg-cyan-200 sm:px-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-deep text-cyan-300"><HiCheck size={16} /></span>
              <span><span className="mt-0.5 block font-display text-base font-bold">Excelente servicio postventa</span></span>
              <HiArrowRight className="ml-1 shrink-0 transition-transform duration-200 group-hover:translate-x-1" size={22} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section id="soluciones" className="section-space bg-white" aria-labelledby="road-products-title">
        <div className="page-shell">
          <AnimatedSection>
            <p className="eyebrow text-brand-blue">Soluciones</p>
            <h2 id="road-products-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Equipos y software para diferentes necesidades viales.</h2>
          </AnimatedSection>
          <div className="mt-14 space-y-14">
            {roadSafety.products.map((product, index) => (
              <AnimatedSection key={product.name} delay={index * 0.06} className="grid items-center gap-8 border-t border-border pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="eyebrow text-brand-blue">0{index + 1} · {product.type}</p>
                  <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">{product.name}</h3>
                  <p className="mt-5 max-w-xl leading-7 text-muted">{product.description}</p>
                  <Link className="button mt-7" to={product.path}>Conocer {product.name} <HiArrowRight size={18} /></Link>
                </div>
                <figure className="overflow-hidden rounded-[1.5rem] bg-surface">
                  <img src={product.image} width="1200" height="760" loading="lazy" alt={product.imageAlt} className="aspect-[16/10] w-full object-cover" />
                  {product.isPlaceholder && <figcaption className="px-5 py-3 text-xs text-muted">Imagen ilustrativa</figcaption>}
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="section-space bg-surface" aria-labelledby="road-services-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]" id="acompañamiento">
          <AnimatedSection>
            <p className="eyebrow text-brand-blue">Servicios</p>
            <h2 id="road-services-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Un equipo técnico detrás de cada instalación.</h2>
            <p className="mt-6 leading-7 text-muted">La seguridad vial requiere equipos bien instalados y una operación sostenida. IDEA también acompaña esas etapas.</p>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2">
            {roadSafety.services.map((service, index) => <AnimatedSection key={service.title} delay={index * 0.05} className="rounded-2xl border border-border bg-white p-6">
              <HiCheck className="text-brand-blue" size={21} />
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
            </AnimatedSection>)}
          </div>
        </div>
      </section>

      <AfterSales />
      <Contact />
    </main>
  );
}
