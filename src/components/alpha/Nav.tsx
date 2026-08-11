import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Cable,
  ChevronDown,
  CircleEllipsis,
  ClipboardList,
  Cloud,
  Database,
  Factory,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  KeyRound,
  Landmark,
  Menu,
  Moon,
  Pill,
  RadioTower,
  RefreshCcw,
  ServerCog,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sun,
  TrendingUp,
  Umbrella,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";
import { useTheme } from "./ThemeProvider";

type NavLink = {
  label: string;
  description?: string;
  to?: AppRoute;
  hash?: string;
  href?: string;
  icon?: LucideIcon;
};

type AppRoute =
  | "/"
  | "/who-we-are/overview"
  | "/who-we-are/leadership"
  | "/who-we-are/about-us"
  | "/who-we-are/global-presence";

type MegaSection = {
  title: string;
  items: NavLink[];
};

type MegaMenu = {
  label: string;
  eyebrow: string;
  summary: string;
  feature: NavLink;
  sections: MegaSection[];
};

const whoWeAreMenu: MegaMenu = {
  label: "Who we are",
  eyebrow: "Company",
  summary: "The Alpha company pages, leadership story, and operating values.",
  feature: {
    label: "Empowering Business Success",
    description: "Explore the official Alpha overview and company focus.",
    to: "/who-we-are/overview",
    icon: Building2,
  },
  sections: [
    {
      title: "Who we are",
      items: [
        {
          label: "Overview",
          description: "Comprehensive data solutions",
          to: "/who-we-are/overview",
          icon: FileText,
        },
        {
          label: "Leadership",
          description: "Alpha Leadership",
          to: "/who-we-are/leadership",
          icon: Users,
        },
        {
          label: "About us",
          description: "Tech solutions that drive Change",
          to: "/who-we-are/about-us",
          icon: Building2,
        },
        {
          label: "Global Presence",
          description: "Our offices across America, Europe, and Asia",
          to: "/who-we-are/global-presence",
          icon: Globe2,
        },
      ],
    },
  ],
};

const whatWeDoMenu: MegaMenu = {
  label: "What we do",
  eyebrow: "Services",
  summary: "Industries, platforms, and services aligned to Alpha's official navigation.",
  feature: {
    label: "Services",
    description: "Tailored services that blend innovation with expertise.",
    hash: "services",
    icon: ServerCog,
  },
  sections: [
    {
      title: "Industries",
      items: [
        { label: "Financial Services", hash: "industries", icon: Landmark },
        { label: "Retail Services", hash: "industries", icon: ShoppingBag },
        { label: "Research & Development", hash: "industries", icon: FlaskConical },
        { label: "Insurance Services", hash: "industries", icon: Umbrella },
        { label: "Manufacturing", hash: "industries", icon: Factory },
        { label: "Pharmaceuticals", hash: "industries", icon: Pill },
        { label: "Telecommunications", hash: "industries", icon: RadioTower },
        { label: "Higher Education", hash: "industries", icon: GraduationCap },
        { label: "Non-Proft Agencies", hash: "industries", icon: ShieldCheck },
        { label: "Government Agencies", hash: "industries", icon: Building2 },
      ],
    },
    {
      title: "Products & Platforms",
      items: [
        { label: "Password Reset Tool", hash: "ecosystem", icon: KeyRound },
        { label: "Forecasting Tool", hash: "ecosystem", icon: TrendingUp },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Managed IT Services", hash: "services", icon: ServerCog },
        { label: "Cyber Security", hash: "services", icon: Shield },
        { label: "Cloud Services", hash: "services", icon: Cloud },
        { label: "Digital Transformation", hash: "work", icon: RefreshCcw },
        { label: "IT Strategy and Planning", hash: "services", icon: ClipboardList },
        { label: "IT Implementation and Integration", hash: "services", icon: Cable },
        { label: "Other Specialized Services", hash: "services", icon: CircleEllipsis },
        { label: "Data Services", hash: "ecosystem", icon: Database },
        { label: "Custom Product-Application Development", hash: "services", icon: Smartphone },
      ],
    },
  ],
};

const megaMenus = [whoWeAreMenu, whatWeDoMenu];

