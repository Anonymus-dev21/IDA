import "./index.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Development } from "./pages/Development";
import { Home } from "./pages/Home";
import { DopplerS, Lpr } from "./pages/RoadProduct";
import { RoadSafety } from "./pages/RoadSafety";
import { Sentinel24 } from "./pages/Sentinel24";
import { NotFound } from "./pages/NotFound";

const pageMeta = {
  "/": {
    title: "IDEA Ingeniería | Ingeniería electrónica y control vial",
    description: "IDEA Ingeniería S.R.L. desarrolla equipos electrónicos, soluciones de seguridad vial y proyectos de fabricación en Santa Fe, Argentina.",
  },
  "/seguridad-vial": {
    title: "Seguridad y Control Vial | IDEA Ingeniería",
    description: "Conozca las soluciones de IDEA para seguridad vial: Sentinel 24, Sentinel Doppler-S, LPR, instalación, mantenimiento y postventa.",
  },
  "/seguridad-vial/sentinel-24": {
    title: "Sentinel 24 | IDEA Ingeniería",
    description: "Sentinel 24 es un cinemómetro multicarril con detección por espiras inductivas y homologación nacional conforme a la Resolución 753/98.",
  },
  "/seguridad-vial/sentinel-doppler-s": {
    title: "Sentinel Doppler-S | IDEA Ingeniería",
    description: "Conozca Sentinel Doppler-S, desarrollado para registrar cruces con luz roja e invasión de senda peatonal.",
  },
  "/seguridad-vial/lpr": {
    title: "LPR, lectura de patentes | IDEA Ingeniería",
    description: "Software de lectura de patentes desarrollado por IDEA, con reportes, alertas y adaptación a centros de monitoreo.",
  },
  "/desarrollo-y-fabricacion": {
    title: "Desarrollo y Fabricación Electrónica | IDEA Ingeniería",
    description: "Diseño electrónico, firmware, PCB, prototipado, fabricación e integración para proyectos específicos.",
  },
  "/nosotros": {
    title: "Nosotros | IDEA Ingeniería",
    description: "Conozca a IDEA Ingeniería S.R.L., su experiencia, forma de trabajo y equipo de profesionales.",
  },
  "/contacto": {
    title: "Contacto | IDEA Ingeniería",
    description: "Comuníquese con IDEA Ingeniería para consultar por proyectos de electrónica, seguridad vial y productos.",
  },
  notFound: {
    title: "Página no encontrada | IDEA Ingeniería",
    description: "La dirección que busca no está disponible. Vuelva al inicio o explore las soluciones de IDEA Ingeniería.",
  },
};

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta.notFound;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
  }, [pathname]);

  return null;
}

function RouteScrollManager() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const samePage = previousPathname.current === pathname;
    previousPathname.current = pathname;
    if (pathname === "/" && hash === "#equipo") {
      navigate("/nosotros#equipo", { replace: true });
      return;
    }
    if (hash) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: samePage && !reducedMotion ? "smooth" : "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [hash, pathname, navigate]);

  return null;
}

function AppShell() {
  return (
    <>
      <RouteMeta />
      <RouteScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seguridad-vial" element={<RoadSafety />} />
        <Route path="/seguridad-vial/sentinel-24" element={<Sentinel24 />} />
        <Route path="/seguridad-vial/sentinel-doppler-s" element={<DopplerS />} />
        <Route path="/seguridad-vial/lpr" element={<Lpr />} />
        <Route path="/desarrollo-y-fabricacion" element={<Development />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/productos" element={<Navigate replace to="/seguridad-vial" />} />
        <Route path="/productos/sentinel-24" element={<Navigate replace to="/seguridad-vial/sentinel-24" />} />
        <Route path="/productsDetail/:id" element={<Navigate replace to="/seguridad-vial/sentinel-24" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return <BrowserRouter><AppShell /></BrowserRouter>;
}

export default App;
