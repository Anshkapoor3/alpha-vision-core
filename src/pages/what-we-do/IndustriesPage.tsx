import { useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Landmark,
  ShoppingBag,
  FlaskConical,
  Umbrella,
  Factory,
  Pill,
  RadioTower,
  GraduationCap,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    slug: "financial-services",
    icon: Landmark,
    name: "Financial Services",
    description:
      "Secure, compliant platforms for banking, capital markets, insurance, and wealth management. We navigate SOX, PCI-DSS, GDPR, and Basel III requirements while modernizing core systems.",
    highlights: ["Core Banking Modernization", "Risk & Compliance Platforms", "Payment Processing Systems", "Wealth Management Portals"],
    outcomes: ["99.99% uptime for trading platforms", "40% faster transaction processing", "Zero critical audit findings"],
  },
  {
    slug: "retail-services",
    icon: ShoppingBag,
    name: "Retail Services",
    description:
      "Omnichannel commerce, supply chain visibility, and customer experience platforms that unify digital and physical retail. Real-time inventory, personalized engagement, and frictionless checkout.",
    highlights: ["Omnichannel Commerce", "Supply Chain Optimization", "Customer Data Platforms", "POS & Inventory Systems"],
    outcomes: ["30% increase in online conversion", "25% reduction in stockouts", "50% faster order fulfillment"],
  },
  {
    slug: "research-development",
    icon: FlaskConical,
    name: "Research & Development",
    description:
      "High-performance computing, laboratory information management, and collaboration platforms for R&D-intensive organizations. Accelerate discovery with secure data sharing and AI-augmented analytics.",
    highlights: ["HPC & Cloud Bursting", "LIMS & ELN Implementation", "Research Data Management", "IP Protection & Compliance"],
    outcomes: ["60% faster simulation runs", "100% data integrity compliance", "3x collaboration efficiency"],
  },
  {
    slug: "insurance-services",
    icon: Umbrella,
    name: "Insurance Services",
    description:
      "Policy administration, claims automation, underwriting workbenches, and regulatory reporting for P&C, life, and specialty carriers. Legacy modernization with zero-downtime migration.",
    highlights: ["Policy Admin Systems", "Claims Automation", "Underwriting Workbenches", "Solvency II & IFRS 17 Reporting"],
    outcomes: ["50% reduction in claims cycle time", "95% straight-through processing", "Full regulatory compliance"],
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description:
      "Smart factory solutions, MES, MOM, and industrial IoT platforms that optimize production, quality, and supply chain. OT/IT convergence with ISA-95 alignment and NIST cybersecurity.",
    highlights: ["MES/MOM Implementation", "Industrial IoT & Edge", "Predictive Maintenance", "Digital Twin & Simulation"],
    outcomes: ["20% OEE improvement", "35% reduction in unplanned downtime", "15% yield increase"],
  },
  {
    slug: "pharmaceuticals",
    icon: Pill,
    name: "Pharmaceuticals",
    description:
      "GxP-compliant platforms for clinical trials, manufacturing, quality, and regulatory submission. 21 CFR Part 11, Annex 11, and FDA/EMA validation-ready systems with full audit trails.",
    highlights: ["Clinical Trial Management", "Quality Management (QMS)", "Manufacturing Execution (MES)", "Regulatory Publishing & Submission"],
    outcomes: ["30% faster study startup", "Zero 483 observations", "100% audit trail integrity"],
  },
  {
    slug: "telecommunications",
    icon: RadioTower,
    name: "Telecommunications",
    description:
      "OSS/BSS transformation, network orchestration, 5G core enablement, and customer experience platforms for CSPs. TM Forum Open API conformance and cloud-native architectures.",
    highlights: ["OSS/BSS Modernization", "5G Core & Network Slicing", "Service Orchestration", "Customer Experience Management"],
    outcomes: ["40% faster service provisioning", "99.999% network availability", "60% OpEx reduction"],
  },
  {
    slug: "higher-education",
    icon: GraduationCap,
    name: "Higher Education",
    description:
      "Student information systems, research administration, learning platforms, and campus technology for universities and research institutions. FERPA, HIPAA, and grant compliance built in.",
    highlights: ["SIS & ERP Implementation", "Research Administration", "Learning Management", "Campus Identity & Access"],
    outcomes: ["25% improvement in student retention", "40% faster grant processing", "100% FERPA compliance"],
  },
  {
    slug: "non-profit-agencies",
    icon: ShieldCheck,
    name: "Non-Profit Agencies",
    description:
      "Mission-critical technology for NGOs, foundations, and advocacy organizations. Donor management, grant tracking, program delivery, and impact reporting with limited-resource efficiency.",
    highlights: ["Donor & CRM Platforms", "Grant Lifecycle Management", "Program Case Management", "Impact Measurement & Reporting"],
    outcomes: ["35% increase in donor retention", "50% reduction in admin overhead", "Real-time impact visibility"],
  },
  {
    slug: "government-agencies",
    icon: Building2,
    name: "Government Agencies",
    description:
      "FedRAMP-authorized, NIST 800-53 compliant solutions for federal, state, and local government. Citizen services, case management, grants, and infrastructure modernization with ATO support.",
    highlights: ["Citizen Service Portals", "Grants Management", "Case Management Systems", "FedRAMP & StateRAMP Compliance"],
    outcomes: ["ATO achieved in <6 months", "99.9% citizen portal availability", "40% process automation"],
  },
];

