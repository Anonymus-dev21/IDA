import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { siteContent } from "../../content/siteContent";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navClass = scrolled || isOpen ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur" : "border-slate-200/60 bg-white/95 backdrop-blur";
  const isActive = (href) => href === "/" ? location.pathname === "/" : location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${navClass}`}>
      <nav className="page-shell flex h-[72px] items-center justify-between" aria-label="Navegación principal">
        <Link to="/" aria-label="IDEA, inicio" className="brand-logo shrink-0">
          <img src="/assets/brand/idea-logo-color.png" alt="IDEA Ingeniería" />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => <Link className={item.href === "/contacto" ? `button button-small ${isActive(item.href) ? "button-active" : ""}` : `nav-link ${isActive(item.href) ? "nav-link-active" : ""}`} aria-current={isActive(item.href) ? "page" : undefined} key={item.label} to={item.href}>{item.label}</Link>)}
        </div>
        <button type="button" className="inline-flex rounded-full p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan lg:hidden" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-controls="mobile-navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX size={27} /> : <HiMenuAlt3 size={27} />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
            <div className="page-shell flex flex-col gap-1 py-5">
              {siteContent.navigation.map((item) => <Link className={`rounded-md px-3 py-3 text-base font-medium ${isActive(item.href) ? "bg-cyan-100 text-brand-dark" : "text-ink hover:bg-slate-50"}`} aria-current={isActive(item.href) ? "page" : undefined} key={item.label} to={item.href}>{item.label}</Link>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!reduceMotion && <motion.div aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand-cyan" style={{ scaleX }} />}
    </header>
  );
}
