import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useTheme } from "./router-Cdw-TBX3.mjs";
import { i as useMotionValue, n as useSpring, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as FileText, A as Moon, C as RefreshCcw, D as Pill, Et as ArrowUpRight, H as KeyRound, J as GraduationCap, M as Menu, Q as FlaskConical, V as Landmark, _ as ShieldCheck, _t as Cable, ct as Cloud, dt as CircleEllipsis, et as Factory, f as Sun, g as Shield, h as ShoppingBag, i as Users, l as TrendingUp, lt as ClipboardList, m as Smartphone, n as X, nt as Earth, o as Umbrella, pt as ChevronDown, rt as Database, v as ServerCog, vt as Building2, w as RadioTower } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-DUqTJ7xH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function MagneticButton({ children, href, variant = "solid", className, onClick, type = "button" }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 220,
		damping: 18,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 220,
		damping: 18,
		mass: .4
	});
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * .25);
		y.set((e.clientY - (r.top + r.height / 2)) * .35);
	};
	const reset = () => {
		x.set(0);
		y.set(0);
	};
	const base = "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-500";
	const styles = variant === "solid" ? "text-primary-foreground [background:var(--gradient-brand)] shadow-[var(--shadow-glow)]" : "glass-panel text-foreground hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]";
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "relative z-10 flex items-center gap-3",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 z-0 translate-y-full bg-[color-mix(in_oklab,var(--brand-cyan)_28%,transparent)] transition-transform duration-600 ease-[var(--ease-lux)] group-hover:translate-y-0" })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		style: {
			x: sx,
			y: sy
		},
		onMouseMove: handleMove,
		onMouseLeave: reset,
		className: "inline-block",
		children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: cn(base, styles, className),
			children: inner
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type,
			onClick,
			className: cn(base, styles, className),
			children: inner
		})
	});
}
var megaMenus = [{
	label: "Who we are",
	eyebrow: "Company",
	summary: "The Alpha company pages, leadership story, and operating values.",
	feature: {
		label: "Empowering Business Success",
		description: "Explore the official Alpha overview and company focus.",
		to: "/who-we-are/overview",
		icon: Building2
	},
	sections: [{
		title: "Who we are",
		items: [
			{
				label: "Overview",
				description: "Comprehensive data solutions",
				to: "/who-we-are/overview",
				icon: FileText
			},
			{
				label: "Leadership",
				description: "Alpha Leadership",
				to: "/who-we-are/leadership",
				icon: Users
			},
			{
				label: "About us",
				description: "Tech solutions that drive Change",
				to: "/who-we-are/about-us",
				icon: Building2
			},
			{
				label: "Global Presence",
				description: "Our offices across America, Europe, and Asia",
				to: "/who-we-are/global-presence",
				icon: Earth
			}
		]
	}]
}, {
	label: "What we do",
	eyebrow: "Services",
	summary: "Industries, platforms, and services aligned to Alpha's official navigation.",
	feature: {
		label: "Services",
		description: "Tailored services that blend innovation with expertise.",
		hash: "services",
		icon: ServerCog
	},
	sections: [
		{
			title: "Industries",
			items: [
				{
					label: "Financial Services",
					hash: "industries",
					icon: Landmark
				},
				{
					label: "Retail Services",
					hash: "industries",
					icon: ShoppingBag
				},
				{
					label: "Research & Development",
					hash: "industries",
					icon: FlaskConical
				},
				{
					label: "Insurance Services",
					hash: "industries",
					icon: Umbrella
				},
				{
					label: "Manufacturing",
					hash: "industries",
					icon: Factory
				},
				{
					label: "Pharmaceuticals",
					hash: "industries",
					icon: Pill
				},
				{
					label: "Telecommunications",
					hash: "industries",
					icon: RadioTower
				},
				{
					label: "Higher Education",
					hash: "industries",
					icon: GraduationCap
				},
				{
					label: "Non-Proft Agencies",
					hash: "industries",
					icon: ShieldCheck
				},
				{
					label: "Government Agencies",
					hash: "industries",
					icon: Building2
				}
			]
		},
		{
			title: "Products & Platforms",
			items: [{
				label: "Password Reset Tool",
				hash: "ecosystem",
				icon: KeyRound
			}, {
				label: "Forecasting Tool",
				hash: "ecosystem",
				icon: TrendingUp
			}]
		},
		{
			title: "Services",
			items: [
				{
					label: "Managed IT Services",
					hash: "services",
					icon: ServerCog
				},
				{
					label: "Cyber Security",
					hash: "services",
					icon: Shield
				},
				{
					label: "Cloud Services",
					hash: "services",
					icon: Cloud
				},
				{
					label: "Digital Transformation",
					hash: "work",
					icon: RefreshCcw
				},
				{
					label: "IT Strategy and Planning",
					hash: "services",
					icon: ClipboardList
				},
				{
					label: "IT Implementation and Integration",
					hash: "services",
					icon: Cable
				},
				{
					label: "Other Specialized Services",
					hash: "services",
					icon: CircleEllipsis
				},
				{
					label: "Data Services",
					hash: "ecosystem",
					icon: Database
				},
				{
					label: "Custom Product-Application Development",
					hash: "services",
					icon: Smartphone
				}
			]
		}
	]
}];
var topLevelLinks = [
	{
		label: "Careers",
		hash: "academy"
	},
	{
		label: "About Us",
		to: "/who-we-are/about-us"
	},
	{
		label: "IT Training",
		href: "https://trainings.alphaitms.com/"
	}
];
var mobileUtilityLinks = [
	{
		label: "Selected work",
		hash: "work"
	},
	{
		label: "Technology ecosystem",
		hash: "ecosystem"
	},
	{
		label: "Contact",
		hash: "contact"
	}
];
function RouterAwareLink({ item, children, className, onClick }) {
	if (item.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: item.href,
		className,
		onClick,
		children
	});
	if (item.hash) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to ?? "/",
		hash: item.hash,
		hashScrollIntoView: {
			behavior: "smooth",
			block: "start"
		},
		className,
		onClick,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to ?? "/",
		className,
		onClick,
		children
	});
}
function LogoLink({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		hash: "top",
		hashScrollIntoView: {
			behavior: "smooth",
			block: "start"
		},
		onClick,
		className: "group flex min-w-0 items-center gap-3",
		"aria-label": "Alpha IT Managed Services home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border/60 bg-background/60 shadow-sm transition-all duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.png",
				alt: "",
				className: "h-7 w-7 object-contain"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-sm font-semibold tracking-tight",
				children: "ALPHA"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[0.6rem] tracking-[0.28em] text-muted-foreground",
				children: "IT MANAGED SERVICES"
			})]
		})]
	});
}
function DesktopMenuTrigger({ menu, isActive, onOpen, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-expanded": isActive,
		onMouseEnter: onOpen,
		onFocus: onOpen,
		onClick: onToggle,
		className: cn("group inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-all duration-500 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", isActive && "bg-secondary text-foreground"),
		children: [menu.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: cn("h-3.5 w-3.5 transition-transform duration-500 ease-[var(--ease-lux)]", isActive && "rotate-180 text-[var(--brand-cyan)]"),
			"aria-hidden": true
		})]
	});
}
function DesktopLink({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RouterAwareLink, {
		item,
		className: "group relative inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-3 right-3 h-px origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" })]
	});
}
function MegaMenuPanel({ menu, onNavigate, onHover }) {
	const FeatureIcon = menu.feature.icon ?? Building2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		onMouseEnter: onHover,
		initial: {
			opacity: 0,
			y: -10,
			scale: .98
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -8,
			scale: .98
		},
		transition: {
			duration: .28,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "glass-panel absolute left-1/2 top-[calc(100%+0.85rem)] w-[min(1120px,calc(100vw-4rem))] -translate-x-1/2 overflow-hidden rounded-[1.75rem]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-px bg-border/70 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RouterAwareLink, {
				item: menu.feature,
				onClick: onNavigate,
				className: "group relative overflow-hidden bg-background/92 p-7 transition-colors duration-500 hover:bg-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 aurora opacity-45 transition-opacity duration-500 group-hover:opacity-70",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: menu.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureIcon, { className: "mt-10 h-8 w-8 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1 group-hover:scale-110" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 max-w-xs text-3xl font-medium leading-tight",
							children: menu.feature.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: menu.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground",
							children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-border/70 md:grid-cols-2",
				children: menu.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("bg-background/92 p-6", section.items.length > 6 && "md:col-span-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("mt-5 grid gap-2", section.items.length > 6 && "md:grid-cols-2 xl:grid-cols-3"),
						children: section.items.map((item) => {
							const Icon = item.icon ?? ArrowUpRight;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RouterAwareLink, {
								item,
								onClick: onNavigate,
								className: "group flex min-h-14 items-start gap-3 rounded-2xl p-3 transition-all duration-500 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium leading-snug text-foreground",
										children: item.label
									}), item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs leading-relaxed text-muted-foreground",
										children: item.description
									}) : null]
								})]
							}, item.label);
						})
					})]
				}, section.title))
			})]
		})
	}, menu.label);
}
function MobileMenuSection({ menu, expanded, onToggle, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border bg-background/55",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": expanded,
			onClick: onToggle,
			className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground",
			children: [menu.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				className: cn("h-4 w-4 text-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)]", expanded && "rotate-180"),
				"aria-hidden": true
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .32,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-5 px-4 pb-5",
					children: menu.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-1",
						children: section.items.map((item) => {
							const Icon = item.icon ?? ArrowUpRight;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RouterAwareLink, {
								item,
								onClick: onNavigate,
								className: "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0 text-[var(--brand-cyan)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
							}, item.label);
						})
					})] }, section.title))
				})
			}) : null
		})]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeMega, setActiveMega] = (0, import_react.useState)(null);
	const [expandedMobileMenu, setExpandedMobileMenu] = (0, import_react.useState)(megaMenus[0]?.label ?? "");
	const desktopNavRef = (0, import_react.useRef)(null);
	const closeTimeoutRef = (0, import_react.useRef)(null);
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
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
		};
	}, []);
	const closeMenus = () => {
		clearCloseTimeout();
		setOpen(false);
		setActiveMega(null);
	};
	const handleDesktopBlur = (event) => {
		const nextTarget = event.relatedTarget;
		if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setActiveMega(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lux)]", scrolled ? "py-3" : "py-6"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative flex items-center justify-between rounded-[1.5rem] px-4 py-3 transition-all duration-700 ease-[var(--ease-lux)] lg:rounded-full lg:px-5", scrolled ? "glass-panel" : "border border-transparent"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLink, { onClick: closeMenus }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						ref: desktopNavRef,
						onMouseEnter: clearCloseTimeout,
						onMouseLeave: scheduleClose,
						onBlur: handleDesktopBlur,
						className: "relative hidden items-center gap-1 lg:flex",
						"aria-label": "Primary navigation",
						children: [
							megaMenus.map((menu) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopMenuTrigger, {
								menu,
								isActive: activeMega === menu.label,
								onOpen: () => {
									clearCloseTimeout();
									setActiveMega(menu.label);
								},
								onToggle: () => {
									clearCloseTimeout();
									setActiveMega((current) => current === menu.label ? null : menu.label);
								}
							}, menu.label)),
							topLevelLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopLink, { item }, item.label)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: activeMegaMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaMenuPanel, {
								menu: activeMegaMenu,
								onNavigate: closeMenus,
								onHover: clearCloseTimeout
							}) : null })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggle,
								"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
								title: theme === "dark" ? "Light mode" : "Dark mode",
								className: "grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									href: "#contact",
									className: "px-6 py-3 text-xs",
									children: "Start a conversation"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": open ? "Close menu" : "Open menu",
								"aria-expanded": open,
								onClick: () => setOpen((current) => !current),
								className: "grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
				initial: {
					opacity: 0,
					y: -12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -12
				},
				transition: {
					duration: .4,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "glass-panel mt-3 max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-[1.5rem] p-3 lg:hidden",
				"aria-label": "Mobile navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: megaMenus.map((menu) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenuSection, {
							menu,
							expanded: expandedMobileMenu === menu.label,
							onToggle: () => setExpandedMobileMenu((current) => current === menu.label ? "" : menu.label),
							onNavigate: closeMenus
						}, menu.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-1 rounded-3xl border border-border bg-background/55 p-2",
						children: [...topLevelLinks, ...mobileUtilityLinks].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RouterAwareLink, {
							item,
							onClick: closeMenus,
							className: "flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-[var(--brand-cyan)]" }) : null]
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						href: "#contact",
						className: "mt-4 w-full px-6 py-3 text-xs",
						onClick: closeMenus,
						children: "Start a conversation"
					})
				]
			}) : null })]
		})
	});
}
var columns = [
	{
		title: "Capabilities",
		links: [
			"Cloud engineering",
			"Data foundations",
			"Applied AI",
			"Cyber & compliance",
			"Managed operations"
		]
	},
	{
		title: "Industries",
		links: [
			"Healthcare",
			"Finance",
			"Insurance",
			"Government",
			"Telecom"
		]
	},
	{
		title: "Company",
		links: [
			"Selected work",
			"Alpha Academy",
			"Careers",
			"Newsroom",
			"Contact"
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-border/60 bg-background/60 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "Alpha IT Managed Services",
							className: "h-8 w-8 object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base tracking-tight",
						children: "ALPHA IT MANAGED SERVICES"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: "The technology partner enterprises call when the estate has to work, the auditors are already booked, and the board expects the number to move."
				})] }), columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-7 space-y-4",
					children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "group relative text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: [l, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[var(--brand-cyan)] transition-transform duration-500 ease-[var(--ease-lux)] group-hover:origin-left group-hover:scale-x-100" })]
					}) }, l))
				})] }, c.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-border py-9 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Alpha IT Managed Services. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "transition-colors hover:text-foreground",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "transition-colors hover:text-foreground",
							children: "Security"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "transition-colors hover:text-foreground",
							children: "Back to top"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none select-none overflow-hidden text-center font-display text-[clamp(4rem,17vw,15rem)] font-medium leading-[0.8] text-[color-mix(in_oklab,var(--brand-light)_9%,transparent)]",
			children: "ALPHA"
		})]
	});
}
function Reveal({ children, delay = 0, y = 28, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y,
			filter: "blur(6px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function SectionHeading({ index, eyebrow, title, lede, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-4xl", align === "center" && "mx-auto text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-4", align === "center" && "justify-center"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: eyebrow
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-section mt-7",
					children: title
				})
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .16,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground", align === "center" && "mx-auto"),
					children: lede
				})
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as a, Reveal as i, MagneticButton as n, cn as o, Nav as r, Footer as t };
