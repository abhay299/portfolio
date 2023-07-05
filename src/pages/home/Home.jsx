import React from 'react'
import './home.css';
import smHomePage from '../../assets/socialMediaFeed.png';
// import me2 from '../../assets/me2.jpg'
// import { GitHub, LinkedIn, EmailSharp } from '@mui/icons-material';

const Home = () => {

	return (
		<div className='home'>
			<div className='info'>
				<p>Hey, I'm</p>
				<h1>Abhay Gupta</h1>
				Full Stack Web developer
				<p><br />
					Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
				{/* <span>Connect with me</span>
				<div className='checkout'>

					<a href='https://github.com/abhay299/'>
						<GitHub fontSize='small' />
					</a>
					|
					<a href='https://www.linkedin.com/in/abhay-gupta-88326b1a6/'>
						<LinkedIn fontSize='medium' />
					</a>
					|
					<a href='mailto:abhaysg2000@gmail.com'>
						<EmailSharp fontSize='medium' />
					</a>
				</div> */}
			</div>
			<div className='work'>
				<div className='projectCardContainer'>
					{/* <img src={smHomePage} alt='' /> */}
					<div className='containerText'>
						<h2>Card Heading</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt exercitationem iste, voluptatum,
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					{/* <img src={smHomePage} alt='' /> */}
					<div className='containerText'>
						<h2>Card Heading</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt exercitationem iste, voluptatum,
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					{/* <img src={smHomePage} alt='' /> */}
					<div className='containerText'>
						<h2>Card Heading</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt exercitationem iste, voluptatum,
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					{/* <img src={smHomePage} alt='' /> */}
					<div className='containerText'>
						<h2>Card Heading</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt exercitationem iste, voluptatum,
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					{/* <img src={smHomePage} alt='' /> */}
					<div className='containerText'>
						<h2>Card Heading</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt exercitationem iste, voluptatum,
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
			</div>
			<div className='skill'>
				<h2>Tech Skills</h2>
				<ul className='skillInfo'>
					<li>
						Front-End: ReactJS, HTML, CSS
					</li>
					<br />
					<li>
						Back-End: NodeJS, ExpressJS, Django, MySQL
					</li>
				</ul>
				<h2>Languages</h2>
				<ul className='skillInfo'>
					<li>JavaScript, Python, Java, C</li>
				</ul>
			</div>
		</div>
	)
};

export default Home;
