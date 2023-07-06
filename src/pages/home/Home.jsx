import React from 'react'
import './home.css';
// import smLogo from '../../assets/Socials/SM-logo.png';
import smLogo from '../../assets/Socials/SM-RegisterPage.png';
// import baLogo from '../../assets/BookAmigo/BA-logo.png'
import baLogo from '../../assets/BookAmigo/BA-homePage.png'
import crmLogo from '../../assets/CRM/CRM-homePage.png'
import calcLogo from '../../assets/Calulator/calc.png'
// import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
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
					<img src={smLogo} alt='' />
					<div className='containerText'>
						<h2>Socials</h2>
						<p>
							Full Stack Social Media App <br />
							<a href='#' style={{ "textDecoration": "none" }}>Find out more...</a>
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					<img src={baLogo} alt='' />
					<div className='containerText'>
						<h2>BookAmigo</h2>
						<p>
							Front-End Hotel booking App <br />
							<a href='#' style={{ "textDecoration": "none" }}>Find out more...</a>
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
						<h2>My Website</h2>
						<p>
							Full Stack Website <br />
							<a href='#' style={{ "textDecoration": "none" }}>Find out more...</a>
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					<img src={crmLogo} alt='' />
					<div className='containerText'>
						<h2>Django CRM</h2>
						<p>
							Back-End based CRM App with Django <br />
							<a href='#' style={{ "textDecoration": "none" }}>Find out more...</a>
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
				<div className='projectCardContainer'>
					<img src={calcLogo} alt='' />
					<div className='containerText'>
						<h2>Calculator</h2>
						<p>
							Calculator App made with React & Redux <br />
							<a href='#' style={{ "textDecoration": "none" }}>Find out more...</a>
						</p>
					</div>
					{/* <a href='#' className='button'>
						Find out more
						<span className='material-symbols-outlined'>arrow_right_alt</span>
					</a> */}
				</div>
			</div>
			<div className='mailMe'>
				<h1>Drop me a message!</h1>
				<p>Like my work or want to connect, just let me know.</p>
				<form>
					<input name='name' type="text" className='formInput'
						placeholder='Enter your name' />
					<input name='email' type="email" className='formInput'
						placeholder='Enter your email' />
					<textarea name='message' className='formInput'
						placeholder='Enter your message'></textarea>
					<input type='submit' value="SEND" />
				</form>
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
