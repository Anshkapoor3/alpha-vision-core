import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  KeyRound,
  ShieldCheck,
  Users,
  Cpu,
  Database,
  CheckCircle2,
  Lock,
  Smartphone,
  Fingerprint,
  Globe,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2400&auto=format&fit=crop";

const capabilities = [
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description:
      "Support for TOTP authenticator apps, SMS, email, FIDO2/WebAuthn hardware keys, and push notifications. Users choose their preferred factor; administrators enforce policies per OU, group, or attribute.",
    features: [
      "TOTP (Google Authenticator, Microsoft Authenticator, Authy)",
      "SMS & email one-time codes",
      "FIDO2 / WebAuthn hardware tokens (YubiKey, Titan)",
      "Push notification approval via mobile app",
      "Adaptive MFA based on risk signals",
    ],
  },
  {
    icon: KeyRound,
    title: "Self-Service Password Reset & Unlock",
    description:
      "Users reset forgotten passwords or unlock accounts without contacting the helpdesk. Configurable verification workflows balance security and usability — from single-factor for low-risk to multi-factor for privileged accounts.",
    features: [
      "Password reset with complexity policy enforcement",
      "Account unlock for AD/Entra ID lockouts",
      "Customizable verification steps per user tier",
      "Real-time password strength feedback",
      "Blocklist for compromised passwords (HaveIBeenPwned)",
    ],
  },
  {
    icon: Users,
    title: "Delegated Administration",
    description:
      "Empower helpdesk analysts and line-of-business managers to assist users without full admin rights. Role-based delegation scopes actions to specific OUs, groups, or attributes with full audit trails.",
    features: [
      "Helpdesk tier: reset/unlock for assigned OUs",
      "Manager self-service: approve team requests",
      "Custom roles with granular permissions",
      "Approval workflows for sensitive actions",
      "Immutable audit log for every delegated action",
    ],
  },
  {
    icon: Database,
    title: "Hybrid Identity Support",
    description:
      "Single platform for on-premises Active Directory, Entra ID (Azure AD), and hybrid environments with password writeback. Seamless synchronization ensures consistent policies across cloud and on-premises directories.",
    features: [
      "On-premises AD (2012 R2 through 2022)",
      "Entra ID / Azure AD with password hash sync",
      "Hybrid with password writeback via Azure AD Connect",
      "Multi-forest and multi-tenant support",
      "Staged rollout and coexistence modes",
    ],
  },
];

const enterpriseFeatures = [
  {
    icon: ShieldCheck,
    title: "Compliance-Ready Audit Trails",
    description: "Immutable logs with SIEM integration (Splunk, Sentinel, QRadar) for SOX, HIPAA, GDPR, PCI-DSS evidence.",
  },
  {
    icon: Globe,
    title: "Branded User Portal",
    description: "Customizable themes, logos, languages, and workflows. Hosted on your domain for trust and phishing resistance.",
  },
  {
    icon: Cpu,
    title: "Phishing-Resistant Authentication",
    description: "FIDO2/WebAuthn and certificate-based auth eliminate credential theft. Conditional access integration included.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Responsive portal works on any device. Native mobile app available for push approvals and offline codes.",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Windows Hello Support",
    description: "Leverage device biometrics (Touch ID, Face ID, Windows Hello) as a second factor without additional hardware.",
  },
  {
    icon: Database,
    title: "Flexible Deployment Models",
    description: "Cloud-hosted (SaaS), on-premises, or air-gapped for regulated environments. Identical feature parity across models.",
  },
];

const benefits = [
  "Reduce identity-related helpdesk tickets by up to 70%",
  "Achieve sub-2-minute average password reset time",
  "Eliminate shared credential risks and password reuse",
  "Pass SOX, HIPAA, and PCI-DSS audits with zero findings",
  "Deploy in weeks, not months — minimal infrastructure",
  "Lower total cost of ownership vs. legacy on-premises tools",
];

