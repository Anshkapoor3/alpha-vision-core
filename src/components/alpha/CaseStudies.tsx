import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import caseData from "@/assets/case-data.jpg";
import caseSecure from "@/assets/case-secure.jpg";
import caseAi from "@/assets/case-ai.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const cases = [
  {
    image: caseData,
    sector: "Banking & Finance",
    title: "AI-powered analytics for a financial institution",
    challenge: "A financial institution needed to transform raw data into actionable insights for faster, smarter decision-making.",
    solution: "Alpha delivered a data & analytics platform with business intelligence dashboards, data engineering, and AI-driven insights.",
    metrics: [
      { k: "Decision speed", v: "5x" },
      { k: "Data accuracy", v: "99%" },
      { k: "ROI", v: "+40%" },
    ],
  },
  {
    image: caseSecure,
    sector: "Healthcare",
    title: "Enterprise cybersecurity for a hospital network",
    challenge: "A multi-site hospital network required enterprise-grade security to protect patient data and ensure compliance.",
    solution: "Alpha implemented comprehensive cybersecurity with security assessments, endpoint protection, and 24/7 threat monitoring.",
    metrics: [
      { k: "Uptime", v: "99.9%" },
      { k: "Threats blocked", v: "10K+" },
      { k: "Compliance", v: "HIPAA" },
    ],
  },
  {
    image: caseAi,
    sector: "Retail & E-commerce",
    title: "Custom software for a global retailer",
    challenge: "A global retailer needed a scalable e-commerce platform to handle growing demand and improve customer experience.",
    solution: "Alpha built a custom software solution with seamless integration, cloud infrastructure, and performance optimization.",
    metrics: [
      { k: "Conversion", v: "+35%" },
      { k: "Load time", v: "-60%" },
      { k: "Scalability", v: "10x" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="06"
          eyebrow="Selected work"
          title={
            <>
              Results that <span className="text-gradient">speak for themselves</span>
            </>
          }
        />

        <div className="mt-24 space-y-32">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`grid gap-14 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <Reveal className="relative lg:[direction:ltr]">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[2rem] border border-border"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-[clamp(320px,42vw,540px)] w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,color-mix(in_oklab,var(--navy-deep)_85%,transparent))]" />
                  <span className="absolute left-7 top-7 rounded-full border border-border bg-[color-mix(in_oklab,var(--navy-deep)_65%,transparent)] px-4 py-2 text-[0.65rem] tracking-[0.2em] backdrop-blur-md">
                    {c.sector.toUpperCase()}
                  </span>
                </motion.div>
              </Reveal>

              <div className="lg:[direction:ltr]">
                <Reveal delay={0.1}>
                  <h3 className="text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.05]">{c.title}</h3>
                </Reveal>
                <Reveal delay={0.16}>
                  <div className="mt-10 space-y-7">
                    <div>
                      <p className="eyebrow">Challenge</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="eyebrow">What we built</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.22}>
                  <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                    {c.metrics.map((m) => (
                      <div key={m.k} className="bg-background p-6">
                        <div className="font-display text-2xl font-medium text-[var(--brand-cyan)]">{m.v}</div>
                        <p className="mt-2 text-[0.7rem] leading-snug text-muted-foreground">{m.k}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.28}>
                  <a
                    href="#contact"
                    className="group mt-9 inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-[var(--brand-cyan)]"
                  >
                    Request the full case record
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
