import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Shield,
  Search,
  Lock,
  Zap,
  CheckCircle2,
  TrendingUp,
  Target,
  Network,
  AlertTriangle,
  Database,
  UserCheck,
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
    icon: Search,
    title: "Security Assessment",
    description:
      "Our advanced security assessments leverage cutting-edge technology and expertise to provide you with a comprehensive view of your company's IT systems and data. By identifying vulnerabilities and potential threats, we can help you strengthen your security posture and reduce your risk exposure.",
    features: [
      "Vulnerability scanning & penetration testing",
      "Configuration & compliance audits",
      "Red team / purple team exercises",
      "Attack surface mapping & ASM",
      "Risk scoring & prioritization",
      "Executive reporting & remediation roadmap",
    ],
  },
  {
    icon: Target,
    title: "Security Strategy Development",
    description:
      "Partner with our security strategy development services to craft a customized security strategy that aligns with your business objectives and unique risk profile; our experienced security professionals will collaborate with you to identify potential threats and develop tailored solutions to mitigate them, empowering your business to thrive with confidence.",
    features: [
      "Business-aligned security roadmap",
      "Zero Trust architecture design",
      "Governance, risk & compliance (GRC) framework",
      "Security policy & standards development",
      "Investment prioritization & ROI modeling",
      "Board-ready reporting & metrics",
    ],
  },
  {
    icon: Lock,
    title: "Security Solution Implementation",
    description:
      "With our security solution implementation services, your IT systems and data are shielded from cyber threats. Our experienced professionals provide end-to-end support to ensure that your security solutions are optimized and correctly implemented to meet your specific requirements.",
    features: [
      "EDR/XDR/MDR deployment & tuning",
      "SIEM/SOAR implementation & rule development",
      "Identity & access management (IAM/PAM/IGA)",
      "Cloud security (CSPM, CWPP, CIEM, SASE)",
      "Data protection (DLP, encryption, CASB)",
      "Security automation & orchestration",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response and Management",
    description:
      "Minimize the impact of cyber attacks with our incident response and management services that include developing and implementing a comprehensive incident response plan. Our team of experts will work with you to identify potential threats, create a response plan, and enable you to respond quickly and effectively in the event of an incident.",
    features: [
      "24/7 incident response retainer",
      "Digital forensics & root cause analysis",
      "Containment, eradication & recovery",
      "Threat hunting & compromise assessment",
      "Tabletop exercises & war gaming",
      "Regulatory notification & legal coordination",
    ],
  },
];

const riskProtection = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description: "AI-powered detection across endpoint, network, cloud, and identity",
  },
  {
    icon: Network,
    title: "Risk Management",
    description: "Continuous risk quantification and prioritized remediation",
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "Encryption, DLP, and privacy controls for sensitive data",
  },
  {
    icon: UserCheck,
    title: "Identity Security",
    description: "Zero Trust access, PAM, MFA, and lifecycle governance",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Automated containment and expert-led incident management",
  },
  {
    icon: TrendingUp,
    title: "Compliance Assurance",
    description: "Continuous compliance monitoring and audit-ready evidence",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Reduced Breach Risk",
    description: "Proactive detection and hardening lower likelihood of successful attacks",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Frameworks aligned to SOC 2, HIPAA, PCI-DSS, GDPR, FedRAMP, CMMC",
  },
  {
    icon: Zap,
    title: "Faster Incident Response",
    description: "Mean time to detect/contain reduced through automation and expertise",
  },
  {
    icon: Target,
    title: "Business Continuity",
    description: "Resilient architectures ensure operations continue during attacks",
  },
  {
    icon: Database,
    title: "Data Integrity",
    description: "Protection against ransomware, exfiltration, and tampering",
  },
  {
    icon: Network,
    title: "Peace of Mind",
    description: "24/7 monitoring by certified analysts with executive visibility",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Wins" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

export function CyberSecurityPage() {
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
            alt="Security operations center and threat monitoring"
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
            <span className="text-foreground">Cyber Security</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Cyber", "Security"].map((line, i) => (
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
              Alpha Technologies offers cutting-edge cybersecurity solutions to safeguard your
              organization against evolving threats. With advanced threat detection, risk
              management, and comprehensive security protocols, we ensure your digital assets are
              protected, allowing you to operate with confidence and peace of mind.
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

      {/* ── Security Overview ───────────────────────────────── */}
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
                      Proactive and Comprehensive Approach to
                      <br />
                      <span className="text-gradient">Protecting Businesses</span>
                      <br />
                      Against Cyber Threats
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    With the increasing sophistication and frequency of cyber attacks, it's
                    essential for businesses to have a cybersecurity strategy in place. Our team of
                    experienced professionals utilizes the latest tools and technologies to provide
                    a range of cybersecurity services, including threat detection, prevention, and
                    response. With our services, our clients can benefit from enhanced security,
                    reduced risk of data breaches, compliance with regulations, and peace of mind
                    knowing their business is protected against cyber threats.
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
                      alt="Cybersecurity operations and threat monitoring"
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
                Four Pillars of <span className="text-gradient">Cyber Defense</span>
              </>
            }
            lede="Assess, strategize, implement, and respond — a complete security lifecycle delivered by certified experts with advanced tooling."
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
                            alt={`${cap.title} cybersecurity engagement`}
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
                              alt={`${cap.title} cybersecurity engagement`}
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

      {/* ── Risk Protection / Enterprise Security ───────────── */}
      <section id="risk-protection" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Security domains"
            title={
              <>
                Comprehensive <span className="text-gradient">Risk Protection</span>
              </>
            }
            lede="Six interconnected security domains that form a defense-in-depth posture — from proactive detection through rapid recovery."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {riskProtection.map((domain, i) => (
              <Reveal key={domain.title} delay={i * 0.06}>
                <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  />
                  <div className="relative">
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <domain.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 text-xl font-medium">{domain.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {domain.description}
                    </p>
                  </div>
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
                Measurable <span className="text-gradient">Security Outcomes</span>
              </>
            }
            lede="Every cybersecurity engagement delivers quantifiable risk reduction, compliance alignment, and operational resilience."
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
