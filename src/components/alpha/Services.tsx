import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Cloud, Database, Cpu, ShieldHalf, Workflow, Headset } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Platform Engineering",
    copy: "Landing zones, migrations and FinOps discipline on AWS and Azure — built once, governed forever.",
    points: ["Landing zone design", "Migration factory", "Cost engineering"],
  },
  {
    icon: Database,
    title: "Data Foundations",
    copy: "Snowflake and Databricks estates that make one number mean one thing across the entire business.",
    points: ["Lakehouse architecture", "Governance", "Real-time pipelines"],
  },
  {
    icon: Cpu,
    title: "Applied AI & Agents",
    copy: "RAG systems, evaluation harnesses and agentic workflows deployed inside your compliance perimeter.",
    points: ["LLM platforms", "Agentic automation", "Model assurance"],
  },
  {
    icon: ShieldHalf,
    title: "Cyber & Compliance",
    copy: "Zero-trust architecture and continuous control monitoring mapped to the frameworks your auditors use.",
    points: ["Zero trust", "SOC operations", "Audit readiness"],
  },
  {
    icon: Workflow,
    title: "Application Modernisation",
    copy: "Legacy estates decomposed into services your teams can ship weekly instead of quarterly.",
    points: ["Domain decomposition", "API layers", "DevSecOps"],
  },
  {
    icon: Headset,
    title: "Managed Operations",
    copy: "A named engineering pod that owns uptime, change and cost against contractual outcomes.",
    points: ["24/7 NOC", "SRE practice", "Outcome SLAs"],
  },
];

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ rx: (0.5 - py) * 8, ry: (px - 0.5) * 8, mx: px * 100, my: py * 100 });
  };

  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0, mx: 50, my: 50 })}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformPerspective: 1000 }}
        className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-9 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${tilt.mx}% ${tilt.my}%, color-mix(in oklab, var(--brand-light) 22%, transparent), transparent 65%)`,
          }}
        />
        <div className="relative">{children}</div>
      </motion.div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="Capabilities"
            title={
              <>
                Six disciplines.
                <br />
                <span className="text-gradient">One accountable partner.</span>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="text-lg leading-relaxed text-muted-foreground lg:pb-4">
              Most vendors sell you a resource. Alpha signs up to a result. Each capability below runs against
              contractual outcomes — availability, cost, velocity, risk — reviewed with your board every quarter.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <TiltCard key={s.title} index={i}>
              <s.icon className="h-7 w-7 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="mt-8 text-2xl font-medium">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              <ul className="mt-8 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
                    <span className="h-px w-4 bg-[var(--brand-light)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
