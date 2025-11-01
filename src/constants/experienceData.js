import {
	Code,
	EmojiEvents,
	MilitaryTech,
	Rocket,
	School,
	TrendingUp,
	Work,
} from "@mui/icons-material";

const experienceData = [
	{
		year: "2024",
		title: "Associate Software Dev.",
		company: "Instinct Innovations Pvt. Ltd. Mumbai",
		duration: "March '24 - Present",
		icon: Code,
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		highlights: [
			"Engineered frontend of Tiny Tables",
			"Implemented WebSocket-based real-time data synchronization across clients",
			"Built custom editors, optimized complex logic, reduced DOM size by 80%",
			"Worked on the backend with Nest.js and PostgreSQL",
			"Improved project build size by 30% via chunking and lazy loading",
			"Collaborated cross-functionally, resolved bugs 50% faster, reduced testing time by 90%",
		],
		type: "work",
		// current: true,
	},
	{
		year: "2022-23",
		title: "Technical Assistant",
		company: "IIT-Bombay (e-Yantra)",
		duration: "5 months",
		icon: Work,
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		highlights: [
			"Robotics project for K-12 competition",
			"GUI development with Kivy (80% efficiency improvement)",
			"6 task cycles in Webots Simulation",
			"Image processing with NumPy & OpenCV",
		],
		type: "work",
	},
	{
		year: "2022",
		title: "Bachelor of Engineering",
		company: "Mumbai University - VIT",
		duration: "Graduated Aug 2022",
		icon: School,
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		highlights: ["CGPA: 8.27", "Electronics Engineering"],
		type: "education",
	},
	{
		year: "2018-22",
		title: "UnderGrad Life",
		company: "Achievements & Activities",
		icon: MilitaryTech,
		gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
		highlights: [
			"2nd rank - Tantra vihar competition",
			"2nd rank - Algorhythmic Hackathon",
			"2nd prize - Enthusia Volleyball (National)",
			"2nd prize - Spoorthi Volleyball",
		],
		type: "achievement",
	},
	{
		year: "2017-18",
		title: "Jr. College - HSC",
		company: "Science Stream",
		icon: School,
		gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
		highlights: [
			"Graduated with 70.90%",
			"1st Prize - 400M Hurdles (BCDAAA)",
		],
		type: "education",
	},
	{
		year: "2016",
		title: "High School - SSC",
		company: "Science",
		icon: School,
		gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
		highlights: [
			"Graduated with 90.40%",
			"1st Prize - 400M Hurdles (BCDAAA)",
		],
		type: "education",
	},
];

const stats = [
	{ label: "Years Experience", value: "1.5+", icon: TrendingUp },
	{ label: "Projects Built", value: "5+", icon: Rocket },
	{ label: "Achievements", value: "8+", icon: EmojiEvents },
	// { label: "Technologies", value: "5", icon: Code },
];

export { experienceData, stats };
