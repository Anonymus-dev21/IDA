export function HomologationStamp({ compact = false }) {
  return (
    <div className={`homologation-stamp ${compact ? "homologation-stamp-compact" : ""}`} role="img" aria-label="Homologado, Resolución 753/98">
      <strong className="homologation-stamp-word" aria-hidden="true">HOMOLOGADO</strong>
      <span className="homologation-stamp-resolution" aria-hidden="true">Resolución 753/98</span>
    </div>
  );
}
