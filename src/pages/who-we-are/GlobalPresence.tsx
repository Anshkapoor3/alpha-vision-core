import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";
import { ParticleField } from "@/components/alpha/ParticleField";
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Handshake,
  Landmark,
  Link2,
  Mail,
  MapPin,
  Network,
  Phone,
  Radar,
  Users,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";
const mapImage =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop";

const reachCards = [
  {
    number: "01",
    icon: Globe2,
    title: "Global Reach",
    description:
      "Alpha Technologies operates on a global scale, serving clients and collaborating with partners worldwide.",
  },
  {
    number: "02",
    icon: Landmark,
    title: "Local Adaptation",
    description:
      "We understand the importance of adapting to local market dynamics and requirements, ensuring our solutions are relevant and effective in every region we serve.",
  },
  {
    number: "03",
    icon: Network,
    title: "International Support",
    description:
      "Our global presence ensures that we can provide comprehensive support to our clients, no matter where they are located.",
  },
  {
    number: "04",
    icon: Users,
    title: "Cultural Diversity",
    description:
      "Alpha Technologies' global presence brings together a diverse team of professionals from different cultures and backgrounds, enriching our perspective and approach.",
  },
  {
    number: "05",
    icon: Radar,
    title: "Market Insights",
    description:
      "With a global footprint, we have access to valuable market insights and trends from around the world, enabling us to make informed decisions and stay ahead of the curve.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Collaborative Partnerships",
    description:
      "Our global presence facilitates collaborative partnerships with leading organizations, allowing us to leverage collective expertise and deliver exceptional value.",
  },
];

const offices = [
  {
    region: "America",
    icon: Building2,
    city: "Wilmington, DE (Headquarters)",
    size: "89,000 Sqft",
    points: [
      "Prime location in Delaware",
      "Modern office facilities",
      "Networking opportunities with the tech community",
    ],
  },
  {
    region: "Europe",
    icon: Building2,
    city: "Poland and Tbilisi",
    size: "15,000 Sqft",
    points: [
      "Prime tech hub location",
      "Skilled professionals contributing to innovation",
    ],
  },
  {
    region: "Asia",
    icon: Building2,
    city: "Chandigarh, North India",
    size: "150,000 Sqft",
    points: [
      "Strategic location",
      "Access to talented workforce",
      "Thriving IT industry",
    ],
  },
  {
    region: "Asia",
    icon: Building2,
    city: "Hyderabad, India",
    size: "5050 Sqft",
    points: [
      "Strategically situated in a thriving business hub",
      "Access to vast talent pool",
      "Vibrant tech ecosystem",
    ],
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Win" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Our Proficient Staff" },
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
  { label: "Contact", href: "#contact" },
];

const mapNodes = [
  { name: "Wilmington", top: "30%", left: "24%" },
  { name: "Poland", top: "26%", left: "48%" },
  { name: "Tbilisi", top: "38%", left: "55%" },
  { name: "Chandigarh", top: "48%", left: "68%" },
  { name: "Hyderabad", top: "56%", left: "70%" },
];

export function GlobalPresence() {
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
            alt="Global network visualization across continents"
            width={2400}
            height={1600}
            className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
          <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
        </motion.div>

        <div className="absolute inset-0 opacity-70">
          <ParticleField />
        </div>

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-40 pb-16"
        >
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
          >
            <a href="/" className="eyebrow transition-colors hover:text-foreground">
              Home
            </a>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="eyebrow">Who We Are</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Global Presence</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[16ch]">
            {["Our Global", "Presence."].map((line, i) => (
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
                At Alpha Technologies, our impact knows no bounds. With a presence in key
                markets across the globe, we're dedicated to connecting communities and
                driving progress on a global scale.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="#offices">
                  Explore Locations
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </MagneticButton>
                <MagneticButton href="#contact" variant="ghost">
                  Contact Us
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
                <Globe2 className="h-4 w-4 text-[var(--brand-cyan)]" />
                Global footprint at a glance
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl font-medium tracking-tight">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["America", "Europe", "Asia"].map((b) => (
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

      {/* ── Global Presence Introduction ─────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] border border-border">
                  <img
                    src={mapImage}
                    alt="World map illustration showing Alpha global operations"
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" />
                  {mapNodes.map((n, i) => (
                    <motion.div
                      key={n.name}
                      className="absolute"
                      style={{ top: n.top, left: n.left }}
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-cyan)] opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-cyan)]" />
                      </span>
                      <span className="mt-2 hidden whitespace-nowrap text-[0.6rem] tracking-[0.2em] text-foreground/80 sm:block">
                        {n.name.toUpperCase()}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                index="01"
                eyebrow="Global presence"
                title={
                  <>
                    Strong <span className="text-gradient">Global Presence</span>
                  </>
                }
              />
              <Reveal delay={0.12}>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  We have established a network of operations that spans across continents,
                  enabling us to deliver our innovative solutions to businesses and
                  individuals around the globe.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="#reach">
                    Explore our reach
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our International Reach ──────────────────────────── */}
      <section id="reach" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="International reach"
            title={
              <>
                Our <span className="text-gradient">International Reach</span>
              </>
            }
            lede="A global network of operations delivering innovative solutions across continents."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reachCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.number} delay={(i % 3) * 0.1}>
                  <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <div className="relative flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-2xl font-medium text-muted-foreground/40">
                        {c.number}
                      </span>
                    </div>
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

      {/* ── Global Offices ───────────────────────────────────── */}
      <section id="offices" className="relative overflow-hidden py-32 lg:py-44">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Global offices"
            title={
              <>
                Where to <span className="text-gradient">Find Us</span>
              </>
            }
            lede="Our offices are strategically located in key markets across the globe, enabling us to serve our clients with local expertise and global reach."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {offices.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={`${o.region}-${o.city}`} delay={(i % 4) * 0.1}>
                  <div className="group glass-panel relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                      aria-hidden
                    />
                    <div className="relative flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="eyebrow">{o.region}</span>
                    </div>
                    <h3 className="relative mt-6 text-xl font-medium">{o.city}</h3>
                    <p className="relative mt-2 font-mono text-sm text-[var(--brand-cyan)]">
                      {o.size}
                    </p>
                    <ul className="relative mt-6 space-y-3">
                      {o.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-cyan)]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Global Statistics ────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="04"
            eyebrow="By the numbers"
            title={
              <>
                Global <span className="text-gradient">Statistics</span>
              </>
            }
            align="center"
          />

          <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 0.1}>
                <div className="glass-panel h-full rounded-[1.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                  <div className="font-display text-5xl font-medium tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call To Action ───────────────────────────────────── */}
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
                  Ready to take your business to new heights? Alpha IT is here to empower
                  you with cutting-edge solutions and expert guidance.
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

      {/* ── Contact Information ──────────────────────────────── */}
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