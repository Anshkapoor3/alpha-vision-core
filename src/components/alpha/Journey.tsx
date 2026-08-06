import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const phases = [
  {
    step: "Phase 01",
    title: "Diagnose",
    copy: "Six weeks inside your estate. We map spend, risk, dependency and velocity, then quantify what standing still costs you.",
    marker: "Week 0–6",
  },
  {
    step: "Phase 02",
    title: "Architect",
    copy: "A target architecture your CFO can read and your engineers can build. Every decision carries a business case.",
    marker: "Week 6–12",
  },
  {
    step: "Phase 03",
    title: "Migrate",
    copy: "Wave-based execution from a dedicated factory. Cutovers rehearsed, rollback proven, zero unplanned downtime.",
    marker: "Month 3–9",
  },
  {
    step: "Phase 04",
    title: "Operate",
    copy: "A named pod assumes ownership under outcome SLAs. Uptime, cost and change velocity become our problem.",
    marker: "Month 9+",
  },
  {
    step: "Phase 05",
    title: "Compound",
    copy: "Automation and AI applied to the operating baseline — each quarter costs less and moves faster than the last.",
    marker: "Ongoing",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-64%"]);
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-[color-mix(in_oklab,var(--navy)_60%,var(--navy-deep))]">
      <div ref={ref} className="relative h-[420vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-[min(1400px,92vw)]">
            <SectionHeading
              index="03"
              eyebrow="Digital transformation journey"
              title={
                <>
                  How an estate becomes <span className="text-gradient">an advantage</span>
                </>
              }
            />
            <div className="relative mt-10 h-px w-full bg-border">
              <motion.div style={{ width: line }} className="absolute inset-y-0 left-0 bg-[var(--brand-cyan)]" />
            </div>
          </div>

          <motion.div style={{ x }} className="mt-14 flex gap-8 pl-[4vw]">
            {phases.map((p, i) => (
              <article
                key={p.title}
                className="group relative w-[min(78vw,430px)] shrink-0 rounded-[1.75rem] border border-border elevated p-10 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{p.step}</span>
                  <span className="text-xs text-muted-foreground">{p.marker}</span>
                </div>
                <div className="mt-10 font-display text-[5rem] font-medium leading-none text-[color-mix(in_oklab,var(--brand-light)_22%,transparent)] transition-colors duration-700 group-hover:text-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-3xl font-medium">{p.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
