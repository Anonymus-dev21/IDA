import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { siteContent } from "../../content/siteContent";

export function Footer() {
  const { company, contact, navigation } = siteContent;
  return (
    <footer className="bg-brand-deep text-slate-300">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <div className="brand-logo"><img src="/assets/brand/idea-logo-white.png" alt="IDEA Ingeniería" /></div>
          <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">{company.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">{company.location}</p>
        </div>
        <div>
          <p className="footer-label">Navegación</p>
          <ul className="mt-4 space-y-3">
            {navigation.map((item) => <li key={item.label}><Link to={item.href} className="footer-link">{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="footer-label">Contacto</p>
          <div className="mt-4 space-y-4 text-sm">
            <a className="footer-link flex items-center gap-3" href={`mailto:${contact.email}`}><HiOutlineMail size={18} />{contact.email}</a>
            <a className="footer-link flex items-center gap-3 cursor-default"><HiOutlinePhone size={18} />{contact.phone}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="page-shell py-5 text-xs text-slate-500">© {new Date().getFullYear()} {company.legalName} Todos los derechos reservados.</div></div>
    </footer>
  );
}
