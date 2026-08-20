import { o as __toESM, r as __exportAll$1 } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CYSTyUl4.js
var router_CYSTyUl4_exports = /* @__PURE__ */ __exportAll$1({
	getRouter: () => getRouter,
	i: () => useTheme,
	n: () => contactPayloadSchema,
	r: () => submitContact,
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
var Route$32 = createRootRouteWithContext()({
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
	const { queryClient } = Route$32.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })] })
	});
}
var $$splitComponentImporter$30 = () => import("./routes-44b41WD9.mjs");
var title$2 = "Alpha ITMS — Transforming Businesses Through Intelligent Technology";
var description$2 = "Alpha ITMS delivers enterprise-grade IT solutions, AI-powered automation, cloud services, software development, cybersecurity, and digital transformation to help organizations innovate, scale, and stay ahead.";
var Route$31 = createFileRoute("/")({
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
var $$splitComponentImporter$29 = () => import("./contact-DrCz_157.mjs");
var Route$30 = createFileRoute("/contact")({
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
var $$splitComponentImporter$28 = () => import("./what-we-do-CUfeoGlI.mjs");
var Route$29 = createFileRoute("/what-we-do")({
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
/** Zod schema used to validate payloads both client-side and server-side. */
var contactPayloadSchema = objectType({
	name: stringType().trim().min(2, "Name is required"),
	email: stringType().trim().email("Invalid email format"),
	phone: stringType().trim().regex(/^[\d\s+\-()]{10,}$/, "Valid phone number required"),
	message: stringType().trim().min(10, "Message must be at least 10 characters"),
	company: stringType().trim().optional(),
	inquiryType: stringType().trim().optional(),
	areaOfInterest: stringType().trim().optional()
});
/**
* Frontend API integration layer for contact form submissions.
*
* ## Backend contract (required)
*
* Forms POST a `ContactPayload` JSON body to the endpoint below and
* report success **only** when it responds with HTTP 2xx. The endpoint
* must be a real server route / service that persists or forwards the
* submission (email provider, CRM, webhook, database, etc.).
*
* ### Expected request
* ```
* POST {CONTACT_ENDPOINT}
* Content-Type: application/json
*
* {
*   "name": "John Smith",
*   "email": "john@example.com",
*   "phone": "+1 555 0134",
*   "message": "…",
*   "company": "Acme",          // optional
*   "inquiryType": "general",   // optional
*   "areaOfInterest": "Cloud"   // optional
* }
* ```
*
* ### Expected responses
* - `2xx` → success (form shows success state)
* - `4xx` → validation/business error (`{ "error": "message" }` preferred)
* - `5xx` → server error (`{ "error": "message" }` preferred)
*
* ### Configuration
* Set the **public** variable `VITE_CONTACT_ENDPOINT` to point this at a
* real backend. Defaults to `/api/contact`, which the hosting server must
* implement. This variable is public and must NEVER contain API keys,
* SMTP credentials, passwords, or any private secret. A server-side proxy
* must hold the actual email/CRM credentials.
*
* Private secrets (SMTP, API keys) must stay in server-only env vars and
* be used inside the backend endpoint — never in the browser.
*/
var CONTACT_ENDPOINT = (() => {
	const fromEnv = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_CONTACT_ENDPOINT"];
	return fromEnv && fromEnv.trim().length > 0 ? fromEnv.trim() : "/api/contact";
})();
async function submitContact(payload) {
	try {
		const response = await fetch(CONTACT_ENDPOINT, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		if (response.ok) return { ok: true };
		let message = `Submission failed (${response.status}).`;
		try {
			const body = await response.json();
			if (body?.error) message = body.error;
		} catch {}
		return {
			ok: false,
			error: message,
			status: response.status
		};
	} catch {
		return {
			ok: false,
			error: "Network error. Please check your connection and try again.",
			status: 0
		};
	}
}
var RESEND_API_URL = "https://api.resend.com/emails";
/** Resolve and validate provider configuration from server-only env vars. */
function resolveConfig() {
	const providerKey = process.env["CONTACT_EMAIL_PROVIDER_KEY"];
	const to = process.env["CONTACT_EMAIL_TO"];
	const from = process.env["CONTACT_EMAIL_FROM"];
	if (!providerKey) return {
		ok: false,
		error: "CONTACT_EMAIL_PROVIDER_KEY is not configured"
	};
	if (!to) return {
		ok: false,
		error: "CONTACT_EMAIL_TO is not configured"
	};
	if (!from) return {
		ok: false,
		error: "CONTACT_EMAIL_FROM is not configured"
	};
	return {
		ok: true,
		providerKey,
		to,
		from
	};
}
var HTML_ENTITY_MAP = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
/** HTML-escape a string so user input cannot inject markup into the email body. */
function escapeHtml(value) {
	return value.replace(/[&<>"']/g, (ch) => HTML_ENTITY_MAP[ch] ?? ch);
}
function fieldRows(payload) {
	return [
		["Name", payload.name],
		["Email", payload.email],
		["Phone", payload.phone],
		["Company", payload.company ?? ""],
		["Inquiry type", payload.inquiryType ?? ""],
		["Area of interest", payload.areaOfInterest ?? ""]
	];
}
function buildHtml(payload) {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Contact form submission</title>
  </head>
  <body style="margin:0;padding:24px;font-family:system-ui,Arial,sans-serif;color:#111">
    <h1 style="font-size:20px;margin:0 0 16px">New website contact form submission</h1>
    <table style="border-collapse:collapse">${fieldRows(payload).map(([label, value]) => `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#374151">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`).join("")}</table>
    <h2 style="font-size:14px;margin:20px 0 4px">Message</h2>
    <p style="white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:8px">${escapeHtml(payload.message)}</p>
  </body>
</html>`;
}
function buildText(payload) {
	return `New website contact form submission\n\n${fieldRows(payload).map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nMessage:\n${payload.message}`;
}
/**
* Send a single contact submission through Resend.
*
* Returns a structured outcome. On failure the `error` string is a generic,
* safe-to-expose message — provider error details are logged server-side only
* and never returned to (or derived from) the client. Sensitive form data is
* never logged.
*/
async function sendContactEmail(payload) {
	const cfg = resolveConfig();
	if (!cfg.ok) {
		console.error("[contact] ", cfg.error);
		return {
			success: false,
			error: "email service is not configured"
		};
	}
	const subject = "New contact form submission from the Alpha website";
	const abort = AbortSignal;
	const timeoutSignal = typeof abort.timeout === "function" ? abort.timeout(15e3) : void 0;
	let response;
	try {
		response = await fetch(RESEND_API_URL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${cfg.providerKey}`,
				"Content-Type": "application/json"
			},
			signal: timeoutSignal ?? null,
			body: JSON.stringify({
				from: cfg.from,
				to: [cfg.to],
				subject,
				html: buildHtml(payload),
				text: buildText(payload),
				reply_to: payload.email
			})
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error("[contact] Failed to reach email provider:", message);
		return {
			success: false,
			error: "email provider is unavailable"
		};
	}
	let parsed = null;
	try {
		parsed = await response.json();
	} catch {
		parsed = null;
	}
	if (!response.ok) {
		const providerMessage = parsed?.message ?? `HTTP ${response.status}`;
		console.error("[contact] Resend delivery failed:", providerMessage);
		return {
			success: false,
			error: "email provider rejected the message"
		};
	}
	if (!parsed || !parsed.id) {
		console.error("[contact] Resend returned an incomplete response.");
		return {
			success: false,
			error: "email provider returned an incomplete response"
		};
	}
	return {
		success: true,
		id: parsed.id
	};
}
var store = /* @__PURE__ */ new Map();
function readEnvInt(name, fallback, min) {
	const raw = process.env[name];
	if (raw === void 0 || raw === "") return fallback;
	const n = Number.parseInt(raw, 10);
	if (!Number.isFinite(n) || n < min) return fallback;
	return n;
}
var WINDOW_MS = readEnvInt("CONTACT_RATE_LIMIT_WINDOW_MS", 6e4, 1e3);
var MAX_REQUESTS = readEnvInt("CONTACT_RATE_LIMIT_MAX", 5, 1);
/**
* Consume one request against the limit for `key` (typically the client IP).
* Returns the updated allowance state. Does NOT throw.
*/
function consumeRateLimit(key) {
	const now = Date.now();
	const existing = store.get(key);
	if (!existing || now - existing.windowStart >= WINDOW_MS) {
		store.set(key, {
			windowStart: now,
			count: 1
		});
		return {
			allowed: true,
			limit: MAX_REQUESTS,
			remaining: Math.max(MAX_REQUESTS - 1, 0),
			retryAfterSec: Math.ceil(WINDOW_MS / 1e3)
		};
	}
	if (existing.count >= MAX_REQUESTS) {
		const retryAfterSec = Math.ceil((WINDOW_MS - (now - existing.windowStart)) / 1e3);
		return {
			allowed: false,
			limit: MAX_REQUESTS,
			remaining: 0,
			retryAfterSec: Math.max(retryAfterSec, 1)
		};
	}
	existing.count += 1;
	return {
		allowed: true,
		limit: MAX_REQUESTS,
		remaining: Math.max(MAX_REQUESTS - existing.count, 0),
		retryAfterSec: Math.ceil(WINDOW_MS / 1e3)
	};
}
/** Maximum accepted JSON body size (bytes). Guarded before reading the body. */
function readMaxBodyBytes() {
	const raw = process.env["CONTACT_MAX_BODY_BYTES"];
	if (raw === void 0 || raw === "") return 65536;
	const n = Number.parseInt(raw, 10);
	return Number.isFinite(n) && n >= 1 ? n : 65536;
}
var MAX_BODY_BYTES = readMaxBodyBytes();
function json(status, body, headers = {}) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
			...headers
		}
	});
}
/**
* Best-effort client IP for rate limiting. Proxies (Vercel, Cloudflare, etc.)
* populate these headers; we take the left-most entry as the originating IP.
*/
function getClientIp(request) {
	const forwarded = request.headers.get("x-forwarded-for");
	if (forwarded) {
		const first = forwarded.split(",")[0]?.trim();
		if (first) return first;
	}
	const realIp = request.headers.get("x-real-ip")?.trim();
	if (realIp) return realIp;
	const cfIp = request.headers.get("cf-connecting-ip")?.trim();
	if (cfIp) return cfIp;
	return "unknown";
}
var Route$28 = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	if (!(request.headers.get("content-type") ?? "").toLowerCase().startsWith("application/json")) return json(400, { error: "Content-Type must be application/json" });
	const contentLength = request.headers.get("content-length");
	if (contentLength !== null) {
		const length = Number(contentLength);
		if (Number.isFinite(length) && length > MAX_BODY_BYTES) return json(413, { error: "Request body too large" });
	}
	const rate = consumeRateLimit(getClientIp(request));
	if (!rate.allowed) return json(429, { error: "Too many submissions. Please try again later." }, { "Retry-After": String(rate.retryAfterSec) });
	let text;
	try {
		text = await request.text();
	} catch {
		return json(400, { error: "Could not read request body" });
	}
	if (text.length > MAX_BODY_BYTES) return json(413, { error: "Request body too large" });
	let body;
	try {
		body = JSON.parse(text);
	} catch {
		return json(400, { error: "Invalid JSON body" });
	}
	const result = contactPayloadSchema.safeParse(body);
	if (!result.success) {
		const firstIssue = result.error.issues[0];
		return json(400, { error: firstIssue?.message ?? "Validation failed" });
	}
	const payload = result.data;
	let outcome;
	try {
		outcome = await sendContactEmail(payload);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error("[contact] Unexpected delivery error:", message);
		return json(500, { error: "Message could not be sent. Please try again later or email us directly at it.training@alphait.us" });
	}
	if (!outcome.success) return json(500, { error: "Message could not be sent. Please try again later or email us directly at it.training@alphait.us" });
	return json(201, { ok: true });
} } } });
var $$splitComponentImporter$27 = () => import("./explore-jobs-CMC5Vby8.mjs");
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
var $$splitComponentImporter$26 = () => import("./faq-Xcuo5r18.mjs");
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
var $$splitComponentImporter$25 = () => import("./why-alpha-CUXJHN_F.mjs");
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
var $$splitComponentImporter$24 = () => import("./industries-_PQdg-KH.mjs");
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
var $$splitComponentImporter$23 = () => import("./products-DsOTXIdM.mjs");
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
var $$splitComponentImporter$22 = () => import("./services-GuIdMaW6.mjs");
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
var $$splitComponentImporter$21 = () => import("./about-us-Da4AJkVT.mjs");
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
var $$splitComponentImporter$20 = () => import("./global-presence-CV9Y2JoH.mjs");
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
var $$splitComponentImporter$19 = () => import("./leadership-CnJ98_pe.mjs");
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
var $$splitComponentImporter$18 = () => import("./overview-B7YfGYqa.mjs");
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
var $$splitComponentImporter$17 = () => import("./financial-services-BhLDQgRd.mjs");
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
var $$splitComponentImporter$16 = () => import("./government-B8zD0dtc.mjs");
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
var $$splitComponentImporter$15 = () => import("./higher-education-DxY_I2bO.mjs");
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
var $$splitComponentImporter$14 = () => import("./insurance-DosmxOLf.mjs");
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
var $$splitComponentImporter$13 = () => import("./manufacturing-CuXk9krT.mjs");
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
var $$splitComponentImporter$12 = () => import("./non-profit-BJ-n1J5S.mjs");
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
var $$splitComponentImporter$11 = () => import("./pharmaceuticals-CNE8bQ7q.mjs");
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
var $$splitComponentImporter$10 = () => import("./research-development-hLxJwJg3.mjs");
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
var $$splitComponentImporter$9 = () => import("./retail-BXx3TOC3.mjs");
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
var $$splitComponentImporter$8 = () => import("./telecommunications-Dut8-uO9.mjs");
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
var $$splitComponentImporter$7 = () => import("./cloud-services-C1op0krn.mjs");
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
var $$splitComponentImporter$6 = () => import("./cyber-security-D2nnuobq.mjs");
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
var $$splitComponentImporter$5 = () => import("./data-services-DVSHWn7X.mjs");
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
var $$splitComponentImporter$4 = () => import("./digital-transformation-Tk2QKPyI.mjs");
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
var $$splitComponentImporter$3 = () => import("./it-implementation-and-integration-BcTQYudr.mjs");
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
var $$splitComponentImporter$2 = () => import("./it-strategy-and-planning-qRlarIE6.mjs");
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
var $$splitComponentImporter$1 = () => import("./managed-it-services-CzJNKPI7.mjs");
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
var $$splitComponentImporter = () => import("./other-specialized-services-BNIa5NCP.mjs");
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
var IndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$32
});
var ContactRoute = Route$30.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$32
});
var WhatWeDoRoute = Route$29.update({
	id: "/what-we-do",
	path: "/what-we-do",
	getParentRoute: () => Route$32
});
var ApiContactRoute = Route$28.update({
	id: "/api/contact",
	path: "/api/contact",
	getParentRoute: () => Route$32
});
var CareersExploreJobsRoute = Route$27.update({
	id: "/careers/explore-jobs",
	path: "/careers/explore-jobs",
	getParentRoute: () => Route$32
});
var CareersFaqRoute = Route$26.update({
	id: "/careers/faq",
	path: "/careers/faq",
	getParentRoute: () => Route$32
});
var CareersWhyAlphaRoute = Route$25.update({
	id: "/careers/why-alpha",
	path: "/careers/why-alpha",
	getParentRoute: () => Route$32
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
	getParentRoute: () => Route$32
});
var WhoWeAreGlobalPresenceRoute = Route$20.update({
	id: "/who-we-are/global-presence",
	path: "/who-we-are/global-presence",
	getParentRoute: () => Route$32
});
var WhoWeAreLeadershipRoute = Route$19.update({
	id: "/who-we-are/leadership",
	path: "/who-we-are/leadership",
	getParentRoute: () => Route$32
});
var WhoWeAreOverviewRoute = Route$18.update({
	id: "/who-we-are/overview",
	path: "/who-we-are/overview",
	getParentRoute: () => Route$32
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
	ApiContactRoute,
	CareersExploreJobsRoute,
	CareersFaqRoute,
	CareersWhyAlphaRoute,
	WhoWeAreAboutUsRoute,
	WhoWeAreGlobalPresenceRoute,
	WhoWeAreLeadershipRoute,
	WhoWeAreOverviewRoute
};
var routeTree = Route$32._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { useTheme as i, router_CYSTyUl4_exports as n, submitContact as r, contactPayloadSchema as t };
