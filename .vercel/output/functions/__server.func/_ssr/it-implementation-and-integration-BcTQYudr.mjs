import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { B as Layers, C as RefreshCcw, Et as ArrowUpRight, _t as Cable, ft as CircleCheck, g as Shield, k as Network, l as TrendingUp, rt as Database, t as Zap, v as ServerCog } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/it-implementation-and-integration-BcTQYudr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop";
var implementationCapabilities = [
	{
		icon: ServerCog,
		title: "Solution Deployment & Configuration",
		description: "End-to-end deployment of enterprise applications, infrastructure, and platforms. We handle planning, sizing, installation, configuration, and validation across on-premises, cloud, and hybrid environments.",
		features: [
			"ERP/CRM/HCM implementation (SAP, Oracle, Workday, Salesforce, Dynamics)",
			"Infrastructure provisioning & configuration management",
			"Application packaging, staging & release management",
			"Environment promotion & version control",
			"Performance tuning & capacity validation",
			"Documentation & knowledge transfer"
		]
	},
	{
		icon: Database,
		title: "Data Migration & Modernization",
		description: "Secure, validated migration of critical business data with near-zero downtime. Legacy extraction, cleansing, transformation, validation, and load into modern target platforms.",
		features: [
			"Legacy system data extraction & profiling",
			"Data cleansing, deduplication & enrichment",
			"Schema mapping & transformation logic",
			"Parallel run validation & reconciliation",
			"Cutover planning, rehearsal & execution",
			"Post-migration audit & sign-off"
		]
	},
	{
		icon: Layers,
		title: "Testing & Quality Assurance",
		description: "Comprehensive testing across functional, integration, performance, security, and user acceptance domains. Automated test frameworks with traceability to requirements.",
		features: [
			"Test strategy, planning & case design",
			"Automated regression & CI/CD integration",
			"Performance, load & stress testing",
			"Security scanning & penetration testing",
			"UAT facilitation & defect management",
			"Go/no-go criteria & release readiness"
		]
	}
];
var integrationCapabilities = [
	{
		icon: Cable,
		title: "Application & API Integration",
		description: "Connect disparate systems through modern integration patterns. REST/GraphQL APIs, event-driven architectures, message queues, and enterprise service bus implementations.",
		features: [
			"API design, gateway & developer portal (MuleSoft, Apigee, Azure APIM)",
			"Event-driven architecture (Kafka, Event Grid, SNS/SQS)",
			"iPaaS & middleware (Boomi, Integration Services, Logic Apps)",
			"Legacy system adapters & mainframe connectivity",
			"B2B/EDI integration & partner onboarding",
			"Integration monitoring, alerting & SLA tracking"
		]
	},
	{
		icon: Network,
		title: "Data & Process Integration",
		description: "Unify data flows and business processes across the enterprise. Master data management, real-time synchronization, and workflow orchestration.",
		features: [
			"Master Data Management (MDM) & golden record",
			"Change data capture & real-time replication",
			"Business process orchestration (Camunda, Temporal, Logic Apps)",
			"Data virtualization & federation",
			"Cross-system transaction consistency",
			"Integration governance & lifecycle management"
		]
	},
	{
		icon: RefreshCcw,
		title: "Cloud & Hybrid Integration",
		description: "Seamlessly connect on-premises systems with cloud services. Hybrid identity, network connectivity, and consistent security posture across environments.",
		features: [
			"Hybrid identity & directory synchronization",
			"VPN, ExpressRoute, Direct Connect, Cloud Interconnect",
			"Cross-cloud service mesh & API federation",
			"Data gravity & residency compliance",
			"Disaster recovery & failover orchestration",
			"Unified observability & cost governance"
		]
	}
];
var benefits = [
	{
		icon: TrendingUp,
		title: "Minimized Disruption",
		description: "Phased deployments with rollback plans ensure business continuity"
	},
	{
		icon: Shield,
		title: "Risk Reduction",
		description: "Proven methodologies, automated validation, and comprehensive testing"
	},
	{
		icon: Zap,
		title: "Faster Time-to-Value",
		description: "Accelerated delivery through automation, templates, and reusable assets"
	},
	{
		icon: ServerCog,
		title: "Seamless Interoperability",
		description: "Standards-based integration ensures systems work as one"
	},
	{
		icon: Database,
		title: "Data Integrity Guaranteed",
		description: "Validated migrations with reconciliation and audit trails"
	},
	{
		icon: Network,
		title: "Future-Proof Architecture",
		description: "Modular, API-first designs ready for evolving needs"
	}
];
var processSteps = [
	{
		step: "01",
		title: "Discover & Plan",
		description: "Current state analysis, requirements gathering, architecture design, risk assessment, and detailed project planning with clear milestones."
	},
	{
		step: "02",
		title: "Design & Configure",
		description: "Solution configuration, integration mapping, data models, security controls, and environment preparation with stakeholder sign-off."
	},
	{
		step: "03",
		title: "Build & Test",
		description: "Development, automated testing, performance validation, security scanning, and user acceptance testing in staged environments."
	},
	{
		step: "04",
		title: "Deploy & Integrate",
		description: "Phased rollout, data migration execution, integration activation, cutover management, and go-live support with hypercare."
	},
	{
		step: "05",
		title: "Optimize & Transfer",
		description: "Performance tuning, knowledge transfer, documentation, operations handover, and continuous improvement roadmap."
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
function ITImplementationAndIntegrationPage() {
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
						alt: "IT implementation and systems integration",
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
								children: "IT Implementation and Integration"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[18ch]",
						children: ["IT Implementation", "and Integration"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Alpha Technologies offers expert IT implementation and integration services to ensure your technology systems work harmoniously. From deploying new solutions to integrating with existing infrastructure, our comprehensive approach guarantees a smooth transition, minimizing disruption and maximizing efficiency. With advanced threat detection, risk management, and comprehensive security protocols, we ensure your digital assets are protected, allowing you to operate with confidence and peace of mind." })
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
			id: "overview",
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
								"Seamless Synergy, Unleash Potential:",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Alpha's IT Implementation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"and Integration for Enhanced Performance"
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "Our IT Implementation and Integration service provides end-to-end support for businesses looking to implement and integrate new technology solutions seamlessly. We handle everything from planning and configuration to testing and deployment, and we ensure that all systems are fully integrated and working seamlessly together. With our IT Implementation and Integration service, businesses can focus on their core operations while we handle the technology side, ultimately driving increased efficiency, productivity, and growth."
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
									alt: "Systems integration and implementation",
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
			id: "implementation",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "Implementation excellence",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Three Pillars of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Implementation"
					})] }),
					lede: "Deploy, migrate, and validate with precision — proven methodologies, automated tooling, and certified experts.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 space-y-24",
					children: implementationCapabilities.map((cap, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
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
										alt: `${cap.title} implementation`,
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
											alt: `${cap.title} implementation`,
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
			id: "integration",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "03",
					eyebrow: "Integration mastery",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Three Pillars of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Integration"
					})] }),
					lede: "Connect applications, data, and processes across hybrid landscapes — API-first, event-driven, and cloud-native.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 space-y-24",
					children: integrationCapabilities.map((cap, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
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
										src: `https://images.unsplash.com/photo-${1551288049 + (idx + 3) * 1e3}?q=80&w=1600&auto=format&fit=crop`,
										alt: `${cap.title} integration`,
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
											src: `https://images.unsplash.com/photo-${1551288049 + (idx + 3) * 1e3}?q=80&w=1600&auto=format&fit=crop`,
											alt: `${cap.title} integration`,
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
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "benefits",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "04",
					eyebrow: "Why Alpha",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Measurable ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Delivery Outcomes"
					})] }),
					lede: "Every implementation and integration engagement delivers quantifiable results — on time, on budget, with zero surprises.",
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
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(benefit.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-7 text-xl font-medium",
										children: benefit.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground",
										children: benefit.description
									})
								]
							})]
						})
					}, benefit.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "process",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "05",
					eyebrow: "Our methodology",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Five-Phase ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Delivery Process"
					})] }),
					lede: "A structured, repeatable approach that de-risks complex implementations and integrations from discovery through optimization.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--brand-cyan)] to-transparent",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-16",
							children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex gap-8 md:gap-12",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex-shrink-0 w-20 md:w-24 text-right pr-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-3xl md:text-4xl font-medium text-[var(--brand-cyan)]",
											children: step.step
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute right-0 top-4 h-4 w-4 rounded-full border-4 border-background bg-[var(--brand-cyan)] z-10",
											"aria-hidden": true
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 pt-2 md:pt-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-medium",
											children: step.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-lg leading-relaxed text-muted-foreground",
											children: step.description
										})]
									})]
								})
							}, step.title))
						})]
					})
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
var SplitComponent = ITImplementationAndIntegrationPage;
//#endregion
export { SplitComponent as component };
