import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Database,
  Brain,
  Zap,
  ShieldCheck,
  ServerCog,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop";

const capabilities = [
  {
    icon: BarChart3,
    title: "Advanced Data Analytics and Reporting",
    description:
      "Our team of skilled data experts leverages advanced data analytics tools and techniques to provide clients with deep insights into their business performance. We analyze data to identify trends, patterns, and opportunities, and present our findings in visually engaging and easy-to-understand reports.",
    features: [
      "Trend identification & pattern recognition",
      "Custom dashboard & visualization",
      "Automated scheduled reporting",
      "Executive-ready presentations",
    ],
  },
  {
    icon: Database,
    title: "Data Modernization",
    description:
      "We design and build solutions that allow for advanced data visualization, data governance and even AIOps. We work across multiple vendors — such as Microsoft, AWS, Google, IBM, Splunk, Tableau and others — to quickly create and implement a custom data solution that fits the needs of your organization.",
    features: [
      "Multi-vendor platform expertise",
      "Data governance & compliance",
      "AIOps implementation",
      "Custom data architecture",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning Analytics (ML)",
    description:
      "By building and training machine learning models on your enterprise, you'll be enabled to instantly analyze huge amounts of data and predict and proactively respond to emerging customer behavior and demands.",
    features: [
      "Custom ML model development",
      "Predictive analytics at scale",
      "Automated model retraining",
      "Real-time inference pipelines",
    ],
  },
  {
    icon: Zap,
    title: "Artificial Intelligence (AI)",
    description:
      "Your enterprise can harness the power of machine learning to analyze massive amounts of data quickly and accurately. Our technology enables you to anticipate and proactively respond to customer behavior and demands, giving you the edge you need to stay ahead in today's fast-paced business world.",
    features: [
      "AI-driven insights & automation",
      "Natural language processing",
      "Computer vision applications",
      "Generative AI integration",
    ],
  },
];

const benefits = [
  "Reduced downtime through proactive monitoring",
  "Increased efficiency with automated maintenance",
  "Enhanced security with continuous threat detection",
  "Improved productivity via 24/7 expert support",
  "Predictable IT costs with fixed monthly pricing",
  "Strategic IT planning aligned to business goals",
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Wins" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

export function ManagedITServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <MainLayout>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" ref={heroRef} className="relative min-h-[70vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Network operations center monitoring dashboard"
            width={2400}
            height={1600}
            className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
          <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
        </motion.div>

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-32 pb-16 lg:pt-40"
        >
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="eyebrow">What We Do</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Services</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Managed IT Services</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Managed IT", "Services"].map((line, i) => (
              <span key={`${line}-${i}`} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? <span className="text-gradient italic">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Alpha Technologies provides reliable and efficient managed IT services to streamline
              your business operations. From proactive monitoring and maintenance to strategic IT
              planning, our comprehensive solutions ensure your technology infrastructure is robust,
              secure, and aligned with your business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              Get A Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Service Introduction ────────────────────────────── */}
      <section id="intro" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  index="01"
                  eyebrow="Our promise"
                  title={
                    <>
                      Stay Ahead, Stress Less:
                      <br />
                      <span className="text-gradient">Alpha's Managed IT Services</span>
                      <br />
                      for Seamless Operations
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    We understand that managing IT can be complex and time-consuming, which is why
                    we offer a complete suite of services to take care of our clients' IT needs,
                    including monitoring, maintenance, security, and support. Our team of skilled
                    professionals works closely with our clients to understand their business goals
                    and technology requirements. Our customers benefit from reduced downtime,
                    increased efficiency, enhanced security, and improved productivity. Whether it's
                    managing servers and networks, providing technical support, or implementing
                    security measures, our Managed IT Services provide a comprehensive solution that
                    allows our clients to focus on their core business activities.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <MagneticButton href="#contact" className="mt-8 inline-flex">
                    Get A Quote
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </Reveal>
              </div>

              <Reveal delay={0.1}>
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-[2rem] border border-border">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
                      alt="Managed IT services team at work"
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
          </Reveal>
        </div>
      </section>

      {/* ── Core Capabilities ───────────────────────────────── */}
      <section id="capabilities" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="Core capabilities"
            title={
              <>
                Comprehensive <span className="text-gradient">Managed Services</span>
              </>
            }
            lede="Four interconnected capabilities that deliver end-to-end IT operations excellence — from infrastructure monitoring to AI-driven predictive analytics."
            align="center"
          />

          <div className="mt-20 space-y-24">
            {capabilities.map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 0.1}>
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                          <cap.icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-7 text-3xl font-medium tracking-tight">{cap.title}</h3>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                          {cap.description}
                        </p>
                        <ul className="mt-8 space-y-3">
                          {cap.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-cyan)]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        <div
                          className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                          aria-hidden
                        />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border">
                          <img
                            src={`https://images.unsplash.com/photo-${1551288049 + idx * 1000}?q=80&w=1600&auto=format&fit=crop`}
                            alt={`${cap.title} visualization`}
                            loading="lazy"
                            width={1600}
                            height={1067}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:order-2">
                        <div className="relative">
                          <div
                            className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                            aria-hidden
                          />
                          <div className="relative overflow-hidden rounded-[2rem] border border-border">
                            <img
                              src={`https://images.unsplash.com/photo-${1551288049 + idx * 1000}?q=80&w=1600&auto=format&fit=crop`}
                              alt={`${cap.title} visualization`}
                              loading="lazy"
                              width={1600}
                              height={1067}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                          </div>
                        </div>
                      </div>
                      <div className="lg:order-1">
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                          <cap.icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-7 text-3xl font-medium tracking-tight">{cap.title}</h3>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                          {cap.description}
                        </p>
                        <ul className="mt-8 space-y-3">
                          {cap.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-cyan)]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ────────────────────────────────────────── */}
      <section id="benefits" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Why choose Alpha"
            title={
              <>
                Measurable <span className="text-gradient">Benefits</span>
              </>
            }
            lede="Every managed service engagement delivers quantifiable outcomes backed by SLAs and continuous improvement."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.06}>
                <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="text-base leading-relaxed text-foreground">{benefit}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supporting Services ─────────────────────────────── */}
      <section id="supporting" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="04"
            eyebrow="Related expertise"
            title={
              <>
                Supporting <span className="text-gradient">Technology Services</span>
              </>
            }
            lede="Managed IT Services integrates seamlessly with our broader portfolio for complete technology coverage."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Cyber Security",
                desc: "MDR, vulnerability management, identity & access",
                href: "/what-we-do/services/cyber-security",
              },
              {
                icon: ServerCog,
                title: "Cloud Services",
                desc: "Migration, operations, FinOps, platform engineering",
                href: "/what-we-do/services/cloud-services",
              },
              {
                icon: Database,
                title: "Data Services",
                desc: "Lakehouse, governance, BI, MLOps",
                href: "/what-we-do/services/data-services",
              },
              {
                icon: TrendingUp,
                title: "Digital Transformation",
                desc: "Strategy, automation, legacy modernization",
                href: "/what-we-do/services/digital-transformation",
              },
            ].map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.06}>
                <a
                  href={svc.href}
                  className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                    <svc.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-7 text-xl font-medium">{svc.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--brand-cyan)] group-hover:gap-3 transition-all duration-500">
                    <span>Explore</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section id="cta" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
              <div className="absolute inset-0 aurora opacity-70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
              <div className="relative px-8 py-20 text-center lg:px-20 lg:py-28">
                <p className="eyebrow">Ready to begin</p>
                <h2 className="display-section mt-6">
                  Need More <span className="text-gradient">Information?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Ready to take your business to new heights? Alpha IT is here to empower you with
                  cutting-edge solutions and expert guidance. Whether you need website upgrades, IT
                  consulting, or cloud services, we've got you covered. Reach out to us today and
                  let's unlock your true potential together.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Get A Quote
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton
                    href="/what-we-do/services"
                    variant="ghost"
                    className="px-12 py-5 text-base"
                  >
                    View All Services
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Statistics ──────────────────────────────────────── */}
      <section id="stats" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="glass-panel h-full rounded-[1.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                  <div className="font-display text-5xl font-medium tracking-tight text-[var(--brand-cyan)]">
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
