export function SectionIntro({ eyebrow, title, text, light = false, titleId }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-cyan-300" : "text-brand-blue"}`}>{eyebrow}</p>
      <h2 id={titleId} className={`mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-5 max-w-2xl text-lg leading-8 ${light ? "text-slate-300" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
