import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";
import { Contact } from "@/components/alpha/Contact";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Compass,
  Eye,
  Gem,
  Globe2,
  Handshake,
  Lightbulb,
  LineChart,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop";
const philosophyImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";
const innovationImage =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop";

const leadershipStats = [
  { value: 340, prefix: "", suffix: "+", label: "Enterprise programs delivered" },
  { value: 27, prefix: "", suffix: "", label: "Countries operated in" },
  { value: 99.98, prefix: "", suffix: "%", decimals: 2, label: "Platform availability" },
];

const leadershipBadges = ["ISO 27001", "SOC 2 Type II", "AWS Advanced", "Azure Expert MSP"];

const leadershipValues = [
  "OWNERSHIP",
  "RIGOUR",
  "TRANSPARENCY",
  "EXCELLENCE",
  "INNOVATION",
  "INTEGRITY",
];

const principles = [
  {
    icon: Target,
    title: "Own the outcome",
    description:
      "Leadership at Alpha is measured by results, not activity. Every executive owns a number, a client, and an outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Protect the trust",
    description:
      "Regulated industries run on trust. Our leaders protect it with uncompromising security, compliance, and transparency.",
  },
  {
    icon: Users,
    title: "Grow the people",
    description:
      "We build leaders at every level. The strength of Alpha is the depth of the bench, not the height of the title.",
  },
  {
    icon: Compass,
    title: "Decide with data",
    description:
      "Every strategic decision is grounded in evidence. We measure what matters and act on what the data reveals.",
  },
  {
    icon: Globe2,
    title: "Think globally",
    description:
      "Our leaders operate across 27 countries with one standard of excellence, one culture, and one way of working.",
  },
  {
    icon: Eye,
    title: "See around corners",
    description:
      "We anticipate what is next for our clients — regulation, technology, and market shifts — before they arrive.",
  },
];

const innovationPillars = [
  {
    icon: BrainCircuit,
    title: "Applied AI",
    description:
      "Production AI systems that reduce cost, accelerate decisions, and create measurable advantage for regulated enterprises.",
  },
  {
    icon: Lightbulb,
    title: "Continuous R&D",
    description:
      "A dedicated innovation practice that prototypes, validates, and industrialises new capabilities every quarter.",
  },
  {
    icon: LineChart,
    title: "Outcome engineering",
    description:
      "Innovation is measured in business terms — cost avoided, revenue protected, and risk reduced.",
  },
];

const excellencePillars = [
  {
    icon: Award,
    title: "Certified excellence",
    description:
      "ISO 27001, SOC 2 Type II, and AWS Advanced partner status — independently verified, continuously audited.",
  },
  {
    icon: Gem,
    title: "Premium delivery",
    description:
      "A single global delivery standard across four 24/7 hubs, so every engagement meets the same exacting bar.",
  },
  {
    icon: Handshake,
    title: "Client partnership",
    description:
      "Multi-year partnerships with enterprises that trust Alpha with their most critical systems.",
  },
];

const excellenceMetrics = [
  { value: 99.98, prefix: "", suffix: "%", decimals: 2, label: "Platform availability" },
  { value: 4, prefix: "", suffix: "", label: "24/7 operations hubs" },
  { value: 11, prefix: "", suffix: "", label: "Regulated industries" },
  { value: 1.8, prefix: "$", suffix: "B", decimals: 1, label: "Client cost avoided" },
];

