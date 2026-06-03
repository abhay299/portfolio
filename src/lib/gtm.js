const GTM_ID = import.meta.env.VITE_GTM_ID;

function isBrowser() {
	return typeof window !== "undefined";
}

export function isGtmEnabled() {
	return Boolean(GTM_ID);
}

function pushToDataLayer(payload) {
	if (!isGtmEnabled() || !isBrowser()) {
		return;
	}

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(payload);
}

export function initGtm() {
	if (!isGtmEnabled() || !isBrowser() || window.__gtmInitialized) {
		return;
	}

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		"gtm.start": new Date().getTime(),
		event: "gtm.js",
	});

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
	document.head.appendChild(script);

	const noscript = document.createElement("noscript");
	const iframe = document.createElement("iframe");
	iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
	iframe.height = "0";
	iframe.width = "0";
	iframe.style.display = "none";
	iframe.style.visibility = "hidden";
	noscript.appendChild(iframe);
	document.body.insertBefore(noscript, document.body.firstChild);

	window.__gtmInitialized = true;
}

/** SPA route changes — keeps default page-view style tracking working in GTM/GA4. */
export function trackPageView(pathname, search = "") {
	const pagePath = `${pathname}${search}`;

	pushToDataLayer({
		event: "page_view",
		page_path: pagePath,
		page_title: document.title,
		page_location: `${window.location.origin}${pagePath}`,
	});
}

/** Homepage hero "Contact Me" button. */
export function trackHeroContactClick() {
	pushToDataLayer({
		event: "hero_contact_click",
		click_text: "Contact Me",
	});
}

/** Homepage navbar link clicks (Home, Work, About, Resume, Contact). */
export function trackHomepageNavClick(navLabel) {
	if (!isBrowser() || window.location.pathname !== "/") {
		return;
	}

	pushToDataLayer({
		event: "nav_click",
		nav_label: navLabel,
	});
}
