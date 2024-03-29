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
// import crmLogin from '../assets/CRM/CRM-loggedin.png'
import crmIndividual from "../assets/CRM/CRM-individualRecord.png";
import crmDel from "../assets/CRM/CRM-recordDelete.png";
import crmUpdate from "../assets/CRM/CRM-update.png";
import portfolio from "../assets/Portfolio/portfolioLogo.png";
import feedbackPF from "../assets/Portfolio/Feedback.png";

export const projectList = [
  {
    name: "Socials",
    imgLen: 4,
    image: socialsLogo,
    image1: socialsReg,
    image2: socialsLogin,
    image3: socialsUpdate,
    desc: "I made a social media app as I wanted to achieve a full stack project.I had developed a few Frontend static projects before and I wanted to learn more about web development.The social media app is a dynamic platform developed using ReactJS, Node.js, MySQL, and Express.js.It offers a seamless user experience with its responsive design. Users can create accounts, customize profiles effortlessly. The app leverages Node.js and Express.js for efficient server-side operations, ensuring fast and secure handling of user requests. The MySQL database manages user data, posts, and comments, providing reliable and scalable data storage. Key features include user profiles, news feed, post creation. The app prioritizes security with secure authentication. It combines the power of these technologies to create a modern social media experience for users.",
    stack: "ReactJS, NodeJS, ExpressJS, MySQL",
    gitUrl: "https://github.com/abhay299/social_media",
  },
  {
    name: "MyFits",
    imgLen: 6,
    image: myFitsLogo,
    image1: myFitsCategory,
    image2: myFitsProducts,
    image3: myFitsCart,
    image4: myFitsLogin,
    image5: myFitsRegister,
    desc: "MyFits is an E-commerce Web App that sells clothes and footwear online. It's a dynamic E-commerce web app that harnesses the power of React, Node.js, Express.js, MongoDB, and Redux. It seamlessly merges frontend and backend technologies, it offers an immersive online shopping experience. Users can explore a wide range of products, access detailed information, and securely manage their shopping carts. With Redux, state management becomes efficient, ensuring a smooth and responsive interface. MyFits not only simplifies online shopping but also guarantees data security and a user-friendly interface.",
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
    desc: "BookAmigo is a Hotel Booking Web App. This was my 1st dynamic frontend project. The purpose of this project was to become proficient in ReactJS & CSS. There are multiple pages in to navigate to in this project. I had also added a SignUp/SignIn page which I have removed temporarily. It gave me an insight on how systems work in backend of the project. I used MySQL database to store user Credentials along with ExpressJS and NodeJS to keep the server running smoothly.",
    stack: "ReactJS, NodeJS, ExpressJS, MySQL",
    gitUrl: "https://github.com/abhay299/BookAmigo",
  },
  {
    name: "Portfolio",
    imgLen: 2,
    image: portfolio,
    image1: feedbackPF,
    desc: "This is my portfolio that I built to connect with more people and showcase my knowledge and work to them. You can look around to find out more about my website.",
    stack: "ReactJS, NodeJS, ExpressJS, MySQL, CSS3",
    gitUrl: "https://github.com/abhay299/my_Portfolio",
  },
  {
    name: "CRM App",
    imgLen: 6,
    image: crmLogo,
    image1: crmAdd,
    image2: crmDel,
    image3: crmDel,
    image4: crmUpdate,
    image5: crmIndividual,
    desc: "CRM is a Customer Relationship Management App. The motive to build this project was to grasp knowledge about Django framework and learn a bit about API calls using Django. As I have done a lot of python programming before hand, the syntax was not an issue. I have used Bootsrap framework instead of the normal CSS. The app keeps track of users, users can access the data only if they are logged in and they can add, update, delete records of their own. One can view all the records individually as well.",
    stack: "Django, HTML5, Bootstrap",
    gitUrl: "https://github.com/abhay299/crm-App",
  },
  {
    name: "Calculator",
    imgLen: 2,
    image: calculator,
    image1: calculator2,
    desc: "As you can see it's a very basic calculator app that performs the elementary operations. It's among the first few static web apps that I built using ReactJS. Although, it's not that simple as I've used Redux in this project to manage state of operations. Also while building the app I found a bug which crashed the app, it was happening while pressing the 'Period' button so, I resolved that error with an optional chaining operator '?.' to check whether it's null/undefined state.",
    stack: "ReactJS (Redux), CSS3",
    gitUrl: "https://github.com/abhay299/calc",
  },
];
