import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const offices = [
  { city: "Dallas", line: "Global HQ · 24/7 operations", detail: "2100 McKinney Ave, Texas" },
  { city: "London", line: "EMEA delivery hub", detail: "One Canada Square, Canary Wharf" },
  { city: "Bengaluru", line: "Engineering centre", detail: "Embassy Tech Village, Devarabeesanahalli" },
  { city: "Singapore", line: "APAC operations", detail: "Marina Bay Financial Centre" },
];

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "Alexandra Reid" },
  { name: "company", label: "Organisation", type: "text", placeholder: "Northbank Group" },
  { name: "email", label: "Work email", type: "email", placeholder: "a.reid@company.com" },
  { name: "phone", label: "Direct line", type: "tel", placeholder: "+1 555 0134" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Received — an Alpha principal will respond within one business day.");
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32 lg:py-44">
      <div className="absolute inset-0 aurora opacity-50" aria-hidden />
      <div className="relative mx-auto w-[min(1400px,92vw)]">
        <SectionHeading
          index="10"
          eyebrow="Start the conversation"
          title={
            <>
              Tell us what is <span className="text-gradient">not working</span>
            </>
          }
          lede="Executive briefings run 45 minutes. You leave with a written point of view on your estate, whether or not we work together."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-panel rounded-[2rem] p-8 lg:p-12">
              <div className="grid gap-7 sm:grid-cols-2">
                {fields.map((f) => (
                  <label key={f.name} className="group block">
                    <span className="eyebrow">{f.label}</span>
                    <input
                      required
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors duration-500 placeholder:text-muted-foreground/50 focus:border-[var(--brand-cyan)]"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-9 block">
                <span className="eyebrow">The problem in one paragraph</span>
                <textarea
                  required
                  name="brief"
                  rows={4}
                  placeholder="Our claims platform cannot scale past 40,000 transactions a day and audit season starts in March…"
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors duration-500 placeholder:text-muted-foreground/50 focus:border-[var(--brand-cyan)]"
                />
              </label>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <MagneticButton type="submit">{sending ? "Sending…" : "Request a briefing"}</MagneticButton>
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  Confidential by default. We sign your NDA before the first call if you prefer.
                </p>
              </div>
            </form>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-border">
                <iframe
                  title="Alpha IT Managed Services global headquarters location"
                  src="https://www.google.com/maps?q=2100%20McKinney%20Ave%20Dallas%20Texas&output=embed"
                  loading="lazy"
                  className="h-[280px] w-full grayscale-[0.4] contrast-125 [filter:invert(0.92)_hue-rotate(180deg)]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
                {offices.map((o) => (
                  <div key={o.city} className="bg-background p-7 transition-colors duration-500 hover:bg-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />
                      <h3 className="text-sm font-medium">{o.city}</h3>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{o.line}</p>
                    <p className="mt-1 text-xs text-muted-foreground/70">{o.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-8 text-sm">
                <a href="mailto:briefings@alphaitms.com" className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 text-[var(--brand-cyan)]" />
                  briefings@alphaitms.com
                </a>
                <a href="tel:+18005550134" className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 text-[var(--brand-cyan)]" />
                  +1 800 555 0134
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
