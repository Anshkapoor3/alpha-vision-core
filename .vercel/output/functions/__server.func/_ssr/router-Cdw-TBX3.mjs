import { o as __toESM, r as __exportAll$1 } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cdw-TBX3.js
var router_Cdw_TBX3_exports = /* @__PURE__ */ __exportAll$1({
	getRouter: () => getRouter,
	n: () => useTheme,
	t: () => router_exports
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-DbOmxlnA.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var STORAGE_KEY = "alpha-theme";
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	toggle: () => {},
	setTheme: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "dark" || stored === "light") setThemeState(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((t) => setThemeState(t), []);
	const toggle = (0, import_react.useCallback)(() => setThemeState((t) => t === "dark" ? "light" : "dark"), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle,
			setTheme
		},
		children
	});
}
function useTheme() {
	return (0, import_react.useContext)(ThemeContext);
}
/** Applies the stored theme before paint to avoid a flash of the wrong palette. */
var themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$31 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Alpha IT Managed Services" },
			{
				name: "description",
				content: "Enterprise cloud, data and AI operations for regulated industries."
			},
			{
				name: "author",
				content: "Alpha IT Managed Services"
			},
			{
				property: "og:site_name",
				content: "Alpha IT Managed Services"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png"
			}
		],
		scripts: [{ children: themeInitScript }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$31.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })] })
	});
}
var $$splitComponentImporter$30 = () => import("./routes-smJmH2V9.mjs");
var title$2 = "Alpha ITMS — Transforming Businesses Through Intelligent Technology";
var description$2 = "Alpha ITMS delivers enterprise-grade IT solutions, AI-powered automation, cloud services, software development, cybersecurity, and digital transformation to help organizations innovate, scale, and stay ahead.";
var Route$30 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Alpha IT Managed Services",
				description: description$2,
				areaServed: "Global",
				sameAs: ["https://alphaitms.com"]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./contact-CWeNI1uE.mjs");
