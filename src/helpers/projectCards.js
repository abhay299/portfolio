import baLogo from "@/assets/BookAmigo/BA-logo2.webp";
import crmLogo from "@/assets/CRM/CRM-logo.webp";
import myFitsLogo from "@/assets/MyFits/MyFits-Logo.webp";
import portfolioLogo from "@/assets/Portfolio/myPortfolioLogo.webp";
import smLogo from "@/assets/Socials/SM-logo2.webp";

export const PROJECT_CARDS = [
    {
		name: "Book Manga",
		title: "Personal Book Manager",
		image: portfolioLogo,
		desc: "A sleek and modern web application for managing your personal book collection, reading statistics, and tracking your reading journey.",
		stack: "Next.js, TypeScript, Tailwind CSS",
		gitUrl: "https://github.com/abhay299/personal-book-manager",
		demoUrl: "https://book-manga.netlify.app/",
	},
	{
		name: "Socials",
		title: "Meet & Greet",
		image: smLogo,
		desc: "Full Stack Social Media App",
		stack: "ReactJS, NodeJS, ExpressJS, MySQL",
		gitUrl: "https://github.com/abhay299/social_media",
	},
	{
		name: "MyFits",
		title: "Find Your Fit",
		image: myFitsLogo,
		desc: "Full Stack E-commerce App",
		stack: "ReactJS (Redux), NodeJS, ExpressJS, MongoDB, styled components",
		gitUrl: "https://github.com/abhay299/e-commerce",
	},
	{
		name: "BookAmigo",
		title: "Find Your Comfort Zone",
		image: baLogo,
		desc: "Frontend Hotel Booking App",
		stack: "ReactJS, NodeJS, ExpressJS, MySQL",
		gitUrl: "https://github.com/abhay299/BookAmigo",
	},
	{
		name: "CRM App",
		title: "CRM System",
		image: crmLogo,
		desc: "Backend based CRM App",
		stack: "Django, HTML5, Bootstrap",
		gitUrl: "https://github.com/abhay299/crm-App",
	},
];
