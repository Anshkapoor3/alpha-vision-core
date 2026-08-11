import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Cloud, Cpu, Database, Headset, ServerCog, Shield, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    copy: "Scalable web, mobile, and enterprise applications tailored to your business objectives.",
    points: ["Web applications", "Mobile apps", "Enterprise software"],
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence Solutions",
    copy: "AI-powered automation, machine learning, predictive analytics, intelligent chatbots, and computer vision solutions.",
    points: ["AI automation", "Machine learning", "Intelligent chatbots"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    copy: "Cloud migration, infrastructure management, DevOps, backup, disaster recovery, and cloud optimization.",
    points: ["Cloud migration", "DevOps", "Disaster recovery"],
  },
  {
    icon: ServerCog,
    title: "Managed IT Services",
    copy: "24/7 monitoring, IT support, infrastructure management, system maintenance, and performance optimization.",
    points: ["24/7 monitoring", "IT support", "Performance optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    copy: "Security assessments, endpoint protection, vulnerability management, compliance, and threat monitoring.",
    points: ["Security assessments", "Endpoint protection", "Threat monitoring"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    copy: "Business intelligence dashboards, reporting, data engineering, analytics, and data-driven decision support.",
    points: ["BI dashboards", "Data engineering", "Analytics"],
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
        className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border elevated p-9 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
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
            eyebrow="Our Services"
            title={
              <>
                Complete technology <span className="text-gradient">solutions</span>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="text-lg leading-relaxed text-muted-foreground lg:pb-4">
              From custom software to AI-powered automation, we deliver end-to-end technology
              solutions that drive efficiency, security, and growth for your business.
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