export function IndustriesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <MainLayout>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop"
            alt="Global industry network visualization"
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
            <span className="text-foreground">Industries</span>
          </motion.div>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Industry expertise,", "delivered at", "scale."].map((line, i) => (
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
              Alpha ITMS brings deep domain knowledge to every engagement. We don't just implement technology — we understand the regulatory frameworks,
              compliance mandates, and operational realities that define your industry. Ten sectors. One standard of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Industries Grid ─────────────────────────────────── */}
      <section id="industries" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="01"
            eyebrow="Industries we serve"
            title={
              <>
                Ten industries, <span className="text-gradient">deep expertise</span>
              </>
            }
            lede="Each industry card links to a dedicated page with detailed capabilities, case studies, compliance frameworks, and measurable outcomes."
            align="center"
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.04} className="bg-background">
                <Link
                  to={`/what-we-do/industries/${ind.slug}`}
                  className="group relative h-full overflow-hidden p-8 sm:p-10 transition-colors duration-500 hover:bg-secondary"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 [background:var(--gradient-brand)] opacity-0"
                    animate={{ opacity: active === i ? 0.12 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="relative flex flex-col h-full">
                    <ind.icon className="h-7 w-7 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1 group-hover:scale-110" />
                    <h3 className="mt-8 text-lg font-medium flex-1">{ind.name}</h3>
                    <motion.p
                      initial={false}
                      animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 8, height: active === i ? "auto" : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4 text-sm leading-relaxed text-muted-foreground overflow-hidden"
                    >
                      {ind.description}
                    </motion.p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--brand-cyan)] group-hover:gap-3 transition-all duration-500">
                      <span>View details</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Detail Sections ────────────────────────── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="space-y-24">
            {industries.map((ind, idx) => (
              <Reveal key={ind.name} delay={idx % 2 === 0 ? 0 : 0.1}>
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border">
                          <img
                            src={`https://images.unsplash.com/photo-${1552664730 + idx * 1000}?q=80&w=1600&auto=format&fit=crop`}
                            alt={`${ind.name} technology solutions`}
                            loading="lazy"
                            width={1600}
                            height={1067}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                        </div>
                      </div>
                      <div>
                        <SectionHeading index={`0${idx + 2}`} eyebrow={ind.name} title={<>{ind.name}</>} />
                        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{ind.description}</p>
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                          {ind.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                              <span className="h-2 w-2 rounded-full bg-[var(--brand-cyan)]" />
                              <span className="text-sm font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                        <MagneticButton
                          href={`/what-we-do/industries/${ind.slug}`}
                          className="mt-8 inline-flex"
                        >
                          Explore {ind.name}
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
                              src={`https://images.unsplash.com/photo-${1552664730 + idx * 1000}?q=80&w=1600&auto=format&fit=crop`}
                              alt={`${ind.name} technology solutions`}
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
                        <SectionHeading index={`0${idx + 2}`} eyebrow={ind.name} title={<>{ind.name}</>} />
                        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{ind.description}</p>
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                          {ind.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                              <span className="h-2 w-2 rounded-full bg-[var(--brand-cyan)]" />
                              <span className="text-sm font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                        <MagneticButton
                          href={`/what-we-do/industries/${ind.slug}`}
                          className="mt-8 inline-flex"
                        >
                          Explore {ind.name}
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
                <p className="eyebrow">Find your industry</p>
                <h2 className="display-section mt-6">
                  Don't See Your <span className="text-gradient">Sector Listed?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Our expertise extends beyond these ten core industries. Contact us to discuss your specific domain challenges.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Start a Conversation
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

      {/* ── Child Routes Outlet ─────────────────────────────── */}
      <Outlet />
    </MainLayout>
  );
}