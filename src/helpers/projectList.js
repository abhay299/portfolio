import socialsLogo from '../assets/Socials/socialMediaProfilePage.png';
import socialsLogin from '../assets/Socials/SM-LoginPage.png';
import socialsReg from '../assets/Socials/SM-RegisterPage.png';
import socialsUpdate from '../assets/Socials/socialMediaUpdate.png';
import bookAmigoLogo from '../assets/BookAmigo/BA-logo.png';
import bookAmigoHotel from '../assets/BookAmigo/BA-hotelPage.png';
import bookAmigoFeatured from '../assets/BookAmigo/BA-featured.png';
import bookAmigoSingleHotel from '../assets/BookAmigo/BA-singleHotelPage.png';
import bookAmigoHotelList from '../assets/BookAmigo/BA-hotelist.png';
import bookAmigoFooter from '../assets/BookAmigo/BA-footer.png';
import calculator from '../assets/Calculator/calcDark.png';
import crmLogo from '../assets/CRM/CRM-homePage.png'
import crmAdd from '../assets/CRM/CRM-addRecord.png'
import crmLogin from '../assets/CRM/CRM-loggedin.png'
import crmIndividual from '../assets/CRM/CRM-individualRecord.png'
import crmDel from '../assets/CRM/CRM-recordDelete.png'
import crmUpdate from '../assets/CRM/CRM-update.png'
import portfolio from '../assets/Portfolio/portfolioLogo.png';

export const projectList = [
	{
		name: "Socials",
		image: socialsLogo,
		image1: socialsReg,
		image2: socialsLogin,
		image3: socialsUpdate,
		desc: "I made a social media app as I wanted to achieve a full stack project.I had developed a few Frontend static projects before and I wanted to learn more about web development.The social media app is a dynamic platform developed using ReactJS, Node.js, MySQL, and Express.js.It offers a seamless user experience with its responsive design. Users can create accounts, customize profiles effortlessly. The app leverages Node.js and Express.js for efficient server-side operations, ensuring fast and secure handling of user requests. The MySQL database manages user data, posts, and comments, providing reliable and scalable data storage. Key features include user profiles, news feed, post creation. The app prioritizes security with secure authentication. It combines the power of these technologies to create a modern social media experience for users.",
		stack: "ReactJS, NodeJS, ExpressJS, MySQL",
		gitUrl: "https://github.com/abhay299/social_media",
	},
	{
		name: "BookAmigo",
		image: bookAmigoLogo,
		image1: bookAmigoHotel,
		image2: bookAmigoHotelList,
		image3: bookAmigoSingleHotel,
		image4: bookAmigoFeatured,
		image5: bookAmigoFooter,
		desc: "",
		stack: "ReactJS, NodeJS, ExpressJS, MySQL",
		gitUrl: "https://github.com/abhay299/BookAmigo",
	},
	{
		name: "Portfolio",
		image: portfolio,
		desc: "",
		stack: "ReactJS, NodeJS, ExpressJS, MySQL, CSS",
		gitUrl: "https://github.com/abhay299/my_Portfolio",
	},
	{
		name: "CRM App",
		image: crmLogo,
		image1: crmLogin,
		image2: crmAdd,
		image3: crmDel,
		image4: crmUpdate,
		image5: crmIndividual,
		desc: "",
		stack: "HTML, Django, Bootstrap",
		gitUrl: "https://github.com/abhay299/crm-App",
	},
	{
		name: "Calculator",
		image: calculator,
		desc: "",
		stack: "JavaScript(Redux), HTML, CSS",
		gitUrl: "https://github.com/abhay299/calc",
	},
];