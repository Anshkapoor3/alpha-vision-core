import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, _ as ShieldCheck, bt as Brain, ft as CircleCheck, gt as ChartColumn, l as TrendingUp, rt as Database, t as Zap, v as ServerCog } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/managed-it-services-CzJNKPI7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop";
var capabilities = [
	{
		icon: ChartColumn,
		title: "Advanced Data Analytics and Reporting",
		description: "Our team of skilled data experts leverages advanced data analytics tools and techniques to provide clients with deep insights into their business performance. We analyze data to identify trends, patterns, and opportunities, and present our findings in visually engaging and easy-to-understand reports.",
		features: [
			"Trend identification & pattern recognition",
			"Custom dashboard & visualization",
			"Automated scheduled reporting",
			"Executive-ready presentations"
		]
	},
	{
		icon: Database,
		title: "Data Modernization",
		description: "We design and build solutions that allow for advanced data visualization, data governance and even AIOps. We work across multiple vendors — such as Microsoft, AWS, Google, IBM, Splunk, Tableau and others — to quickly create and implement a custom data solution that fits the needs of your organization.",
		features: [
			"Multi-vendor platform expertise",
			"Data governance & compliance",
			"AIOps implementation",
			"Custom data architecture"
		]
	},
	{
		icon: Brain,
		title: "Machine Learning Analytics (ML)",
		description: "By building and training machine learning models on your enterprise, you'll be enabled to instantly analyze huge amounts of data and predict and proactively respond to emerging customer behavior and demands.",
		features: [
			"Custom ML model development",
			"Predictive analytics at scale",
			"Automated model retraining",
			"Real-time inference pipelines"
		]
	},
	{
		icon: Zap,
		title: "Artificial Intelligence (AI)",
		description: "Your enterprise can harness the power of machine learning to analyze massive amounts of data quickly and accurately. Our technology enables you to anticipate and proactively respond to customer behavior and demands, giving you the edge you need to stay ahead in today's fast-paced business world.",
		features: [
			"AI-driven insights & automation",
			"Natural language processing",
			"Computer vision applications",
			"Generative AI integration"
		]
	}
];
var benefits = [
	"Reduced downtime through proactive monitoring",
	"Increased efficiency with automated maintenance",
	"Enhanced security with continuous threat detection",
	"Improved productivity via 24/7 expert support",
	"Predictable IT costs with fixed monthly pricing",
	"Strategic IT planning aligned to business goals"
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
		label: "Trophy Wins"
	},
	{
		value: 550,
		suffix: "+",
		label: "Happy Customers"
	},
	{
		value: 115,
		suffix: "+",
		label: "Proficient Staff"
	}
];
function ManagedITServicesPage() {
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
						alt: "Network operations center monitoring dashboard",
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
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-cyan)]",
								"aria-hidden": true,
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Managed IT Services"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[18ch]",
						children: ["Managed IT", "Services"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Alpha Technologies provides reliable and efficient managed IT services to streamline your business operations. From proactive monitoring and maintenance to strategic IT planning, our comprehensive solutions ensure your technology infrastructure is robust, secure, and aligned with your business goals." })
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
			id: "intro",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "01",
							eyebrow: "Our promise",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Stay Ahead, Stress Less:",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Alpha's Managed IT Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"for Seamless Operations"
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "We understand that managing IT can be complex and time-consuming, which is why we offer a complete suite of services to take care of our clients' IT needs, including monitoring, maintenance, security, and support. Our team of skilled professionals works closely with our clients to understand their business goals and technology requirements. Our customers benefit from reduced downtime, increased efficiency, enhanced security, and improved productivity. Whether it's managing servers and networks, providing technical support, or implementing security measures, our Managed IT Services provide a comprehensive solution that allows our clients to focus on their core business activities."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								href: "#contact",
								className: "mt-8 inline-flex",
								children: ["Get A Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[2rem] border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
									alt: "Managed IT services team at work",
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
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Comprehensive ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Managed Services"
					})] }),
					lede: "Four interconnected capabilities that deliver end-to-end IT operations excellence — from infrastructure monitoring to AI-driven predictive analytics.",
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
										alt: `${cap.title} visualization`,
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
											alt: `${cap.title} visualization`,
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "benefits",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "03",
					eyebrow: "Why choose Alpha",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Measurable ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Benefits"
					})] }),
					lede: "Every managed service engagement delivers quantifiable outcomes backed by SLAs and continuous improvement.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: benefits.map((benefit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand-cyan)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-foreground",
									children: benefit
								})]
							})]
						})
					}, benefit))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "supporting",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "04",
					eyebrow: "Related expertise",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Supporting ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Technology Services"
					})] }),
					lede: "Managed IT Services integrates seamlessly with our broader portfolio for complete technology coverage.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: ShieldCheck,
							title: "Cyber Security",
							desc: "MDR, vulnerability management, identity & access",
							href: "/what-we-do/services/cyber-security"
						},
						{
							icon: ServerCog,
							title: "Cloud Services",
							desc: "Migration, operations, FinOps, platform engineering",
							href: "/what-we-do/services/cloud-services"
						},
						{
							icon: Database,
							title: "Data Services",
							desc: "Lakehouse, governance, BI, MLOps",
							href: "/what-we-do/services/data-services"
						},
						{
							icon: TrendingUp,
							title: "Digital Transformation",
							desc: "Strategy, automation, legacy modernization",
							href: "/what-we-do/services/digital-transformation"
						}
					].map((svc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: svc.href,
							className: "group glass-panel relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color-mix(in_oklab,var(--brand)_12%,transparent)] blur-2xl transition-all duration-700 group-hover:bg-[color-mix(in_oklab,var(--brand-cyan)_22%,transparent)]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(svc.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-7 text-xl font-medium",
									children: svc.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: svc.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center gap-2 text-sm font-medium text-[var(--brand-cyan)] group-hover:gap-3 transition-all duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							]
						})
					}, svc.title))
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
										href: "/what-we-do/services",
										variant: "ghost",
										className: "px-12 py-5 text-base",
										children: "View All Services"
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
var SplitComponent = ManagedITServicesPage;
//#endregion
export { SplitComponent as component };
