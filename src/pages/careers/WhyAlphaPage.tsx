import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Award,
  Lightbulb,
  Globe,
  Users,
  Heart,
  Rocket,
  Coffee,
  CheckCircle2,
  Zap,
  Target,
  Briefcase,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";

const heroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop";

const whyChooseItems = [
  {
    icon: Award,
    title: "Culture of Excellence",
    description:
      "We strive for excellence in everything we do, from delivering top-notch solutions to providing exceptional service to our clients. When you join Alpha Technologies, you become part of a culture that values excellence, integrity, and continuous improvement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We are at the forefront of technological innovation, constantly exploring new technologies and trends to stay ahead of the curve. Join us and be part of a team that's driving innovation and shaping the future of technology.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Alpha Technologies works with clients around the world to solve complex challenges and drive positive change. When you join our team, you'll have the opportunity to work on projects that have a real impact on businesses, industries, and communities globally.",
  },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
];

const benefits = [
  {
    icon: Rocket,
    title: "Embark on an Exciting Journey",
    description:
      "By joining our team, you will embark on an exciting journey of growth, innovation, and collaboration. We offer a stimulating work environment where creativity thrives and boundaries are pushed. With a supportive culture that prioritizes your personal and professional development, you will be empowered to reach your full potential and achieve new heights in your career.",
  },
  {
    icon: Coffee,
    title: "Embrace Flexibility and Work-Life Balance",
    description:
      "We understand that a fulfilling career goes hand in hand with a balanced personal life. That's why we prioritize flexibility and work-life balance for our employees. We believe that when individuals have the freedom to manage their time and responsibilities, they can perform at their best. Whether it's through remote work options, flexible schedules, or wellness programs, we are committed to supporting your well-being and ensuring that you can thrive both professionally and personally.",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Wins" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

export function WhyAlphaPage() {
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
            alt="Alpha team collaboration and innovation"
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
            <span className="text-foreground">Why Alpha</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["Why", "Alpha?"].map((line, i) => (
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
              Explore the unique benefits of joining Alpha Technologies, from our commitment to
              professional development and inclusive culture to our innovative approach and
              industry-leading solutions. Learn how we support our team members with opportunities
              for growth, continuous learning, and a collaborative work environment. Discover why
              businesses trust us to deliver exceptional results through our expertise,
              customer-centric approach, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              Get A Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Why Choose Alpha ────────────────────────────────── */}
      <section id="why-choose" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  index="01"
                  eyebrow="Our promise"
                  title={
                    <>
                      Why Choose <span className="text-gradient">Alpha Technologies?</span>
                    </>
                  }
                />
                <Reveal delay={0.12}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    Join us and become part of a team that is revolutionizing the tech industry
                    while making a positive impact on the world. At Alpha, we offer unparalleled
                    opportunities for individuals looking to make their mark in the dynamic and
                    ever-evolving world of technology.
                  </p>
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
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                      alt="Team collaboration and technology innovation"
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

          <div className="mt-20 space-y-24">
            {whyChooseItems.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                          <item.icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-7 text-3xl font-medium tracking-tight">{item.title}</h3>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <div className="relative">
                        <div
                          className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                          aria-hidden
                        />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border">
                          <img
                            src={cultureImages[idx]}
                            alt={`${item.title} at Alpha Technologies`}
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
                          <div
                            className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                            aria-hidden
                          />
                          <div className="relative overflow-hidden rounded-[2rem] border border-border">
                            <img
                              src={cultureImages[idx]}
                              alt={`${item.title} at Alpha Technologies`}
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
                          <item.icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-7 text-3xl font-medium tracking-tight">{item.title}</h3>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture of Collaboration ────────────────────────── */}
      <section id="culture" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <SectionHeading
            index="02"
            eyebrow="Our culture"
            title={
              <>
                A Culture of <span className="text-gradient">Collaboration and Inclusivity</span>
              </>
            }
            lede="In our dynamic and inclusive work environment, your unique contributions are not only valued but celebrated. We believe that diverse perspectives and ideas fuel innovation, and we strive to create a space where everyone feels empowered to be their authentic selves."
            align="center"
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Collaborative Spirit",
                desc: "Cross-functional teams working together to solve complex challenges",
              },
              {
                icon: Heart,
                title: "Inclusive Environment",
                desc: "Diverse perspectives celebrated, authentic selves welcomed",
              },
              {
                icon: Zap,
                title: "Innovation Through Teamwork",
                desc: "Groundbreaking solutions born from collective creativity",
              },
              {
                icon: Target,
                title: "Shared Purpose",
                desc: "United by a mission to deliver exceptional results",
              },
              {
                icon: Award,
                title: "Continuous Learning",
                desc: "Professional development and growth opportunities",
              },
              {
                icon: Briefcase,
                title: "Career Advancement",
                desc: "Clear pathways for progression and leadership",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
                  />
                  <div className="relative">
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 text-xl font-medium">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
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
            index="03"
            eyebrow="Your growth"
            title={
              <>
                Embark on an <span className="text-gradient">Exciting Journey</span>
              </>
            }
            lede="We offer a stimulating work environment where creativity thrives and boundaries are pushed. With a supportive culture that prioritizes your personal and professional development, you will be empowered to reach your full potential."
            align="center"
          />

          <div className="mt-20 space-y-24">
            {benefits.map((benefit, idx) => (
              <Reveal key={benefit.title} delay={idx * 0.1}>
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  {idx % 2 === 0 ? (
                    <>
                      <div>
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]">
                          <benefit.icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-7 text-3xl font-medium tracking-tight">
                          {benefit.title}
                        </h3>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                      <div className="relative">
                        <div
                          className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                          aria-hidden
                        />
                        <div className="relative overflow-hidden rounded-[2rem] border border-border">
                          <img
                            src={cultureImages[idx + 1]}
                            alt={`${benefit.title} at Alpha`}
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
                          <div
                            className="absolute -inset-4 rounded-[2.5rem] aurora opacity-50"
                            aria-hidden
                          />
                          <div className="relative overflow-hidden rounded-[2rem] border border-border">
                            <img
                              src={cultureImages[idx + 1]}
                              alt={`${benefit.title} at Alpha`}
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
                          <benefit.icon className="h-6 w-6" />
                        </span>
                        <h3 className="mt-7 text-3xl font-medium tracking-tight">
                          {benefit.title}
                        </h3>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                          {benefit.description}
                        </p>
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
      <section id="cta" className="relative overflow-hidden py-32 lg:py-44">
        <div className="mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
              <div className="absolute inset-0 aurora opacity-70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" />
              <div className="relative px-8 py-20 text-center lg:px-20 lg:py-28">
                <p className="eyebrow">Ready to make a difference</p>
                <h2 className="display-section mt-6">
                  Ready to Make a <span className="text-gradient">Difference?</span>
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Join leading organizations around the globe who trust Alpha Technologies to
                  deliver innovative solutions that drive success. Contact us today to learn more
                  about how we can help your organization thrive in today's competitive landscape.
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
                    View Open Positions
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Need More Info ──────────────────────────────────── */}
      <section id="need-info" className="relative overflow-hidden py-32 lg:py-44">
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
                    href="/careers/why-alpha"
                    variant="ghost"
                    className="px-12 py-5 text-base"
                  >
                    Back to Why Alpha
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
