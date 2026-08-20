import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, F as Mail, O as Phone, P as MapPin, R as Link2, T as Radar, V as Landmark, i as Users, k as Network, nt as Earth, q as Handshake, vt as Building2 } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
import { t as ParticleField } from "./ParticleField-K2VirDqp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/global-presence-CV9Y2JoH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";
var mapImage = "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop";
var reachCards = [
	{
		number: "01",
		icon: Earth,
		title: "Global Reach",
		description: "Alpha Technologies operates on a global scale, serving clients and collaborating with partners worldwide."
	},
	{
		number: "02",
		icon: Landmark,
		title: "Local Adaptation",
		description: "We understand the importance of adapting to local market dynamics and requirements, ensuring our solutions are relevant and effective in every region we serve."
	},
	{
		number: "03",
		icon: Network,
		title: "International Support",
		description: "Our global presence ensures that we can provide comprehensive support to our clients, no matter where they are located."
	},
	{
		number: "04",
		icon: Users,
		title: "Cultural Diversity",
		description: "Alpha Technologies' global presence brings together a diverse team of professionals from different cultures and backgrounds, enriching our perspective and approach."
	},
	{
		number: "05",
		icon: Radar,
		title: "Market Insights",
		description: "With a global footprint, we have access to valuable market insights and trends from around the world, enabling us to make informed decisions and stay ahead of the curve."
	},
	{
		number: "06",
		icon: Handshake,
		title: "Collaborative Partnerships",
		description: "Our global presence facilitates collaborative partnerships with leading organizations, allowing us to leverage collective expertise and deliver exceptional value."
	}
];
var offices = [
	{
		region: "America",
		icon: Building2,
		city: "Wilmington, DE (Headquarters)",
		size: "89,000 Sqft",
		points: [
			"Prime location in Delaware",
			"Modern office facilities",
			"Networking opportunities with the tech community"
		]
	},
	{
		region: "Europe",
		icon: Building2,
		city: "Poland and Tbilisi",
		size: "15,000 Sqft",
		points: ["Prime tech hub location", "Skilled professionals contributing to innovation"]
	},
	{
		region: "Asia",
		icon: Building2,
		city: "Chandigarh, North India",
		size: "150,000 Sqft",
		points: [
			"Strategic location",
			"Access to talented workforce",
			"Thriving IT industry"
		]
	},
	{
		region: "Asia",
		icon: Building2,
		city: "Hyderabad, India",
		size: "5050 Sqft",
		points: [
			"Strategically situated in a thriving business hub",
			"Access to vast talent pool",
			"Vibrant tech ecosystem"
		]
	}
];
var stats = [
	{
		value: 20,
		suffix: "+",
		label: "Years Experience"
	},
	{
		value: 15,
		suffix: "+",
		label: "Trophy Win"
	},
	{
		value: 550,
		suffix: "+",
		label: "Happy Customers"
	},
	{
		value: 115,
		suffix: "+",
		label: "Our Proficient Staff"
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
		label: "Contact",
		href: "#contact"
	}
];
var mapNodes = [
	{
		name: "Wilmington",
		top: "30%",
		left: "24%"
	},
	{
		name: "Poland",
		top: "26%",
		left: "48%"
	},
	{
		name: "Tbilisi",
		top: "38%",
		left: "55%"
	},
	{
		name: "Chandigarh",
		top: "48%",
		left: "68%"
	},
	{
		name: "Hyderabad",
		top: "56%",
		left: "70%"
	}
];
function GlobalPresence() {
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
							alt: "Global network visualization across continents",
							width: 2400,
							height: 1600,
							className: "h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-70",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {})
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
							className: "flex flex-wrap items-center gap-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/",
									className: "eyebrow transition-colors hover:text-foreground",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--brand-cyan)]",
									"aria-hidden": true,
									children: "↓"
								}),
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
									children: "Global Presence"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-hero mt-8 max-w-[16ch]",
							children: ["Our Global", "Presence."].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
									children: i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
									children: "At Alpha Technologies, our impact knows no bounds. With a presence in key markets across the globe, we're dedicated to connecting communities and driving progress on a global scale."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#offices",
										children: ["Explore Locations", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "#contact",
										variant: "ghost",
										children: "Contact Us"
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), "Global footprint at a glance"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 grid gap-8 sm:grid-cols-2",
										children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-4xl font-medium tracking-tight",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: s.value,
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
											"America",
											"Europe",
											"Asia"
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
									src: mapImage,
									alt: "World map illustration showing Alpha global operations",
									loading: "lazy",
									width: 1600,
									height: 1067,
									className: "h-full w-full object-cover opacity-80"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" }),
								mapNodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "absolute",
									style: {
										top: n.top,
										left: n.left
									},
									initial: {
										opacity: 0,
										scale: .4
									},
									whileInView: {
										opacity: 1,
										scale: 1
									},
									viewport: { once: true },
									transition: {
										delay: .2 + i * .12,
										duration: .7,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2.5 w-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-cyan)] opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-cyan)]" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 hidden whitespace-nowrap text-[0.6rem] tracking-[0.2em] text-foreground/80 sm:block",
										children: n.name.toUpperCase()
									})]
								}, n.name))
							]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "01",
							eyebrow: "Global presence",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Strong ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Global Presence"
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "We have established a network of operations that spans across continents, enabling us to deliver our innovative solutions to businesses and individuals around the globe."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#reach",
									children: ["Explore our reach", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							})
						})
					] })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "reach",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "International reach",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "International Reach"
					})] }),
					lede: "A global network of operations delivering innovative solutions across continents.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
					children: reachCards.map((c, i) => {
						const Icon = c.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-2xl font-medium text-muted-foreground/40",
											children: c.number
										})]
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
						}, c.number);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "offices",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "03",
					eyebrow: "Global offices",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Where to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Find Us"
					})] }),
					lede: "Our offices are strategically located in key markets across the globe, enabling us to serve our clients with local expertise and global reach.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
					children: offices.map((o, i) => {
						const Icon = o.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 4 * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group glass-panel relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow",
											children: o.region
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "relative mt-6 text-xl font-medium",
										children: o.city
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-2 font-mono text-sm text-[var(--brand-cyan)]",
										children: o.size
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "relative mt-6 space-y-3",
										children: o.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-sm leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-cyan)]" }), p]
										}, p))
									})
								]
							})
						}, `${o.region}-${o.city}`);
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "04",
					eyebrow: "By the numbers",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Global ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Statistics"
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
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: s.label
							})]
						})
					}, s.label))
				})]
			})
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
									children: "Ready to take your business to new heights? Alpha IT is here to empower you with cutting-edge solutions and expert guidance."
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
					index: "05",
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
var SplitComponent = GlobalPresence;
//#endregion
export { SplitComponent as component };
