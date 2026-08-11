import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import {
  ArrowUpRight,
  Building2,
  Gauge,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop";
const storyImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop";
const visionImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Driving forward-thinking solutions that keep our clients ahead of the curve.",
  },
  {
    icon: Gauge,
    title: "Efficiency",
    description:
      "Delivering smart, streamlined strategies that maximize results with minimal waste.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "Upholding the highest standards to ensure quality and lasting impact.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description:
      "Building strong, collaborative relationships that foster shared growth and success.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Increased Operational Efficiencies",
    description:
      "Streamline your operations with optimized processes and intelligent automation that reduce friction and accelerate delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Operational Risks",
    description:
      "Mitigate threats with robust security frameworks, proactive monitoring, and compliance-ready infrastructure.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Operational Costs",
    description:
      "Lower your total cost of ownership through efficient resource allocation, cloud optimization, and managed services.",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["2100 McKinney Ave", "Dallas, Texas 75201"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@alphaitms.com", "briefings@alphaitms.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 800 555 0134", "+1 214 555 0198"],
  },
];

const quickLinks = [
  { label: "Why Alpha", href: "/#why-alpha" },
  { label: "Our Global Presence", href: "/#global-impact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Our Services", href: "/#services" },
  { label: "Managed IT Services", href: "/#services" },
  { label: "Software and Mobile App Development", href: "/#services" },
  { label: "IT Training", href: "https://trainings.alphaitms.com/" },
];

export function AboutUs() {
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
            alt="Modern corporate headquarters with glass architecture"
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
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <a href="/" className="eyebrow transition-colors hover:text-foreground">
              Home
            </a>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">About Us</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[16ch]">
            {["About", "Us."].map((line, i) => (
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

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Tech solutions that drive Change
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="#story">
                  Our story
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </MagneticButton>
                <MagneticButton href="#contact" variant="ghost">
                  Get A Quote
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
                <Building2 className="h-4 w-4 text-[var(--brand-cyan)]" />
                Who we are
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Alpha IT Managed Services is built on the core values of innovation,
                efficiency, and excellence. We deliver creative solutions tailored to
                your business needs, while striving to make a lasting, positive impact
                on the communities we serve.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Innovation", "Efficiency", "Excellence", "Community"].map((b) => (
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

      {/* ── Company Story ───────────────────────────────────── */}
      <section id="story" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src={storyImage}
                    alt="Alpha team collaborating on enterprise strategy"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="glass-panel rounded-[1.5rem] p-6">
                      <div className="font-display text-4xl font-medium">
                        <span className="text-gradient">Alpha</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        IT Managed Services — built on innovation, efficiency, and excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                index="01"
                eyebrow="Our story"
                title={
                  <>
                    Who <span className="text-gradient">we are</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  Alpha IT Managed Services is built on the core values of innovation,
                  efficiency, and excellence. We deliver creative solutions tailored to
                  your business needs, while striving to make a lasting, positive impact
                  on the communities we serve.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="#values">
                    Our values
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────────────── */}
      <section id="values" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="What drives us"
            title={
              <>
                Our <span className="text-gradient">Values</span>
              </>
            }
            lede="The principles that guide every decision, every engagement, and every relationship we build."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-7 text-xl font-medium">{v.title}</h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src={visionImage}
                    alt="Alpha vision for the future of technology"
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
                index="03"
                eyebrow="Where we are headed"
                title={
                  <>
                    Our <span className="text-gradient">Vision</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  We aim to develop customized or industry standard strategies and
                  solutions as per our client requirements.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Elevate your business with our tailored services that blend innovation
                  with expertise. Whether you need cutting-edge solutions or
                  industry-specific insights.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="#benefits">
                    Business benefits
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Benefits ───────────────────────────────── */}
      <section id="benefits" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="04"
            eyebrow="What you gain"
            title={
              <>
                Business <span className="text-gradient">Benefits</span>
              </>
            }
            lede="Partnering with Alpha delivers measurable outcomes across your entire technology estate."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={(i % 3) * 0.1}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_10%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_20%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-7 text-xl font-medium">{b.title}</h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact Section ─────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="05"
            eyebrow="Reach us"
            title={
              <>
                Contact <span className="text-gradient">Information</span>
              </>
            }
            lede="We are here to help. Reach out through any of the channels below and our team will respond promptly."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="relative mt-6 text-xl font-medium">{c.title}</h3>
                    <div className="relative mt-4 space-y-2">
                      {c.lines.map((line) => (
                        <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quick Links ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="06"
            eyebrow="Navigate"
            title={
              <>
                Quick <span className="text-gradient">Links</span>
              </>
            }
            align="center"
          />

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, i) => (
              <Reveal key={link.label} delay={(i % 3) * 0.1}>
                <a
                  href={link.href}
                  className="group glass-panel relative flex h-full items-center justify-between gap-4 overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                    aria-hidden
                  />
                  <span className="relative text-lg font-medium">{link.label}</span>
                  <ArrowUpRight className="relative h-5 w-5 shrink-0 text-[var(--brand-cyan)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
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
                <p className="eyebrow">Get started</p>
                <h2 className="display-section mt-6">
                  Ready to transform <span className="text-gradient">your business?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Contact our experts today.
                </p>
                <div className="mt-12 flex justify-center">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Get A Quote
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
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