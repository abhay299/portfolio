import socialsLogo from "../assets/Socials/socialMediaProfilePage.png";
import socialsLogin from "../assets/Socials/SM-LoginPage.png";
import socialsReg from "../assets/Socials/SM-RegisterPage.png";
import socialsUpdate from "../assets/Socials/socialMediaUpdate.png";
import myFitsLogo from "../assets/MyFits/mf-HomePage.png";
import myFitsCategory from "../assets/MyFits/mf-Categories.png";
import myFitsLogin from "../assets/MyFits/mf-Login.png";
import myFitsRegister from "../assets/MyFits/mf-Register.png";
import myFitsProducts from "../assets/MyFits/mf-womenProducts.png";
import myFitsCart from "../assets/MyFits/mf-Cart.png";
import bookAmigoLogo from "../assets/BookAmigo/BA-homePage.png";
import bookAmigoHotel from "../assets/BookAmigo/BA-hotelPage.png";
import bookAmigoFeatured from "../assets/BookAmigo/BA-featured.png";
import bookAmigoSingleHotel from "../assets/BookAmigo/BA-singleHotelPage.png";
import bookAmigoHotelList from "../assets/BookAmigo/BA-hotelist.png";
import bookAmigoFooter from "../assets/BookAmigo/BA-footer.png";
import calculator from "../assets/Calculator/calcDark.png";
import calculator2 from "../assets/Calculator/calc2.png";
import crmLogo from "../assets/CRM/CRM-homePage.png";
import crmAdd from "../assets/CRM/CRM-addRecord.png";
import crmLogin from "../assets/CRM/CRM-loggedin.png";
import crmIndividual from "../assets/CRM/CRM-individualRecord.png";
import crmDel from "../assets/CRM/CRM-recordDelete.png";
import crmUpdate from "../assets/CRM/CRM-update.png";
import portfolio from "../assets/Portfolio/portfolioLogo.png";
import feedbackPF from "../assets/Portfolio/Feedback.png";

export const projectList = [
  {
    name: "MyFits",
    imgLen: 6,
    image: myFitsLogo,
    image1: myFitsCategory,
    image2: myFitsProducts,
    image3: myFitsCart,
    image4: myFitsLogin,
    image5: myFitsRegister,
    desc: "MyFits is an e-commerce website that allows users to purchase clothes and footwear online. It's a dynamic E-commerce web app that harnesses the power of ReactJS, NodeJS, ExpressJS, MongoDB, and Redux. It seamlessly merges frontend and backend technologies, it offers an immersive online shopping experience. Users can explore a wide range of products, access detailed information, and securely manage their shopping carts. Using Redux-toolkit, state management becomes efficient, ensuring a smooth and responsive interface. MyFits not only simplifies online shopping but also guarantees data security and a user-friendly interface",
    stack: "ReactJS (Redux), NodeJS, ExpressJS, MongoDB, CSS3",
    gitUrl: "https://github.com/abhay299/e-commerce",
  },
  {
    name: "BookAmigo",
    imgLen: 6,
    image: bookAmigoLogo,
    image1: bookAmigoHotel,
    image2: bookAmigoHotelList,
    image3: bookAmigoSingleHotel,
    image4: bookAmigoFeatured,
    image5: bookAmigoFooter,
    desc: "BookAmigo is a hotel booking web application built using ReactJS, NodeJS, ExpressJS and MySQL. The purpose of this project was to become proficient in ReactJS & CSS. I had also added a SignUp/SignIn page which I have removed temporarily. It gave me an insight on how systems work in backend of the project. MySQL database is used to store user credentials along with ExpressJS and NodeJS to keep the server running smoothly",
    stack: "ReactJS, NodeJS, ExpressJS, MySQL",
    gitUrl: "https://github.com/abhay299/BookAmigo",
  },
  {
    name: "Portfolio",
    imgLen: 2,
    image: portfolio,
    image1: feedbackPF,
    desc: "This is my personal website that I had built with React, from scratch. The purpose was to connect with more people and showcase my knowledge and work to them. Please leave a feedback and surf around to find out more about me",
    stack: "ReactJS, CSS3",
    gitUrl: "https://github.com/abhay299/my_Portfolio",
  },
  {
    name: "CRM App",
    imgLen: 6,
    image: crmLogo,
    image1: crmLogin,
    image2: crmAdd,
    image3: crmDel,
    image4: crmUpdate,
    image5: crmIndividual,
    desc: "CRM is a Customer Relationship Management App. The motive to build this project was to grasp knowledge about Django framework and learn a bit about API calls using Django. The app keeps track of users, users can access the data only if they are logged in and then they can add, update, delete records of their own. Only the admin has access to delete anyone's data from the records. One can view all the records individually as well",
    stack: "Django, HTML5, Bootstrap",
    gitUrl: "https://github.com/abhay299/crm-App",
  },
  {
    name: "Socials",
    imgLen: 4,
    image: socialsLogo,
    image1: socialsReg,
    image2: socialsLogin,
    image3: socialsUpdate,
    desc: "Socials is a social media website, it's a full stack project. The social media app is a dynamic platform developed using ReactJS, NodeJS, MySQL, and ExpressJS. It offers a seamless user experience with its responsive design where users can create accounts, customize profiles effortlessly. The app leverages NodeJS and ExpressJS for efficient server-side operations, ensuring fast and secure handling of user requests. The MySQL database manages user data, posts, and comments, providing reliable and scalable data storage. Key features include user profiles, news feed, post creation. The app prioritizes security with secure authentication, it combines the power of these technologies to create a modern social media experience for users",
    stack: "ReactJS, NodeJS, ExpressJS, MySQL",
    gitUrl: "https://github.com/abhay299/social_media",
  },
  {
    name: "Calculator",
    imgLen: 2,
    image: calculator,
    image1: calculator2,
    desc: "This is a very basic calculator app that performs the elementary operations. Basic ReactJS and CSS3 were used while developing this project. The objective to build this project was to get familiar with basic React functions and their uses. I've used Redux in this project to manage state of operations",
    stack: "ReactJS (Redux), CSS3",
    gitUrl: "https://github.com/abhay299/calc",
  },
];
