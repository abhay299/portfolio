import React, { useState } from 'react';
import Axios from 'axios';
import './home.css';
import { Alert } from '@mui/material';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
// import smLogo from '../../assets/Socials/SM-logo.png';
import smLogo from '../../assets/Socials/SM-RegisterPage.png';
// import baLogo from '../../assets/BookAmigo/BA-logo.png'
import baLogo from '../../assets/BookAmigo/BA-homePage.png'
import crmLogo from '../../assets/CRM/CRM-homePage.png'
import addRecord from '../../assets/CRM/CRM-addRecord.png'
import calcLogo from '../../assets/Calulator/calc.png'
// import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
// import me2 from '../../assets/me2.jpg'
import { GitHub, LinkedIn, EmailSharp } from '@mui/icons-material';

const Home = () => {

	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		comment: "",
	});


	// Regex to check email validity
	let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const [err, setErr] = useState(null);

	const handleChange = (e) => {
		setInputs(prev => ({
			...prev, [e.target.name]: e.target.value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// console.log(inputs)

		if ((inputs.name || inputs.email || inputs.comment) === '') {
			return alert("Please fill out all fields.")
		} else if (!regEmail.test(inputs.email)) {
			return alert("Please enter a valid Email address.")
		}
		try {
			await Axios.post("http://localhost:8800/", inputs);
		} catch (err) {
			setErr(err.response?.data)
		}

		setInputs({
			name: '',
			email: '',
			comment: ''
		});
		alert("Message sent!");
	}

	return (
		<div className='home'>
			<div className='info'>
				<p>Hey, I'm</p>
				<h1>Abhay Gupta</h1>
				Full Stack Web developer
				<p><br />
					Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
				<span>Contact Me</span>
				<div className='checkout'>

					{/* <a href='https://github.com/abhay299/'>
						<GitHub fontSize='small' />
					</a>
					|
					<a href='https://www.linkedin.com/in/abhay-gupta-88326b1a6/'>
						<LinkedIn fontSize='medium' />
					</a>
					| */}
					<EastRoundedIcon style={{ marginBottom: "5px" }} />
					<a href='mailto:abhaysg2000@gmail.com'>
						<EmailSharp fontSize='large' />
					</a>
				</div>
			</div>
			<div className='work'>
				<h1>
					Over the months I built a few projects...
				</h1>
				<div className='projectCardContainer'>
					<img src={smLogo} alt='' />
					<div className='containerText'>
						<h2>Socials</h2>
						<p>
							Full Stack Social Media App <br />
							<a href='#'>Find out more...</a>
						</p>
					</div>
				</div>
				<div className='projectCardContainer'>
					<img src={baLogo} alt='' />
					<div className='containerText'>
						<h2>BookAmigo</h2>
						<p>
							Front-End Hotel booking App <br />
							<a href='#'>Find out more...</a>
						</p>
					</div>
				</div>
				<div className='projectCardContainer'>
					<img src={addRecord} alt='' />
					<div className='containerText'>
						<h2>My Website</h2>
						<p>
							Full Stack Website <br />
							<a href='#'>Find out more...</a>
						</p>
					</div>
				</div>
				<div className='projectCardContainer'>
					<img src={crmLogo} alt='' />
					<div className='containerText'>
						<h2>Django CRM</h2>
						<p>
							Back-End based CRM App with Django <br />
							<a href='#'>Find out more...</a>
						</p>
					</div>
				</div>
				<div className='projectCardContainer'>
					<img src={calcLogo} alt='' />
					<div className='containerText'>
						<h2>Calculator</h2>
						<p>
							Calculator App made with React & Redux <br />
							<a href='#'>Find out more...</a>
						</p>
					</div>
				</div>
			</div>
			<div className='mailMe'>
				<h1>Drop me a message!</h1>
				<p>Like my work or want to connect, just let me know.</p>
				<form>
					<input name='name' value={inputs.name} type="text" className='formInput'
						placeholder='Enter your name' onChange={handleChange} required />
					<input name='email' value={inputs.email} type="email" className='formInput'
						placeholder='Enter your email' onChange={handleChange} required />
					<textarea name='comment' value={inputs.comment} className='formInput' onChange={handleChange}
						placeholder='Enter your message' required></textarea>
					<button type='submit' className="sendButton"
						onClick={handleSubmit}>Send</button>
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
