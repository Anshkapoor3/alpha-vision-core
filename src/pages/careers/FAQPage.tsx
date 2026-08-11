import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  Search,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/alpha/SectionHeading";
import { Reveal } from "@/components/alpha/Reveal";
import { MagneticButton } from "@/components/alpha/MagneticButton";
import { Counter } from "@/components/alpha/Counter";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2400&auto=format&fit=crop";

const faqs = [
  {
    question: "What does Alpha Technologies specialize in?",
    answer:
      "Alpha Technologies specializes in providing innovative tech solutions and services across various industries. We offer a wide range of products, including software applications, hardware systems, cybersecurity solutions, cloud integration, and data analytics platforms.",
  },
  {
    question: "How long has Alpha Technologies been in business?",
    answer:
      "Alpha Technologies has been operating for over 25 years, establishing itself as a trusted leader in the tech industry.",
  },
  {
    question: "What sets Alpha Technologies apart from other tech companies?",
    answer:
      "Alpha Technologies stands out for its commitment to innovation, customer-centric approach, and a culture of collaboration. We prioritize delivering reliable, scalable, and user-friendly solutions while fostering an environment that encourages creativity, continuous learning, and growth.",
  },
  {
    question: "Does Alpha Technologies offer support and maintenance for its products?",
    answer:
      "Yes, we provide comprehensive support and maintenance services for our products. Our dedicated support team is available to assist with any inquiries, technical issues, or updates to ensure a smooth and uninterrupted experience for our clients.",
  },
  {
    question:
      "Is Alpha Technologies involved in corporate social responsibility (CSR) initiatives?",
    answer:
      "Yes, at Alpha Technologies, we believe in giving back to society. We actively engage in corporate social responsibility initiatives, supporting causes such as education, environmental sustainability, and community development.",
  },
  {
    question: "How can I join the team at Alpha Technologies?",
    answer:
      "We are always looking for talented individuals to join our team. Please visit our careers page on our website to explore current job openings and submit your application. We value diversity and seek individuals who are passionate, innovative, and ready to make a difference in the tech industry.",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Trophy Wins" },
  { value: 550, suffix: "+", label: "Happy Customers" },
  { value: 115, suffix: "+", label: "Proficient Staff" },
];

function AccordionItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="group glass-panel relative overflow-hidden rounded-[1.5rem] border border-border transition-all duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="relative flex-1 text-lg font-medium leading-relaxed text-foreground pr-12">
          {question}
        </span>
        <motion.div
          className="relative flex-shrink-0 h-8 w-8 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-border/50">
              <p className="text-base leading-relaxed text-muted-foreground">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative max-w-2xl mx-auto mb-16">
      <label htmlFor="faq-search" className="sr-only">
        Search FAQ
      </label>
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
        aria-hidden
      />
      <input
        id="faq-search"
        type="search"
        placeholder="Search questions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-4 rounded-[1.5rem] border border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300"
        aria-label="Search FAQ"
      />
    </div>
  );
}

export function FAQPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <MainLayout>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" ref={heroRef} className="relative min-h-[70vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Frequently asked questions and support"
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
            <span className="text-foreground">FAQ</span>
          </motion.nav>

          <h1 className="display-hero mt-8 max-w-[18ch]">
            {["FAQ"].map((line, i) => (
              <span key={`${line}-${i}`} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.28 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 0 ? <span className="text-gradient italic">{line}</span> : line}
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
              Have questions? Explore our comprehensive FAQ section to find clear and concise
              answers to the most frequently asked questions about Alpha services, solutions, and
              support. We're here to help you get the information you need, quickly and easily.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FAQ Section ─────────────────────────────────────── */}
      <section id="faq" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 aurora opacity-40" aria-hidden />
        <div className="relative mx-auto w-[min(1400px,92vw)]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading
                index="01"
                eyebrow="Have questions?"
                title={
                  <>
                    Here, you\u2019ll find answers to common questions about our company, products,
                    support, careers, and more. If you have any specific queries that are not
                    covered here, our customer support team is ready to assist you.
                  </>
                }
                align="center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SearchBar />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4" role="list" aria-label="Frequently asked questions">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                  />
                ))}
              </div>
              {filteredFAQs.length === 0 && (
                <div className="text-center py-16 glass-panel rounded-[2rem] border border-border p-8">
                  <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No matching questions found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse all questions below.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
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
                <p className="eyebrow">Still have questions</p>
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
                    href="/careers/faq"
                    variant="ghost"
                    className="px-12 py-5 text-base"
                  >
                    Back to FAQ
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
