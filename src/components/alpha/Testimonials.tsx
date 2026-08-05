import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const quotes = [
  {
    quote:
      "They inherited an estate three vendors had already failed to stabilise. Eleven months later our board stopped talking about infrastructure entirely.",
    name: "Elena Marchetti",
    role: "Group CIO, Northbank",
    length: "2:14",
  },
  {
    quote:
      "Alpha is the only partner who arrived with a number attached to every recommendation, then held themselves to it in writing.",
    name: "Daniel Okoro",
    role: "COO, Meridian Health",
    length: "3:02",
  },
  {
    quote:
      "Our AI programme had been stuck in pilot for two years. They shipped a governed platform in one quarter and the regulator signed off.",
    name: "Priya Raghavan",
    role: "Chief Data Officer, Stratos Telecom",
    length: "1:48",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const active = quotes[i]!;

  const go = (dir: number) => setI((prev) => (prev + dir + quotes.length) % quotes.length);

  return (
    <section className="relative py-32 lg:py-44">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <SectionHeading index="08" eyebrow="Client voice" title="What partnership sounds like" />

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border p-10 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.2]">
                  “{active.quote}”
                </p>
                <footer className="mt-12">
                  <p className="text-sm">{active.name}</p>
                  <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">{active.role.toUpperCase()}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-12 flex items-center gap-4">
              <button
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-[var(--brand-cyan)]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-[var(--brand-cyan)]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {quotes.map((q, idx) => (
              <button
                key={q.name}
                onClick={() => setI(idx)}
                className={`group relative flex-1 overflow-hidden rounded-[1.5rem] border p-7 text-left transition-all duration-500 ${
                  idx === i
                    ? "border-[color-mix(in_oklab,var(--brand-cyan)_50%,transparent)] bg-[color-mix(in_oklab,var(--brand)_14%,transparent)]"
                    : "border-border hover:border-[color-mix(in_oklab,var(--brand-cyan)_35%,transparent)]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full [background:var(--gradient-brand)]">
                    <Play className="h-3.5 w-3.5 fill-current text-primary-foreground" />
                  </span>
                  <span>
                    <span className="block text-sm">{q.name}</span>
                    <span className="block text-xs text-muted-foreground">Video · {q.length}</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
