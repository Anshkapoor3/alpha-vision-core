import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, ft as CircleCheck, g as Shield, it as Cpu, k as Network } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manufacturing-CuXk9krT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400&auto=format&fit=crop";
var capabilities = [
	{
		icon: Cpu,
		title: "Smart Manufacturing",
		description: "Our smart manufacturing solutions use IoT, AI, and predictive analytics to build connected factories that optimize production and reduce downtime. From real-time monitoring to predictive maintenance, Alpha IT Managed Services drives efficiency and productivity for manufacturers.",
		features: [
			"IoT-enabled factories",
			"Predictive maintenance",
			"Real-time monitoring",
			"AI-powered optimization"
		]
	},
	{
		icon: Network,
		title: "Supply Chain Optimization",
		description: "Beyond smart manufacturing, our solutions optimize the entire supply chain — from procurement to distribution. With advanced tools for inventory management, demand forecasting, and logistics, Alpha IT Managed Services helps manufacturers streamline operations and cut costs.",
		features: [
			"Inventory management",
			"Demand forecasting",
			"Logistics optimization",
			"Procurement automation"
		]
	},
	{
		icon: Shield,
		title: "Quality Assurance",
		description: "Quality is key in manufacturing, and Alpha IT Managed Services provides solutions to ensure products meet the highest standards. From automated quality control to real-time defect detection, we help manufacturers deliver consistent, high-quality products.",
		features: [
			"Automated quality control",
			"Real-time defect detection",
			"Consistency monitoring",
			"Compliance tracking"
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
		value: 3,
		suffix: "",
		label: "Continents"
	},
	{
		value: 6,
		suffix: "",
		label: "Countries"
	},
	{
		value: 1e3,
		suffix: "+",
		label: "Skilled Employees"
	}
];
function ManufacturingPage() {
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
			className: "relative min-h-[70vh] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y },
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroImage,
						alt: "Manufacturing technology and smart factory",
						width: 2400,
						height: 1600,
						className: "h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity: fade },
				className: "relative z-10 mx-auto w-[min(1400px,92vw)] pt-32 pb-16 lg:pt-40",
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
								children: "What We Do"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-cyan)]",
								"aria-hidden": true,
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-cyan)]",
								"aria-hidden": true,
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Industries"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-cyan)]",
								"aria-hidden": true,
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Manufacturing"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[18ch]",
						children: ["Manufacturing"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient italic",
									children: line
								})
							})
						}, `${line}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						className: "mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Alpha Technologies delivers tailored IT solutions for the manufacturing industry, enhancing production efficiency, improving supply chain management, and ensuring robust security. Partner with us to leverage cutting-edge technology for operational excellence and innovation in manufacturing." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
							delay: .85,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							href: "#contact",
							children: ["Get A Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "support",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "01",
						eyebrow: "Our commitment",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Dedicated ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Support"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg leading-relaxed text-muted-foreground",
							children: "At Alpha IT Managed Services, our expert support team understands the unique challenges of the manufacturing sector. From implementation to ongoing support, we ensure you maximize the value of our solutions."
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[2rem] border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
									alt: "Manufacturing smart factory and IoT technology",
									loading: "lazy",
									width: 1600,
									height: 1067,
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
							})]
						})
					})]
				}) })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "capabilities",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "Core capabilities",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Three Pillars of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Manufacturing Excellence"
					})] }),
					lede: "Smart factories, optimized supply chains, and quality assurance — driving operational excellence through technology.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 space-y-24",
					children: capabilities.map((cap, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
							children: idx % 2 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(cap.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-7 text-3xl font-medium tracking-tight",
									children: cap.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-lg leading-relaxed text-muted-foreground",
									children: cap.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 space-y-3",
									children: cap.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 shrink-0 text-[var(--brand-cyan)]" }), feature]
									}, feature))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-[2rem] border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: `https://images.unsplash.com/photo-${1551288049 + idx * 1e3}?q=80&w=1600&auto=format&fit=crop`,
										alt: `${cap.title} manufacturing technology`,
										loading: "lazy",
										width: 1600,
										height: 1067,
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
								})]
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:order-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-[2rem] border border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: `https://images.unsplash.com/photo-${1551288049 + idx * 1e3}?q=80&w=1600&auto=format&fit=crop`,
											alt: `${cap.title} manufacturing technology`,
											loading: "lazy",
											width: 1600,
											height: 1067,
											className: "h-full w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:order-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(cap.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-7 text-3xl font-medium tracking-tight",
										children: cap.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-lg leading-relaxed text-muted-foreground",
										children: cap.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-3",
										children: cap.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 shrink-0 text-[var(--brand-cyan)]" }), feature]
										}, feature))
									})
								]
							})] })
						})
					}, cap.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "cta",
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
									children: "Partner with us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-section mt-6",
									children: ["Partner with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Alpha Technologies!"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
									children: "Join the world's leading manufacturers who trust Alpha IT Managed Services to deliver innovative solutions that power success. Get in touch with us today to discover how we can help your organization thrive in the competitive manufacturing landscape."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 flex justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#contact",
										className: "px-12 py-5 text-base",
										children: ["Get A Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "/what-we-do/industries",
										variant: "ghost",
										className: "px-12 py-5 text-base",
										children: "View All Industries"
									})]
								})
							]
						})
					]
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "need-info",
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
									children: "Ready to begin"
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
									children: "Ready to take your business to new heights? Alpha IT is here to empower you with cutting-edge solutions and expert guidance. Whether you need website upgrades, IT consulting, or cloud services, we've got you covered. Reach out to us today and let's unlock your true potential together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 flex justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#contact",
										className: "px-12 py-5 text-base",
										children: ["Get A Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "/what-we-do/industries",
										variant: "ghost",
										className: "px-12 py-5 text-base",
										children: "View All Industries"
									})]
								})
							]
						})
					]
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "stats",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel h-full rounded-[1.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl font-medium tracking-tight text-[var(--brand-cyan)]",
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
				})
			})]
		})
	] });
}
var SplitComponent = ManufacturingPage;
//#endregion
export { SplitComponent as component };
