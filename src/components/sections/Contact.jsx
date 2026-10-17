import { HiOutlineMail, HiOutlinePhone, HiOutlineDeviceMobile } from "react-icons/hi";
import { siteContent } from "../../content/siteContent";
import { AnimatedSection } from "../ui/AnimatedSection";

export function Contact({ standalone = false }) {
  const { contact, company } = siteContent;
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="contacto" className="section-space bg-surface" aria-labelledby="contact-title">
      <div className="page-shell">
        <AnimatedSection className="relative overflow-hidden rounded-[1.75rem] bg-brand-deep px-7 py-10 sm:px-12 sm:py-14">
          <div className="circuit-pattern absolute inset-0 opacity-30" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div><p className="eyebrow text-cyan-300">Contacto</p><Heading id="contact-title" className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">¿Tiene un proyecto en mente?</Heading><p className="mt-5 max-w-xl leading-7 text-slate-300">Si necesita desarrollar un equipo, integrar un sistema o conocer más sobre nuestros productos y servicios, contáctese con nosotros por cualquiera de nuestros medios.</p></div>
            <address className="not-italic">
              <a className="contact-link" href={`mailto:${contact.email}`}><HiOutlineMail size={22} /><span><small>Correo corporativo</small>{contact.email}</span></a>
              <a className="contact-link mt-5" ><HiOutlinePhone size={22} /><span><small>Teléfono</small>{contact.phone}</span></a>
              <a className="contact-link mt-5" ><HiOutlineDeviceMobile size={22} /><span><small>Celular</small>{contact.mobile}</span></a>
              <p className="mt-7 text-sm text-slate-400">{company.location}</p>
            </address>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
