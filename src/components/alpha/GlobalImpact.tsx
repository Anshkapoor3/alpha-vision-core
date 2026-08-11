import { motion } from "motion/react";
import mapImage from "@/assets/case-data.jpg";
import { SectionHeading } from "./SectionHeading";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const nodes = [
  { name: "New York", top: "34%", left: "26%" },
  { name: "London", top: "27%", left: "47%" },
  { name: "Dubai", top: "44%", left: "60%" },
  { name: "Bengaluru", top: "51%", left: "68%" },
  { name: "Singapore", top: "58%", left: "76%" },
  { name: "Sydney", top: "76%", left: "86%" },
  { name: "São Paulo", top: "70%", left: "35%" },
];

const metrics = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Service Availability" },
  { value: 24, suffix: "×7", label: "Technical Support" },
];

export function GlobalImpact() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="01"
          eyebrow="About Alpha ITMS"
          title={
            <>
              Technology Solutions That Drive <span className="text-gradient">Business Growth</span>
            </>
          }
          lede="Alpha ITMS is a technology-driven company specializing in custom software development, artificial intelligence, cloud computing, cybersecurity, managed IT services, and digital transformation. Our mission is to help organizations leverage technology to improve efficiency, enhance security, automate operations, and accelerate growth."
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <img
                src={mapImage}
                alt="Illustrated network map of Alpha delivery locations"
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
              {nodes.map((n, i) => (
                <motion.div
                  key={n.name}
                  className="absolute"
                  style={{ top: n.top, left: n.left }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-cyan)] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-cyan)]" />
                  </span>
                  <span className="mt-2 hidden whitespace-nowrap text-[0.6rem] tracking-[0.2em] text-foreground/80 sm:block">
                    {n.name.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="bg-background">
                <div className="p-8 transition-colors duration-500 hover:bg-secondary">
                  <div className="font-display text-4xl font-medium">
                    <Counter to={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
