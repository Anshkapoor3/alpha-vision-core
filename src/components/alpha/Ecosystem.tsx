import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const rings = [
  { radius: 78, duration: 44, items: ["AWS", "Azure", "Google Cloud", "Docker"] },
  { radius: 128, duration: 62, items: ["Python", "Java", ".NET", "React", "Angular"] },
  { radius: 180, duration: 84, items: ["AI & ML", "Node.js", "Flutter", "Kubernetes", "SQL", "NoSQL"] },
];

const groups = [
  { title: "Artificial Intelligence", items: ["AI & Machine Learning", "Predictive Analytics", "Intelligent Chatbots", "Computer Vision"] },
  { title: "Languages", items: ["Python", "Java", ".NET", "Node.js"] },
  { title: "Frontend", items: ["React", "Angular", "Flutter"] },
  { title: "Cloud & Infrastructure", items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"] },
  { title: "Data", items: ["SQL Databases", "NoSQL Databases", "Data Engineering", "Analytics"] },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-32 lg:py-44">
      <div className="absolute inset-0 aurora opacity-40" aria-hidden />
      <div className="relative mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="05"
          eyebrow="Technology Stack"
          title={
            <>
              Built on the <span className="text-gradient">best technology</span>
            </>
          }
          lede="We leverage industry-leading technologies across AI, cloud, and software development to deliver secure, scalable, and high-performance solutions."
          align="center"
        />

        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal className="relative mx-auto aspect-square w-full max-w-[520px] scale-[0.72] sm:scale-90 lg:scale-100">
            <div className="absolute inset-0 grid place-items-center">
              <div className="glass-panel grid h-28 w-28 place-items-center rounded-full text-center">
                <span className="font-display text-sm tracking-[0.2em]">ALPHA</span>
              </div>
            </div>
            {rings.map((ring) => (
              <div
                key={ring.radius}
                className="absolute inset-0 grid place-items-center"
                style={{ animation: `alpha-orbit ${ring.duration}s linear infinite` }}
              >
                <div
                  className="rounded-full border border-border"
                  style={{ width: ring.radius * 2, height: ring.radius * 2 }}
                />
                {ring.items.map((item, i) => {
                  const angle = (i / ring.items.length) * Math.PI * 2;
                  return (
                    <div
                      key={item}
                      className="absolute"
                      style={{
                        transform: `translate(${(Math.cos(angle) * ring.radius).toFixed(2)}px, ${(Math.sin(angle) * ring.radius).toFixed(2)}px)`,
                      }}
                    >
                      <span
                        className="glass-panel block whitespace-nowrap rounded-full px-3 py-1.5 text-[0.6rem] tracking-[0.14em] text-foreground/85"
                        style={{ animation: `alpha-orbit ${ring.duration}s linear infinite reverse` }}
                      >
                        {item.toUpperCase()}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--brand-light) 30%, transparent), transparent 70%)",
              }}
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-border elevated p-8 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <h3 className="eyebrow">{g.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="text-sm text-muted-foreground">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
