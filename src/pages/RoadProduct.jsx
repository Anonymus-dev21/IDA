import { HiArrowRight, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { BackToPrevious } from "../components/ui/BackToPrevious";
import { roadSafety } from "../content/roadSafety";
import { siteContent } from "../content/siteContent";

function RoadProduct({ product, subtitle }) {
  return (
    <main className="pt-[72px]">
      <section className="section-space bg-brand-deep text-white" aria-labelledby="product-title">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection immediate>
            <BackToPrevious />
            <p className="eyebrow mt-10 text-cyan-300">{subtitle}</p>
            <h1 id="product-title" className="mt-4 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{product.intro}</p>
            <a className="button mt-8" href={`mailto:${siteContent.contact.email}?subject=Consulta%20${encodeURIComponent(product.name)}`}>Solicitar información <HiArrowRight size={18} /></a>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.08}>
            <figure className="overflow-hidden rounded-[1.75rem] bg-surface">
              <img src={product.image} width="1200" height="760" alt={`Ilustración genérica de ${subtitle.toLowerCase()}`} className="aspect-[16/10] w-full object-cover" />
              {product.isPlaceholder && <figcaption className="px-5 py-3 text-xs text-muted">Imagen ilustrativa</figcaption>}
            </figure>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-space bg-white" aria-labelledby="product-features-title">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <AnimatedSection><p className="eyebrow text-brand-blue">Características</p><h2 id="product-features-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink">Lo que permite hacer {product.name}.</h2></AnimatedSection>
          <AnimatedSection delay={0.1}><ul className="divide-y divide-border border-y border-border">{product.features.map((feature) => <li key={feature} className="flex gap-4 py-5 leading-7 text-slate-700"><HiCheck className="mt-1 shrink-0 text-brand-blue" size={20} />{feature}</li>)}</ul></AnimatedSection>
        </div>
      </section>
      <section className="bg-surface py-14"><div className="page-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow text-brand-blue">IDEA Ingeniería</p><h2 className="mt-3 font-display text-3xl font-semibold text-ink">Conversemos sobre su aplicación.</h2></div><Link className="button" to="/contacto">Contactar a IDEA <HiArrowRight size={18} /></Link></div></section>
    </main>
  );
}

export function DopplerS() {
  return <RoadProduct product={roadSafety.doppler} subtitle="Control de cruce con luz roja" />;
}

export function Lpr() {
  return <RoadProduct product={roadSafety.lpr} subtitle="Lectura de patentes" />;
}
