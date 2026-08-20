import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as submitContact, t as contactPayloadSchema } from "./router-CYSTyUl4.mjs";
import { F as Mail, O as Phone, P as MapPin } from "../_libs/lucide-react.mjs";
import { a as SectionHeading, i as Reveal, n as MagneticButton } from "./SectionHeading-ByxLyzHM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-1aiGK57f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var offices = [
	{
		city: "Mohali",
		line: "Global HQ · 24/7 operations",
		detail: "IT Park, Plot ITC 15, Sector 67"
	},
	{
		city: "London",
		line: "EMEA delivery hub",
		detail: "One Canada Square, Canary Wharf"
	},
	{
		city: "Bengaluru",
		line: "Engineering centre",
		detail: "Embassy Tech Village, Devarabeesanahalli"
	},
	{
		city: "Singapore",
		line: "APAC operations",
		detail: "Marina Bay Financial Centre"
	}
];
var fields = [
	{
		name: "name",
		label: "Full name",
		type: "text",
		placeholder: "John Smith"
	},
	{
		name: "company",
		label: "Organisation",
		type: "text",
		placeholder: "Your Company"
	},
	{
		name: "email",
		label: "Work email",
		type: "email",
		placeholder: "john@company.com"
	},
	{
		name: "phone",
		label: "Direct line",
		type: "tel",
		placeholder: "+1 555 0134"
	}
];
var initialForm = {
	name: "",
	company: "",
	email: "",
	phone: "",
	brief: ""
};
function Contact() {
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const handleChange = (name, value) => {
		setForm((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => ({
			...prev,
			[name]: void 0
		}));
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		if (status === "submitting") return;
		const payload = {
			name: form.name,
			email: form.email,
			phone: form.phone,
			message: form.brief,
			...form.company ? { company: form.company } : {}
		};
		const parsed = contactPayloadSchema.safeParse(payload);
		if (!parsed.success) {
			const fieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
			}
			setErrors(fieldErrors);
			return;
		}
		setStatus("submitting");
		setSubmitError("");
		const result = await submitContact(payload);
		if (result.ok) {
			setStatus("success");
			setForm(initialForm);
			toast.success("Received — an Alpha principal will respond within one business day.");
		} else {
			setStatus("error");
			setSubmitError(result.error);
			toast.error(result.error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-32 lg:py-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 aurora opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto w-[min(1400px,92vw)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "10",
				eyebrow: "Get in touch",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Ready to Accelerate Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Digital Transformation?"
				})] }),
				lede: "Partner with Alpha ITMS to build secure, scalable, and intelligent technology solutions that empower your business."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "glass-panel rounded-[2rem] p-8 lg:p-12",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-7 sm:grid-cols-2",
							children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "group block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: f.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: f.name,
										type: f.type,
										placeholder: f.placeholder,
										value: form[f.name],
										onChange: (e) => handleChange(f.name, e.target.value),
										disabled: status === "submitting",
										"aria-invalid": errors[f.name] ? "true" : "false",
										"aria-describedby": errors[f.name] ? `contact-${f.name}-error` : void 0,
										className: "mt-3 w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors duration-500 placeholder:text-muted-foreground/50 focus:border-[var(--brand-cyan)]"
									}),
									errors[f.name] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										id: `contact-${f.name}-error`,
										role: "alert",
										className: "mt-1 block text-xs text-red-500",
										children: errors[f.name]
									}) : null
								]
							}, f.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-9 block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "The problem in one paragraph"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "brief",
									rows: 4,
									placeholder: "Our claims platform cannot scale past 40,000 transactions a day and audit season starts in March…",
									value: form.brief,
									onChange: (e) => handleChange("brief", e.target.value),
									disabled: status === "submitting",
									"aria-invalid": errors.brief ? "true" : "false",
									"aria-describedby": errors.brief ? "contact-brief-error" : void 0,
									className: "mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors duration-500 placeholder:text-muted-foreground/50 focus:border-[var(--brand-cyan)]"
								}),
								errors.brief ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									id: "contact-brief-error",
									role: "alert",
									className: "mt-1 block text-xs text-red-500",
									children: errors.brief
								}) : null
							]
						}),
						status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400",
							children: submitError
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								type: "submit",
								children: status === "submitting" ? "Sending…" : "Schedule a Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs text-xs leading-relaxed text-muted-foreground",
								children: "We respond within one business day. Your information is always kept confidential."
							})]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-[2rem] border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Alpha IT Managed Services global headquarters location",
									src: "https://www.google.com/maps?q=IT%20Park%20Plot%20ITC%2015%20Sector%2067%20Sahibzada%20Ajit%20Singh%20Nagar%20Punjab%20160062&output=embed",
									loading: "lazy",
									className: "h-[280px] w-full",
									style: { filter: "invert(0.92) hue-rotate(185deg) saturate(0.65) contrast(0.92)" }
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .16,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2",
								children: offices.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-background p-7 transition-colors duration-500 hover:bg-secondary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[var(--brand-cyan)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-medium",
												children: o.city
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted-foreground",
											children: o.line
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground/70",
											children: o.detail
										})
									]
								}, o.city))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .22,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-8 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:it.training@alphait.us",
									className: "group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), "it.training@alphait.us"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:9056739082",
									className: "group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[var(--brand-cyan)]" }), "9056739082"]
								})]
							})
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { Contact as t };
