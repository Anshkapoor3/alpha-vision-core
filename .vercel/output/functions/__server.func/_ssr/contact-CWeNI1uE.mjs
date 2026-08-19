import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useTransform, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Et as ArrowUpRight, F as Mail, L as LoaderCircle, O as Phone, P as MapPin, ft as CircleCheck, n as X } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton, o as cn } from "./SectionHeading-DUqTJ7xH.mjs";
import { t as MainLayout } from "./MainLayout-DSwvy4vZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CWeNI1uE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop";
var areasOfInterest = [
	"Managed IT Services",
	"Cyber Security",
	"Cloud Services",
	"Digital Transformation",
	"IT Strategy and Planning",
	"IT Implementation and Integration",
	"Data Services",
	"Custom Product-Application Development",
	"Other Specialized Services",
	"Careers / Job Inquiry",
	"Partnership Opportunities",
	"General Inquiry"
];
var inquiryTypes = [
	{
		value: "general",
		label: "General Inquiry"
	},
	{
		value: "job-seeker",
		label: "Job Seeker"
	},
	{
		value: "callback",
		label: "Request Callback"
	},
	{
		value: "partnership",
		label: "Partnership Inquiry"
	},
	{
		value: "support",
		label: "Technical Support"
	}
];
function ContactPage() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		inquiryType: "general",
		areaOfInterest: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
		if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
		else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone)) newErrors.phone = "Valid phone number required";
		if (!formData.areaOfInterest) newErrors.areaOfInterest = "Please select an area of interest";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		setStatus("submitting");
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setStatus("success");
			setFormData({
				name: "",
				email: "",
				phone: "",
				inquiryType: "general",
				areaOfInterest: "",
				message: ""
			});
		} catch {
			setStatus("error");
		}
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => ({
			...prev,
			[name]: ""
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MainLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "top",
			ref: heroRef,
			className: "relative min-h-[60vh] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y },
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroImage,
						alt: "Modern office workspace",
						width: 2400,
						height: 1600,
						className: "h-full w-full scale-110 object-cover opacity-45 saturate-150 contrast-105 animate-drift dark:opacity-55 dark:saturate-100 dark:contrast-100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 aurora opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity: fade },
				className: "relative z-10 mx-auto w-[min(1400px,92vw)] pt-28 pb-12 lg:pt-36",
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
								children: "Get in Touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-cyan)]",
								"aria-hidden": true,
								children: "↓"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-6 max-w-[20ch]",
						children: ["Contact", "Us"].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						className: "mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ready to start your next project? Have questions about our services? Our team is here to help. Reach out and we'll respond within 24 hours." })
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "contact-main",
			className: "relative overflow-hidden py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "01",
					eyebrow: "Get in touch",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Contact ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Alpha Technologies"
					})] }),
					lede: "We'd love to hear from you. Whether you have a question about our services, need technical support, or want to explore partnership opportunities — our team is ready to assist.",
					align: "center"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-panel rounded-[2rem] border border-border p-8 md:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-medium",
											children: "Visit Us"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-foreground",
												children: "IT Park, Plot ITC 15, Sector 67"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sahibzada Ajit Singh Nagar" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Punjab 160062" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-panel rounded-[2rem] border border-border p-8 md:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-medium",
											children: "Email Us"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:it.training@alphait.us",
											className: "text-muted-foreground hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-2",
											children: ["it.training@alphait.us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-panel rounded-[2rem] border border-border p-8 md:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-medium",
											children: "Call Us"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:9056739084",
											className: "text-muted-foreground hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-2",
											children: "9056739084"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:9056739082",
											className: "text-muted-foreground hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-2",
											children: "9056739082"
										})]
									})]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-panel rounded-[2rem] border border-border p-8 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-medium mb-2",
										children: "Send Us a Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Fill out the form and we'll get back to you within 24 hours."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: .95,
											y: 20
										},
										animate: {
											opacity: 1,
											scale: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											scale: .95,
											y: -20
										},
										transition: {
											duration: .4,
											ease: [
												.16,
												1,
												.3,
												1
											]
										},
										className: "text-center py-16",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 mx-auto mb-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-medium mb-3",
												children: "Message Sent Successfully!"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground mb-8 max-w-md mx-auto",
												children: "Thank you for reaching out. Our team will get back to you within 24 hours."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setStatus("idle"),
												className: "inline-flex items-center gap-2 text-[var(--brand-cyan)] font-medium hover:underline",
												children: ["Send Another Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
											})
										]
									}, "success") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
										onSubmit: handleSubmit,
										initial: {
											opacity: 0,
											y: 20
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -20
										},
										transition: {
											duration: .4,
											ease: [
												.16,
												1,
												.3,
												1
											]
										},
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-6 md:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														htmlFor: "name",
														className: "block text-sm font-medium text-foreground mb-2",
														children: ["Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-red-500",
															children: "*"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														id: "name",
														name: "name",
														value: formData.name,
														onChange: handleInputChange,
														placeholder: "John Doe",
														className: cn("w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300", errors.name && "border-red-500 focus-visible:ring-red-500"),
														"aria-invalid": errors.name ? "true" : "false",
														"aria-describedby": errors.name ? "name-error" : void 0,
														disabled: status === "submitting"
													}),
													errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														id: "name-error",
														className: "mt-1.5 text-sm text-red-500",
														role: "alert",
														children: errors.name
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														htmlFor: "email",
														className: "block text-sm font-medium text-foreground mb-2",
														children: ["Email Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-red-500",
															children: "*"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "email",
														id: "email",
														name: "email",
														value: formData.email,
														onChange: handleInputChange,
														placeholder: "john@company.com",
														className: cn("w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300", errors.email && "border-red-500 focus-visible:ring-red-500"),
														"aria-invalid": errors.email ? "true" : "false",
														"aria-describedby": errors.email ? "email-error" : void 0,
														disabled: status === "submitting"
													}),
													errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														id: "email-error",
														className: "mt-1.5 text-sm text-red-500",
														role: "alert",
														children: errors.email
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-6 md:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														htmlFor: "phone",
														className: "block text-sm font-medium text-foreground mb-2",
														children: ["Phone Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-red-500",
															children: "*"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "tel",
														id: "phone",
														name: "phone",
														value: formData.phone,
														onChange: handleInputChange,
														placeholder: "+1 (555) 123-4567",
														className: cn("w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300", errors.phone && "border-red-500 focus-visible:ring-red-500"),
														"aria-invalid": errors.phone ? "true" : "false",
														"aria-describedby": errors.phone ? "phone-error" : void 0,
														disabled: status === "submitting"
													}),
													errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														id: "phone-error",
														className: "mt-1.5 text-sm text-red-500",
														role: "alert",
														children: errors.phone
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													htmlFor: "inquiryType",
													className: "block text-sm font-medium text-foreground mb-2",
													children: ["Inquiry Type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-red-500",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													id: "inquiryType",
													name: "inquiryType",
													value: formData.inquiryType,
													onChange: handleInputChange,
													className: cn("w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300", errors.inquiryType && "border-red-500 focus-visible:ring-red-500"),
													disabled: status === "submitting",
													children: inquiryTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: type.value,
														children: type.label
													}, type.value))
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													htmlFor: "areaOfInterest",
													className: "block text-sm font-medium text-foreground mb-2",
													children: ["Area of Interest ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-red-500",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													id: "areaOfInterest",
													name: "areaOfInterest",
													value: formData.areaOfInterest,
													onChange: handleInputChange,
													className: cn("w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300", errors.areaOfInterest && "border-red-500 focus-visible:ring-red-500"),
													disabled: status === "submitting",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														children: "Select an area of interest"
													}), areasOfInterest.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: area,
														children: area
													}, area))]
												}),
												errors.areaOfInterest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1.5 text-sm text-red-500",
													role: "alert",
													children: errors.areaOfInterest
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													htmlFor: "message",
													className: "block text-sm font-medium text-foreground mb-2",
													children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-red-500",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "message",
													name: "message",
													value: formData.message,
													onChange: handleInputChange,
													rows: 5,
													placeholder: "Tell us about your project, inquiry, or how we can help...",
													className: cn("w-full px-4 py-3 rounded-xl border bg-background/70 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300 resize-none", errors.message && "border-red-500 focus-visible:ring-red-500"),
													"aria-invalid": errors.message ? "true" : "false",
													"aria-describedby": errors.message ? "message-error" : void 0,
													disabled: status === "submitting"
												}),
												errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "message-error",
													className: "mt-1.5 text-sm text-red-500",
													role: "alert",
													children: errors.message
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-end gap-4 pt-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setFormData({
														name: "",
														email: "",
														phone: "",
														inquiryType: "general",
														areaOfInterest: "",
														message: ""
													}),
													className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors disabled:opacity-50",
													disabled: status === "submitting",
													children: "Clear Form"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "submit",
													className: cn("inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[var(--primary-foreground)] [background:var(--gradient-brand)] shadow-[var(--shadow-glow)] transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed", status === "submitting" && "cursor-wait"),
													disabled: status === "submitting",
													children: status === "submitting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }), "Sending..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })] })
												})]
											})
										]
									}, "form")
								}),
								status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: "mt-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400",
									role: "alert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), "Something went wrong. Please try again or email us directly at it.training@alphait.us"]
									})
								})
							]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "quote-cta",
			className: "relative overflow-hidden py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 aurora opacity-40",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-[min(1400px,92vw)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2.5rem] border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 aurora opacity-70",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_10%,var(--navy-deep)_78%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative px-8 py-16 text-center lg:px-20 lg:py-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Ready to start"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-section mt-4",
									children: ["Get A ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Quote"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
									children: "Tell us about your project requirements and we'll provide a customized proposal with pricing and timeline."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										href: "#contact",
										className: "px-10 py-4 text-base",
										children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										href: "/careers/explore-jobs",
										variant: "ghost",
										className: "px-10 py-4 text-base",
										children: "View Careers"
									})]
								})
							]
						})
					]
				}) })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "location",
			className: "relative overflow-hidden py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-[min(1400px,92vw)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "02",
						eyebrow: "Our location",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Find Us in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Mohali"
						})] }),
						lede: "Our headquarters is located in the heart of Punjab's IT corridor, easily accessible from major cities and the Chandigarh International Airport.",
						align: "center"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-video rounded-[2rem] overflow-hidden border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.123456789!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2c1234567%3A0x123456789abcdef!2sIT%20Park%2C%20Plot%20ITC%2015%2C%20Sector%2067%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160062!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
									width: "100%",
									height: "100%",
									style: { border: 0 },
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade",
									title: "Alpha IT Managed Services Location - IT Park, Plot ITC 15, Sector 67, Sahibzada Ajit Singh Nagar",
									"aria-label": "Map showing Alpha IT Managed Services location in Mohali, Punjab"
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: [
							{
								icon: MapPin,
								title: "Address",
								value: "IT Park, Plot ITC 15, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062"
							},
							{
								icon: Mail,
								title: "Email",
								value: "it.training@alphait.us"
							},
							{
								icon: Phone,
								title: "Phone",
								value: "9056739084 / 9056739082"
							}
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15 + i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-panel rounded-[1.5rem] border border-border p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] hover:border-[color-mix(in_oklab,var(--brand-cyan)_45%,transparent)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/70 text-[var(--brand-cyan)] mx-auto mb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-medium mb-2",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: item.value
									})
								]
							})
						}, item.title))
					})
				]
			})
		})
	] });
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
