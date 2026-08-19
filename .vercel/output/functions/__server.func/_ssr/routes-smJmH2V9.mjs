import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useSpring, r as useTransform, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Dt as ArrowRight, E as Play, Et as ArrowUpRight, G as HeartPulse, J as GraduationCap, Ot as ArrowLeft, S as Rocket, U as Hotel, V as Landmark, _ as ShieldCheck, ct as Cloud, et as Factory, g as Shield, h as ShoppingBag, it as Cpu, mt as Check, rt as Database, s as Truck, st as CodeXml, v as ServerCog, vt as Building2, yt as Briefcase } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton, o as cn, r as Nav, t as Footer } from "./SectionHeading-DUqTJ7xH.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
import { t as ParticleField } from "./ParticleField-B6wFZnBq.mjs";
import { t as Contact } from "./Contact-sc0-LdM4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-smJmH2V9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_abstract_default = "/assets/hero-abstract-Bzn4JbtF.jpg";
var defaultStats = [
	{
		value: 150,
		suffix: "+",
		label: "Projects Delivered"
	},
	{
		value: 60,
		suffix: "+",
		label: "Enterprise Clients"
	},
	{
		value: 99.9,
		suffix: "%",
		decimals: 1,
		label: "Service Availability"
	},
	{
		value: 10,
		suffix: "+",
		label: "Years of Expertise"
	}
];
var defaultBadges = [
	"AI-Powered",
	"Cloud-Native",
	"Enterprise-Grade",
	"24×7 Support"
];
var defaultClients = [
	"HEALTHCARE",
	"EDUCATION",
	"MANUFACTURING",
	"RETAIL & E-COMMERCE",
	"BANKING & FINANCE",
	"LOGISTICS & TRANSPORTATION",
	"GOVERNMENT",
	"STARTUPS & SMES",
	"HOSPITALITY",
	"PROFESSIONAL SERVICES"
];
function Hero({ id = "top", eyebrow = "Enterprise Technology · AI · Cloud · Cybersecurity", titleLines = [
	"Transforming Businesses",
	"Through Intelligent",
	"Technology"
], gradientLineIndex = 2, lede = "Alpha ITMS delivers enterprise-grade IT solutions, AI-powered automation, cloud services, software development, cybersecurity, and digital transformation to help organizations innovate, scale, and stay ahead in a rapidly evolving world.", primaryCta = {
	label: "Get a Free Consultation",
	href: "#contact"
}, secondaryCta = {
	label: "Explore Our Services",
	href: "#services",
	variant: "ghost"
}, panelLabel = "Enterprise impact at a glance", stats = defaultStats, badges = defaultBadges, marqueeItems = defaultClients, showScrollCue = true, imageAlt = "" } = {}) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		ref,
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y },
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_abstract_default,
						alt: imageAlt,
						"aria-hidden": imageAlt ? void 0 : true,
						width: 1920,
						height: 1280,
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
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[16ch]",
						children: titleLines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
								children: i === gradientLineIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
								children: lede
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: primaryCta.href,
									variant: primaryCta.variant ?? "solid",
									children: [primaryCta.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								}), secondaryCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									href: secondaryCta.href,
									variant: secondaryCta.variant ?? "ghost",
									children: secondaryCta.label
								}) : null]
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), panelLabel]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("mt-8 grid gap-8", stats.length > 3 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-3"),
									children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
								badges.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex flex-wrap gap-2",
									children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.14em] text-muted-foreground",
										children: b
									}, b))
								}) : null
							]
						})]
					})
				]
			}),
			marqueeItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group flex overflow-hidden py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex shrink-0 animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused]",
						children: [...marqueeItems, ...marqueeItems].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap font-display text-sm tracking-[0.3em] text-muted-foreground/70",
							children: c
						}, `${c}-${i}`))
					})
				})]
			}) : null,
			showScrollCue ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground",
					children: "SCROLL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative h-14 w-px overflow-hidden bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 h-6 animate-scroll-cue bg-[var(--brand-cyan)]" })
				})]
			}) : null
		]
	});
}
var case_data_default = "/assets/case-data-iqhr9fMz.jpg";
var nodes = [
	{
		name: "New York",
		top: "34%",
		left: "26%"
	},
	{
		name: "London",
		top: "27%",
		left: "47%"
	},
	{
		name: "Dubai",
		top: "44%",
		left: "60%"
	},
	{
		name: "Bengaluru",
		top: "51%",
		left: "68%"
	},
	{
		name: "Singapore",
		top: "58%",
		left: "76%"
	},
	{
		name: "Sydney",
		top: "76%",
		left: "86%"
	},
	{
		name: "São Paulo",
		top: "70%",
		left: "35%"
	}
];
var metrics = [
	{
		value: 150,
		suffix: "+",
		label: "Projects Delivered"
	},
	{
		value: 60,
		suffix: "+",
		label: "Enterprise Clients"
	},
	{
		value: 99.9,
		suffix: "%",
		decimals: 1,
		label: "Service Availability"
	},
	{
		value: 24,
		suffix: "×7",
		label: "Technical Support"
	}
];
function GlobalImpact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden py-32 lg:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "01",
				eyebrow: "About Alpha ITMS",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Technology Solutions That Drive ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Business Growth"
				})] }),
				lede: "Alpha ITMS is a technology-driven company specializing in custom software development, artificial intelligence, cloud computing, cybersecurity, managed IT services, and digital transformation. Our mission is to help organizations leverage technology to improve efficiency, enhance security, automate operations, and accelerate growth."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[2rem] border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: case_data_default,
								alt: "Illustrated network map of Alpha delivery locations",
								loading: "lazy",
								width: 1280,
								height: 960,
								className: "h-full w-full object-cover opacity-80"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" }),
							nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-1",
					children: metrics.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						className: "bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 transition-colors duration-500 hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: m.value,
									suffix: m.suffix,
									decimals: m.decimals ?? 0
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: m.label
							})]
						})
					}, m.label))
				})]
			})]
		})
	});
}
var services = [
	{
		icon: CodeXml,
		title: "Custom Software Development",
		copy: "Scalable web, mobile, and enterprise applications tailored to your business objectives.",
		points: [
			"Web applications",
			"Mobile apps",
			"Enterprise software"
		]
	},
	{
		icon: Cpu,
		title: "Artificial Intelligence Solutions",
		copy: "AI-powered automation, machine learning, predictive analytics, intelligent chatbots, and computer vision solutions.",
		points: [
			"AI automation",
			"Machine learning",
			"Intelligent chatbots"
		]
	},
	{
		icon: Cloud,
		title: "Cloud Solutions",
		copy: "Cloud migration, infrastructure management, DevOps, backup, disaster recovery, and cloud optimization.",
		points: [
			"Cloud migration",
			"DevOps",
			"Disaster recovery"
		]
	},
	{
		icon: ServerCog,
		title: "Managed IT Services",
		copy: "24/7 monitoring, IT support, infrastructure management, system maintenance, and performance optimization.",
		points: [
			"24/7 monitoring",
			"IT support",
			"Performance optimization"
		]
	},
	{
		icon: Shield,
		title: "Cybersecurity",
		copy: "Security assessments, endpoint protection, vulnerability management, compliance, and threat monitoring.",
		points: [
			"Security assessments",
			"Endpoint protection",
			"Threat monitoring"
		]
	},
	{
		icon: Database,
		title: "Data & Analytics",
		copy: "Business intelligence dashboards, reporting, data engineering, analytics, and data-driven decision support.",
		points: [
			"BI dashboards",
			"Data engineering",
			"Analytics"
		]
	}
];
function TiltCard({ children, index }) {
	const ref = (0, import_react.useRef)(null);
	const [tilt, setTilt] = (0, import_react.useState)({
		rx: 0,
		ry: 0,
		mx: 50,
		my: 50
	});
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width;
		const py = (e.clientY - r.top) / r.height;
		setTilt({
			rx: (.5 - py) * 8,
			ry: (px - .5) * 8,
			mx: px * 100,
			my: py * 100
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * .06,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onMouseMove: onMove,
			onMouseLeave: () => setTilt({
				rx: 0,
				ry: 0,
				mx: 50,
				my: 50
			}),
			animate: {
				rotateX: tilt.rx,
				rotateY: tilt.ry
			},
			transition: {
				type: "spring",
				stiffness: 180,
				damping: 18
			},
			style: { transformPerspective: 1e3 },
			className: "group relative h-full overflow-hidden rounded-[1.75rem] border border-border elevated p-9 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
				style: { background: `radial-gradient(420px circle at ${tilt.mx}% ${tilt.my}%, color-mix(in oklab, var(--brand-light) 22%, transparent), transparent 65%)` }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-32 lg:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "Our Services",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Complete technology ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "solutions"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground lg:pb-4",
						children: "From custom software to AI-powered automation, we deliver end-to-end technology solutions that drive efficiency, security, and growth for your business."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
					index: i,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1 group-hover:scale-110" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-2xl font-medium",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: s.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-2",
							children: s.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-xs tracking-wide text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-4 bg-[var(--brand-light)]" }), p]
							}, p))
						})
					]
				}, s.title))
			})]
		})
	});
}
var phases = [
	{
		step: "Step 01",
		title: "Discover",
		copy: "Understand your business goals, challenges, and requirements.",
		marker: "Kickoff"
	},
	{
		step: "Step 02",
		title: "Design",
		copy: "Create a scalable solution architecture and implementation strategy.",
		marker: "Architecture"
	},
	{
		step: "Step 03",
		title: "Develop",
		copy: "Build secure, reliable, and high-performance software solutions.",
		marker: "Build"
	},
	{
		step: "Step 04",
		title: "Deploy",
		copy: "Launch and integrate the solution into your existing environment.",
		marker: "Launch"
	},
	{
		step: "Step 05",
		title: "Support",
		copy: "Provide continuous monitoring, maintenance, optimization, and technical support.",
		marker: "Ongoing"
	}
];
function Journey() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const x = useTransform(scrollYProgress, [0, 1], ["2%", "-64%"]);
	const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-[color-mix(in_oklab,var(--navy)_60%,var(--navy-deep))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "relative h-[420vh]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 flex h-screen flex-col justify-center overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-[min(1400px,92vw)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "03",
						eyebrow: "Business Process",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["From discovery to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "ongoing support"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-10 h-px w-full bg-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { width: line },
							className: "absolute inset-y-0 left-0 bg-[var(--brand-cyan)]"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { x },
					className: "mt-14 flex gap-8 pl-[4vw]",
					children: phases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative w-[min(78vw,430px)] shrink-0 rounded-[1.75rem] border border-border elevated p-10 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: p.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: p.marker
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 font-display text-[5rem] font-medium leading-none text-[color-mix(in_oklab,var(--brand-light)_22%,transparent)] transition-colors duration-700 group-hover:text-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-3xl font-medium",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: p.copy
							})
						]
					}, p.title))
				})]
			})
		})
	});
}
var industries = [
	{
		icon: HeartPulse,
		name: "Healthcare",
		note: "HIPAA-compliant platforms for clinical and operational excellence."
	},
	{
		icon: GraduationCap,
		name: "Education",
		note: "Digital learning platforms that enhance student outcomes."
	},
	{
		icon: Factory,
		name: "Manufacturing",
		note: "Smart factory solutions that optimize production and supply chains."
	},
	{
		icon: ShoppingBag,
		name: "Retail & E-commerce",
		note: "Omnichannel solutions that unify commerce and customer experience."
	},
	{
		icon: Landmark,
		name: "Banking & Finance",
		note: "Secure platforms for banking, payments, and financial operations."
	},
	{
		icon: Truck,
		name: "Logistics & Transportation",
		note: "Real-time tracking and route optimization for modern logistics."
	},
	{
		icon: Building2,
		name: "Government",
		note: "Secure, compliant solutions for public sector operations."
	},
	{
		icon: Rocket,
		name: "Startups & SMEs",
		note: "Scalable technology that helps startups launch and grow faster."
	},
	{
		icon: Hotel,
		name: "Hospitality",
		note: "Guest-centric digital experiences that elevate hospitality operations."
	},
	{
		icon: Briefcase,
		name: "Professional Services",
		note: "Technology that streamlines client service and business operations."
	}
];
function Industries() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "industries",
		className: "relative py-32 lg:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "04",
				eyebrow: "Industries We Serve",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Ten industries, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "one standard"
				})] }),
				lede: "Alpha ITMS brings deep domain expertise across ten industries, delivering tailored technology solutions that address the unique challenges of each sector."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					className: "bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						onHoverStart: () => setActive(i),
						onHoverEnd: () => setActive(null),
						className: "group relative h-full overflow-hidden p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							className: "absolute inset-0 [background:var(--gradient-brand)] opacity-0",
							animate: { opacity: active === i ? .14 : 0 },
							transition: { duration: .5 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ind.icon, { className: "h-6 w-6 text-[var(--brand-cyan)] transition-transform duration-700 ease-[var(--ease-lux)] group-hover:-translate-y-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-10 text-xl font-medium",
									children: ind.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: false,
									animate: {
										opacity: active === i ? 1 : .55,
										y: active === i ? 0 : 6
									},
									transition: {
										duration: .45,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: ind.note
								})
							]
						})]
					})
				}, ind.name))
			})]
		})
	});
}
var rings = [
	{
		radius: 78,
		duration: 44,
		items: [
			"AWS",
			"Azure",
			"Google Cloud",
			"Docker"
		]
	},
	{
		radius: 128,
		duration: 62,
		items: [
			"Python",
			"Java",
			".NET",
			"React",
			"Angular"
		]
	},
	{
		radius: 180,
		duration: 84,
		items: [
			"AI & ML",
			"Node.js",
			"Flutter",
			"Kubernetes",
			"SQL",
			"NoSQL"
		]
	}
];
var groups = [
	{
		title: "Artificial Intelligence",
		items: [
			"AI & Machine Learning",
			"Predictive Analytics",
			"Intelligent Chatbots",
			"Computer Vision"
		]
	},
	{
		title: "Languages",
		items: [
			"Python",
			"Java",
			".NET",
			"Node.js"
		]
	},
	{
		title: "Frontend",
		items: [
			"React",
			"Angular",
			"Flutter"
		]
	},
	{
		title: "Cloud & Infrastructure",
		items: [
			"AWS",
			"Microsoft Azure",
			"Google Cloud",
			"Docker",
			"Kubernetes"
		]
	},
	{
		title: "Data",
		items: [
			"SQL Databases",
			"NoSQL Databases",
			"Data Engineering",
			"Analytics"
		]
	}
];
function Ecosystem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ecosystem",
		className: "relative overflow-hidden py-32 lg:py-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 aurora opacity-40",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "05",
				eyebrow: "Technology Stack",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built on the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "best technology"
				})] }),
				lede: "We leverage industry-leading technologies across AI, cloud, and software development to deliver secure, scalable, and high-performance solutions.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-24 grid gap-20 lg:grid-cols-[1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative mx-auto aspect-square w-full max-w-[520px] scale-[0.72] sm:scale-90 lg:scale-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "glass-panel grid h-28 w-28 place-items-center rounded-full text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm tracking-[0.2em]",
									children: "ALPHA"
								})
							})
						}),
						rings.map((ring) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 grid place-items-center",
							style: { animation: `alpha-orbit ${ring.duration}s linear infinite` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full border border-border",
								style: {
									width: ring.radius * 2,
									height: ring.radius * 2
								}
							}), ring.items.map((item, i) => {
								const angle = i / ring.items.length * Math.PI * 2;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute",
									style: { transform: `translate(${(Math.cos(angle) * ring.radius).toFixed(2)}px, ${(Math.sin(angle) * ring.radius).toFixed(2)}px)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "glass-panel block whitespace-nowrap rounded-full px-3 py-1.5 text-[0.6rem] tracking-[0.14em] text-foreground/85",
										style: { animation: `alpha-orbit ${ring.duration}s linear infinite reverse` },
										children: item.toUpperCase()
									})
								}, item);
							})]
						}, ring.radius)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							className: "absolute inset-0 rounded-full",
							animate: { opacity: [
								.25,
								.55,
								.25
							] },
							transition: {
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut"
							},
							style: { background: "radial-gradient(closest-side, color-mix(in oklab, var(--brand-light) 30%, transparent), transparent 70%)" }
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-[1.5rem] border border-border elevated p-8 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "eyebrow",
								children: g.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm text-muted-foreground",
									children: it
								}, it))
							})]
						})
					}, g.title))
				})]
			})]
		})]
	});
}
var cases = [
	{
		image: case_data_default,
		sector: "Banking & Finance",
		title: "AI-powered analytics for a financial institution",
		challenge: "A financial institution needed to transform raw data into actionable insights for faster, smarter decision-making.",
		solution: "Alpha delivered a data & analytics platform with business intelligence dashboards, data engineering, and AI-driven insights.",
		metrics: [
			{
				k: "Decision speed",
				v: "5x"
			},
			{
				k: "Data accuracy",
				v: "99%"
			},
			{
				k: "ROI",
				v: "+40%"
			}
		]
	},
	{
		image: "/assets/case-secure-B5nr8y7l.jpg",
		sector: "Healthcare",
		title: "Enterprise cybersecurity for a hospital network",
		challenge: "A multi-site hospital network required enterprise-grade security to protect patient data and ensure compliance.",
		solution: "Alpha implemented comprehensive cybersecurity with security assessments, endpoint protection, and 24/7 threat monitoring.",
		metrics: [
			{
				k: "Uptime",
				v: "99.9%"
			},
			{
				k: "Threats blocked",
				v: "10K+"
			},
			{
				k: "Compliance",
				v: "HIPAA"
			}
		]
	},
	{
		image: "/assets/case-ai-Cxu7UnKt.jpg",
		sector: "Retail & E-commerce",
		title: "Custom software for a global retailer",
		challenge: "A global retailer needed a scalable e-commerce platform to handle growing demand and improve customer experience.",
		solution: "Alpha built a custom software solution with seamless integration, cloud infrastructure, and performance optimization.",
		metrics: [
			{
				k: "Conversion",
				v: "+35%"
			},
			{
				k: "Load time",
				v: "-60%"
			},
			{
				k: "Scalability",
				v: "10x"
			}
		]
	}
];
function CaseStudies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative py-32 lg:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "06",
				eyebrow: "Selected work",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Results that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "speak for themselves"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-24 space-y-32",
				children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `grid gap-14 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "relative lg:[direction:ltr]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { scale: 1.015 },
							transition: {
								duration: .8,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "group relative overflow-hidden rounded-[2rem] border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.title,
									loading: "lazy",
									width: 1280,
									height: 960,
									className: "h-[clamp(320px,42vw,540px)] w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,color-mix(in_oklab,var(--navy-deep)_85%,transparent))]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-7 top-7 rounded-full border border-border bg-[color-mix(in_oklab,var(--navy-deep)_65%,transparent)] px-4 py-2 text-[0.65rem] tracking-[0.2em] backdrop-blur-md",
									children: c.sector.toUpperCase()
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:[direction:ltr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.05]",
									children: c.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .16,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 space-y-7",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Challenge"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: c.challenge
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "What we built"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: c.solution
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .22,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border",
									children: c.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-background p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-2xl font-medium text-[var(--brand-cyan)]",
											children: m.v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-[0.7rem] leading-snug text-muted-foreground",
											children: m.k
										})]
									}, m.k))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .28,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "group mt-9 inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-[var(--brand-cyan)]",
									children: ["Request the full case record", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							})
						]
					})]
				}, c.title))
			})]
		})
	});
}
var reasons = [
	"Experienced Technology Experts",
	"Tailored Business Solutions",
	"Enterprise Security Standards",
	"AI-Driven Innovation",
	"Scalable Cloud Infrastructure",
	"24×7 Technical Support",
	"Proven Delivery Methodology",
	"Customer-Centric Approach"
];
var counters = [
	{
		value: 150,
		suffix: "+",
		label: "Projects Delivered"
	},
	{
		value: 60,
		suffix: "+",
		label: "Enterprise Clients"
	},
	{
		value: 99.9,
		suffix: "%",
		decimals: 1,
		label: "Service Availability"
	},
	{
		value: 24,
		suffix: "×7",
		label: "Technical Support"
	}
];
function WhyAlpha() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-y border-border bg-[color-mix(in_oklab,var(--navy)_55%,var(--navy-deep))] py-32 lg:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "07",
				eyebrow: "Why Choose Alpha ITMS",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The partner that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "delivers"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2",
					children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 bg-background p-7 transition-colors duration-500 hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-cyan)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: r
						})]
					}, r))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: counters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel h-full rounded-[1.5rem] p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: c.value,
									suffix: c.suffix,
									decimals: c.decimals ?? 0
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: c.label
							})]
						})
					}, c.label))
				})]
			})]
		})
	});
}
var quotes = [
	{
		quote: "Alpha ITMS delivered a custom software solution that transformed our operations. Their team understood our requirements and exceeded every expectation.",
		name: "Sarah Mitchell",
		role: "CIO, Meridian Health",
		length: "2:14"
	},
	{
		quote: "The AI-powered automation Alpha built for us has been a game-changer. Response times improved dramatically and our team can focus on higher-value work.",
		name: "James Chen",
		role: "COO, Northbank Financial",
		length: "3:02"
	},
	{
		quote: "From cloud migration to cybersecurity, Alpha has been an exceptional partner. Their solutions are secure, scalable, and delivered measurable business outcomes.",
		name: "Amara Okafor",
		role: "CTO, Stratos Telecom",
		length: "1:48"
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const active = quotes[i];
	const go = (dir) => setI((prev) => (prev + dir + quotes.length) % quotes.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32 lg:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "08",
				eyebrow: "Client voice",
				title: "Trusted by businesses worldwide"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border p-10 lg:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 24,
								filter: "blur(8px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							exit: {
								opacity: 0,
								y: -20,
								filter: "blur(8px)"
							},
							transition: {
								duration: .7,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.2]",
								children: [
									"“",
									active.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: active.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs tracking-[0.2em] text-muted-foreground",
									children: active.role.toUpperCase()
								})]
							})]
						}, i)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Previous testimonial",
								onClick: () => go(-1),
								className: "grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-[var(--brand-cyan)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Next testimonial",
								onClick: () => go(1),
								className: "grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-[var(--brand-cyan)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-3 font-mono text-xs text-muted-foreground",
								children: [
									String(i + 1).padStart(2, "0"),
									" / ",
									String(quotes.length).padStart(2, "0")
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: quotes.map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(idx),
						className: `group relative flex-1 overflow-hidden rounded-[1.5rem] border p-7 text-left transition-all duration-500 ${idx === i ? "border-[color-mix(in_oklab,var(--brand-cyan)_50%,transparent)] bg-[color-mix(in_oklab,var(--brand)_14%,transparent)]" : "border-border hover:border-[color-mix(in_oklab,var(--brand-cyan)_35%,transparent)]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-full [background:var(--gradient-brand)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 fill-current text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm",
								children: q.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-xs text-muted-foreground",
								children: ["Video · ", q.length]
							})] })]
						})
					}, q.name))
				})]
			})]
		})
	});
}
function Index() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { scaleX: progress },
				className: "fixed inset-x-0 top-0 z-[60] h-0.5 origin-left [background:var(--gradient-brand)]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalImpact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ecosystem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudies, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyAlpha, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
