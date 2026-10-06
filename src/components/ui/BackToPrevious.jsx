import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function BackToPrevious() {
  const navigate = useNavigate();

  function goBack() {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/seguridad-vial");
    }
  }

  return (
    <button type="button" onClick={goBack} className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:border-cyan-300 hover:text-white">
      <HiArrowLeft size={17} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
      Volver
    </button>
  );
}
