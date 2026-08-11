import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const reasons = [
  "Experienced Technology Experts",
  "Tailored Business Solutions",
  "Enterprise Security Standards",
  "AI-Driven Innovation",
  "Scalable Cloud Infrastructure",
  "24×7 Technical Support",
  "Proven Delivery Methodology",
  "Customer-Centric Approach",
];

const counters = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Service Availability" },
  { value: 24, suffix: "×7", label: "Technical Support" },
];

export function WhyAlpha() {
  return (
    <section className="relative border-y border-border bg-[color-mix(in_oklab,var(--navy)_55%,var(--navy-deep))] py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="07"
          eyebrow="Why Choose Alpha ITMS"
          title={
            <>
              The partner that <span className="text-gradient">delivers</span>
            </>
          }
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-3 bg-background p-7 transition-colors duration-500 hover:bg-secondary"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-cyan)]" />
                  <span className="text-sm">{r}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {counters.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="glass-panel h-full rounded-[1.5rem] p-8">
                  <div className="font-display text-5xl font-medium">
                    <Counter to={c.value} suffix={c.suffix} decimals={c.decimals ?? 0} />
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