import { useState } from "react";
import { motion } from "motion/react";
import {
  HeartPulse,
  Landmark,
  Umbrella,
  ShoppingBag,
  Building2,
  Factory,
  GraduationCap,
  RadioTower,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const industries = [
  { icon: HeartPulse, name: "Healthcare", note: "HIPAA-grade platforms for clinical data at scale." },
  { icon: Landmark, name: "Finance", note: "Sub-second risk systems under continuous audit." },
  { icon: Umbrella, name: "Insurance", note: "Claims automation that survives regulator scrutiny." },
  { icon: ShoppingBag, name: "Retail", note: "Demand signals unified across channel and store." },
  { icon: Building2, name: "Government", note: "Sovereign cloud with accredited control baselines." },
  { icon: Factory, name: "Manufacturing", note: "OT and IT convergence on the plant floor." },
  { icon: GraduationCap, name: "Education", note: "Student platforms built for enrolment surges." },
  { icon: RadioTower, name: "Telecom", note: "Network data lakes feeding real-time assurance." },
];

export function Industries() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="04"
          eyebrow="Industry expertise"
          title={
            <>
              Regulated sectors, <span className="text-gradient">no learning curve</span>
            </>
          }
          lede="We arrive fluent in your controls, your auditors and your failure modes. That is the difference between a consultancy and an operator."
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05} className="bg-background">
              <motion.div
                onHoverStart={() => setActive(i)}
                onHoverEnd={() => setActive(null)}
                className="group relative h-full overflow-hidden p-10"
              >
                <motion.div
                  aria-hidden
                  className="absolute inset-0 [background:var(--gradient-brand)] opacity-0"
                  animate={{ opacity: active === i ? 0.14 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="relative">
                  <ind.icon className="h-6 w-6 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1" />
                  <h3 className="mt-10 text-xl font-medium">{ind.name}</h3>
                  <motion.p
                    initial={false}
                    animate={{ opacity: active === i ? 1 : 0.55, y: active === i ? 0 : 6 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {ind.note}
                  </motion.p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
