import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({ children, href, variant = "solid", className, onClick, type = "button" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-500";

  const styles =
    variant === "solid"
      ? "text-primary-foreground [background:var(--gradient-brand)] shadow-[var(--shadow-glow)]"
      : "glass-panel text-foreground hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]";

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      <span className="absolute inset-0 z-0 translate-y-full bg-[color-mix(in_oklab,var(--brand-cyan)_28%,transparent)] transition-transform duration-600 ease-[var(--ease-lux)] group-hover:translate-y-0" />
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={cn(base, styles, className)}>
          {inner}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={cn(base, styles, className)}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
