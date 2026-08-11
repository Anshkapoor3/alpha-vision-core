import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const tracks = [
  { title: "Cloud Computing", weeks: "12 weeks", cohort: "AWS · Azure", seats: "18 per cohort" },
  { title: "Cyber Security", weeks: "10 weeks", cohort: "Security · Compliance", seats: "20 per cohort" },
  { title: "Data Analytics", weeks: "8 weeks", cohort: "Data · Analytics", seats: "16 per cohort" },
  { title: "Software Development", weeks: "6 weeks", cohort: "Development · DevOps", seats: "24 per cohort" },
];

export function Training() {
  return (
    <section id="academy" className="relative overflow-hidden py-32 lg:py-44">
      <div className="mx-auto grid w-[min(1400px,92vw)] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            index="09"
            eyebrow="IT Training"
            title={
              <>
                We leave behind <span className="text-gradient">capability</span>
              </>
            }
            lede="Alpha IT Training empowers your teams with the skills they need to succeed in today's technology landscape. From cloud to security, we build capability that lasts."
          />
          <Reveal delay={0.2}>
            <div className="mt-12">
              <MagneticButton href="https://trainings.alphaitms.com/" variant="ghost">
                Explore IT Training
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 rounded-[3rem] opacity-60 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 32%, transparent), transparent)",
            }}
          />
          <div className="relative space-y-4">
            {tracks.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 14 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="glass-panel flex flex-wrap items-center justify-between gap-6 rounded-2xl px-8 py-7"
                >
                  <div>
                    <h3 className="text-lg font-medium">{t.title}</h3>
                    <p className="mt-2 text-xs tracking-[0.16em] text-muted-foreground">{t.cohort.toUpperCase()}</p>
                  </div>
                  <div className="flex items-center gap-8 text-xs text-muted-foreground">
                    <span>{t.weeks}</span>
                    <span>{t.seats}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
