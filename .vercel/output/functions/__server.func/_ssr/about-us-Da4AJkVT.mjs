import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, F as Mail, K as HeartHandshake, O as Phone, P as MapPin, Z as Gauge, _ as ShieldCheck, p as Sparkles, u as TrendingDown, vt as Building2, z as Lightbulb } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us-Da4AJkVT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop";
var storyImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop";
var visionImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";
var values = [
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "Driving forward-thinking solutions that keep our clients ahead of the curve."
	},
	{
		icon: Gauge,
		title: "Efficiency",
		description: "Delivering smart, streamlined strategies that maximize results with minimal waste."
	},
	{
		icon: Sparkles,
		title: "Excellence",
		description: "Upholding the highest standards to ensure quality and lasting impact."
	},
	{
		icon: HeartHandshake,
		title: "Community",
		description: "Building strong, collaborative relationships that foster shared growth and success."
	}
];
var benefits = [
	{
		icon: Gauge,
		title: "Increased Operational Efficiencies",
		description: "Streamline your operations with optimized processes and intelligent automation that reduce friction and accelerate delivery."
	},
	{
		icon: ShieldCheck,
		title: "Reduced Operational Risks",
		description: "Mitigate threats with robust security frameworks, proactive monitoring, and compliance-ready infrastructure."
	},
	{
		icon: TrendingDown,
		title: "Reduced Operational Costs",
		description: "Lower your total cost of ownership through efficient resource allocation, cloud optimization, and managed services."
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
		label: "Why Alpha",
		href: "/#why-alpha"
	},
	{
		label: "Our Global Presence",
		href: "/#global-impact"
	},
	{
		label: "FAQ",
		href: "/#faq"
	},
	{
		label: "Our Services",
		href: "/#services"
	},
	{
		label: "Managed IT Services",
		href: "/#services"
	},
	{
		label: "Software and Mobile App Development",
		href: "/#services"
	},
	{
		label: "IT Training",
		href: "https://trainings.alphaitms.com/"
	}
];
function AboutUs() {
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
							alt: "Modern corporate headquarters with glass architecture",
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
									className: "text-foreground",
									children: "About Us"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-hero mt-8 max-w-[16ch]",
							children: ["About", "Us."].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
									children: "Tech solutions that drive Change"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#story",
										children: ["Our story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), "Who we are"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-sm leading-relaxed text-muted-foreground",
										children: "Alpha IT Managed Services is built on the core values of innovation, efficiency, and excellence. We deliver creative solutions tailored to your business needs, while striving to make a lasting, positive impact on the communities we serve."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-wrap gap-2",
										children: [
											"Innovation",
											"Efficiency",
											"Excellence",
											"Community"
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
			id: "story",
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
									src: storyImage,
									alt: "Alpha team collaborating on enterprise strategy",
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
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gradient",
												children: "Alpha"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs leading-relaxed text-muted-foreground",
											children: "IT Managed Services — built on innovation, efficiency, and excellence"
										})]
									})
								})
							]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "01",
							eyebrow: "Our story",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Who ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "we are"
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "Alpha IT Managed Services is built on the core values of innovation, efficiency, and excellence. We deliver creative solutions tailored to your business needs, while striving to make a lasting, positive impact on the communities we serve."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#values",
									children: ["Our values", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							})
						})
					] })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "values",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "What drives us",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Values"
					})] }),
					lede: "The principles that guide every decision, every engagement, and every relationship we build.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
					children: values.map((v, i) => {
						const Icon = v.icon;
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
				})]
			})
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: visionImage,
								alt: "Alpha vision for the future of technology",
								loading: "lazy",
								width: 1600,
								height: 1067,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "03",
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
								children: "We aim to develop customized or industry standard strategies and solutions as per our client requirements."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg leading-relaxed text-muted-foreground",
								children: "Elevate your business with our tailored services that blend innovation with expertise. Whether you need cutting-edge solutions or industry-specific insights."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .28,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#benefits",
									children: ["Business benefits", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							})
						})
					] })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "benefits",
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "04",
					eyebrow: "What you gain",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Business ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Benefits"
					})] }),
					lede: "Partnering with Alpha delivers measurable outcomes across your entire technology estate.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-3",
					children: benefits.map((b, i) => {
						const Icon = b.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * .1,
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
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-4 text-sm leading-relaxed text-muted-foreground",
										children: b.description
									})
								]
							})
						}, b.title);
					})
				})]
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-3",
					children: contactInfo.map((c, i) => {
						const Icon = c.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "relative mt-6 text-xl font-medium",
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
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden py-32 lg:py-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "06",
					eyebrow: "Navigate",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Quick ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Links"
					})] }),
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: quickLinks.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: link.href,
							className: "group glass-panel relative flex h-full items-center justify-between gap-4 overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative text-lg font-medium",
									children: link.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "relative h-5 w-5 shrink-0 text-[var(--brand-cyan)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })
							]
						})
					}, link.label))
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
									children: "Get started"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-section mt-6",
									children: ["Ready to transform ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "your business?"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
									children: "Contact our experts today."
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
		})
	] });
}
var SplitComponent = AboutUs;
//#endregion
export { SplitComponent as component };
