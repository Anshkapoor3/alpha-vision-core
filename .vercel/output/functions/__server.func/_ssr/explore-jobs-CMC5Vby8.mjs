import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, y as Send, yt as Briefcase } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explore-jobs-CMC5Vby8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1521791136064-7986c292241b?q=80&w=2400&auto=format&fit=crop";
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
var howToApplySteps = [
	{
		step: "01",
		title: "Browse Openings",
		description: "Explore our current positions and find roles that match your skills and aspirations."
	},
	{
		step: "02",
		title: "Submit Application",
		description: "Click on a job title and follow the instructions to submit your resume and relevant documents."
	},
	{
		step: "03",
		title: "Team Review",
		description: "Our recruiting team reviews your application and assesses alignment with our needs."
	},
	{
		step: "04",
		title: "Connect With Us",
		description: "If your qualifications match, we'll reach out to discuss next steps and schedule conversations."
	}
];
function ExploreJobsPage() {
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
						alt: "Career opportunities and professional growth",
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
								children: "Careers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-cyan)]",
								"aria-hidden": true,
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Explore Jobs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[18ch]",
						children: ["Explore", "Jobs"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At Alpha Technologies, we are always on the lookout for talented and passionate individuals to join our team. Browse our current job openings and find the perfect role that matches your skills, interests, and career aspirations. Whether you're a seasoned professional or just beginning your career journey, Alpha Technologies provides a dynamic and supportive environment where you can thrive." })
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
							href: "#openings",
							children: ["View Openings", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
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
							eyebrow: "Your journey",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Your Future ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Starts Here"
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg leading-relaxed text-muted-foreground",
								children: "Welcome to the Explore Jobs page at Alpha Technologies. Here, we invite you to discover exciting career opportunities that align with your skills, interests, and aspirations. Whether you're an experienced professional looking for your next challenge or a recent graduate eager to kick-start your career, Alpha Technologies offers a wide range of opportunities to grow, learn, and make a meaningful impact."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								href: "#openings",
								className: "mt-8 inline-flex",
								children: ["View Current Openings", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
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
									src: "https://images.unsplash.com/photo-1521791136064-7986c292241b?q=80&w=1600&auto=format&fit=crop",
									alt: "Professional career growth and opportunities",
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
			id: "openings",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "02",
					eyebrow: "Opportunities",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Current ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Openings"
					})] }),
					lede: "Explore our current job openings and find the perfect opportunity to take your career to the next level. Whether you're a software developer, project manager, data analyst, or marketing specialist, we have a variety of roles available across different departments and locations.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel rounded-[2rem] border border-border p-12 md:p-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background/70 text-[var(--brand-cyan)] mx-auto mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-8 w-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-3xl font-medium tracking-tight mb-6",
								children: "No Open Positions at This Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10",
								children: "We don't have any active job postings right now, but we're always interested in connecting with talented individuals. Check back soon for new opportunities, or join our talent community to be notified when positions open."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "/careers/why-alpha",
									variant: "ghost",
									className: "px-8 py-4",
									children: ["Learn Why Alpha", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#contact",
									className: "px-8 py-4",
									children: ["Get In Touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})]
							})
						]
					}) })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "apply",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "03",
					eyebrow: "Application process",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["How to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Apply"
					})] }),
					lede: "Our application process is designed to be straightforward and transparent. We value your time and want to ensure a smooth experience from application to offer.",
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
							children: howToApplySteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
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
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "future",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "04",
					eyebrow: "Join us",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's Build the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Future Together"
					})] }),
					lede: "Ready to embark on a rewarding career journey with Alpha Technologies? Explore our current job openings and take the first step towards building a brighter future. Join us as we innovate, collaborate, and drive positive change in the world of technology.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-muted-foreground",
								children: "At Alpha Technologies, we believe that our people are our greatest asset. We're committed to creating an environment where innovation thrives, diverse perspectives are valued, and every team member has the opportunity to grow and make an impact."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg leading-relaxed text-muted-foreground",
								children: "Whether you're developing cutting-edge solutions, managing complex implementations, or supporting our clients' digital transformations, your work at Alpha Technologies directly contributes to driving technological excellence across industries worldwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#openings",
									className: "inline-flex",
									children: ["View Openings", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									href: "/careers/why-alpha",
									variant: "ghost",
									className: "inline-flex",
									children: "Why Alpha"
								})]
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
										src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
										alt: "Team building the future together",
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
									children: "Have questions"
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
										href: "/careers/explore-jobs",
										variant: "ghost",
										className: "px-12 py-5 text-base",
										children: "Back to Explore Jobs"
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
var SplitComponent = ExploreJobsPage;
//#endregion
export { SplitComponent as component };
