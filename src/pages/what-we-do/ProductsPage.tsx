import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { KeyRound, TrendingUp, ShieldCheck, Users, Cpu, Database, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const products = [
  {
    slug: "password-reset-tool",
    icon: KeyRound,
    name: "Password Reset Tool",
    tagline: "Self-service identity governance for the modern enterprise",
    description:
      "Eliminate helpdesk password tickets with a secure, policy-driven self-service password reset and account unlock platform. Built for hybrid Active Directory and Entra ID environments with MFA enforcement, delegation, and full audit trails.",
    longDescription:
      "Alpha's Password Reset Tool reduces identity-related support costs by up to 70% while strengthening security posture. Users authenticate via configurable MFA factors — authenticator apps, SMS, email, or hardware tokens — then reset passwords or unlock accounts without IT intervention. Administrators define granular policies by OU, group, or attribute, enforce password complexity, and review immutable audit logs for compliance. The platform supports on-premises AD, Entra ID (Azure AD), and hybrid configurations with writeback. Deployment options include cloud-hosted, on-premises, or air-gapped for regulated environments.",
    keyFeatures: [
      "Multi-factor authentication (TOTP, SMS, Email, FIDO2/WebAuthn)",
      "Self-service password reset & account unlock",
      "Delegated administration for helpdesk & managers",
      "Granular policy engine by OU, group, attribute",
      "Real-time audit logging with SIEM integration",
      "Hybrid AD / Entra ID support with password writeback",
      "Branded user portal with customizable workflows",
      "Phishing-resistant authentication options",
    ],
    compliance: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA-ready", "FedRAMP Moderate (in progress)"],
    stats: [
      { value: 70, suffix: "%", label: "Ticket Reduction" },
      { value: 99.9, suffix: "%", decimals: 1, label: "Availability" },
      { value: 50, suffix: "K+", label: "Active Users" },
      { value: 3, label: "Deployment Models" },
    ],
    outcomes: [
      "Reduced identity-related helpdesk tickets by 70%",
      "Achieved sub-2-minute average reset time",
      "Eliminated shared credential risks",
      "Passed SOX and HIPAA audits with zero findings",
    ],
    gradient: "from-blue-600 to-cyan-500",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "forecasting-tool",
    icon: TrendingUp,
    name: "Forecasting Tool",
    tagline: "AI-powered predictive planning for finance and operations",
    description:
      "Transform budgeting, demand planning, and resource forecasting with machine learning models that learn from your historical data. Automated feature engineering, scenario modeling, and explainable predictions — no data science team required.",
    longDescription:
      "Alpha's Forecasting Tool brings enterprise-grade predictive analytics to finance, supply chain, and operations teams. Upload historical data — the platform automatically engineers features, selects optimal models (ARIMA, Prophet, XGBoost, LSTM, Transformer), and backtests across multiple horizons. Business users create what-if scenarios with drag-and-drop drivers, compare model outputs, and drill into feature importance for explainability. Forecasts integrate bi-directionally with ERP, EPM, and planning systems (SAP, Oracle, Anaplan, Workday Adaptive). Role-based access, audit trails, and model governance workflows satisfy SOX and model risk management (SR 11-7) requirements.",
    keyFeatures: [
      "Automated ML pipeline (AutoML for time series)",
      "Multi-horizon forecasting (daily to multi-year)",
      "Scenario modeling with driver-based inputs",
      "Explainable AI: SHAP values, feature importance",
      "Bi-directional ERP/EPM integration",
      "Model governance & version control",
      "Collaborative workspace with annotations",
      "REST API & scheduled exports",
    ],
    compliance: ["SOX-compliant audit trails", "SR 11-7 model risk alignment", "SOC 2 Type II", "ISO 27001", "GDPR"],
    stats: [
      { value: 40, suffix: "%", label: "Forecast Accuracy Gain" },
      { value: 80, suffix: "%", label: "Planning Cycle Reduction" },
      { value: 15, suffix: "+", label: "Model Types" },
      { value: 95, suffix: "%", label: "User Adoption" },
    ],
    outcomes: [
      "Improved forecast accuracy by 40% vs. spreadsheet baselines",
      "Reduced annual planning cycle from 8 weeks to 10 days",
      "Enabled real-time scenario planning for board reviews",
      "Achieved SOX compliance with automated model documentation",
    ],
    gradient: "from-purple-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
];

export function ProductsPage() {
  return (
    <MainLayout>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
            alt="Product dashboard visualization"
            width={2400}
            height={1600}
            className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
          <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
        </div>

        <div className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-32 pb-16 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="eyebrow">What We Do</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>↓</span>
            <span className="text-foreground">Products & Platforms</span>
          </motion.div>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Platforms built", "for enterprise", "reality."].map((line, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Our proprietary platforms solve the recurring challenges every regulated enterprise faces — identity governance and predictive planning.
              Battle-tested across financial services, healthcare, and government. Deploy in your cloud, on-premises, or air-gapped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Products Grid ───────────────────────────────────── */}
      <section id="products" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="01"
            eyebrow="Our platforms"
            title={
              <>
                Two platforms, <span className="text-gradient">infinite use cases</span>
              </>
            }
            lede="Each platform is a complete, extensible solution — not a framework. Configure, integrate, and scale without custom development."
            align="center"
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {products.map((prod, i) => (
              <Reveal key={prod.name} delay={i * 0.1}>
                <Link
                  to={`/what-we-do/products/${prod.slug}`}
                  className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 transition-opacity duration-700 group-hover:opacity-20"
                    style={{ background: `linear-gradient(135deg, ${prod.gradient.replace("from-", "").replace("to-", "")})` }}
                  />
                  <div className="relative flex flex-col h-full">
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <prod.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 text-xl font-medium">{prod.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{prod.tagline}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--brand-cyan)] group-hover:gap-3 transition-all duration-500">
                      <span>Explore platform</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Detail Sections ─────────────────────────── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="space-y-28">
            {products.map((prod, idx) => (
              <Reveal key={prod.name} delay={idx % 2 === 0 ? 0 : 0.1}>
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border">
                          <img
                            src={prod.image}
                            alt={`${prod.name} platform interface`}
                            loading="lazy"
                            width={1600}
                            height={1067}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                        </div>
                      </div>
                      <div>
                        <SectionHeading index={`0${idx + 2}`} eyebrow="Platform" title={<>{prod.name}</>} />
                        <p className="mt-4 text-lg leading-relaxed text-[var(--brand-cyan)] font-medium">{prod.tagline}</p>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{prod.description}</p>
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{prod.longDescription}</p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                          {prod.stats.map((s) => (
                            <div key={s.label} className="rounded-xl border border-border p-6">
                              <div className="font-display text-3xl font-medium tracking-tight text-[var(--brand-cyan)]">
                                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-10">
                          <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Key capabilities</h4>
                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {prod.keyFeatures.map((f) => (
                              <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-cyan)] mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-10">
                          <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Compliance & certifications</h4>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {prod.compliance.map((c) => (
                              <span
                                key={c}
                                className="rounded-full border border-border px-3 py-1 text-[0.7rem] tracking-[0.1em] text-muted-foreground"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        <MagneticButton
                          href={`/what-we-do/products/${prod.slug}`}
                          className="mt-10 inline-flex"
                        >
                          View Full Details
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </MagneticButton>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:order-2">
                        <div className="relative">
                          <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                          <div className="relative overflow-hidden rounded-[2rem] border border-border">
                            <img
                              src={prod.image}
                              alt={`${prod.name} platform interface`}
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
                        <SectionHeading index={`0${idx + 2}`} eyebrow="Platform" title={<>{prod.name}</>} />
                        <p className="mt-4 text-lg leading-relaxed text-[var(--brand-cyan)] font-medium">{prod.tagline}</p>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{prod.description}</p>
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{prod.longDescription}</p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                          {prod.stats.map((s) => (
                            <div key={s.label} className="rounded-xl border border-border p-6">
                              <div className="font-display text-3xl font-medium tracking-tight text-[var(--brand-cyan)]">
                                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-10">
                          <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Key capabilities</h4>
                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {prod.keyFeatures.map((f) => (
                              <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-cyan)] mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-10">
                          <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Compliance & certifications</h4>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {prod.compliance.map((c) => (
                              <span
                                key={c}
                                className="rounded-full border border-border px-3 py-1 text-[0.7rem] tracking-[0.1em] text-muted-foreground"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        <MagneticButton
                          href={`/what-we-do/products/${prod.slug}`}
                          className="mt-10 inline-flex"
                        >
                          View Full Details
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </MagneticButton>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
              <div className="absolute inset-0 aurora opacity-70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
              <div className="relative px-8 py-20 text-center lg:px-20 lg:py-28">
                <p className="eyebrow">Ready to evaluate</p>
                <h2 className="display-section mt-6">
                  See Our Platforms <span className="text-gradient">In Action</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Schedule a personalized demo with our product specialists. We'll walk through your use cases,
                  integration requirements, and compliance needs.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Request a Demo
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton href="/what-we-do" variant="ghost" className="px-12 py-5 text-base">
                    Back to What We Do
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </MainLayout>
  );
}