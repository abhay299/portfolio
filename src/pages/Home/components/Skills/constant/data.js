import { Cloud, Code, Palette } from "@mui/icons-material";

const FRONTEND_SKILLS = [
	{ name: "ReactJs", icon: "/icons/react-svgrepo.svg" },
	{ name: "Sass", icon: "/icons/sass-svgrepo.svg" },
	{ name: "CSS3", icon: "/icons/css-3-svgrepo.svg" },
	// { name: "Tailwind", icon: "/icons/tailwind-svgrepo.svg" },
];

const BACKEND_SKILLS = [
	{ name: "NodeJs", icon: "/icons/nodejs-logo-svgrepo.svg" },
	{ name: "MySQL", icon: "/icons/mysql-logo-svgrepo.svg" },
	{ name: "MongoDB", icon: "/icons/mongodb-svgrepo.svg" },
];

const LANGUAGE_SKILLS = [
	{ name: "JavaScript", icon: "/icons/javascript-svgrepo.svg" },
	{ name: "TypeScript", icon: "/icons/typescript-svgrepo.svg" },
	{ name: "Python", icon: "/icons/python-svgrepo.svg" },
];

const SKILL_CATEGORIES = [
	{
		title: "Frontend",
		skills: FRONTEND_SKILLS,
		icon: Palette,
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		color: "#667eea",
	},
	{
		title: "Backend",
		skills: BACKEND_SKILLS,
		icon: Cloud,
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		color: "#f5576c",
	},
	{
		title: "Languages",
		skills: LANGUAGE_SKILLS,
		icon: Code,
		gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
		color: "#4facfe",
	},
];

export { BACKEND_SKILLS, FRONTEND_SKILLS, LANGUAGE_SKILLS, SKILL_CATEGORIES };
