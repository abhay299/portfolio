const NAVIGATION_LINKS = [
	{ path: "/", label: "Home" },
	{ path: "/projects", label: "Work" },
	{ path: "/aboutMe", label: "About" },
	{
		path: `https://drive.google.com/${import.meta.env.VITE_RESUME_LINK}`,
		label: "Resume",
		external: true,
	},
	{
		path: "/#contact",
		label: "Contact",
		external: false,
		isContact: true,
	},
];

export { NAVIGATION_LINKS };
