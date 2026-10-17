import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";

export function SentinelFeature() {
  const { sentinel } = siteContent;

  return (
    <section id="sentinel" className="section-space bg-white" aria-labelledby="sentinel-title">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <AnimatedSection className="relative overflow-hidden rounded-[1.75rem] bg-brand-deep">
          <img src={sentinel.heroImage} width="2048" height="1152" loading="lazy" alt="Render de Sentinel 24 en una instalación vial" className="aspect-[16/11] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent opacity-60" />
          <div className="absolute bottom-5 left-5 rounded-lg border border-white/30 bg-brand-deep px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white opacity-15">Render ilustrativo</div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="eyebrow text-brand-blue">Producto destacado</p>
          <h2 id="sentinel-title" className="mt-4 font-display text-5xl font-semibold tracking-[-0.04em] text-ink">Sentinel 24</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{sentinel.homeSummary}</p>
          <div className="mt-8 inline-block -rotate-2 rounded-lg border-2 border-red-800/75 px-5 py-3 text-center text-red-800" aria-label="Homologado, Resolución 753/98">
            <strong className="block font-display text-2xl font-black tracking-[0.05em]">HOMOLOGADO</strong>
            <span className="block text-sm font-semibold uppercase tracking-widest">Resolución 753/98</span>
          </div>
          <div><Link className="button mt-9" to={sentinel.path}>Conocer Sentinel 24 <HiArrowRight size={19} /></Link></div>
        </AnimatedSection>
      </div>
    </section>
  );
}
