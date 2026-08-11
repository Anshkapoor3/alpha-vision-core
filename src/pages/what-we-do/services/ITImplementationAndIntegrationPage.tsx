import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Cable,
  ServerCog,
  Database,
  Layers,
  CheckCircle2,
  TrendingUp,
  Shield,
  RefreshCcw,
  Network,
  Zap,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop";

const implementationCapabilities = [
  {
    icon: ServerCog,
    title: "Solution Deployment & Configuration",
    description:
      "End-to-end deployment of enterprise applications, infrastructure, and platforms. We handle planning, sizing, installation, configuration, and validation across on-premises, cloud, and hybrid environments.",
    features: [
      "ERP/CRM/HCM implementation (SAP, Oracle, Workday, Salesforce, Dynamics)",
      "Infrastructure provisioning & configuration management",
      "Application packaging, staging & release management",
      "Environment promotion & version control",
      "Performance tuning & capacity validation",
      "Documentation & knowledge transfer",
    ],
  },
  {
    icon: Database,
    title: "Data Migration & Modernization",
    description:
      "Secure, validated migration of critical business data with near-zero downtime. Legacy extraction, cleansing, transformation, validation, and load into modern target platforms.",
    features: [
      "Legacy system data extraction & profiling",
      "Data cleansing, deduplication & enrichment",
      "Schema mapping & transformation logic",
      "Parallel run validation & reconciliation",
      "Cutover planning, rehearsal & execution",
      "Post-migration audit & sign-off",
    ],
  },
  {
    icon: Layers,
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing across functional, integration, performance, security, and user acceptance domains. Automated test frameworks with traceability to requirements.",
    features: [
      "Test strategy, planning & case design",
      "Automated regression & CI/CD integration",
      "Performance, load & stress testing",
      "Security scanning & penetration testing",
      "UAT facilitation & defect management",
      "Go/no-go criteria & release readiness",
    ],
  },
];

