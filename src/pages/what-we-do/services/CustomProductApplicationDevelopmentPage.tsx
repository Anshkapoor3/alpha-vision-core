import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Code,
  Smartphone,
  Palette,
  Shield,
  Cloud,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2400&auto=format&fit=crop";

const capabilities = [
  {
    icon: BarChart3,
    title: "Product Discovery & Strategy",
    description:
      "A collaborative approach to define your product vision, validate market fit, and establish a clear, prioritized roadmap aligned to measurable business outcomes. We turn ideas into validated, ship-ready product strategies.",
    features: [
      "Product vision & value proposition workshops",
      "Market research & competitive analysis",
      "MVP scoping & feature prioritization",
      "User story mapping & backlog grooming",
      "Roadmap planning & release sequencing",
      "Outcome tracking & KPI definition",
    ],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "User-centered design processes that create intuitive, accessible, and engaging interfaces — from low-fidelity wireframes and interactive prototypes to high-fidelity design systems that scale.",
    features: [
      "User research & persona development",
      "Information architecture & wireframing",
      "Interactive prototyping & usability testing",
      "Design systems & component libraries",
      "Accessibility & inclusive design (WCAG 2.1)",
      "High-fidelity UI design & branding",
    ],
  },
  {
    icon: Code,
    title: "Cloud-Native Development",
    description:
      "We build scalable, resilient applications on AWS, Azure, and GCP using microservices, containers, and serverless architectures. Our engineering stack spans React, .NET, Java, Go, Node, and Python.",
    features: [
      "Microservices & API-first architecture",
      "Container orchestration (Kubernetes, ECS)",
      "Serverless & event-driven development",
      "React, .NET, Java, Go, Node, Python",
      "Database design (SQL & NoSQL)",
      "Observability, logging & monitoring",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native iOS and Android development plus cross-platform engineering with Flutter and React Native — delivered from concept, through App Store deployment, to ongoing product support.",
    features: [
      "Native iOS (Swift) & Android (Kotlin) apps",
      "Cross-platform: Flutter & React Native",
      "App Store & Play Store deployment",
      "Offline-first & real-time sync patterns",
      "Mobile CI/CD & automated testing",
      "Performance optimization & analytics",
    ],
  },
];

const processCapabilities = [
  {
    icon: Cloud,
    title: "DevSecOps & CI/CD",
    description:
      "Infrastructure as Code, automated build and release pipelines, security scanning, and continuous monitoring — delivered with speed, security, and compliance baked in from day one.",
    features: [
      "GitOps & Infrastructure as Code (Terraform)",
      "Automated build, test, & deploy pipelines",
      "Security scanning & vulnerability management",
      "Policy-as-code & compliance gates",
      "Release orchestration & rollback strategies",
      "Continuous performance monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Application Modernization",
    description:
      "Refactor and modernize legacy systems with API-first approaches, cloud migration, and technology stack upgrades — all while preserving critical business logic and minimizing risk.",
    features: [
      "Legacy system assessment & migration roadmap",
      "Monolith-to-microservices decomposition",
      "API gateway & service mesh integration",
      "Data migration & schema modernization",
      "Technology stack re-platforming",
      "Parallel testing & cutover management",
    ],
  },
  {
    icon: CheckCircle2,
    title: "QA Automation & Testing",
    description:
      "Shift-left testing with automated unit, integration, API, and end-to-end test frameworks. Continuous testing is integrated directly into CI/CD pipelines for fast, reliable releases.",
    features: [
      "Test strategy & automation framework design",
      "Unit, integration & API test automation",
      "End-to-end & cross-browser testing",
      "Performance & load testing",
      "CI/CD pipeline integration",
      "Test reporting & quality dashboards",
    ],
  },
  {
    icon: Zap,
    title: "Product Support & Maintenance",
    description:
      "Proactive monitoring, performance optimization, feature enhancements, and SLA-backed support so your product stays fast, secure, and continuously improving after launch.",
    features: [
      "24/7 monitoring & alerting",
      "Performance tuning & optimization",
      "Feature development & backlog management",
      "Security patches & dependency updates",
      "SLA-backed incident response",
      "Usage analytics & reporting",
    ],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Time-to-Market",
    description: "Agile delivery and reusable architectures shorten development cycles",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Built-in security, compliance, and OWASP Top 10 mitigation from day one",
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description: "Cloud-native, microservices, and serverless designs that grow with your business",
  },
  {
    icon: Code,
    title: "Full Lifecycle Ownership",
    description: "From discovery through deployment and ongoing product support",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Native and cross-platform mobile apps with polished, performant UX",
  },
  {
    icon: Zap,
    title: "IP Retained by You",
    description: "Product-minded partnership where intellectual property stays with the client",
  },
];

const relatedServices = [
  {
    icon: Shield,
    title: "Cyber Security",
    desc: "MDR, vulnerability management, identity & access",
    href: "/what-we-do/services/cyber-security",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Migration, operations, FinOps, platform engineering",
    href: "/what-we-do/services/cloud-services",
  },
  {
    icon: BarChart3,
    title: "Digital Transformation",
    desc: "Strategy, automation, legacy modernization",
    href: "/what-we-do/services/digital-transformation",
  },
  {
    icon: CheckCircle2,
    title: "IT Strategy and Planning",
    desc: "Governance, roadmaps, architecture design",
    href: "/what-we-do/services/it-strategy-and-planning",
  },
];

const compliance = [
  "OWASP Top 10 risk mitigation",
  "SOC 2 Type II readiness",
  "GDPR & CCPA data protection",
  "ISO 27001-aligned processes",
  "PCI-DSS compliant deployments",
  "HIPAA-ready architectures",
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Products Delivered" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

export function CustomProductApplicationDevelopmentPage() {
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
            alt="Custom software and mobile application development team"
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
            <a href="/what-we-do" className="eyebrow hover:text-[var(--brand-cyan)] transition-colors">
              What We Do
            </a>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <a
              href="/what-we-do/services"
              className="text-foreground hover:text-[var(--brand-cyan)] transition-colors"
            >
              Services
            </a>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Custom Product-Application Development</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Custom Product", "Development"].map((line, i) => (
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
              Alpha ITMS delivers end-to-end custom product and application development services. We
              combine deep domain expertise with modern engineering practices — agile delivery,
              cloud-native architecture, DevSecOps automation, and rigorous QA — to build scalable,
              secure, and maintainable software products and mobile applications. Product-minded,
              outcome-focused, and IP-retaining.
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
                      From Concept to <span className="text-gradient">Market-Ready Product</span>
                      <br />
                      Full-Lifecycle Engineering, Delivered
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    From concept to market-ready product, Alpha ITMS delivers end-to-end custom
                    product and application development services. We combine deep domain expertise with
                    modern engineering practices — agile delivery, cloud-native architecture, DevSecOps
                    automation, and rigorous QA — to build scalable, secure, and maintainable software
                    products and mobile applications. Whether you're launching a new digital product,
                    modernizing a legacy system, or extending your engineering capacity, our
                    product-minded approach ensures we deliver outcomes that matter to your business
                    while retaining your intellectual property.
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
                      src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop"
                      alt="Software development and agile engineering team"
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
                Four Pillars of <span className="text-gradient">Product Engineering</span>
              </>
            }
            lede="Product discovery, user-centered design, cloud-native software development, and mobile app engineering — a complete cycle from idea to ship-ready product."
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
                            alt={`${cap.title} product engineering`}
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
                              alt={`${cap.title} product engineering`}
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

      {/* ── Delivery & Quality Capabilities ───────────────────── */}
      <section id="delivery" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Delivery excellence"
            title={
              <>
                Four Pillars of <span className="text-gradient">Robust Delivery</span>
              </>
            }
            lede="DevSecOps, application modernization, QA automation, and product support — the capabilities that keep your software secure, reliable, and continuously improving."
            align="center"
          />

          <div className="mt-20 space-y-24">
            {processCapabilities.map((cap, idx) => (
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
                            src={`https://images.unsplash.com/photo-${1551288049 + (idx + 4) * 1000}?q=80&w=1600&auto=format&fit=crop`}
                            alt={`${cap.title} delivery`}
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
                              src={`https://images.unsplash.com/photo-${1551288049 + (idx + 4) * 1000}?q=80&w=1600&auto=format&fit=crop`}
                              alt={`${cap.title} delivery`}
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
            index="04"
            eyebrow="Why Alpha"
            title={
              <>
                Measurable <span className="text-gradient">Product Outcomes</span>
              </>
            }
            lede="Every custom development engagement delivers quantifiable results — faster delivery, stronger security, and products that ship and scale."
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

      {/* ── Compliance ───────────────────────────────────────── */}
      <section id="compliance" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="05"
            eyebrow="Security & compliance"
            title={
              <>
                Built-In <span className="text-gradient">Security & Compliance</span>
              </>
            }
            lede="Secure development lifecycle and compliance frameworks engineered into every product we build."
            align="center"
          />

          <div className="mt-20 mx-auto max-w-3xl">
            <Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {compliance.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-cyan)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Related Services ────────────────────────────────── */}
      <section id="related" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="06"
            eyebrow="Related expertise"
            title={
              <>
                Complementary <span className="text-gradient">Technology Services</span>
              </>
            }
            lede="Custom product development integrates seamlessly with our broader portfolio for complete technology coverage."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((svc, i) => (
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
                  Ready to bring your product vision to life? Alpha ITMS is here to empower you with
                  cutting-edge engineering, product-minded design, and expert guidance. Reach out to us
                  today and let's build something extraordinary together.
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
                    <Counter to={s.value} suffix={s.suffix} />
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
