import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Cpu,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Link2,
  Mail,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";
const overviewImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop";
const visionImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";
const missionImage =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop";

const focusCards = [
  {
    icon: Cpu,
    title: "Cutting-Edge Solutions",
    description:
      "We deliver advanced technological solutions tailored to your business needs.",
  },
  {
    icon: Globe2,
    title: "Diverse Industry Expertise",
    description:
      "Our team brings expertise across multiple industries to provide relevant solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Social Impact",
    description:
      "We strive to create lasting positive change in the communities we serve.",
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    description:
      "We focus on your needs, ensuring our solutions are aligned with your goals.",
  },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously push boundaries to deliver forward-thinking solutions that keep our clients ahead of the curve.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, ensuring every deliverable reflects quality and precision.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as one team with our clients and partners, combining expertise to achieve shared success.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with transparency and honesty, building trust through every interaction.",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "NMSDC",
    description: "National Minority Supplier Development Council",
  },
  {
    icon: Medal,
    title: "MBE",
    description: "Minority Business Enterprise",
  },
  {
    icon: Award,
    title: "WBE",
    description: "Women Business Enterprise",
  },
  {
    icon: ShieldCheck,
    title: "OSD",
    description: "Office of Supplier Diversity",
  },
];

const stats = [
  { value: 20, prefix: "", suffix: "+", label: "Years Experience" },
  { value: 3, prefix: "", suffix: "", label: "Continents" },
  { value: 6, prefix: "", suffix: "", label: "Countries" },
  { value: 1000, prefix: "", suffix: "+", label: "Skilled Employees" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["IT Park, Plot ITC 15, Sector 67", "Sahibzada Ajit Singh Nagar, Punjab 160062"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["it.training@alphait.us"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["9056739082"],
  },
];

const quickLinks = [
  { label: "Overview", href: "/who-we-are/overview" },
  { label: "Leadership", href: "/who-we-are/leadership" },
  { label: "About Us", href: "/who-we-are/about-us" },
  { label: "Global Presence", href: "/who-we-are/global-presence" },
  { label: "Contact", href: "#contact" },
];

export function Overview() {
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
            <span className="eyebrow">Who We Are</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Overview</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[16ch]">
            {["Enterprise technology,", "built on", "trust."].map((line, i) => (
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
                Alpha IT Managed Services is a global technology leader delivering
                comprehensive data solutions, advanced analytics, and secure managed
                services that empower organizations to make data-driven decisions
                with confidence.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="#overview">
                  Discover Alpha
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
                <Sparkles className="h-4 w-4 text-[var(--brand-cyan)]" />
                Global presence at a glance
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl font-medium tracking-tight">
                      <Counter
                        to={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {s.label}
                    </p>
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

      {/* ── Company Overview ───────────────────────────────── */}
      <section id="overview" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src={overviewImage}
                    alt="Alpha enterprise team collaborating on data strategy"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="glass-panel rounded-[1.5rem] p-6">
                      <div className="font-display text-4xl font-medium">
                        <Counter to={20} suffix="+" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        Years of enterprise technology leadership
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                index="01"
                eyebrow="Company overview"
                title={
                  <>
                    Overview
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  We provide comprehensive data solutions to maximize the value of your
                  data. With advanced analytics, seamless integration, and secure
                  management, we empower your organization to make data-driven decisions
                  that foster success and innovation.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="#focus">
                    Explore our focus
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alpha Technologies: Empowering Business Success ── */}
      <section id="focus" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="Our focus"
            title={
              <>
                Alpha Technologies:
                <br />
                <span className="text-gradient">Empowering Business Success</span>
              </>
            }
            lede="Our company supports businesses of all sizes with technology that drives measurable outcomes. We combine deep industry knowledge with innovative solutions to help our clients thrive in a rapidly evolving digital landscape."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 4) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-7 text-xl font-medium">{c.title}</h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Core Values ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="What we stand for"
            title={
              <>
                Our <span className="text-gradient">Core Values</span>
              </>
            }
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 4) * 0.1}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_10%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_20%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
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

          <Reveal delay={0.2}>
            <p className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
              We foster innovation, strive for excellence, emphasize collaboration, and
              uphold unwavering integrity in everything we do — these principles guide
              every decision, every engagement, and every relationship we build.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Vision ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src={visionImage}
                    alt="Alpha vision for the future of enterprise technology"
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
                eyebrow="Where we are headed"
                title={
                  <>
                    Our <span className="text-gradient">Vision</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  To be the most trusted technology partner for enterprises worldwide,
                  recognized for our innovation, integrity, and the lasting value we
                  create for our clients, our people, and the communities we serve.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="#mission">
                    Our mission
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────── */}
      <section id="mission" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="lg:order-2">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                  <div className="relative overflow-hidden rounded-[2rem] border border-border">
                    <img
                      src={missionImage}
                      alt="Alpha team executing on our mission"
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

            <div className="lg:order-1">
              <SectionHeading
                index="05"
                eyebrow="Why we exist"
                title={
                  <>
                    Our <span className="text-gradient">Mission</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  Our mission is to empower organizations with technology that drives
                  growth, efficiency, and innovation. We are committed to delivering
                  solutions that not only meet today's challenges but also anticipate
                  tomorrow's opportunities — enabling our clients to lead with confidence
                  in a data-driven world.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards & Achievements ──────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="06"
            eyebrow="Certifications & recognition"
            title={
              <>
                Awards & <span className="text-gradient">Achievements</span>
              </>
            }
            lede="Our certifications reflect our commitment to diversity, excellence, and the highest standards of business practice."
            align="center"
          />

          <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certifications.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 4) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="relative mt-6 text-2xl font-medium tracking-tight">
                      {c.title}
                    </h3>
                    <p className="relative mt-3 text-xs leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
              These certifications demonstrate our dedication to supplier diversity and
              our commitment to fostering an inclusive business ecosystem. We are proud
              to be recognized as a certified minority-owned enterprise delivering
              world-class technology solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Statistics ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="07"
            eyebrow="By the numbers"
            title={
              <>
                A track record of <span className="text-gradient">scale</span>
              </>
            }
            align="center"
          />

          <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 0.1}>
                <div className="glass-panel h-full rounded-[1.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                  <div className="font-display text-5xl font-medium tracking-tight">
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
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
                <p className="eyebrow">Get in touch</p>
                <h2 className="display-section mt-6">
                  Need More <span className="text-gradient">Information?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Ready to elevate your business? Contact us today to unlock your full
                  potential!
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

      {/* ── Contact Information ────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="08"
            eyebrow="Reach us"
            title={
              <>
                Contact <span className="text-gradient">Information</span>
              </>
            }
            lede="We are here to help. Reach out through any of the channels below and our team will respond promptly."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 4) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-7 text-xl font-medium">{c.title}</h3>
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

            <Reveal delay={0.3}>
              <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  aria-hidden
                />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                  <Link2 className="h-5 w-5" />
                </span>
                <h3 className="relative mt-7 text-xl font-medium">Quick Links</h3>
                <ul className="relative mt-4 space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 text-[var(--brand-cyan)] transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}