var Route$29 = createFileRoute("/contact")({
	head: () => ({
		meta: [{ title: "Contact Us | Alpha IT Managed Services" }, {
			name: "description",
			content: "Contact Alpha IT Managed Services. Get in touch for IT consulting, managed services, cloud solutions, and more. Office in Mohali, India."
		}],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./what-we-do-BrGFm4Zv.mjs");
var Route$28 = createFileRoute("/what-we-do")({
	head: () => ({
		meta: [{ title: "What We Do | Alpha IT Managed Services" }, {
			name: "description",
			content: "Explore Alpha ITMS industries, products & platforms, and services. We deliver tailored technology solutions across financial services, retail, healthcare, government, and more."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./explore-jobs-CuOMsUvV.mjs");
var Route$27 = createFileRoute("/careers/explore-jobs")({
	head: () => ({
		meta: [{ title: "Explore Jobs | Alpha IT Managed Services" }, {
			name: "description",
			content: "Explore career opportunities at Alpha Technologies. Browse current job openings, learn about our application process, and join a team driving technological excellence and innovation."
		}],
		links: [{
			rel: "canonical",
			href: "/careers/explore-jobs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./faq-BGtNmI1j.mjs");
var Route$26 = createFileRoute("/careers/faq")({
	head: () => ({
		meta: [{ title: "FAQ | Alpha IT Managed Services" }, {
			name: "description",
			content: "Frequently asked questions about Alpha Technologies services, solutions, support, careers, and more. Find clear and concise answers to common questions."
		}],
		links: [{
			rel: "canonical",
			href: "/careers/faq"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./why-alpha-4wwioAz_.mjs");
var Route$25 = createFileRoute("/careers/why-alpha")({
	head: () => ({
		meta: [{ title: "Why Alpha | Alpha IT Managed Services" }, {
			name: "description",
			content: "Explore why top talent chooses Alpha Technologies. Culture of excellence, innovation, global impact, collaboration, and work-life balance. Join a team revolutionizing technology."
		}],
		links: [{
			rel: "canonical",
			href: "/careers/why-alpha"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./industries-CqviMjFA.mjs");
var Route$24 = createFileRoute("/what-we-do/industries")({
	head: () => ({
		meta: [{ title: "Industries | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS serves 10 industries including Financial Services, Retail, Manufacturing, Pharmaceuticals, Telecommunications, Higher Education, Non-Profit, Government, Insurance, and R&D with tailored technology solutions."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./products-BomTwWTo.mjs");
var Route$23 = createFileRoute("/what-we-do/products")({
	head: () => ({
		meta: [{ title: "Products & Platforms | Alpha IT Managed Services" }, {
			name: "description",
			content: "Explore Alpha ITMS products and platforms including Password Reset Tool and Forecasting Tool designed to streamline operations and drive efficiency."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./services-Byo99tEr.mjs");
var Route$22 = createFileRoute("/what-we-do/services")({
	head: () => ({
		meta: [{ title: "Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS services: Managed IT Services, Cyber Security, Cloud Services, Digital Transformation, IT Strategy & Planning, IT Implementation & Integration, Data Services, Custom Product-Application Development, and Other Specialized Services."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./about-us-BS1UvV_u.mjs");
var Route$21 = createFileRoute("/who-we-are/about-us")({
	head: () => ({
		meta: [{ title: "About Us | Alpha IT Managed Services" }, {
			name: "description",
			content: "About Alpha IT Managed Services."
		}],
		links: [{
			rel: "canonical",
			href: "/who-we-are/about-us"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./global-presence-7yM5L53P.mjs");
var title$1 = "Global Presence | Alpha IT Managed Services";
var description$1 = "Explore Alpha Technologies' global presence. Offices across America, Europe, and Asia delivering innovative IT solutions worldwide.";
var Route$20 = createFileRoute("/who-we-are/global-presence")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/who-we-are/global-presence"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/who-we-are/global-presence"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./leadership-lMkx2Ohe.mjs");
var title = "Leadership | Alpha IT Managed Services";
var description = "Meet the executive leadership team at Alpha IT Managed Services. Ownership, rigour, and business excellence across 27 countries.";
var Route$19 = createFileRoute("/who-we-are/leadership")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/who-we-are/leadership"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/who-we-are/leadership"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./overview-Vcgq4h2S.mjs");
var Route$18 = createFileRoute("/who-we-are/overview")({
	head: () => ({
		meta: [{ title: "Overview | Alpha IT Managed Services" }, {
			name: "description",
			content: "Overview of Alpha IT Managed Services."
		}],
		links: [{
			rel: "canonical",
			href: "/who-we-are/overview"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./financial-services-Bx-BJPk6.mjs");
var Route$17 = createFileRoute("/what-we-do/industries/financial-services")({
	head: () => ({
		meta: [{ title: "Financial Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS delivers tailored IT solutions for financial services, boosting security, optimizing operations, and driving innovation. Dedicated support for banking, capital markets, and insurance."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/financial-services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./government-gVY4Z2yn.mjs");
var Route$16 = createFileRoute("/what-we-do/industries/government")({
	head: () => ({
		meta: [{ title: "Government Agencies | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS provides specialized IT solutions for government agencies, enhancing efficiency, security, and innovation for effective public service."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/government"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./higher-education-EAWpfHDr.mjs");
var Route$15 = createFileRoute("/what-we-do/industries/higher-education")({
	head: () => ({
		meta: [{ title: "Higher Education | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha IT empowers higher education institutions with bespoke IT solutions that enhance teaching, streamline administration, and ensure robust security."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/higher-education"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./insurance-Is-1sTXZ.mjs");
var Route$14 = createFileRoute("/what-we-do/industries/insurance")({
	head: () => ({
		meta: [{ title: "Insurance Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS provides customized IT solutions for the insurance industry, enhancing customer service, streamlining claims processing, and bolstering data security."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/insurance"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./manufacturing-Dmk6O-qI.mjs");
var Route$13 = createFileRoute("/what-we-do/industries/manufacturing")({
	head: () => ({
		meta: [{ title: "Manufacturing | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha IT delivers tailored IT solutions for manufacturing, enhancing production efficiency, improving supply chain management, and ensuring robust security."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/manufacturing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./non-profit-Crx0F4m9.mjs");
var Route$12 = createFileRoute("/what-we-do/industries/non-profit")({
	head: () => ({
		meta: [{ title: "Non-Profit Agencies | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS provides tailored solutions for nonprofits, boosting efficiency, strengthening security, and advancing your mission with advanced technology."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/non-profit"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./pharmaceuticals-Ba1Qj-IT.mjs");
var Route$11 = createFileRoute("/what-we-do/industries/pharmaceuticals")({
	head: () => ({
		meta: [{ title: "Pharmaceuticals | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS provides specialized IT solutions for pharmaceuticals, accelerating drug discovery with AI/ML, optimizing manufacturing, and ensuring regulatory compliance."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/pharmaceuticals"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./research-development-DO5P_mzx.mjs");
var Route$10 = createFileRoute("/what-we-do/industries/research-development")({
	head: () => ({
		meta: [{ title: "Research & Development | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS revolutionizes R&D operations with tailored IT solutions, enhancing data analysis, high-performance computing, and accelerating discovery."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/research-development"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./retail-CoAg9_NE.mjs");
var Route$9 = createFileRoute("/what-we-do/industries/retail")({
	head: () => ({
		meta: [{ title: "Retail Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha IT transforms retail operations with customized IT solutions that elevate customer experiences, streamline supply chains, and accelerate sales growth."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/retail"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./telecommunications-BDeY7oip.mjs");
var Route$8 = createFileRoute("/what-we-do/industries/telecommunications")({
	head: () => ({
		meta: [{ title: "Telecommunications | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha IT delivers innovative solutions for telecommunications, enhancing network performance, improving security, and driving operational efficiency."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/industries/telecommunications"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./cloud-services-7Bj9xi0F.mjs");
var Route$7 = createFileRoute("/what-we-do/services/cloud-services")({
	head: () => ({
		meta: [{ title: "Cloud Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS Cloud Services: Cloud infrastructure design, migration, security, and SaaS solutions. Scalable, secure, cost-effective cloud services tailored to your business needs."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/cloud-services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./cyber-security-B1mg09mq.mjs");
var Route$6 = createFileRoute("/what-we-do/services/cyber-security")({
	head: () => ({
		meta: [{ title: "Cyber Security | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS Cyber Security: Advanced threat detection, security assessments, strategy development, solution implementation, and incident response. Proactive protection against evolving cyber threats."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/cyber-security"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./data-services-BeZEIrRQ.mjs");
var Route$5 = createFileRoute("/what-we-do/services/data-services")({
	head: () => ({
		meta: [{ title: "Data Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS Data Services: Advanced analytics, data modernization, machine learning, and AI solutions. Unlock the full potential of your data with cutting-edge analytics and business intelligence."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/data-services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./digital-transformation-Bc3wjRL4.mjs");
var Route$4 = createFileRoute("/what-we-do/services/digital-transformation")({
	head: () => ({
		meta: [{ title: "Digital Transformation | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS Digital Transformation: Strategic planning, IoT solutions, business process automation, and customer experience enhancement. Propel your organization into the future with comprehensive digital transformation services."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/digital-transformation"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./it-implementation-and-integration-WgWZBn2g.mjs");
var Route$3 = createFileRoute("/what-we-do/services/it-implementation-and-integration")({
	head: () => ({
		meta: [{ title: "IT Implementation and Integration | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS IT Implementation and Integration: Expert deployment and integration services ensuring technology systems work harmoniously. End-to-end support from planning to deployment."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/it-implementation-and-integration"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./it-strategy-and-planning-CJCKliqJ.mjs");
var Route$2 = createFileRoute("/what-we-do/services/it-strategy-and-planning")({
	head: () => ({
		meta: [{ title: "IT Strategy and Planning | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS IT Strategy and Planning: Expert guidance to align technology with business goals. IT assessments, governance, risk management, technology roadmaps, and architecture design for long-term success."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/it-strategy-and-planning"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./managed-it-services-CcBrSSxx.mjs");
var Route$1 = createFileRoute("/what-we-do/services/managed-it-services")({
	head: () => ({
		meta: [{ title: "Managed IT Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS Managed IT Services: 24/7 proactive monitoring, maintenance, security, and support. Reduce downtime, increase efficiency, enhance security, and improve productivity with our comprehensive managed solutions."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/managed-it-services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./other-specialized-services-DmLPkE-t.mjs");
var Route = createFileRoute("/what-we-do/services/other-specialized-services")({
	head: () => ({
		meta: [{ title: "Other Specialized Services | Alpha IT Managed Services" }, {
			name: "description",
			content: "Alpha ITMS Other Specialized Services: End-User Training, Staff Augmentation, Knowledge Management, and Audio Visual Services. Tailored solutions for unique organizational needs."
		}],
		links: [{
			rel: "canonical",
			href: "/what-we-do/services/other-specialized-services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$30.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$31
});
var ContactRoute = Route$29.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$31
});
var WhatWeDoRoute = Route$28.update({
	id: "/what-we-do",
	path: "/what-we-do",
	getParentRoute: () => Route$31
});
var CareersExploreJobsRoute = Route$27.update({
	id: "/careers/explore-jobs",
	path: "/careers/explore-jobs",
	getParentRoute: () => Route$31
});
var CareersFaqRoute = Route$26.update({
	id: "/careers/faq",
	path: "/careers/faq",
	getParentRoute: () => Route$31
});
var CareersWhyAlphaRoute = Route$25.update({
	id: "/careers/why-alpha",
	path: "/careers/why-alpha",
	getParentRoute: () => Route$31
});
var WhatWeDoIndustriesRoute = Route$24.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => WhatWeDoRoute
});
var WhatWeDoProductsRoute = Route$23.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => WhatWeDoRoute
});
var WhatWeDoServicesRoute = Route$22.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => WhatWeDoRoute
});
var WhoWeAreAboutUsRoute = Route$21.update({
	id: "/who-we-are/about-us",
	path: "/who-we-are/about-us",
	getParentRoute: () => Route$31
});
var WhoWeAreGlobalPresenceRoute = Route$20.update({
	id: "/who-we-are/global-presence",
	path: "/who-we-are/global-presence",
	getParentRoute: () => Route$31
});
var WhoWeAreLeadershipRoute = Route$19.update({
	id: "/who-we-are/leadership",
	path: "/who-we-are/leadership",
	getParentRoute: () => Route$31
});
var WhoWeAreOverviewRoute = Route$18.update({
	id: "/who-we-are/overview",
	path: "/who-we-are/overview",
	getParentRoute: () => Route$31
});
var WhatWeDoIndustriesFinancialServicesRoute = Route$17.update({
	id: "/financial-services",
	path: "/financial-services",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesGovernmentRoute = Route$16.update({
	id: "/government",
	path: "/government",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesHigherEducationRoute = Route$15.update({
	id: "/higher-education",
	path: "/higher-education",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesInsuranceRoute = Route$14.update({
	id: "/insurance",
	path: "/insurance",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesManufacturingRoute = Route$13.update({
	id: "/manufacturing",
	path: "/manufacturing",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesNonProfitRoute = Route$12.update({
	id: "/non-profit",
	path: "/non-profit",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesPharmaceuticalsRoute = Route$11.update({
	id: "/pharmaceuticals",
	path: "/pharmaceuticals",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesResearchDevelopmentRoute = Route$10.update({
	id: "/research-development",
	path: "/research-development",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesRetailRoute = Route$9.update({
	id: "/retail",
	path: "/retail",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoIndustriesTelecommunicationsRoute = Route$8.update({
	id: "/telecommunications",
	path: "/telecommunications",
	getParentRoute: () => WhatWeDoIndustriesRoute
});
var WhatWeDoServicesCloudServicesRoute = Route$7.update({
	id: "/cloud-services",
	path: "/cloud-services",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesCyberSecurityRoute = Route$6.update({
	id: "/cyber-security",
	path: "/cyber-security",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesDataServicesRoute = Route$5.update({
	id: "/data-services",
	path: "/data-services",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesDigitalTransformationRoute = Route$4.update({
	id: "/digital-transformation",
	path: "/digital-transformation",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesItImplementationAndIntegrationRoute = Route$3.update({
	id: "/it-implementation-and-integration",
	path: "/it-implementation-and-integration",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesItStrategyAndPlanningRoute = Route$2.update({
	id: "/it-strategy-and-planning",
	path: "/it-strategy-and-planning",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesManagedItServicesRoute = Route$1.update({
	id: "/managed-it-services",
	path: "/managed-it-services",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoServicesOtherSpecializedServicesRoute = Route.update({
	id: "/other-specialized-services",
	path: "/other-specialized-services",
	getParentRoute: () => WhatWeDoServicesRoute
});
var WhatWeDoIndustriesRouteChildren = {
	WhatWeDoIndustriesFinancialServicesRoute,
	WhatWeDoIndustriesGovernmentRoute,
	WhatWeDoIndustriesHigherEducationRoute,
	WhatWeDoIndustriesInsuranceRoute,
	WhatWeDoIndustriesManufacturingRoute,
	WhatWeDoIndustriesNonProfitRoute,
	WhatWeDoIndustriesPharmaceuticalsRoute,
	WhatWeDoIndustriesResearchDevelopmentRoute,
	WhatWeDoIndustriesRetailRoute,
	WhatWeDoIndustriesTelecommunicationsRoute
};
var WhatWeDoIndustriesRouteWithChildren = WhatWeDoIndustriesRoute._addFileChildren(WhatWeDoIndustriesRouteChildren);
var WhatWeDoServicesRouteChildren = {
	WhatWeDoServicesCloudServicesRoute,
	WhatWeDoServicesCyberSecurityRoute,
	WhatWeDoServicesDataServicesRoute,
	WhatWeDoServicesDigitalTransformationRoute,
	WhatWeDoServicesItImplementationAndIntegrationRoute,
	WhatWeDoServicesItStrategyAndPlanningRoute,
	WhatWeDoServicesManagedItServicesRoute,
	WhatWeDoServicesOtherSpecializedServicesRoute
};
var WhatWeDoRouteChildren = {
	WhatWeDoIndustriesRoute: WhatWeDoIndustriesRouteWithChildren,
	WhatWeDoProductsRoute,
	WhatWeDoServicesRoute: WhatWeDoServicesRoute._addFileChildren(WhatWeDoServicesRouteChildren)
};
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	WhatWeDoRoute: WhatWeDoRoute._addFileChildren(WhatWeDoRouteChildren),
	CareersExploreJobsRoute,
	CareersFaqRoute,
	CareersWhyAlphaRoute,
	WhoWeAreAboutUsRoute,
	WhoWeAreGlobalPresenceRoute,
	WhoWeAreLeadershipRoute,
	WhoWeAreOverviewRoute
};
var routeTree = Route$31._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useTheme as n, router_Cdw_TBX3_exports as t };
