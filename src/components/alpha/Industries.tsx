import { useState } from "react";
import { motion } from "motion/react";
import {
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
  Landmark,
  Truck,
  Building2,
  Rocket,
  Hotel,
  Briefcase,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const industries = [
  { icon: HeartPulse, name: "Healthcare", note: "HIPAA-compliant platforms for clinical and operational excellence." },
  { icon: GraduationCap, name: "Education", note: "Digital learning platforms that enhance student outcomes." },
  { icon: Factory, name: "Manufacturing", note: "Smart factory solutions that optimize production and supply chains." },
  { icon: ShoppingBag, name: "Retail & E-commerce", note: "Omnichannel solutions that unify commerce and customer experience." },
  { icon: Landmark, name: "Banking & Finance", note: "Secure platforms for banking, payments, and financial operations." },
  { icon: Truck, name: "Logistics & Transportation", note: "Real-time tracking and route optimization for modern logistics." },
  { icon: Building2, name: "Government", note: "Secure, compliant solutions for public sector operations." },
  { icon: Rocket, name: "Startups & SMEs", note: "Scalable technology that helps startups launch and grow faster." },
  { icon: Hotel, name: "Hospitality", note: "Guest-centric digital experiences that elevate hospitality operations." },
  { icon: Briefcase, name: "Professional Services", note: "Technology that streamlines client service and business operations." },
];

export function Industries() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="04"
          eyebrow="Industries We Serve"
          title={
            <>
              Ten industries, <span className="text-gradient">one standard</span>
            </>
          }
          lede="Alpha ITMS brings deep domain expertise across ten industries, delivering tailored technology solutions that address the unique challenges of each sector."
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