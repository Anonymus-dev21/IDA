import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <main className="pt-[72px]">
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-brand-deep py-16 text-white sm:py-24" aria-labelledby="not-found-title">
        <div className="technical-grid absolute inset-0 -z-20 opacity-20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full border border-cyan-300/10 sm:h-[42rem] sm:w-[42rem]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[22rem] w-[22rem] rounded-full border border-cyan-300/10 sm:h-[34rem] sm:w-[34rem]" aria-hidden="true" />

        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <AnimatedSection immediate>
            <p className="eyebrow text-cyan-300">Error de ruta · 404</p>
            <p className="mt-5 font-display text-[clamp(6rem,24vw,11rem)] font-bold leading-[0.78] tracking-[-0.09em] text-white">404</p>
            <h1 id="not-found-title" className="mt-8 max-w-xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Esta página tomó otro camino.</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">La dirección puede haber cambiado o ya no estar disponible. Te ayudamos a encontrar el rumbo.</p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Link to="/" className="button w-full min-[420px]:w-auto">Ir al inicio <HiArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/seguridad-vial" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200">Explorar soluciones viales</Link>
            </div>
            <button type="button" onClick={goBack} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-200">
              <HiArrowLeft size={16} aria-hidden="true" /> Volver a la página anterior
            </button>
          </AnimatedSection>

          <AnimatedSection immediate delay={0.1} className="mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow text-cyan-300">Centro de navegación</p>
                  <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">Recalculando ruta</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200" aria-hidden="true">
                  <HiArrowRight size={20} />
                </span>
              </div>
              <svg className="mt-6 w-full" viewBox="0 0 480 300" fill="none" role="img" aria-labelledby="route-illustration-title">
                <title id="route-illustration-title">Ilustración de una ruta que se desvía y encuentra un nuevo destino</title>
                <defs>
                  <linearGradient id="route-gradient" x1="68" y1="236" x2="394" y2="67" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#18BDD4" />
                    <stop offset="1" stopColor="#67E8F9" />
                  </linearGradient>
                </defs>
                <path d="M-16 239C68 239 77 180 150 180H232C284 180 291 245 344 245H500" stroke="#173B59" strokeWidth="70" strokeLinecap="round" />
                <path d="M-16 239C68 239 77 180 150 180H232C284 180 291 245 344 245H500" stroke="#42627A" strokeWidth="2" strokeDasharray="10 13" strokeLinecap="round" />
                <path d="M-16 239C68 239 77 180 150 180H198C252 180 254 87 316 87H390" stroke="url(#route-gradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="74" cy="222" r="11" fill="#061D36" stroke="#67E8F9" strokeWidth="4" />
                <circle cx="390" cy="87" r="25" fill="#18BDD4" fillOpacity=".12" />
                <circle cx="390" cy="87" r="12" fill="#18BDD4" />
                <circle cx="390" cy="87" r="4" fill="#061D36" />
                <rect x="191" y="136" width="86" height="28" rx="14" fill="#0B2D4B" stroke="#1B4967" />
                <text x="234" y="154" textAnchor="middle" fill="#A5F3FC" fontFamily="sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.2">NUEVA RUTA</text>
              </svg>
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-400 sm:text-sm">
                <span>Desvío detectado</span>
                <span className="text-cyan-200">Destino a la vista</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
