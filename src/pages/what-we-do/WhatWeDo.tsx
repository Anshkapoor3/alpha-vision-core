import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Box, ServerCog, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";

const categoryCards = [
  {
    icon: Building2,
    title: "Industries",
    description:
      "Deep domain expertise across 10 regulated and complex industries. We understand the unique compliance, security, and operational challenges of each sector.",
    count: "10",
    countLabel: "Industries Served",
    href: "/what-we-do/industries",
    stats: [
      { value: 150, suffix: "+", label: "Enterprise Clients" },
      { value: 99.9, suffix: "%", decimals: 1, label: "Client Retention" },
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Box,
    title: "Products & Platforms",
    description:
      "Proprietary platforms built to solve recurring enterprise challenges. From identity management to predictive forecasting, our products accelerate time-to-value.",
    count: "2",
    countLabel: "Platforms",
    href: "/what-we-do/products",
    stats: [
      { value: 50, suffix: "K+", label: "Active Users" },
      { value: 40, suffix: "%", label: "Efficiency Gain" },
    ],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: ServerCog,
    title: "Services",
    description:
      "End-to-end technology services spanning managed IT, cybersecurity, cloud, digital transformation, and custom development. Delivered with enterprise-grade rigor.",
    count: "9",
    countLabel: "Service Lines",
    href: "/what-we-do/services",
    stats: [
      { value: 24, suffix: "/7", label: "Monitoring & Support" },
      { value: 100, suffix: "%", label: "SLA Compliance" },
    ],
    gradient: "from-emerald-600 to-teal-500",
  },
];

const trustIndicators = [
  { label: "20+ Years", value: "Experience" },
  { label: "1000+", value: "Skilled Employees" },
  { label: "6", value: "Countries" },
  { label: "3", value: "Continents" },
];

export function WhatWeDo() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <MainLayout>
      {/* ── Enterprise Hero ─────────────────────────────────── */}
      <section id="top" ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Global technology network visualization"
            width={2400}
            height={1600}
            className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
          <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
        </motion.div>

        <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-40 pb-16">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="eyebrow">What We Do</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>↓</span>
            <span className="text-foreground">Overview</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[16ch]">
            {["Delivering", "technology", "that works."].map((line, i) => (
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
                Alpha IT Managed Services partners with enterprises across regulated industries to deliver
                technology solutions that are secure, compliant, and built to scale. From strategy through
                implementation to managed operations — we own the outcome.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/what-we-do/industries">
                  Explore Industries
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </MagneticButton>
                <MagneticButton href="/what-we-do/services" variant="ghost">
                  View All Services
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
                <Sparkles className="h-4 w-4 text-[var(--brand-cyan)]" />
                Enterprise impact at a glance
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {trustIndicators.map((t) => (
                  <div key={t.label}>
                    <div className="font-display text-4xl font-medium tracking-tight">{t.label}</div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["NMSDC", "MBE", "WBE", "OSD"].map((b) => (
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

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
          <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">SCROLL</span>
          <span className="relative h-14 w-px overflow-hidden bg-border">
            <span className="absolute inset-x-0 h-6 animate-scroll-cue bg-[var(--brand-cyan)]" />
          </span>
        </div>
      </section>

      {/* ── Category Overview ───────────────────────────────── */}
      <section id="categories" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="01"
            eyebrow="Our capabilities"
            title={
              <>
                Three pillars, <span className="text-gradient">one partner</span>
              </>
            }
            lede="Alpha ITMS structures its expertise around three interconnected pillars. Each reinforces the others — industry insight shapes our products, product innovation enhances our services, and service delivery deepens our industry knowledge."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {categoryCards.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <Link
                  to={cat.href}
                  className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{ background: `linear-gradient(135deg, ${cat.gradient.replace("from-", "").replace("to-", "")})` }}
                  />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                    <cat.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-7 flex items-baseline gap-3">
                    <span className="font-display text-3xl font-medium tracking-tight text-[var(--brand-cyan)]">{cat.count}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{cat.countLabel}</span>
                  </div>
                  <h3 className="relative mt-5 text-xl font-medium">{cat.title}</h3>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {cat.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display text-2xl font-medium tracking-tight">
                          <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--brand-cyan)]">
                    <span>Explore {cat.title.toLowerCase()}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Preview ──────────────────────────────── */}
      <section id="industries-preview" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                    alt="Alpha enterprise team collaborating on industry solutions"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                index="02"
                eyebrow="Industries we serve"
                title={
                  <>
                    Ten industries, <span className="text-gradient">deep expertise</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  We bring specialized knowledge to every engagement — understanding not just technology, but the regulatory frameworks,
                  compliance mandates, and operational realities that define your industry.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="/what-we-do/industries">
                    View All Industries
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Preview ────────────────────────────────── */}
      <section id="products-preview" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                index="03"
                eyebrow="Products & platforms"
                title={
                  <>
                    Built for <span className="text-gradient">enterprise scale</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  Our proprietary platforms solve the recurring challenges every enterprise faces — identity governance and predictive planning.
                  Battle-tested across regulated environments, they integrate seamlessly into your existing stack.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="/what-we-do/products">
                    View Products & Platforms
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                    alt="Alpha product dashboard visualization"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services Preview ────────────────────────────────── */}
      <section id="services-preview" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
                    alt="Alpha services team delivering managed IT solutions"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                index="04"
                eyebrow="Our services"
                title={
                  <>
                    Complete <span className="text-gradient">service portfolio</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  From 24/7 managed operations to strategic transformation, our nine service lines cover the full technology lifecycle.
                  Each engagement is backed by certified experts, proven methodologies, and enterprise SLAs.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="/what-we-do/services">
                    View All Services
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call To Action ─────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
              <div className="absolute inset-0 aurora opacity-70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
              <div className="relative px-8 py-20 text-center lg:px-20 lg:py-28">
                <p className="eyebrow">Ready to begin</p>
                <h2 className="display-section mt-6">
                  Need the Right <span className="text-gradient">Technology Partner?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Whether you're modernizing infrastructure, securing your estate, or building custom applications —
                  Alpha ITMS delivers outcomes, not just outputs.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Start a Conversation
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton href="/what-we-do/industries" variant="ghost" className="px-12 py-5 text-base">
                    Explore What We Do
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Child Routes Outlet ─────────────────────────────── */}
      <Outlet />
    </MainLayout>
  );
}