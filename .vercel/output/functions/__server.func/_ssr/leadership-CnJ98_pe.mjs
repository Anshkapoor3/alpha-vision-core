import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, Tt as Award, X as Gem, _ as ShieldCheck, at as Compass, d as Target, ht as ChartLine, i as Users, nt as Earth, q as Handshake, tt as Eye, xt as BrainCircuit, z as Lightbulb } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
import { t as Contact } from "./Contact-1aiGK57f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-CnJ98_pe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop";
var philosophyImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";
var innovationImage = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop";
var leadershipStats = [
	{
		value: 340,
		prefix: "",
		suffix: "+",
		label: "Enterprise programs delivered"
	},
	{
		value: 27,
		prefix: "",
		suffix: "",
		label: "Countries operated in"
	},
	{
		value: 99.98,
		prefix: "",
		suffix: "%",
		decimals: 2,
		label: "Platform availability"
	}
];
var leadershipBadges = [
	"ISO 27001",
	"SOC 2 Type II",
	"AWS Advanced",
	"Azure Expert MSP"
];
var leadershipValues = [
	"OWNERSHIP",
	"RIGOUR",
	"TRANSPARENCY",
	"EXCELLENCE",
	"INNOVATION",
	"INTEGRITY"
];
var principles = [
	{
		icon: Target,
		title: "Own the outcome",
		description: "Leadership at Alpha is measured by results, not activity. Every executive owns a number, a client, and an outcome."
	},
	{
		icon: ShieldCheck,
		title: "Protect the trust",
		description: "Regulated industries run on trust. Our leaders protect it with uncompromising security, compliance, and transparency."
	},
	{
		icon: Users,
		title: "Grow the people",
		description: "We build leaders at every level. The strength of Alpha is the depth of the bench, not the height of the title."
	},
	{
		icon: Compass,
		title: "Decide with data",
		description: "Every strategic decision is grounded in evidence. We measure what matters and act on what the data reveals."
	},
	{
		icon: Earth,
		title: "Think globally",
		description: "Our leaders operate across 27 countries with one standard of excellence, one culture, and one way of working."
	},
	{
		icon: Eye,
		title: "See around corners",
		description: "We anticipate what is next for our clients — regulation, technology, and market shifts — before they arrive."
	}
];
var innovationPillars = [
	{
		icon: BrainCircuit,
		title: "Applied AI",
		description: "Production AI systems that reduce cost, accelerate decisions, and create measurable advantage for regulated enterprises."
	},
	{
		icon: Lightbulb,
		title: "Continuous R&D",
		description: "A dedicated innovation practice that prototypes, validates, and industrialises new capabilities every quarter."
	},
	{
		icon: ChartLine,
		title: "Outcome engineering",
		description: "Innovation is measured in business terms — cost avoided, revenue protected, and risk reduced."
	}
];
var excellencePillars = [
	{
		icon: Award,
		title: "Certified excellence",
		description: "ISO 27001, SOC 2 Type II, and AWS Advanced partner status — independently verified, continuously audited."
	},
	{
		icon: Gem,
		title: "Premium delivery",
		description: "A single global delivery standard across four 24/7 hubs, so every engagement meets the same exacting bar."
	},
	{
		icon: Handshake,
		title: "Client partnership",
		description: "Multi-year partnerships with enterprises that trust Alpha with their most critical systems."
	}
];
var excellenceMetrics = [
	{
		value: 99.98,
		prefix: "",
		suffix: "%",
		decimals: 2,
		label: "Platform availability"
	},
	{
		value: 4,
		prefix: "",
		suffix: "",
		label: "24/7 operations hubs"
	},
	{
		value: 11,
		prefix: "",
		suffix: "",
		label: "Regulated industries"
	},
	{
		value: 1.8,
		prefix: "$",
		suffix: "B",
		decimals: 1,
		label: "Client cost avoided"
	}
];
function Leadership() {
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
							alt: "Alpha executive leadership team in strategic discussion",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
							className: "eyebrow",
							children: "Leadership · Executive Team · Enterprise Operations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-hero mt-8 max-w-[16ch]",
							children: [
								"Leadership that",
								"owns the",
								"outcome."
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
									children: "Alpha is led by operators who have run the systems, signed the audits, and answered to the board. Our executive team brings decades of enterprise technology leadership to every engagement — with one standard of excellence across 27 countries."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#principles",
										children: ["Our leadership principles", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "#innovation",
										variant: "ghost",
										children: "Innovation & excellence"
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), "Leadership at a glance"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 grid gap-8 sm:grid-cols-3",
										children: leadershipStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-4xl font-medium tracking-tight",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: s.value,
												prefix: s.prefix,
												suffix: s.suffix,
												decimals: s.decimals ?? 0
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs leading-relaxed text-muted-foreground",
											children: s.label
										})] }, s.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-wrap gap-2",
										children: leadershipBadges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
					className: "relative z-10 mx-auto w-[min(1400px,92vw)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group flex overflow-hidden py-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex shrink-0 animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused]",
							children: [...leadershipValues, ...leadershipValues].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap font-display text-sm tracking-[0.3em] text-muted-foreground/70",
								children: c
							}, `${c}-${i}`))
						})
					})]
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
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "01",
					eyebrow: "Leadership philosophy",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Lead with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "ownership."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Deliver with rigour."
					] }),
					lede: "Our philosophy is simple: the best leaders take responsibility for the outcome, not just the activity. At Alpha, every executive operates with the same discipline we demand of our engineers — evidence over opinion, ownership over blame, and excellence over adequacy."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[2rem] border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: philosophyImage,
								alt: "Alpha leadership team collaborating on enterprise strategy",
								loading: "lazy",
								width: 1600,
								height: 1067,
								className: "h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-0 left-0 right-0 p-8 lg:p-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-sm leading-relaxed text-foreground/90",
									children: "\"The standard we walk past is the standard we accept. Alpha leaders set the bar, then raise it.\""
								})
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: [
							{
								title: "Evidence over opinion",
								description: "Every strategic decision at Alpha is grounded in data, measurement, and independent verification."
							},
							{
								title: "Ownership over blame",
								description: "When something goes wrong, our leaders ask what they could have done differently — not who to point at."
							},
							{
								title: "Excellence over adequacy",
								description: "Good enough is never enough for regulated industries. Our leaders hold the line on quality, always."
							}
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-panel rounded-[1.5rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: item.description
								})]
							})
						}, item.title))
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "principles",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "Leadership principles",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Six principles.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "One standard."
						})
					] }),
					lede: "The principles that guide every Alpha leader — from the boardroom to the delivery room. They are not aspirational. They are operational.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: principles.map((p, i) => {
						const Icon = p.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * .1,
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
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
										children: p.description
									})
								]
							})
						}, p.title);
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "innovation",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "03",
						eyebrow: "Innovation & business excellence",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Innovation with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "intent."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Excellence without compromise."
						] }),
						lede: "We do not innovate for its own sake. Every new capability must earn its place by reducing cost, protecting revenue, or lowering risk — delivered to a single global standard of excellence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: innovationPillars.map((p, i) => {
								const Icon = p.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * .1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group flex gap-6 rounded-[1.5rem] border border-border bg-background/60 p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)] hover:shadow-[var(--shadow-glow)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-medium",
											children: p.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: p.description
										})] })]
									})
								}, p.title);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-[2rem] border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: innovationImage,
											alt: "Alpha innovation lab with advanced technology",
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
														to: 120,
														suffix: "+"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs leading-relaxed text-muted-foreground",
													children: "Innovation initiatives delivered for enterprise clients"
												})]
											})
										})
									]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-24 grid gap-6 lg:grid-cols-3",
						children: excellencePillars.map((p, i) => {
							const Icon = p.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .1,
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
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
											children: p.description
										})
									]
								})
							}, p.title);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
							children: excellenceMetrics.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .08,
								className: "bg-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-8 transition-colors duration-500 hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-4xl font-medium",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: m.value,
											prefix: m.prefix,
											suffix: m.suffix,
											decimals: m.decimals ?? 0
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: m.label
									})]
								})
							}, m.label))
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
var SplitComponent = Leadership;
//#endregion
export { SplitComponent as component };
