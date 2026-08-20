import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Capabilities",
    links: [
      { label: "Cloud engineering", href: "/what-we-do/services/cloud-services" },
      { label: "Data foundations", href: "/what-we-do/services/data-services" },
      { label: "Applied AI", href: "/what-we-do/services/digital-transformation" },
      { label: "Cyber & compliance", href: "/what-we-do/services/cyber-security" },
      { label: "Managed operations", href: "/what-we-do/services/managed-it-services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Services", href: "/what-we-do/industries/financial-services" },
      { label: "Healthcare", href: "/what-we-do/industries/pharmaceuticals" },
      { label: "Insurance", href: "/what-we-do/industries/insurance" },
      { label: "Government", href: "/what-we-do/industries/government" },
      { label: "Telecom", href: "/what-we-do/industries/telecommunications" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Selected work", href: "/#work" },
      { label: "Alpha Academy", href: "https://trainings.alphaitms.com/" },
      { label: "Careers", href: "/careers/explore-jobs" },
      { label: "Newsroom", href: "/#newsroom" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-24">
      <div className="mx-auto w-[min(1400px,92vw)] px-4">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-border/60 bg-background/60 shadow-sm shrink-0">
                <img src="/logo.png" alt="Alpha IT Managed Services" className="h-8 w-8 object-contain" />
              </span>
              <span className="font-display text-base tracking-tight truncate">ALPHA IT MANAGED SERVICES</span>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The technology partner enterprises call when the estate has to work, the auditors are already booked, and
              the board expects the number to move.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title} className="min-w-0">
              <h3 className="eyebrow">{c.title}</h3>
              <ul className="mt-7 space-y-4">
                {c.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
                      </a>
                    ) : link.href.startsWith("#") ? (
                      <Link
                        to="/"
                        hash={link.href.slice(1)}
                        hashScrollIntoView={{ behavior: "smooth", block: "start" }}
                        className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
                      </Link>
                    ) : (
                      <Link
                        to={link.href}
                        className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
                      </Link>
                    )}
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
