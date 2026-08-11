import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-abstract.jpg";
import { cn } from "@/lib/utils";
import { ParticleField } from "./ParticleField";
import { MagneticButton } from "./MagneticButton";
import { Counter } from "./Counter";

export type HeroStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

type HeroCta = {
  label: string;
  href: string;
  variant?: "solid" | "ghost";
};

type HeroProps = {
  id?: string;
  eyebrow?: string;
  titleLines?: string[];
  gradientLineIndex?: number;
  lede?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  panelLabel?: string;
  stats?: HeroStat[];
  badges?: string[];
  marqueeItems?: string[];
  showScrollCue?: boolean;
  imageAlt?: string;
};

const defaultStats: HeroStat[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Service Availability" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
];

const defaultBadges = ["AI-Powered", "Cloud-Native", "Enterprise-Grade", "24×7 Support"];

const defaultClients = [
  "HEALTHCARE",
  "EDUCATION",
  "MANUFACTURING",
  "RETAIL & E-COMMERCE",
  "BANKING & FINANCE",
  "LOGISTICS & TRANSPORTATION",
  "GOVERNMENT",
  "STARTUPS & SMES",
  "HOSPITALITY",
  "PROFESSIONAL SERVICES",
];

export function Hero({
  id = "top",
  eyebrow = "Enterprise Technology · AI · Cloud · Cybersecurity",
  titleLines = ["Transforming Businesses", "Through Intelligent", "Technology"],
  gradientLineIndex = 2,
  lede = "Alpha ITMS delivers enterprise-grade IT solutions, AI-powered automation, cloud services, software development, cybersecurity, and digital transformation to help organizations innovate, scale, and stay ahead in a rapidly evolving world.",
  primaryCta = { label: "Get a Free Consultation", href: "#contact" },
  secondaryCta = { label: "Explore Our Services", href: "#services", variant: "ghost" },
  panelLabel = "Enterprise impact at a glance",
  stats = defaultStats,
  badges = defaultBadges,
  marqueeItems = defaultClients,
  showScrollCue = true,
  imageAlt = "",
}: HeroProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id={id} ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt={imageAlt}
          aria-hidden={imageAlt ? undefined : true}
          width={1920}
          height={1280}
          className="h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
        <div className="absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" />
      </motion.div>

      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-[min(1400px,92vw)] pt-40 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>

        <h1 className="display-hero mt-8 max-w-[16ch]">
          {titleLines.map((line, i) => (
            <span key={`${line}-${i}`} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {i === gradientLineIndex ? <span className="text-gradient italic">{line}</span> : line}
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
            <p className="text-lg leading-relaxed text-muted-foreground">{lede}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={primaryCta.href} variant={primaryCta.variant ?? "solid"}>
                {primaryCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
              {secondaryCta ? (
                <MagneticButton href={secondaryCta.href} variant={secondaryCta.variant ?? "ghost"}>
                  {secondaryCta.label}
                </MagneticButton>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel grain animate-float rounded-[2rem] p-8"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[var(--brand-cyan)]" />
              {panelLabel}
            </div>
            <div className={cn("mt-8 grid gap-8", stats.length > 3 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-3")}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-medium tracking-tight">
                    <Counter
                      to={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            {badges.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.14em] text-muted-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.div>
        </div>
      </motion.div>

      {marqueeItems.length > 0 ? (
        <div className="relative z-10 mx-auto w-[min(1400px,92vw)]">
          <div className="hairline" />
          <div className="group flex overflow-hidden py-6">
            <div className="flex shrink-0 animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused]">
              {[...marqueeItems, ...marqueeItems].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="whitespace-nowrap font-display text-sm tracking-[0.3em] text-muted-foreground/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {showScrollCue ? (
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
          <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">SCROLL</span>
          <span className="relative h-14 w-px overflow-hidden bg-border">
            <span className="absolute inset-x-0 h-6 animate-scroll-cue bg-[var(--brand-cyan)]" />
          </span>
        </div>
      ) : null}
    </section>
  );
}