const stats = [
  { value: 70, suffix: "%", label: "Ticket Reduction" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Availability SLA" },
  { value: 50, suffix: "K+", label: "Active Users" },
  { value: 3, label: "Deployment Models" },
];

export function PasswordResetToolPage() {
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
            alt="Identity governance dashboard"
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
            <span className="text-[var(--brand-cyan)]" aria-hidden>↓</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>↓</span>
            <span className="text-foreground">Products & Platforms</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>↓</span>
            <span className="text-foreground">Password Reset Tool</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Password Reset", "Tool"].map((line, i) => (
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
              Eliminate helpdesk password tickets with a secure, policy-driven self-service password
              reset and account unlock platform. Built for hybrid Active Directory and Entra ID
              environments with MFA enforcement, delegation, and full audit trails.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              Request a Demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Platform Overview ───────────────────────────────── */}
      <section id="overview" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  index="01"
                  eyebrow="Our platform"
                  title={
                    <>
                      Self-Service Identity Governance
                      <br />
                      for the <span className="text-gradient">Modern Enterprise</span>
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    Alpha's Password Reset Tool reduces identity-related support costs by up to 70%
                    while strengthening security posture. Users authenticate via configurable MFA
                    factors — authenticator apps, SMS, email, or hardware tokens — then reset
                    passwords or unlock accounts without IT intervention. Administrators define
                    granular policies by OU, group, or attribute, enforce password complexity, and
                    review immutable audit logs for compliance. The platform supports on-premises
                    AD, Entra ID (Azure AD), and hybrid configurations with writeback. Deployment
                    options include cloud-hosted, on-premises, or air-gapped for regulated
                    environments.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <MagneticButton href="#contact" className="mt-8 inline-flex">
                    Request a Demo
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </Reveal>
              </div>

              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                  <div className="relative overflow-hidden rounded-[2rem] border border-border">
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop"
                      alt="Password reset tool interface"
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
                Four Pillars of <span className="text-gradient">Identity Self-Service</span>
              </>
            }
            lede="Authenticate, reset, delegate, and govern — a complete identity lifecycle platform for hybrid enterprises."
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
                            <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-cyan)]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border">
                          <img
                            src={`https://images.unsplash.com/photo-${1551288049 + idx * 1000}?q=80&w=1600&auto=format&fit=crop`}
                            alt={`${cap.title} interface`}
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
                          <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                          <div className="relative overflow-hidden rounded-[2rem] border border-border">
                            <img
                              src={`https://images.unsplash.com/photo-${1551288049 + idx * 1000}?q=80&w=1600&auto=format&fit=crop`}
                              alt={`${cap.title} interface`}
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
                            <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
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

      {/* ── Enterprise Features ──────────────────────────────── */}
      <section id="enterprise" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Enterprise features"
            title={
              <>
                Built for <span className="text-gradient">Regulated Environments</span>
              </>
            }
            lede="Six capabilities that satisfy auditors, security teams, and end users simultaneously."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 0.06}>
                <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  />
                  <div className="relative">
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <feat.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 text-xl font-medium">{feat.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {feat.description}
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
                Measurable <span className="text-gradient">Identity Outcomes</span>
              </>
            }
            lede="Every deployment delivers quantifiable risk reduction, cost savings, and user satisfaction."
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

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section id="cta" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
              <div className="absolute inset-0 aurora opacity-70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
              <div className="relative px-8 py-20 text-center lg:px-20 lg:py-28">
                <p className="eyebrow">Ready to evaluate</p>
                <h2 className="display-section mt-6">
                  See the Password Reset Tool <span className="text-gradient">In Action</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Schedule a personalized demo with our product specialists. We'll walk through your
                  use cases, integration requirements, and compliance needs.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Request a Demo
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton href="/what-we-do/products" variant="ghost" className="px-12 py-5 text-base">
                    Back to Products & Platforms
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
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
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