const columns = [
  {
    title: "Capabilities",
    links: ["Cloud engineering", "Data foundations", "Applied AI", "Cyber & compliance", "Managed operations"],
  },
  { title: "Industries", links: ["Healthcare", "Finance", "Insurance", "Government", "Telecom"] },
  { title: "Company", links: ["Selected work", "Alpha Academy", "Careers", "Newsroom", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-24">
      <div className="mx-auto w-[min(1400px,92vw)]">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full [background:var(--gradient-brand)] font-display text-sm font-semibold text-primary-foreground">
                A
              </span>
              <span className="font-display text-base tracking-tight">ALPHA IT MANAGED SERVICES</span>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The technology partner enterprises call when the estate has to work, the auditors are already booked, and
              the board expects the number to move.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="eyebrow">{c.title}</h3>
              <ul className="mt-7 space-y-4">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-border py-9 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Alpha IT Managed Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#top" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Security
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Back to top
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden text-center font-display text-[clamp(4rem,17vw,15rem)] font-medium leading-[0.8] text-[color-mix(in_oklab,var(--brand-light)_9%,transparent)]"
      >
        ALPHA
      </div>
    </footer>
  );
}
