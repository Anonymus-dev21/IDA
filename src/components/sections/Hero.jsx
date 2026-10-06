import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const scenes = [
  { image: "/assets/institutional/road-control.webp", label: "Seguridad y control vial" },
  { image: "/assets/security-road/road-installation-render.webp", label: "Sistemas para el tránsito" },
  { image: "/assets/development/pcb-illustration.jpg", label: "Desarrollo electrónico" },
];

const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = window.setInterval(() => setActiveScene((current) => (current + 1) % scenes.length), 5400);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const scene = scenes[activeScene];

  return (
    <section className="relative isolate flex min-h-[min(880px,100svh)] items-center overflow-hidden bg-brand-deep pt-[72px]" aria-labelledby="hero-title">
      <AnimatePresence initial={false}>
        <motion.img
          key={scene.image}
          src={scene.image}
          alt=""
          aria-hidden="true"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-brand-deep opacity-75" />
      <div className="circuit-pattern absolute inset-0 -z-10 opacity-20" />
      <motion.div initial={reducedMotion ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.1 } } }} className="page-shell w-full py-24 text-center">
        <motion.p variants={item} className="eyebrow text-cyan-300">Ingeniería y Desarrollos Electrónicos Argentinos</motion.p>
        <motion.h1 variants={item} id="hero-title" className="mx-auto mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">IDEA Ingeniería S.R.L.</motion.h1>
        <motion.p variants={item} className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">Ingeniería electrónica, seguridad vial y desarrollo de equipos para necesidades concretas.</motion.p>
        <motion.div variants={item} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="button" to="/seguridad-vial">Seguridad Vial <HiArrowRight size={18} /></Link>
          <Link className="button button-light" to="/desarrollo-y-fabricacion">Desarrollo y Fabricación <HiArrowRight size={18} /></Link>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="eyebrow text-slate-300">{reducedMotion ? "IDEA Ingeniería" : scene.label}</span>
      </div>
    </section>
  );
}
