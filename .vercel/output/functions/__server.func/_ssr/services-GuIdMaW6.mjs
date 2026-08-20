import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, p as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as RefreshCcw, Et as ArrowUpRight, _t as Cable, ct as Cloud, dt as CircleEllipsis, ft as CircleCheck, g as Shield, lt as ClipboardList, m as Smartphone, rt as Database, v as ServerCog } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-GuIdMaW6.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		slug: "managed-it-services",
		icon: ServerCog,
		name: "Managed IT Services",
		tagline: "24/7 infrastructure and application operations with enterprise SLAs",
		description: "End-to-end managed services covering infrastructure, applications, databases, and end-user computing. Proactive monitoring, incident management, problem management, change management, and continuous service improvement — all backed by financially-backed SLAs.",
		longDescription: "Alpha's Managed IT Services operate from our ISO 27001-certified, SOC 2 Type II-audited Network Operations Centers across three continents. We manage 50,000+ endpoints, 10,000+ servers, and 500+ applications for global enterprises. Our ITIL 4-aligned processes include 24/7/365 monitoring with <5-minute critical alert response, automated patching and vulnerability remediation, capacity planning with predictive analytics, and quarterly business reviews with executive dashboards. Service catalog covers: server & storage management, database administration (Oracle, SQL Server, PostgreSQL, MongoDB), middleware & integration layers, end-user services (ServiceNow, Jira, Teams), backup & disaster recovery orchestration, and cloud operations (AWS, Azure, GCP, private cloud).",
		keyCapabilities: [
			"24/7 NOC & SOC with <5 min critical response",
			"ITIL 4: Incident, Problem, Change, Configuration, Release",
			"Multi-cloud operations (AWS, Azure, GCP, VMware)",
			"Database administration & performance tuning",
			"End-user computing & digital workplace services",
			"Backup, DR orchestration & quarterly DR testing",
			"Automated patching & vulnerability management",
			"Financially-backed SLAs with monthly reporting"
		],
		compliance: [
			"ISO 27001",
			"SOC 2 Type II",
			"ITIL 4",
			"PCI-DSS",
			"HIPAA",
			"GDPR"
		],
		stats: [
			{
				value: 99.9,
				suffix: "%",
				decimals: 1,
				label: "Service Availability"
			},
			{
				value: 5,
				suffix: " min",
				label: "Critical Response"
			},
			{
				value: 50,
				suffix: "K+",
				label: "Endpoints Managed"
			},
			{
				value: 15,
				suffix: "+",
				label: "Years Avg. Tenure"
			}
		],
		outcomes: [
			"Reduced IT OpEx by 30% for global manufacturer",
			"Achieved 99.99% availability for financial services client",
			"Cut incident volume by 65% through proactive automation",
			"Zero data loss events across 10+ years of DR tests"
		],
		gradient: "from-blue-600 to-cyan-500",
		image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "cyber-security",
		icon: Shield,
		name: "Cyber Security",
		tagline: "Adversary-focused defense for regulated enterprises",
		description: "Comprehensive cybersecurity services: managed detection & response (MDR), vulnerability management, penetration testing, identity & access management, GRC automation, and incident response. Threat intelligence-driven with MITRE ATT&CK alignment.",
		longDescription: "Alpha's Cyber Security practice combines a 24/7 SOC with offensive security expertise. Our MDR service monitors 10B+ events daily across endpoint, network, cloud, and identity telemetry using SIEM (Splunk, Sentinel, QRadar) and XDR platforms. Red team engagements simulate nation-state TTPs; purple team exercises close detection gaps. Identity services cover PAM, IGA, MFA rollout, and Zero Trust architecture. GRC automation maps controls to NIST CSF, ISO 27001, SOC 2, PCI-DSS, HIPAA, FedRAMP, and CMMC. Incident response retainer guarantees <1-hour on-site/remote mobilization. All services delivered by OSCP, CISSP, GCFA, GNFA-certified analysts.",
		keyCapabilities: [
			"Managed Detection & Response (MDR) — 24/7 SOC",
			"Red team / Purple team / Penetration testing",
			"Vulnerability management & ASM/CAASM",
			"Identity & Access: PAM, IGA, MFA, Zero Trust",
			"GRC automation & continuous compliance",
			"Incident response retainer (<1 hr mobilization)",
			"Threat intelligence & hunt operations",
			"Cloud security posture (CSPM, CWPP, CIEM)"
		],
		compliance: [
			"NIST CSF",
			"ISO 27001",
			"SOC 2",
			"PCI-DSS",
			"HIPAA",
			"FedRAMP",
			"CMMC 2.0"
		],
		stats: [
			{
				value: 10,
				suffix: "B+",
				label: "Events/Day Monitored"
			},
			{
				value: 1,
				suffix: " hr",
				label: "IR Mobilization"
			},
			{
				value: 99,
				suffix: "%",
				label: "Threat Detection Rate"
			},
			{
				value: 50,
				suffix: "+",
				label: "Certified Analysts"
			}
		],
		outcomes: [
			"Detected & contained APT intrusion in 47 minutes",
			"Achieved FedRAMP Moderate ATO in 4 months",
			"Reduced mean time to detect from 200 days to <1 day",
			"Zero successful ransomware incidents across client base"
		],
		gradient: "from-red-600 to-orange-500",
		image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "cloud-services",
		icon: Cloud,
		name: "Cloud Services",
		tagline: "Cloud-native architecture, migration, and operations at scale",
		description: "Full-lifecycle cloud services: strategy & assessment, migration factory, landing zones, DevOps platform engineering, FinOps, and managed cloud operations. Multi-cloud expertise across AWS, Azure, GCP, and VMware Cloud.",
		longDescription: "Alpha's Cloud Services practice has migrated 500+ applications and 50+ petabytes to public and private clouds. Our migration factory uses automated wave planning, dependency mapping, and validation frameworks to achieve 99.5% first-wave success. Landing zones implement CIS benchmarks, guardrails, and cost governance from day one. Platform engineering delivers internal developer platforms (IDPs) with GitOps, service mesh, observability, and policy-as-code. FinOps practice saves clients 20-40% on cloud spend through rightsizing, reserved instances, and anomaly detection. Managed operations cover 24/7 cloud NOC, automation runbooks, and quarterly well-architected reviews.",
		keyCapabilities: [
			"Cloud strategy, assessment & TCO modeling",
			"Migration factory (rehost, replatform, refactor)",
			"Multi-cloud landing zones & guardrails",
			"Platform engineering & IDP (Backstage, ArgoCD)",
			"DevSecOps pipelines & GitOps workflows",
			"FinOps: cost optimization & chargeback",
			"24/7 Cloud NOC & managed operations",
			"Well-Architected & quarterly reviews"
		],
		compliance: [
			"AWS Well-Architected",
			"Azure CAF",
			"SOC 2",
			"ISO 27001",
			"FedRAMP",
			"HIPAA",
			"PCI-DSS"
		],
		stats: [
			{
				value: 500,
				suffix: "+",
				label: "Apps Migrated"
			},
			{
				value: 50,
				suffix: " PB",
				label: "Data Migrated"
			},
			{
				value: 35,
				suffix: "%",
				label: "Avg. Cost Savings"
			},
			{
				value: 99.5,
				suffix: "%",
				decimals: 1,
				label: "Migration Success"
			}
		],
		outcomes: [
			"Migrated 200 apps to AWS in 6 months for global bank",
			"Reduced cloud spend 40% via FinOps for retailer",
			"Built IDP serving 500 developers for pharma client",
			"Achieved FedRAMP High for government workload"
		],
		gradient: "from-indigo-600 to-purple-500",
		image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "digital-transformation",
		icon: RefreshCcw,
		name: "Digital Transformation",
		tagline: "Strategy-to-execution transformation for the digital enterprise",
		description: "Enterprise digital transformation: strategy & roadmap, customer experience design, process automation, legacy modernization, data platform implementation, and organizational change management. Outcome-based with measurable KPIs.",
		longDescription: "Alpha's Digital Transformation practice guides enterprises from strategy through sustained adoption. We start with value-stream mapping and digital maturity assessment, then co-create a phased roadmap with clear business cases. Execution spans: customer journey redesign (Service Design, Design Thinking), intelligent automation (RPA, IPA, process mining), legacy modernization (strangler fig, domain-driven design, event-driven architecture), data & AI platforms (lakehouse, feature store, MLOps), and change management (ADKAR, training, adoption analytics). Governance via Transformation Office with monthly value realization tracking. Typical engagements: 12-36 months, $5M-$50M+.",
		keyCapabilities: [
			"Digital strategy, maturity & value-stream mapping",
			"Customer experience & service design",
			"Intelligent automation (RPA, IPA, process mining)",
			"Legacy modernization (strangler, DDD, event-driven)",
			"Data & AI platform (lakehouse, MLOps, feature store)",
			"Organizational change management (ADKAR)",
			"Transformation Office & value realization",
			"Agile at scale (SAFe, LeSS, Spotify model)"
		],
		compliance: [
			"TOGAF",
			"SAFe",
			"ITIL 4",
			"CMMI",
			"ISO 9001",
			"GDPR",
			"CCPA"
		],
		stats: [
			{
				value: 40,
				suffix: "%",
				label: "Process Efficiency Gain"
			},
			{
				value: 60,
				suffix: "%",
				label: "Faster Time-to-Market"
			},
			{
				value: 3,
				suffix: "x",
				label: "Digital Revenue Growth"
			},
			{
				value: 90,
				suffix: "%",
				label: "User Adoption Rate"
			}
		],
		outcomes: [
			"Transformed claims processing for major insurer (60% faster)",
			"Built digital bank in 12 months for regional institution",
			"Automated 200+ processes saving $15M/yr for manufacturer",
			"Launched direct-to-consumer platform for pharma (3x revenue)"
		],
		gradient: "from-teal-600 to-cyan-500",
		image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "it-strategy-and-planning",
		icon: ClipboardList,
		name: "IT Strategy and Planning",
		tagline: "Business-aligned technology strategy with executable roadmaps",
		description: "IT strategy, enterprise architecture, application portfolio rationalization, technology radar, vendor management, and IT financial management. Delivered by former CIOs and principal architects with Fortune 500 experience.",
		longDescription: "Alpha's IT Strategy practice bridges business ambition and technology execution. Engagements begin with stakeholder interviews, capability assessments, and benchmarking. We produce: IT strategic plan (3-5 year), enterprise architecture (TOGAF, ArchiMate), application portfolio rationalization (TIME model: Tolerate, Invest, Migrate, Eliminate), technology radar with build/buy/partner decisions, vendor strategy & negotiation support, and IT financial management (TBM, Apptio). Roadmaps include sequencing, dependencies, capacity, and funding models. Delivered as a collaborative engagement with client leadership — not a slide deck handed over.",
		keyCapabilities: [
			"IT strategic planning (3-5 year horizon)",
			"Enterprise architecture (TOGAF, ArchiMate)",
			"Application portfolio rationalization (TIME)",
			"Technology radar & build/buy/partner analysis",
			"Vendor strategy, selection & negotiation",
			"IT financial management (TBM, Apptio)",
			"IT operating model & org design",
			"Board-ready presentations & business cases"
		],
		compliance: [
			"TOGAF",
			"ITIL 4",
			"COBIT",
			"TBM",
			"ISO 38500",
			"NIST CSF"
		],
		stats: [
			{
				value: 30,
				suffix: "%",
				label: "IT Cost Reduction"
			},
			{
				value: 50,
				suffix: "+",
				label: "Apps Rationalized"
			},
			{
				value: 100,
				suffix: "%",
				label: "Stakeholder Alignment"
			},
			{
				value: 5,
				suffix: "M+",
				label: "Annual Savings Identified"
			}
		],
		outcomes: [
			"Rationalized 300 apps saving $8M/yr for healthcare system",
			"Defined 5-year cloud strategy for global retailer",
			"Negotiated $12M vendor savings for university",
			"Redesigned IT org for 2,000-person enterprise"
		],
		gradient: "from-amber-600 to-orange-500",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "it-implementation-and-integration",
		icon: Cable,
		name: "IT Implementation and Integration",
		tagline: "Complex system integration delivered on time, on budget",
		description: "Large-scale implementation and integration: ERP (SAP, Oracle, Workday), CRM (Salesforce, Dynamics), HCM, ITSM (ServiceNow), middleware (MuleSoft, Boomi, Azure Integration), API management, and data migration. PMI-certified delivery with rigorous governance.",
		longDescription: "Alpha's Implementation & Integration practice has delivered 200+ enterprise implementations with a 95% on-time rate. Methodology combines waterfall structure for compliance-critical phases with agile sprints for configuration and testing. Services: program setup & governance, requirements & fit-gap analysis, solution design & architecture, configuration & customization, data migration (legacy extraction, cleansing, validation, load), integration development (APIs, events, batch), testing (unit, integration, UAT, performance, security), cutover planning & rehearsal, hypercare & stabilization. PMO provides RAID logs, steering committee reporting, and earned value management. Team includes PMP, PgMP, CBAP, and platform-certified consultants.",
		keyCapabilities: [
			"ERP: SAP S/4HANA, Oracle Cloud, Workday",
			"CRM: Salesforce, Dynamics 365",
			"HCM & ITSM: Workday, ServiceNow",
			"Middleware & iPaaS: MuleSoft, Boomi, Azure APIM",
			"Data migration: extract, cleanse, validate, load",
			"API management & developer portals",
			"Testing: automation, performance, security",
			"Cutover, hypercare & stabilization"
		],
		compliance: [
			"PMI/PMP",
			"ITIL 4",
			"CMMI",
			"ISO 9001",
			"SOX",
			"GDPR",
			"HIPAA"
		],
		stats: [
			{
				value: 200,
				suffix: "+",
				label: "Implementations"
			},
			{
				value: 95,
				suffix: "%",
				label: "On-Time Delivery"
			},
			{
				value: 50,
				suffix: "+",
				label: "Certified Consultants"
			},
			{
				value: 98,
				suffix: "%",
				label: "UAT First-Pass Rate"
			}
		],
		outcomes: [
			"S/4HANA implementation for $10B manufacturer (on time)",
			"Salesforce multi-cloud for global insurer (200 users)",
			"ServiceNow ITSM/ITOM for federal agency (FedRAMP)",
			"MuleSoft integration layer for health system (50+ systems)"
		],
		gradient: "from-green-600 to-emerald-500",
		image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "other-specialized-services",
		icon: CircleEllipsis,
		name: "Other Specialized Services",
		tagline: "Niche expertise for unique enterprise challenges",
		description: "Specialized practices: mainframe modernization, Oracle licensing optimization, SAP license management, IT audit & assessment, disaster recovery as a service (DRaaS), high-performance computing (HPC), and executive advisory. Deep specialist teams, not generalists.",
		longDescription: "Alpha's Specialized Services address the gaps general integrators can't. Mainframe Modernization: automated code analysis, refactoring to Java/C#, data migration, and parallel run validation — reducing MIPS by 60-80%. Oracle License Optimization: LMS-script analysis, contract review, and negotiation support — typical savings 30-50%. SAP License Management: LAW consolidation, indirect access analysis, and S/4HANA conversion planning. IT Audit & Assessment: NIST, ISO, SOX, PCI, HIPAA gap assessments with remediation roadmaps. DRaaS: RPO <15 min, RTO <1 hr, quarterly failover tests. HPC: cluster design, scheduler optimization, cloud burst for genomics/CAE. Executive Advisory: fractional CTO/CISO, board tech committees, M&A tech due diligence.",
		keyCapabilities: [
			"Mainframe modernization (COBOL, PL/I, VSAM, DB2)",
			"Oracle license optimization & negotiation",
			"SAP license management & S/4HANA planning",
			"IT audit & compliance gap assessments",
			"DRaaS: <15 min RPO, <1 hr RTO",
			"High-performance computing & cloud burst",
			"Fractional CTO/CISO & board advisory",
			"M&A technology due diligence"
		],
		compliance: [
			"NIST",
			"ISO 27001",
			"SOX",
			"PCI-DSS",
			"HIPAA",
			"FedRAMP",
			"GDPR"
		],
		stats: [
			{
				value: 60,
				suffix: "%",
				label: "MIPS Reduction"
			},
			{
				value: 40,
				suffix: "%",
				label: "License Savings"
			},
			{
				value: 15,
				suffix: " min",
				label: "DRaaS RPO"
			},
			{
				value: 100,
				suffix: "%",
				label: "Audit Pass Rate"
			}
		],
		outcomes: [
			"Mainframe offload saved $4M/yr for telco",
			"Oracle audit defense saved $22M for retailer",
			"SAP indirect access resolution for manufacturer",
			"DRaaS failover test passed for government agency"
		],
		gradient: "from-slate-600 to-gray-500",
		image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "data-services",
		icon: Database,
		name: "Data Services",
		tagline: "Data platforms, governance, and AI-ready foundations",
		description: "End-to-end data services: modern data architecture (lakehouse, mesh, fabric), data engineering & pipelines, master data management, data governance & catalog, business intelligence, advanced analytics, and MLOps. Cloud-agnostic with open standards.",
		longDescription: "Alpha's Data Services practice builds the foundation for AI and analytics at scale. Architecture: medallion lakehouse (Databricks, Snowflake, Synapse, Redshift, open table formats), data mesh domains with federated governance, or data fabric with active metadata. Engineering: ELT/ETL pipelines (dbt, Airflow, Spark, Flink), streaming (Kafka, Flink, Kinesis), data contracts & schema evolution. Governance: Unity Catalog, Purview, DataHub — lineage, quality scores, PII classification, policy enforcement. BI: Power BI, Tableau, Looker — semantic layers, self-service, embedded analytics. AI/ML: feature stores, model registry, experiment tracking, automated retraining, A/B testing. Team includes CDMP, Databricks/Snowflake certified engineers and ML engineers.",
		keyCapabilities: [
			"Lakehouse, data mesh & data fabric architecture",
			"Data engineering: batch & streaming pipelines",
			"Master data management (MDM) & golden records",
			"Data governance: catalog, lineage, quality, policy",
			"BI & analytics: semantic layer, self-service",
			"Advanced analytics & ML: feature store, MLOps",
			"Data product thinking & domain ownership",
			"Open standards: Iceberg, Delta, Hudi, Parquet"
		],
		compliance: [
			"GDPR",
			"CCPA",
			"HIPAA",
			"SOX",
			"PCI-DSS",
			"FedRAMP",
			"ISO 27001"
		],
		stats: [
			{
				value: 100,
				suffix: "TB+",
				label: "Data Under Management"
			},
			{
				value: 500,
				suffix: "+",
				label: "Pipelines in Production"
			},
			{
				value: 90,
				suffix: "%",
				label: "Data Quality Score"
			},
			{
				value: 10,
				suffix: "x",
				label: "Faster Insight Delivery"
			}
		],
		outcomes: [
			"Built lakehouse for global bank (500TB, 200 domains)",
			"MDM consolidated 15M customer records for insurer",
			"MLOps platform reduced model deployment from weeks to hours",
			"Self-service BI enabled 2,000 users for retailer"
		],
		gradient: "from-violet-600 to-purple-500",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
	},
	{
		slug: "custom-product-application-development",
		icon: Smartphone,
		name: "Custom Product-Application Development",
		tagline: "Product-minded engineering for mission-critical applications",
		description: "Full-lifecycle custom development: product discovery & strategy, UX/UI design, cloud-native development (React, .NET, Java, Go, Node, Python), mobile (iOS, Android, Flutter, React Native), QA automation, DevSecOps, and product support. Agile, outcome-focused, IP-retaining.",
		longDescription: "Alpha's Custom Product-Application Development practice builds software that becomes a competitive asset — not a cost center. Engagement model: dedicated product teams (PM, UX, architects, engineers, QA, DevOps) aligned to your outcomes. Discovery: jobs-to-be-done, user research, prototyping, validation. Architecture: cloud-native, event-driven, domain-driven, hexagonal — deploying to Kubernetes, serverless, or PaaS. Stack: frontend (React, Next.js, TypeScript), backend (.NET 8, Java 21, Go, Python, Node), mobile (Flutter, React Native, Swift, Kotlin), data (PostgreSQL, MongoDB, Redis, Elasticsearch), observability (OpenTelemetry, Grafana, Datadog). Quality: shift-left security (SAST, DAST, SCA), contract testing, chaos engineering, 90%+ automation. IP assignment to client. Engagement: fixed-capacity sprints, outcome-based milestones, transparent velocity.",
		keyCapabilities: [
			"Product discovery, strategy & validation",
			"UX/UI design: research, systems, accessibility",
			"Cloud-native: .NET, Java, Go, Node, Python",
			"Mobile: Flutter, React Native, iOS, Android",
			"DevSecOps: GitOps, shift-left security, chaos",
			"QA automation: 90%+ coverage, contract tests",
			"Product support & evolution (Level 2/3)",
			"IP ownership retained by client"
		],
		compliance: [
			"OWASP",
			"NIST SSDF",
			"ISO 27001",
			"SOC 2",
			"GDPR",
			"HIPAA",
			"FDA 21 CFR Part 11"
		],
		stats: [
			{
				value: 150,
				suffix: "+",
				label: "Products Delivered"
			},
			{
				value: 95,
				suffix: "%",
				label: "On-Time Sprint Delivery"
			},
			{
				value: 4.8,
				suffix: "/5",
				decimals: 1,
				label: "Client NPS"
			},
			{
				value: 40,
				suffix: "%",
				label: "Faster Than In-House"
			}
		],
		outcomes: [
			"Built digital bank app (500K users, 4.9★) for fintech",
			"Clinical trial platform for pharma (FDA validated)",
			"Citizen portal for state government (2M users)",
			"IoT platform for industrial OEM (100K devices)"
		],
		gradient: "from-pink-600 to-rose-500",
		image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop"
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MainLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "top",
			className: "relative min-h-[70vh] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
						alt: "Services team collaboration",
						width: 2400,
						height: 1600,
						className: "h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-[min(1400px,92vw)] pt-32 pb-16 lg:pt-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								className: "text-foreground",
								children: "Services"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[18ch]",
						children: [
							"Services that",
							"deliver",
							"outcomes."
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nine service lines. One delivery standard. From 24/7 managed operations to custom product development, every engagement is backed by certified experts, proven methodologies, and financially-backed SLAs." })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "01",
					eyebrow: "Our service portfolio",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Nine services, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "one standard"
					})] }),
					lede: "Each service links to a detailed page with capabilities, compliance frameworks, measurable outcomes, and client results.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: services.map((svc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/what-we-do/services/${svc.slug}`,
							className: "group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-background/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 transition-opacity duration-700 group-hover:opacity-20",
								style: { background: `linear-gradient(135deg, ${svc.gradient.replace("from-", "").replace("to-", "")})` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] transition-colors duration-500 group-hover:border-[color-mix(in_oklab,var(--brand-cyan)_55%,transparent)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(svc.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-7 text-xl font-medium",
										children: svc.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground flex-1",
										children: svc.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center gap-2 text-sm font-medium text-[var(--brand-cyan)] group-hover:gap-3 transition-all duration-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									})
								]
							})]
						})
					}, svc.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-28",
					children: services.map((svc, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx % 2 === 0 ? 0 : .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
							children: idx % 2 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-[2rem] border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: svc.image,
										alt: `${svc.name} service delivery`,
										loading: "lazy",
										width: 1600,
										height: 1067,
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--navy-deep))]" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
									index: `0${idx + 2}`,
									eyebrow: "Service",
									title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: svc.name })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-relaxed text-[var(--brand-cyan)] font-medium",
									children: svc.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: svc.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed text-muted-foreground",
									children: svc.longDescription
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid gap-4 sm:grid-cols-2",
									children: svc.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-3xl font-medium tracking-tight text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: s.value,
												suffix: s.suffix,
												decimals: s.decimals ?? 0
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: s.label
										})]
									}, s.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground",
										children: "Key capabilities"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 grid gap-3 sm:grid-cols-2",
										children: svc.keyCapabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 shrink-0 text-[var(--brand-cyan)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
										}, c))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground",
										children: "Compliance & frameworks"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: svc.compliance.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border px-3 py-1 text-[0.7rem] tracking-[0.1em] text-muted-foreground",
											children: c
										}, c))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: `/what-we-do/services/${svc.slug}`,
									className: "mt-10 inline-flex",
									children: ["View Full Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
							] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:order-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -inset-4 rounded-[2.5rem] aurora opacity-50",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-[2rem] border border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: svc.image,
											alt: `${svc.name} service delivery`,
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
										index: `0${idx + 2}`,
										eyebrow: "Service",
										title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: svc.name })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg leading-relaxed text-[var(--brand-cyan)] font-medium",
										children: svc.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-lg leading-relaxed text-muted-foreground",
										children: svc.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-base leading-relaxed text-muted-foreground",
										children: svc.longDescription
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-10 grid gap-4 sm:grid-cols-2",
										children: svc.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border p-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-3xl font-medium tracking-tight text-[var(--brand-cyan)]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
													to: s.value,
													suffix: s.suffix,
													decimals: s.decimals ?? 0
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted-foreground",
												children: s.label
											})]
										}, s.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground",
											children: "Key capabilities"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 grid gap-3 sm:grid-cols-2",
											children: svc.keyCapabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-sm text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 shrink-0 text-[var(--brand-cyan)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
											}, c))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground",
											children: "Compliance & frameworks"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex flex-wrap gap-2",
											children: svc.compliance.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full border border-border px-3 py-1 text-[0.7rem] tracking-[0.1em] text-muted-foreground",
												children: c
											}, c))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: `/what-we-do/services/${svc.slug}`,
										className: "mt-10 inline-flex",
										children: ["View Full Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									})
								]
							})] })
						})
					}, svc.name))
				})
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
									children: "Engage our experts"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-section mt-6",
									children: ["Start Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Next Initiative"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
									children: "From advisory to managed operations, our teams are ready to deploy. Tell us about your challenge and we'll connect you with the right practice lead."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 flex justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#contact",
										className: "px-12 py-5 text-base",
										children: ["Start a Conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "/what-we-do",
										variant: "ghost",
										className: "px-12 py-5 text-base",
										children: "Back to What We Do"
									})]
								})
							]
						})
					]
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	] });
}
var SplitComponent = ServicesPage;
//#endregion
export { SplitComponent as component };
