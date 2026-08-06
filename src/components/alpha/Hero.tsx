import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-abstract.jpg";
import { ParticleField } from "./ParticleField";
import { MagneticButton } from "./MagneticButton";
import { Counter } from "./Counter";

const stats = [
  { value: 340, suffix: "+", label: "Enterprise programs delivered" },
  { value: 99.98, suffix: "%", decimals: 2, label: "Platform availability" },
  { value: 27, suffix: "", label: "Countries operated in" },
];

const badges = ["ISO 27001", "SOC 2 Type II", "AWS Advanced", "Azure Expert MSP", "HIPAA", "GDPR"];

const clients = [
  "MERIDIAN HEALTH",
  "NORTHBANK",
  "VELOCITY LOGISTICS",
  "CALDERA ENERGY",
  "STRATOS TELECOM",
  "ARGENT RETAIL",
  "HELIOS MANUFACTURING",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden
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
          Enterprise Technology · Managed Operations · Applied AI
        </motion.p>

        <h1 className="display-hero mt-8 max-w-[16ch]">
          {["The infrastructure", "behind serious", "enterprises."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
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
              Alpha runs the cloud, data and AI systems that regulated industries cannot afford to get wrong. We take
              ownership of the estate, compress cost, and turn technology into measurable business advantage.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contact">
                Book an executive briefing
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
              <MagneticButton href="#work" variant="ghost">
                See the outcomes
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
              <ShieldCheck className="h-4 w-4 text-[var(--brand-cyan)]" />
              Live operating posture
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-medium tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
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
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-[min(1400px,92vw)]">
        <div className="hairline" />
        <div className="group flex overflow-hidden py-6">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
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

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">SCROLL</span>
        <span className="relative h-14 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 h-6 animate-scroll-cue bg-[var(--brand-cyan)]" />
        </span>
      </div>
    </section>
  );
}
