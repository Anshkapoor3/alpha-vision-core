import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  Send,
  Users,
  Rocket,
  CheckCircle2,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1521791136064-7986c292241b?q=80&w=2400&auto=format&fit=crop";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Wins" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

const howToApplySteps = [
  {
    step: "01",
    title: "Browse Openings",
    description:
      "Explore our current positions and find roles that match your skills and aspirations.",
  },
  {
    step: "02",
    title: "Submit Application",
    description:
      "Click on a job title and follow the instructions to submit your resume and relevant documents.",
  },
  {
    step: "03",
    title: "Team Review",
    description:
      "Our recruiting team reviews your application and assesses alignment with our needs.",
  },
  {
    step: "04",
    title: "Connect With Us",
    description:
      "If your qualifications match, we'll reach out to discuss next steps and schedule conversations.",
  },
];

export function ExploreJobsPage() {
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
            alt="Career opportunities and professional growth"
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
            <span className="eyebrow">Careers</span>
            <span className="text-[var(--brand-cyan)]" aria-hidden>
              ↓
            </span>
            <span className="text-foreground">Explore Jobs</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Explore", "Jobs"].map((line, i) => (
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
              At Alpha Technologies, we are always on the lookout for talented and passionate
              individuals to join our team. Browse our current job openings and find the perfect
              role that matches your skills, interests, and career aspirations. Whether you're a
              seasoned professional or just beginning your career journey, Alpha Technologies
              provides a dynamic and supportive environment where you can thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#openings">
              View Openings
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Career Introduction ─────────────────────────────── */}
      <section id="intro" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  index="01"
                  eyebrow="Your journey"
                  title={
                    <>
                      Your Future <span className="text-gradient">Starts Here</span>
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    Welcome to the Explore Jobs page at Alpha Technologies. Here, we invite you to
                    discover exciting career opportunities that align with your skills, interests,
                    and aspirations. Whether you're an experienced professional looking for your
                    next challenge or a recent graduate eager to kick-start your career, Alpha
                    Technologies offers a wide range of opportunities to grow, learn, and make a
                    meaningful impact.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <MagneticButton href="#openings" className="mt-8 inline-flex">
                    View Current Openings
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </Reveal>
              </div>

              <Reveal delay={0.1}>
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-[2rem] border border-border">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c292241b?q=80&w=1600&auto=format&fit=crop"
                      alt="Professional career growth and opportunities"
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

      {/* ── Current Openings ────────────────────────────────── */}
      <section id="openings" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="Opportunities"
            title={
              <>
                Current <span className="text-gradient">Openings</span>
              </>
            }
            lede="Explore our current job openings and find the perfect opportunity to take your career to the next level. Whether you're a software developer, project manager, data analyst, or marketing specialist, we have a variety of roles available across different departments and locations."
            align="center"
          />

          <div className="mt-20">
            <Reveal>
              <div className="glass-panel rounded-[2rem] border border-border p-12 md:p-16 text-center">
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] mx-auto mb-8">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-medium tracking-tight mb-6">
                  No Open Positions at This Time
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10">
                  We don't have any active job postings right now, but we're always interested in
                  connecting with talented individuals. Check back soon for new opportunities, or
                  join our talent community to be notified when positions open.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton href="/careers/why-alpha" variant="ghost" className="px-8 py-4">
                    Learn Why Alpha
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton href="#contact" className="px-8 py-4">
                    Get In Touch
                    <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How to Apply ────────────────────────────────────── */}
      <section id="apply" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="03"
            eyebrow="Application process"
            title={
              <>
                How to <span className="text-gradient">Apply</span>
              </>
            }
            lede="Our application process is designed to be straightforward and transparent. We value your time and want to ensure a smooth experience from application to offer."
            align="center"
          />

          <div className="mt-20">
            <div className="relative">
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--brand-cyan)] to-transparent"
                aria-hidden
              />
              <div className="space-y-16">
                {howToApplySteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.08}>
                    <div className="relative flex gap-8 md:gap-12">
                      <div className="relative flex-shrink-0 w-20 md:w-24 text-right pr-6">
                        <span className="font-display text-3xl md:text-4xl font-medium text-[var(--brand-cyan)]">
                          {step.step}
                        </span>
                        <div
                          className="absolute right-0 top-4 h-4 w-4 rounded-full border-4 border-background bg-[var(--brand-cyan)] z-10"
                          aria-hidden
                        />
                      </div>
                      <div className="flex-1 pt-2 md:pt-0">
                        <h3 className="text-2xl font-medium">{step.title}</h3>
                        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Build the Future Together ───────────────────────── */}
      <section id="future" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="04"
            eyebrow="Join us"
            title={
              <>
                Let's Build the <span className="text-gradient">Future Together</span>
              </>
            }
            lede="Ready to embark on a rewarding career journey with Alpha Technologies? Explore our current job openings and take the first step towards building a brighter future. Join us as we innovate, collaborate, and drive positive change in the world of technology."
            align="center"
          />

          <div className="mt-20">
            <Reveal>
              <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    At Alpha Technologies, we believe that our people are our greatest asset. We're
                    committed to creating an environment where innovation thrives, diverse
                    perspectives are valued, and every team member has the opportunity to grow and
                    make an impact.
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Whether you're developing cutting-edge solutions, managing complex
                    implementations, or supporting our clients' digital transformations, your work
                    at Alpha Technologies directly contributes to driving technological excellence
                    across industries worldwide.
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <MagneticButton href="#openings" className="inline-flex">
                      View Openings
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </MagneticButton>
                    <MagneticButton
                      href="/careers/why-alpha"
                      variant="ghost"
                      className="inline-flex"
                    >
                      Why Alpha
                    </MagneticButton>
                  </div>
                </div>

                <Reveal delay={0.1}>
                  <div className="relative">
                    <div
                      className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                      aria-hidden
                    />
                    <div className="relative overflow-hidden rounded-[2rem] border border-border">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                        alt="Team building the future together"
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
                <p className="eyebrow">Have questions</p>
                <h2 className="display-section mt-6">
                  Need More <span className="text-gradient">Information?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Ready to take your business to new heights? Alpha IT is here to empower you with
                  cutting-edge solutions and expert guidance. Whether you need website upgrades, IT
                  consulting, or cloud services, we've got you covered. Reach out to us today and
                  let's unlock your true potential together.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <MagneticButton href="#contact" className="px-12 py-5 text-base">
                    Get A Quote
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </MagneticButton>
                  <MagneticButton
                    href="/careers/explore-jobs"
                    variant="ghost"
                    className="px-12 py-5 text-base"
                  >
                    Back to Explore Jobs
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
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
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
