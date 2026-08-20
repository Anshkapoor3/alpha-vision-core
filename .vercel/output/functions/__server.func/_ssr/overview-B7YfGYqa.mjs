import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, F as Mail, K as HeartHandshake, N as Medal, O as Phone, P as MapPin, R as Link2, Tt as Award, _ as ShieldCheck, d as Target, i as Users, it as Cpu, nt as Earth, p as Sparkles, wt as BadgeCheck, z as Lightbulb } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-B7YfGYqa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";
var overviewImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop";
var visionImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";
var missionImage = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop";
var focusCards = [
	{
		icon: Cpu,
		title: "Cutting-Edge Solutions",
		description: "We deliver advanced technological solutions tailored to your business needs."
	},
	{
		icon: Earth,
		title: "Diverse Industry Expertise",
		description: "Our team brings expertise across multiple industries to provide relevant solutions."
	},
	{
		icon: HeartHandshake,
		title: "Social Impact",
		description: "We strive to create lasting positive change in the communities we serve."
	},
	{
		icon: Target,
		title: "Client-Centric Approach",
		description: "We focus on your needs, ensuring our solutions are aligned with your goals."
	}
];
var coreValues = [
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "We continuously push boundaries to deliver forward-thinking solutions that keep our clients ahead of the curve."
	},
	{
		icon: Award,
		title: "Excellence",
		description: "We hold ourselves to the highest standards, ensuring every deliverable reflects quality and precision."
	},
	{
		icon: Users,
		title: "Collaboration",
		description: "We work as one team with our clients and partners, combining expertise to achieve shared success."
	},
	{
		icon: ShieldCheck,
		title: "Integrity",
		description: "We operate with transparency and honesty, building trust through every interaction."
	}
];
var certifications = [
	{
		icon: BadgeCheck,
		title: "NMSDC",
		description: "National Minority Supplier Development Council"
	},
	{
		icon: Medal,
		title: "MBE",
		description: "Minority Business Enterprise"
	},
	{
		icon: Award,
		title: "WBE",
		description: "Women Business Enterprise"
	},
	{
		icon: ShieldCheck,
		title: "OSD",
		description: "Office of Supplier Diversity"
	}
];
var stats = [
	{
		value: 20,
		prefix: "",
		suffix: "+",
		label: "Years Experience"
	},
	{
		value: 3,
		prefix: "",
		suffix: "",
		label: "Continents"
	},
	{
		value: 6,
		prefix: "",
		suffix: "",
		label: "Countries"
	},
	{
		value: 1e3,
		prefix: "",
		suffix: "+",
		label: "Skilled Employees"
	}
];
var contactInfo = [
	{
		icon: MapPin,
		title: "Address",
		lines: ["IT Park, Plot ITC 15, Sector 67", "Sahibzada Ajit Singh Nagar, Punjab 160062"]
	},
	{
		icon: Mail,
		title: "Email",
		lines: ["it.training@alphait.us"]
	},
	{
		icon: Phone,
		title: "Phone",
		lines: ["9056739082"]
	}
];
var quickLinks = [
	{
		label: "Overview",
		href: "/who-we-are/overview"
	},
	{
		label: "Leadership",
		href: "/who-we-are/leadership"
	},
	{
		label: "About Us",
		href: "/who-we-are/about-us"
	},
	{
		label: "Global Presence",
		href: "/who-we-are/global-presence"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Overview() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MainLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "top",
			ref: heroRef,
			className: "relative min-h-screen overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y },
					className: "absolute inset-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroImage,
							alt: "Global technology network visualization",
							width: 2400,
							height: 1600,
							className: "h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { opacity: fade },
					className: "relative z-10 mx-auto w-[min(1400px,92vw)] pt-40 pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .2,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							"aria-label": "Breadcrumb",
							className: "flex items-center gap-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "Who We Are"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--brand-cyan)]",
									"aria-hidden": true,
									children: "↓"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "Overview"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-hero mt-8 max-w-[16ch]",
							children: [
								"Enterprise technology,",
								"built on",
								"trust."
							].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "block",
									initial: { y: "110%" },
									animate: { y: 0 },
									transition: {
										duration: 1.2,
										delay: .28 + i * .12,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									children: i === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient italic",
										children: line
									}) : line
								})
							}, `${line}-${i}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 24
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1,
									delay: .7,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "max-w-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg leading-relaxed text-muted-foreground",
									children: "Alpha IT Managed Services is a global technology leader delivering comprehensive data solutions, advanced analytics, and secure managed services that empower organizations to make data-driven decisions with confidence."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#overview",
										children: ["Discover Alpha", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "#contact",
										variant: "ghost",
										children: "Get A Quote"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 40
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1.1,
									delay: .85,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "glass-panel grain animate-float rounded-[2rem] p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), "Global presence at a glance"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 grid gap-8 sm:grid-cols-2",
										children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-4xl font-medium tracking-tight",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: s.value,
												prefix: s.prefix,
												suffix: s.suffix
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs leading-relaxed text-muted-foreground",
											children: s.label
										})] }, s.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-wrap gap-2",
										children: [
											"NMSDC",
											"MBE",
											"WBE",
											"OSD"
										].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.14em] text-muted-foreground",
											children: b
										}, b))
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground",
						children: "SCROLL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative h-14 w-px overflow-hidden bg-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 h-6 animate-scroll-cue bg-[var(--brand-cyan)]" })
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "overview",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2rem] border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: overviewImage,
									alt: "Alpha enterprise team collaborating on data strategy",
									loading: "lazy",
									width: 1600,
									height: 1067,
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-0 left-0 right-0 p-8 lg:p-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-panel rounded-[1.5rem] p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-4xl font-medium",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: 20,
												suffix: "+"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs leading-relaxed text-muted-foreground",
											children: "Years of enterprise technology leadership"
										})]
									})
								})
							]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "01",
							eyebrow: "Company overview",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Overview" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "We provide comprehensive data solutions to maximize the value of your data. With advanced analytics, seamless integration, and secure management, we empower your organization to make data-driven decisions that foster success and innovation."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#focus",
									children: ["Explore our focus", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							})
						})
					] })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "focus",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "Our focus",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Alpha Technologies:",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Empowering Business Success"
						})
					] }),
					lede: "Our company supports businesses of all sizes with technology that drives measurable outcomes. We combine deep industry knowledge with innovative solutions to help our clients thrive in a rapidly evolving digital landscape.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
					children: focusCards.map((c, i) => {
						const Icon = c.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 4 * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "relative mt-7 text-xl font-medium",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
										children: c.description
									})
								]
							})
						}, c.title);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "03",
						eyebrow: "What we stand for",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Core Values"
						})] }),
						align: "center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
						children: coreValues.map((v, i) => {
							const Icon = v.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i % 4 * .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_10%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_20%,transparent)]",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "relative mt-7 text-xl font-medium",
											children: v.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
											children: v.description
										})
									]
								})
							}, v.title);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground",
							children: "We foster innovation, strive for excellence, emphasize collaboration, and uphold unwavering integrity in everything we do — these principles guide every decision, every engagement, and every relationship we build."
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[2rem] border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: visionImage,
								alt: "Alpha vision for the future of enterprise technology",
								loading: "lazy",
								width: 1600,
								height: 1067,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "04",
							eyebrow: "Where we are headed",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Vision"
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "To be the most trusted technology partner for enterprises worldwide, recognized for our innovation, integrity, and the lasting value we create for our clients, our people, and the communities we serve."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#mission",
									children: ["Our mission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							})
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "mission",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:order-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[2rem] border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: missionImage,
									alt: "Alpha team executing on our mission",
									loading: "lazy",
									width: 1600,
									height: 1067,
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
							})]
						}) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:order-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "05",
							eyebrow: "Why we exist",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Mission"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "Our mission is to empower organizations with technology that drives growth, efficiency, and innovation. We are committed to delivering solutions that not only meet today's challenges but also anticipate tomorrow's opportunities — enabling our clients to lead with confidence in a data-driven world."
							})
						})]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "06",
						eyebrow: "Certifications & recognition",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Awards & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Achievements"
						})] }),
						lede: "Our certifications reflect our commitment to diversity, excellence, and the highest standards of business practice.",
						align: "center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
						children: certifications.map((c, i) => {
							const Icon = c.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i % 4 * .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "relative mt-6 text-2xl font-medium tracking-tight",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "relative mt-3 text-xs leading-relaxed text-muted-foreground",
											children: c.description
										})
									]
								})
							}, c.title);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground",
							children: "These certifications demonstrate our dedication to supplier diversity and our commitment to fostering an inclusive business ecosystem. We are proud to be recognized as a certified minority-owned enterprise delivering world-class technology solutions."
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "07",
					eyebrow: "By the numbers",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A track record of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "scale"
					})] }),
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 4 * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel h-full rounded-[1.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl font-medium tracking-tight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.value,
									prefix: s.prefix,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: s.label
							})]
						})
					}, s.label))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2.5rem] border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 aurora opacity-70",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative px-8 py-20 text-center lg:px-20 lg:py-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Get in touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-section mt-6",
									children: ["Need More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Information?"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
									children: "Ready to elevate your business? Contact us today to unlock your full potential!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#contact",
										className: "px-12 py-5 text-base",
										children: ["Get A Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									})
								})
							]
						})
					]
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "contact",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "08",
					eyebrow: "Reach us",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Contact ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Information"
					})] }),
					lede: "We are here to help. Reach out through any of the channels below and our team will respond promptly.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
					children: [contactInfo.map((c, i) => {
						const Icon = c.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 4 * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "relative mt-7 text-xl font-medium",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative mt-4 space-y-2",
										children: c.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-muted-foreground",
											children: line
										}, line))
									})
								]
							})
						}, c.title);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative mt-7 text-xl font-medium",
									children: "Quick Links"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "relative mt-4 space-y-3",
									children: quickLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: link.href,
										className: "group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 text-[var(--brand-cyan)] transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" }), link.label]
									}) }, link.label))
								})
							]
						})
					})]
				})]
			})]
		})
	] });
}
var SplitComponent = Overview;
//#endregion
export { SplitComponent as component };
