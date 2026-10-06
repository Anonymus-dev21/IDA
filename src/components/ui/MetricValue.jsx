import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function MetricValue({ metric, className }) {
  const node = useRef(null);
  const inView = useInView(node, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(reducedMotion ? metric.value : 0);

  useEffect(() => {
    if (reducedMotion) {
      setValue(metric.value);
      return undefined;
    }
    if (!inView) return undefined;

    const controls = animate(0, metric.value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, metric.value, reducedMotion]);

  return <strong ref={node} className={className}>{metric.prefix}{value.toLocaleString("es-AR")}</strong>;
}