const integrationCapabilities = [
  {
    icon: Cable,
    title: "Application & API Integration",
    description:
      "Connect disparate systems through modern integration patterns. REST/GraphQL APIs, event-driven architectures, message queues, and enterprise service bus implementations.",
    features: [
      "API design, gateway & developer portal (MuleSoft, Apigee, Azure APIM)",
      "Event-driven architecture (Kafka, Event Grid, SNS/SQS)",
      "iPaaS & middleware (Boomi, Integration Services, Logic Apps)",
      "Legacy system adapters & mainframe connectivity",
      "B2B/EDI integration & partner onboarding",
      "Integration monitoring, alerting & SLA tracking",
    ],
  },
  {
    icon: Network,
    title: "Data & Process Integration",
    description:
      "Unify data flows and business processes across the enterprise. Master data management, real-time synchronization, and workflow orchestration.",
    features: [
      "Master Data Management (MDM) & golden record",
      "Change data capture & real-time replication",
      "Business process orchestration (Camunda, Temporal, Logic Apps)",
      "Data virtualization & federation",
      "Cross-system transaction consistency",
      "Integration governance & lifecycle management",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Cloud & Hybrid Integration",
    description:
      "Seamlessly connect on-premises systems with cloud services. Hybrid identity, network connectivity, and consistent security posture across environments.",
    features: [
      "Hybrid identity & directory synchronization",
      "VPN, ExpressRoute, Direct Connect, Cloud Interconnect",
      "Cross-cloud service mesh & API federation",
      "Data gravity & residency compliance",
      "Disaster recovery & failover orchestration",
      "Unified observability & cost governance",
    ],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Minimized Disruption",
    description: "Phased deployments with rollback plans ensure business continuity",
  },
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Proven methodologies, automated validation, and comprehensive testing",
  },
  {
    icon: Zap,
    title: "Faster Time-to-Value",
    description: "Accelerated delivery through automation, templates, and reusable assets",
  },
  {
    icon: ServerCog,
    title: "Seamless Interoperability",
    description: "Standards-based integration ensures systems work as one",
  },
  {
    icon: Database,
    title: "Data Integrity Guaranteed",
    description: "Validated migrations with reconciliation and audit trails",
  },
  {
    icon: Network,
    title: "Future-Proof Architecture",
    description: "Modular, API-first designs ready for evolving needs",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Plan",
    description:
      "Current state analysis, requirements gathering, architecture design, risk assessment, and detailed project planning with clear milestones.",
  },
  {
    step: "02",
    title: "Design & Configure",
    description:
      "Solution configuration, integration mapping, data models, security controls, and environment preparation with stakeholder sign-off.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "Development, automated testing, performance validation, security scanning, and user acceptance testing in staged environments.",
  },
  {
    step: "04",
    title: "Deploy & Integrate",
    description:
      "Phased rollout, data migration execution, integration activation, cutover management, and go-live support with hypercare.",
  },
  {
    step: "05",
    title: "Optimize & Transfer",
    description:
      "Performance tuning, knowledge transfer, documentation, operations handover, and continuous improvement roadmap.",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Wins" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

export function ITImplementationAndIntegrationPage() {
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
            alt="IT implementation and systems integration"
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
            <span className="text-foreground">IT Implementation and Integration</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["IT Implementation", "and Integration"].map((line, i) => (
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
              Alpha Technologies offers expert IT implementation and integration services to ensure
              your technology systems work harmoniously. From deploying new solutions to integrating
              with existing infrastructure, our comprehensive approach guarantees a smooth
              transition, minimizing disruption and maximizing efficiency. With advanced threat
              detection, risk management, and comprehensive security protocols, we ensure your
              digital assets are protected, allowing you to operate with confidence and peace of
              mind.
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

      {/* ── Service Overview ────────────────────────────────── */}
      <section id="overview" className="relative overflow-hidden py-24 lg:py-32">
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
                      Seamless Synergy, Unleash Potential:
                      <br />
                      <span className="text-gradient">Alpha's IT Implementation</span>
                      <br />
                      and Integration for Enhanced Performance
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    Our IT Implementation and Integration service provides end-to-end support for
                    businesses looking to implement and integrate new technology solutions
                    seamlessly. We handle everything from planning and configuration to testing and
                    deployment, and we ensure that all systems are fully integrated and working
                    seamlessly together. With our IT Implementation and Integration service,
                    businesses can focus on their core operations while we handle the technology
                    side, ultimately driving increased efficiency, productivity, and growth.
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
                      alt="Systems integration and implementation"
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

      {/* ── Implementation Capabilities ─────────────────────── */}
      <section id="implementation" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="Implementation excellence"
            title={
              <>
                Three Pillars of <span className="text-gradient">Implementation</span>
              </>
            }
            lede="Deploy, migrate, and validate with precision — proven methodologies, automated tooling, and certified experts."
            align="center"
          />

          <div className="mt-20 space-y-24">
            {implementationCapabilities.map((cap, idx) => (
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
                            alt={`${cap.title} implementation`}
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
                              alt={`${cap.title} implementation`}
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

      {/* ── Integration Capabilities ────────────────────────── */}
      <section id="integration" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Integration mastery"
            title={
              <>
                Three Pillars of <span className="text-gradient">Integration</span>
              </>
            }
            lede="Connect applications, data, and processes across hybrid landscapes — API-first, event-driven, and cloud-native."
            align="center"
          />

          <div className="mt-20 space-y-24">
            {integrationCapabilities.map((cap, idx) => (
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
                            src={`https://images.unsplash.com/photo-${1551288049 + (idx + 3) * 1000}?q=80&w=1600&auto=format&fit=crop`}
                            alt={`${cap.title} integration`}
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
                              src={`https://images.unsplash.com/photo-${1551288049 + (idx + 3) * 1000}?q=80&w=1600&auto=format&fit=crop`}
                              alt={`${cap.title} integration`}
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
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="04"
            eyebrow="Why Alpha"
            title={
              <>
                Measurable <span className="text-gradient">Delivery Outcomes</span>
              </>
            }
            lede="Every implementation and integration engagement delivers quantifiable results — on time, on budget, with zero surprises."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.06}>
                <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  />
                  <div className="relative">
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <benefit.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 text-xl font-medium">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────── */}
      <section id="process" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="05"
            eyebrow="Our methodology"
            title={
              <>
                Five-Phase <span className="text-gradient">Delivery Process</span>
              </>
            }
            lede="A structured, repeatable approach that de-risks complex implementations and integrations from discovery through optimization."
            align="center"
          />

          <div className="mt-20">
            <div className="relative">
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--brand-cyan)] to-transparent"
                aria-hidden
              />
              <div className="space-y-16">
                {processSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.08}>
                    <div className="relative flex gap-8 md:gap-12">
                      <div className="relative flex-shrink-0 w-20 md:w-24 text-right pr-6">
                        <span className="font-display text-3xl md:text-4xl font-medium text-[var(--brand-cyan)]">
                          {step.step}
                        </span>
                        <div
                          className="absolute right-0 top-4 h-4 w-4 rounded-full border-4 border-background bg-[var(--brand-cyan)] z-10"
                          aria-hidden
                        />
                      </div>
                      <div className="flex-1 pt-2 md:pt-0">
                        <h3 className="text-2xl font-medium">{step.title}</h3>
                        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
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