export function Leadership() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <MainLayout>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="top" ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Alpha executive leadership team in strategic discussion"
            width={2400}
            height={1600}
            className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
          <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
        </motion.div>

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-40 pb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Leadership · Executive Team · Enterprise Operations
          </motion.p>

          <h1 className="display-hero mt-8 max-w-[16ch]">
            {["Leadership that", "owns the", "outcome."].map((line, i) => (
              <span key={`${line}-${i}`} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 2 ? <span className="text-gradient italic">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Alpha is led by operators who have run the systems, signed the audits, and
                answered to the board. Our executive team brings decades of enterprise
                technology leadership to every engagement — with one standard of excellence
                across 27 countries.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="#principles">
                  Our leadership principles
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </MagneticButton>
                <MagneticButton href="#innovation" variant="ghost">
                  Innovation & excellence
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel grain animate-float rounded-[2rem] p-8"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-cyan)]" />
                Leadership at a glance
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {leadershipStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl font-medium tracking-tight">
                      <Counter
                        to={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        decimals={s.decimals ?? 0}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {leadershipBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.14em] text-muted-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative z-10 mx-auto w-[min(1400px,92vw)]">
          <div className="hairline" />
          <div className="group flex overflow-hidden py-6">
            <div className="flex shrink-0 animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused]">
              {[...leadershipValues, ...leadershipValues].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="whitespace-nowrap font-display text-sm tracking-[0.3em] text-muted-foreground/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
          <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">SCROLL</span>
          <span className="relative h-14 w-px overflow-hidden bg-border">
            <span className="absolute inset-x-0 h-6 animate-scroll-cue bg-[var(--brand-cyan)]" />
          </span>
        </div>
      </section>

      {/* ── Leadership Philosophy ────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="01"
            eyebrow="Leadership philosophy"
            title={
              <>
                Lead with <span className="text-gradient">ownership.</span>
                <br />
                Deliver with rigour.
              </>
            }
            lede="Our philosophy is simple: the best leaders take responsibility for the outcome, not just the activity. At Alpha, every executive operates with the same discipline we demand of our engineers — evidence over opinion, ownership over blame, and excellence over adequacy."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-border">
                <img
                  src={philosophyImage}
                  alt="Alpha leadership team collaborating on enterprise strategy"
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p className="max-w-md text-sm leading-relaxed text-foreground/90">
                    "The standard we walk past is the standard we accept. Alpha leaders set the
                    bar, then raise it."
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-6">
              {[
                {
                  title: "Evidence over opinion",
                  description:
                    "Every strategic decision at Alpha is grounded in data, measurement, and independent verification.",
                },
                {
                  title: "Ownership over blame",
                  description:
                    "When something goes wrong, our leaders ask what they could have done differently — not who to point at.",
                },
                {
                  title: "Excellence over adequacy",
                  description:
                    "Good enough is never enough for regulated industries. Our leaders hold the line on quality, always.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="glass-panel rounded-[1.5rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Principles ────────────────────────────── */}
      <section id="principles" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="Leadership principles"
            title={
              <>
                Six principles.
                <br />
                <span className="text-gradient">One standard.</span>
              </>
            }
            lede="The principles that guide every Alpha leader — from the boardroom to the delivery room. They are not aspirational. They are operational."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={(i % 3) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-7 text-xl font-medium">{p.title}</h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Innovation & Business Excellence ─────────────────── */}
      <section id="innovation" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Innovation & business excellence"
            title={
              <>
                Innovation with <span className="text-gradient">intent.</span>
                <br />
                Excellence without compromise.
              </>
            }
            lede="We do not innovate for its own sake. Every new capability must earn its place by reducing cost, protecting revenue, or lowering risk — delivered to a single global standard of excellence."
          />

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              {innovationPillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.1}>
                    <div className="group flex gap-6 rounded-[1.5rem] border border-border bg-background/60 p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)] hover:shadow-[var(--shadow-glow)]">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-medium">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src={innovationImage}
                    alt="Alpha innovation lab with advanced technology"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="glass-panel rounded-[1.5rem] p-6">
                      <div className="font-display text-4xl font-medium">
                        <Counter to={120} suffix="+" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        Innovation initiatives delivered for enterprise clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-6 lg:grid-cols-3">
            {excellencePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_10%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_20%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-7 text-xl font-medium">{p.title}</h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {excellenceMetrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.08} className="bg-background">
                  <div className="p-8 transition-colors duration-500 hover:bg-secondary">
                    <div className="font-display text-4xl font-medium">
                      <Counter
                        to={m.value}
                        prefix={m.prefix}
                        suffix={m.suffix}
                        decimals={m.decimals ?? 0}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Call To Action ───────────────────────────────────── */}
      <Contact />
    </MainLayout>
  );
}