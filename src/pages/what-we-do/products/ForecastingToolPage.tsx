import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Zap,
  Cpu,
  Database,
  CheckCircle2,
  GitBranch,
  Share2,
  Users,
  Shield,
  Search,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop";

const capabilities = [
  {
    icon: Cpu,
    title: "Automated ML Pipeline (AutoML for Time Series)",
    description:
      "Upload historical data and the platform automatically engineers features, selects optimal models (ARIMA, Prophet, XGBoost, LSTM, Transformer), and backtests across multiple horizons. No data science expertise required — the system handles model selection, hyperparameter tuning, and validation automatically.",
    features: [
      "Automated feature engineering (lags, rolling stats, calendar effects)",
      "Model zoo: ARIMA, Prophet, XGBoost, LightGBM, LSTM, Transformer",
      "Automated hyperparameter optimization (Optuna-based)",
      "Walk-forward validation with multiple forecast horizons",
      "Model comparison leaderboard with statistical significance testing",
    ],
  },
  {
    icon: BarChart3,
    title: "Multi-Horizon Forecasting",
    description:
      "Generate forecasts from daily operational planning to multi-year strategic horizons in a single run. The platform handles seasonality, trend changes, and regime shifts automatically, producing coherent forecasts across all time scales.",
    features: [
      "Short-term: daily/weekly (operations, staffing, inventory)",
      "Medium-term: monthly/quarterly (budgeting, demand planning)",
      "Long-term: annual/multi-year (capex, capacity, strategy)",
      "Hierarchical forecasting with coherent aggregation",
      "Probabilistic forecasts with prediction intervals",
    ],
  },
  {
    icon: GitBranch,
    title: "Scenario Modeling & Driver-Based Planning",
    description:
      "Business users create what-if scenarios with drag-and-drop drivers — GDP growth, commodity prices, marketing spend, policy changes — and instantly compare model outputs. Scenario versions are tracked with full lineage for governance.",
    features: [
      "Drag-and-drop driver configuration (no code)",
      "Pre-built macroeconomic driver library (FRED, OECD, IMF)",
      "Custom driver upload with automatic alignment",
      "Scenario comparison with waterfall decomposition",
      "Version control with audit trail for governance",
    ],
  },
  {
    icon: Search,
    title: "Explainable AI: SHAP Values & Feature Importance",
    description:
      "Every forecast comes with model-agnostic explanations — SHAP values, feature importance rankings, and counterfactual analysis. Stakeholders understand not just what the forecast is, but why, building trust and enabling model risk management (SR 11-7 alignment).",
    features: [
      "Global and local SHAP explanations for all model types",
      "Feature importance with business-friendly labels",
      "Counterfactual analysis: what would change the forecast?",
      "Model cards with performance, limitations, and data lineage",
      "SR 11-7 / model risk management documentation auto-generated",
    ],
  },
];

const enterpriseFeatures = [
  {
    icon: Database,
    title: "Bi-Directional ERP/EPM Integration",
    description: "Pre-built connectors for SAP, Oracle, Anaplan, Workday Adaptive, IBM Planning Analytics. Read actuals, write forecasts — zero ETL code.",
  },
  {
    icon: Share2,
    title: "REST API & Scheduled Exports",
    description: "Programmatic access for custom workflows. Webhooks for forecast-ready events. Parquet, CSV, JSON, and Delta Lake export formats.",
  },
  {
    icon: Shield,
    title: "Model Governance & Version Control",
    description: "Full model lineage, approval workflows, champion/challenger framework, automated retraining schedules, and rollback capability.",
  },
  {
    icon: Users,
    title: "Collaborative Workspace",
    description: "Annotations, comments, @mentions, and decision logs tied to forecast versions. Cross-functional alignment without email chains.",
  },
  {
    icon: Zap,
    title: "Automated Retraining & Drift Detection",
    description: "Statistical drift detection (PSI, KL divergence) triggers retraining. Configurable schedules with human-in-the-loop approval gates.",
  },
  {
    icon: BarChart3,
    title: "Role-Based Access & Audit Trails",
    description: "Granular permissions by model, scenario, and geography. Immutable audit logs for SOX and regulatory compliance.",
  },
];

const benefits = [
  "Improve forecast accuracy by 40% vs. spreadsheet baselines",
  "Reduce annual planning cycle from 8 weeks to 10 days",
  "Enable real-time scenario planning for board reviews",
  "Achieve SOX compliance with automated model documentation",
  "Democratize forecasting — no data science team required",
  "Unify finance, supply chain, and operations on one platform",
];

const stats = [
  { value: 40, suffix: "%", label: "Forecast Accuracy Gain" },
  { value: 80, suffix: "%", label: "Planning Cycle Reduction" },
  { value: 15, suffix: "+", label: "Model Types" },
  { value: 95, suffix: "%", label: "User Adoption" },
];

export function ForecastingToolPage() {
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
            alt="Forecasting dashboard with scenario analysis"
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
            <span className="text-foreground">Forecasting Tool</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Forecasting", "Tool"].map((line, i) => (
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
              Transform budgeting, demand planning, and resource forecasting with machine learning
              models that learn from your historical data. Automated feature engineering, scenario
              modeling, and explainable predictions — no data science team required.
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
                      AI-Powered Predictive Planning
                      <br />
                      for <span className="text-gradient">Finance & Operations</span>
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    Alpha's Forecasting Tool brings enterprise-grade predictive analytics to finance,
                    supply chain, and operations teams. Upload historical data — the platform
                    automatically engineers features, selects optimal models (ARIMA, Prophet,
                    XGBoost, LSTM, Transformer), and backtests across multiple horizons. Business
                    users create what-if scenarios with drag-and-drop drivers, compare model
                    outputs, and drill into feature importance for explainability. Forecasts
                    integrate bi-directionally with ERP, EPM, and planning systems (SAP, Oracle,
                    Anaplan, Workday Adaptive). Role-based access, audit trails, and model
                    governance workflows satisfy SOX and model risk management (SR 11-7)
                    requirements.
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
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                      alt="Forecasting tool scenario modeling interface"
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
                Four Pillars of <span className="text-gradient">Predictive Planning</span>
              </>
            }
            lede="Automate the science, empower the art — from data ingestion to board-ready decisions."
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
                          <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
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
                Built for <span className="text-gradient">Governance & Scale</span>
              </>
            }
            lede="Six capabilities that satisfy auditors, IT, and business users simultaneously."
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
                Measurable <span className="text-gradient">Planning Outcomes</span>
              </>
            }
            lede="Every deployment delivers quantifiable accuracy gains, cycle-time reduction, and governance confidence."
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
                  See the Forecasting Tool <span className="text-gradient">In Action</span>
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