import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Capabilities", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Academy", href: "#academy" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lux)] ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto w-[min(1400px,92vw)]">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-[var(--ease-lux)] ${
            scrolled ? "glass-panel" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <span className="relative grid h-9 w-9 place-items-center rounded-full [background:var(--gradient-brand)]">
              <span className="font-display text-sm font-semibold text-primary-foreground">A</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-sm font-semibold tracking-tight">ALPHA</span>
              <span className="block text-[0.6rem] tracking-[0.28em] text-muted-foreground">IT MANAGED SERVICES</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)] hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="hidden sm:block">
              <MagneticButton href="#contact" className="px-6 py-3 text-xs">
                Start a conversation
              </MagneticButton>
            </div>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel mt-3 flex flex-col gap-1 rounded-3xl p-4 lg:hidden"
            >
              {[...links, { label: "Contact", href: "#contact" }].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
