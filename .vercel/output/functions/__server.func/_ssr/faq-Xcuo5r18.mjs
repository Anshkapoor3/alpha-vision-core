import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, b as Search, pt as ChevronDown, ut as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
import { t as MainLayout } from "./MainLayout-LZbH9dhe.mjs";
import { t as Counter } from "./Counter-Af3B8w_4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-Xcuo5r18.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2400&auto=format&fit=crop";
var faqs = [
	{
		question: "What does Alpha Technologies specialize in?",
		answer: "Alpha Technologies specializes in providing innovative tech solutions and services across various industries. We offer a wide range of products, including software applications, hardware systems, cybersecurity solutions, cloud integration, and data analytics platforms."
	},
	{
		question: "How long has Alpha Technologies been in business?",
		answer: "Alpha Technologies has been operating for over 25 years, establishing itself as a trusted leader in the tech industry."
	},
	{
		question: "What sets Alpha Technologies apart from other tech companies?",
		answer: "Alpha Technologies stands out for its commitment to innovation, customer-centric approach, and a culture of collaboration. We prioritize delivering reliable, scalable, and user-friendly solutions while fostering an environment that encourages creativity, continuous learning, and growth."
	},
	{
		question: "Does Alpha Technologies offer support and maintenance for its products?",
		answer: "Yes, we provide comprehensive support and maintenance services for our products. Our dedicated support team is available to assist with any inquiries, technical issues, or updates to ensure a smooth and uninterrupted experience for our clients."
	},
	{
		question: "Is Alpha Technologies involved in corporate social responsibility (CSR) initiatives?",
		answer: "Yes, at Alpha Technologies, we believe in giving back to society. We actively engage in corporate social responsibility initiatives, supporting causes such as education, environmental sustainability, and community development."
	},
	{
		question: "How can I join the team at Alpha Technologies?",
		answer: "We are always looking for talented individuals to join our team. Please visit our careers page on our website to explore current job openings and submit your application. We value diversity and seek individuals who are passionate, innovative, and ready to make a difference in the tech industry."
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
function AccordionItem({ question, answer, index }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		layout: true,
		className: "group glass-panel relative overflow-hidden rounded-[1.5rem] border border-border transition-all duration-500 hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			delay: index * .08,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setIsOpen(!isOpen),
			"aria-expanded": isOpen,
			className: "w-full px-8 py-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative flex-1 text-lg font-medium leading-relaxed text-foreground pr-12",
				children: question
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "relative flex-shrink-0 h-8 w-8 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]",
				animate: { rotate: isOpen ? 180 : 0 },
				transition: {
					duration: .3,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .35,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-8 pb-8 border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-muted-foreground",
					children: answer
				})
			})
		}) })]
	});
}
function SearchBar() {
	const [query, setQuery] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative max-w-2xl mx-auto mb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "faq-search",
				className: "sr-only",
				children: "Search FAQ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "faq-search",
				type: "search",
				placeholder: "Search questions...",
				value: query,
				onChange: (e) => setQuery(e.target.value),
				className: "w-full pl-12 pr-4 py-4 rounded-[1.5rem] border border-border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300",
				"aria-label": "Search FAQ"
			})
		]
	});
}
function FAQPage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const filteredFAQs = faqs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
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
						alt: "Frequently asked questions and support",
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
								children: "FAQ"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-8 max-w-[18ch]",
						children: ["FAQ"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
								children: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Have questions? Explore our comprehensive FAQ section to find clear and concise answers to the most frequently asked questions about Alpha services, solutions, and support. We're here to help you get the information you need, quickly and easily." })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "faq",
			className: "relative overflow-hidden py-24 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center max-w-3xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "01",
							eyebrow: "Have questions?",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Here, you\\u2019ll find answers to common questions about our company, products, support, careers, and more. If you have any specific queries that are not covered here, our customer support team is ready to assist you." }),
							align: "center"
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								role: "list",
								"aria-label": "Frequently asked questions",
								children: filteredFAQs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem, {
									question: faq.question,
									answer: faq.answer,
									index
								}, index))
							}), filteredFAQs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-16 glass-panel rounded-[2rem] border border-border p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-12 w-12 mx-auto text-muted-foreground mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-medium mb-2",
										children: "No matching questions found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Try adjusting your search terms or browse all questions below."
									})
								]
							})]
						})
					})
				]
			})]
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
									children: "Still have questions"
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
										href: "/careers/faq",
										variant: "ghost",
										className: "px-12 py-5 text-base",
										children: "Back to FAQ"
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
var SplitComponent = FAQPage;
//#endregion
export { SplitComponent as component };
