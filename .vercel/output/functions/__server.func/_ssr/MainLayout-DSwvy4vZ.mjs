import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as cn, r as Nav, t as Footer } from "./SectionHeading-DUqTJ7xH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MainLayout-DSwvy4vZ.js
var import_jsx_runtime = require_jsx_runtime();
function MainLayout({ children, mainClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: cn("min-h-screen", mainClassName),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { MainLayout as t };