const topLevelLinks: NavLink[] = [
  { label: "Careers", hash: "academy" },
  { label: "About Us", to: "/who-we-are/about-us" },
  { label: "IT Training", href: "https://trainings.alphaitms.com/" },
];

const mobileUtilityLinks: NavLink[] = [
  { label: "Selected work", hash: "work" },
  { label: "Technology ecosystem", hash: "ecosystem" },
  { label: "Contact", hash: "contact" },
];

function RouterAwareLink({
  item,
  children,
  className,
  onClick,
}: {
  item: NavLink;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (item.href) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  if (item.hash) {
    return (
      <Link
        to={item.to ?? "/"}
        hash={item.hash}
        hashScrollIntoView={{ behavior: "smooth", block: "start" }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link to={item.to ?? "/"} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function LogoLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      hash="top"
      hashScrollIntoView={{ behavior: "smooth", block: "start" }}
      onClick={onClick}
      className="group flex min-w-0 items-center gap-3"
      aria-label="Alpha IT Managed Services home"
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border/60 bg-background/60 shadow-sm transition-all duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
        <img src="/logo.png" alt="" className="h-7 w-7 object-contain" />
      </span>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-sm font-semibold tracking-tight">ALPHA</span>
        <span className="block truncate text-[0.6rem] tracking-[0.28em] text-muted-foreground">
          IT MANAGED SERVICES
        </span>
      </span>
    </Link>
  );
}

function DesktopMenuTrigger({
  menu,
  isActive,
  onOpen,
  onToggle,
}: {
  menu: MegaMenu;
  isActive: boolean;
  onOpen: () => void;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={isActive}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onToggle}
      className={cn(
        "group inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-all duration-500 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive && "bg-secondary text-foreground",
      )}
    >
      {menu.label}
      <ChevronDown
        className={cn(
          "h-3.5 w-3.5 transition-transform duration-500 ease-[var(--ease-lux)]",
          isActive && "rotate-180 text-[var(--brand-cyan)]",
        )}
        aria-hidden
      />
    </button>
  );
}

function DesktopLink({ item }: { item: NavLink }) {
  return (
    <RouterAwareLink
      item={item}
      className="group relative inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {item.label}
      <span className="absolute -bottom-1 left-3 right-3 h-px origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" />
    </RouterAwareLink>
  );
}

function MegaMenuPanel({
  menu,
  onNavigate,
  onHover,
}: {
  menu: MegaMenu;
  onNavigate: () => void;
  onHover: () => void;
}) {
  const FeatureIcon = menu.feature.icon ?? Building2;

  return (
    <motion.div
      key={menu.label}
      onMouseEnter={onHover}
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel absolute left-1/2 top-[calc(100%+0.85rem)] w-[min(1120px,calc(100vw-4rem))] -translate-x-1/2 overflow-hidden rounded-[1.75rem]"
    >
      <div className="grid gap-px bg-border/70 lg:grid-cols-[0.8fr_1.2fr]">
        <RouterAwareLink
          item={menu.feature}
          onClick={onNavigate}
          className="group relative overflow-hidden bg-background/92 p-7 transition-colors duration-500 hover:bg-secondary"
        >
          <div
            className="absolute inset-0 aurora opacity-45 transition-opacity duration-500 group-hover:opacity-70"
            aria-hidden
          />
          <div className="relative">
            <span className="eyebrow">{menu.eyebrow}</span>
            <FeatureIcon className="mt-10 h-8 w-8 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1 group-hover:scale-110" />
            <h3 className="mt-6 max-w-xs text-3xl font-medium leading-tight">
              {menu.feature.label}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {menu.summary}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </RouterAwareLink>

        <div className="grid gap-px bg-border/70 md:grid-cols-2">
          {menu.sections.map((section) => (
            <div
              key={section.title}
              className={cn("bg-background/92 p-6", section.items.length > 6 && "md:col-span-2")}
            >
              <h4 className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {section.title}
              </h4>
              <div
                className={cn(
                  "mt-5 grid gap-2",
                  section.items.length > 6 && "md:grid-cols-2 xl:grid-cols-3",
                )}
              >
                {section.items.map((item) => {
                  const Icon = item.icon ?? ArrowUpRight;

                  return (
                    <RouterAwareLink
                      key={item.label}
                      item={item}
                      onClick={onNavigate}
                      className="group flex min-h-14 items-start gap-3 rounded-2xl p-3 transition-all duration-500 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium leading-snug text-foreground">
                          {item.label}
                        </span>
                        {item.description ? (
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </span>
                        ) : null}
                      </span>
                    </RouterAwareLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenuSection({
  menu,
  expanded,
  onToggle,
  onNavigate,
}: {
  menu: MegaMenu;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="rounded-3xl border border-border bg-background/55">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground"
      >
        {menu.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)]",
            expanded && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 px-4 pb-5">
              {menu.sections.map((section) => (
                <div key={section.title}>
                  <p className="px-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                    {section.title}
                  </p>
                  <div className="mt-2 grid gap-1">
                    {section.items.map((item) => {
                      const Icon = item.icon ?? ArrowUpRight;

                      return (
                        <RouterAwareLink
                          key={item.label}
                          item={item}
                          onClick={onNavigate}
                          className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-[var(--brand-cyan)]" />
                          <span>{item.label}</span>
                        </RouterAwareLink>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(megaMenus[0]?.label ?? "");
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggle } = useTheme();
  const activeMegaMenu = megaMenus.find((menu) => menu.label === activeMega) ?? null;

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setActiveMega(null), 300);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const closeMenus = () => {
    clearCloseTimeout();
    setOpen(false);
    setActiveMega(null);
  };

  const handleDesktopBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setActiveMega(null);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lux)]",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className="mx-auto w-[min(1400px,92vw)]">
        <div
          className={cn(
            "relative flex items-center justify-between rounded-[1.5rem] px-4 py-3 transition-all duration-700 ease-[var(--ease-lux)] lg:rounded-full lg:px-5",
            scrolled ? "glass-panel" : "border border-transparent",
          )}
        >
          <LogoLink onClick={closeMenus} />

          <nav
            ref={desktopNavRef}
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
            onBlur={handleDesktopBlur}
            className="relative hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {megaMenus.map((menu) => (
              <DesktopMenuTrigger
                key={menu.label}
                menu={menu}
                isActive={activeMega === menu.label}
                onOpen={() => {
                  clearCloseTimeout();
                  setActiveMega(menu.label);
                }}
                onToggle={() => {
                  clearCloseTimeout();
                  setActiveMega((current) => (current === menu.label ? null : menu.label));
                }}
              />
            ))}

            {topLevelLinks.map((item) => (
              <DesktopLink key={item.label} item={item} />
            ))}

            <AnimatePresence>
              {activeMegaMenu ? (
                <MegaMenuPanel
                  menu={activeMegaMenu}
                  onNavigate={closeMenus}
                  onHover={clearCloseTimeout}
                />
              ) : null}
            </AnimatePresence>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="hidden sm:block">
              <MagneticButton href="#contact" className="px-6 py-3 text-xs">
                Start a conversation
              </MagneticButton>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
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
              className="glass-panel mt-3 max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-[1.5rem] p-3 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="space-y-3">
                {megaMenus.map((menu) => (
                  <MobileMenuSection
                    key={menu.label}
                    menu={menu}
                    expanded={expandedMobileMenu === menu.label}
                    onToggle={() =>
                      setExpandedMobileMenu((current) => (current === menu.label ? "" : menu.label))
                    }
                    onNavigate={closeMenus}
                  />
                ))}
              </div>

              <div className="mt-4 grid gap-1 rounded-3xl border border-border bg-background/55 p-2">
                {[...topLevelLinks, ...mobileUtilityLinks].map((item) => (
                  <RouterAwareLink
                    key={item.label}
                    item={item}
                    onClick={closeMenus}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    {item.href ? (
                      <ArrowUpRight className="h-4 w-4 text-[var(--brand-cyan)]" />
                    ) : null}
                  </RouterAwareLink>
                ))}
              </div>

              <MagneticButton
                href="#contact"
                className="mt-4 w-full px-6 py-3 text-xs"
                onClick={closeMenus}
              >
                Start a conversation
              </MagneticButton>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
