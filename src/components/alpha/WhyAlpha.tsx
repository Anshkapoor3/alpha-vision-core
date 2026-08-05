import { Check, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const rows = [
  { label: "Commercial model", alpha: "Outcome-based SLAs", others: "Time and materials" },
  { label: "Team continuity", alpha: "Named pod, multi-year", others: "Rotating bench staff" },
  { label: "Cost trajectory", alpha: "Declines year over year", others: "Grows with headcount" },
  { label: "Regulatory posture", alpha: "Evidence generated continuously", others: "Assembled before audit" },
  { label: "AI adoption", alpha: "Governed, in your tenancy", others: "Pilots that never ship" },
];

const counters = [
  { value: 18, suffix: "", label: "Years operating enterprise estates" },
  { value: 640, suffix: "+", label: "Engineers and architects" },
  { value: 31, suffix: "", label: "Industry and partner awards" },
  { value: 96, suffix: "%", label: "Client retention beyond year three" },
];

export function WhyAlpha() {
  return (
    <section className="relative border-y border-border bg-[color-mix(in_oklab,var(--navy)_55%,var(--navy-deep))] py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="07"
          eyebrow="Why Alpha"
          title={
            <>
              The difference shows up <span className="text-gradient">in year three</span>
            </>
          }
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border px-8 py-5 text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                <span />
                <span className="text-[var(--brand-cyan)]">ALPHA</span>
                <span>TYPICAL VENDOR</span>
              </div>
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[1.2fr_1fr_1fr] items-start gap-4 border-b border-border px-8 py-7 text-sm transition-colors duration-500 last:border-b-0 hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)]"
                >
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-cyan)]" />
                    {r.alpha}
                  </span>
                  <span className="flex items-start gap-2 text-muted-foreground">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                    {r.others}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {counters.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="glass-panel h-full rounded-[1.5rem] p-8">
                  <div className="font-display text-5xl font-medium">
                    <Counter to={c.value} suffix={c.suffix} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
