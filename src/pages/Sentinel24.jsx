import { HiArrowRight, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { BackToPrevious } from "../components/ui/BackToPrevious";
import { HomologationStamp } from "../components/ui/HomologationStamp";
import { roadSafety } from "../content/roadSafety";
import { siteContent } from "../content/siteContent";

export function Sentinel24() {
  const { sentinel, contact } = siteContent;

  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden bg-brand-deep py-16 text-white sm:py-24" aria-labelledby="sentinel-page-title">
        <div className="circuit-pattern absolute inset-0 opacity-25" />
        <div className="page-shell relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection immediate>
            <BackToPrevious />
            <p className="eyebrow mt-10 text-cyan-300">Cinemómetro multicarril</p>
            <h1 id="sentinel-page-title" className="mt-4 font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Sentinel 24</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Sentinel 24 es un cinemómetro multicarril con detección por espiras inductivas. Puede fiscalizar hasta dos carriles al mismo tiempo y está homologado en cumplimiento con la Resolución 753/98.</p>
            <a className="button mt-8" href={`mailto:${contact.email}?subject=Consulta%20t%C3%A9cnica%20Sentinel%2024`}>Solicitar información técnica <HiArrowRight size={19} /></a>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1} className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
            <img src={sentinel.heroImage} width="2048" height="1152" alt="Render de Sentinel 24 instalado en una vía" className="aspect-[16/10] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
              <div className="flex items-end justify-end gap-5">
                <HomologationStamp compact />

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="sentinel-measure-title">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <p className="eyebrow text-brand-blue">El equipo</p>
            <h2 id="sentinel-measure-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">Medición de velocidad con espiras inductivas.</h2>
            <p className="mt-6 leading-7 text-muted">En cada carril se instalan dos espiras. El Sentinel 24 detecta el paso de un vehículo y calcula su velocidad, generando un registro fotográfico en caso de superar los límites de velocidad permitidos en el lugar. </p>
            <p className="mt-4 leading-7 text-muted">Puede trabajar en uno o dos carriles, incluso con sentidos de circulación distintos, y utilizar una o dos cámaras IP.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="grid grid-cols-2 border-l border-t border-border">
            {sentinel.highlights.map((highlight) => <div key={highlight.label} className="border-b border-r border-border p-6 transition-colors duration-200 hover:bg-surface sm:p-8"><strong className="font-display text-2xl font-semibold text-brand-dark sm:text-3xl">{highlight.value}</strong><span className="mt-2 block text-sm leading-5 text-muted">{highlight.label}</span></div>)}
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="sentinel-capabilities-title">
        <div className="page-shell">
          <AnimatedSection><p className="eyebrow text-brand-blue">Funciones</p><h2 id="sentinel-capabilities-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Configuración, captura y validación.</h2></AnimatedSection>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {roadSafety.sentinelDetails.map((group, index) => <AnimatedSection key={group.title} delay={index * 0.08} className="rounded-[1.5rem] border border-border bg-white p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-ink">{group.title}</h3>
              <ul className="mt-6 space-y-4">{group.items.map((item) => <li key={item} className="flex gap-3 leading-6 text-slate-700"><HiCheck className="mt-1 shrink-0 text-brand-blue" size={18} />{item}</li>)}</ul>
            </AnimatedSection>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-dark text-white" aria-labelledby="sentinel-service-title">
        <div className="page-shell grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <p className="eyebrow text-cyan-300">Ecosistema Sentinel</p>
            <h2 id="sentinel-service-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em]">Del registro al acta.</h2>
            <p className="mt-6 leading-7 text-slate-200">Sentinel 24 se integra con Sentinel Process para el procesamiento y la generación de actas de infracción.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="rounded-2xl border border-white/20 bg-white/5 p-7">
            <p className="eyebrow text-cyan-300">Paquete Estándar</p>
            <p className="mt-4 text-lg leading-8 text-slate-100">Incluye instalación, procesamiento, generación de actas y servicio de mantenimiento.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="sentinel-gallery-title">
        <div className="page-shell">
          <AnimatedSection><p className="eyebrow text-brand-blue">Configuraciones</p><h2 id="sentinel-gallery-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">Distintas formas de instalarlo según la vía.</h2></AnimatedSection>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {sentinel.gallery.map((image, index) => <AnimatedSection delay={index * 0.08} key={image.src}><figure className="overflow-hidden rounded-[1.5rem] bg-slate-100"><img src={image.src} loading="lazy" width="1638" height="927" alt={image.alt} className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.03]" /><figcaption className="p-5 text-sm leading-6 text-muted">{image.caption}</figcaption></figure></AnimatedSection>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="sentinel-specs-title">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection><p className="eyebrow text-brand-blue">Ficha técnica</p><h2 id="sentinel-specs-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">Datos principales del equipo.</h2><p className="mt-5 leading-7 text-muted">Para evaluar una instalación o solicitar documentación adicional, comuníquese con IDEA.</p></AnimatedSection>
          <AnimatedSection delay={0.1}><dl className="divide-y divide-border border-y border-border">{sentinel.specifications.map(([term, description]) => <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-8" key={term}><dt className="text-sm font-semibold text-ink">{term}</dt><dd className="text-sm leading-6 text-muted">{description}</dd></div>)}</dl></AnimatedSection>
        </div>
      </section>

      <section className="bg-brand-blue py-14"><div className="page-shell flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><p className="eyebrow text-cyan-100">Sentinel 24</p><h2 className="mt-3 font-display text-3xl font-semibold text-white">¿Desea evaluar una instalación?</h2></div><Link to="/contacto" className="button button-light">Contactar a IDEA <HiArrowRight size={19} /></Link></div></section>
    </main>
  );
}
