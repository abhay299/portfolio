import baLogo from "../assets/BookAmigo/BA-logo2.png";
import crmLogo from "../assets/CRM/CRM-logo.png";
import myFitsLogo from "../assets/MyFits/MyFits-Logo.png";
import portfolioLogo from "../assets/Portfolio/myPortfolioLogo.png";
import smLogo from "../assets/Socials/SM-logo2.png";

export const PROJECT_CARDS = [
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
		name: "Portfolio",
		title: "Personal Website",
		image: portfolioLogo,
		desc: "Checkout My Website",
		stack: "ReactJS, NodeJS, ExpressJS, MySQL, CSS",
		gitUrl: "https://github.com/abhay299/my_Portfolio",
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
