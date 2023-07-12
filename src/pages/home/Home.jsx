import React, { useState } from 'react';
// import Axios from 'axios';
import './home.css';
import smLogo from '../../assets/Socials/SM-RegisterPage.png';
import baLogo from '../../assets/BookAmigo/BA-logo.png'
import portfolioLogo from '../../assets/Portfolio/portfolioLogo.png'
import crmLogo from '../../assets/CRM/CRM-homePage.png'
import me2 from '../../assets/Portfolio/me.JPG'
import { useNavigate } from 'react-router-dom';

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

const Home = () => {
	const navigate = useNavigate();

	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		comment: "",
	});



	// Regex to check email validity
	let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// const [err, setErr] = useState(null);

	const handleChange = (e) => {
		setInputs(prev => ({
			...prev, [e.target.name]: e.target.value
		}));
	};

	const handleSubmit = (e) => {
		if (inputs.name === '' || inputs.email === '' || inputs.comment === '') {
			return alert("Please fill out all fields.")
		} else if (!regEmail.test(inputs.email)) {
			return alert("Please enter a valid Email address.")
		}

		fetch("", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...inputs })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));
		console.log(inputs);

		e.preventDefault();
		setInputs({
			name: '',
			email: '',
			comment: ''
		});
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	if (err) { };

	// 	if (inputs.name === '' || inputs.email === '' || inputs.comment === '') {
	// 		return alert("Please fill out all fields.")
	// 	} else if (!regEmail.test(inputs.email)) {
	// 		return alert("Please enter a valid Email address.")
	// 	}
	// 	try {
	// 		await Axios.post("http://localhost:8800/", inputs);
	// 	} catch (err) {
	// 		setErr(err.response?.data)
	// 	}

	// 	setInputs({
	// 		name: '',
	// 		email: '',
	// 		comment: ''
	// 	});
	// 	alert("Message sent!");
	// }

	return (
		<div className='Home'>
			<div className='InfoContainer'>
				<div className='InfoText'>
					<p>Hey, I'm</p>
					<h1>Abhay Gupta</h1>
					<h2>Full Stack Web developer. </h2>
					<p>Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
				</div>
				<div className='InfoImg'>
					<img src={me2} alt='myPhoto' />
				</div>
			</div>
			<div className='Work'>
				<h1>
					Over the months I've built a few projects...
				</h1>
				<div className='ProjectCardContainer'>
					<img src={smLogo} alt='' onClick={() => {
						navigate("/projects/0");
					}} />
					<div className='ContainerText'>
						<h2>Socials</h2>
						<p>
							Full Stack Social Media App <br />
							<a href='/projects/0'>Find out more...</a>
						</p>
					</div>
				</div>
				<div className='ProjectCardContainer'>
					<img src={baLogo} alt='' onClick={() => {
						navigate("/projects/1");
					}} />
					<div className='ContainerText'>
						<h2>BookAmigo</h2>
						<p>
							Front-End Hotel booking App <br />
							<a href='/projects/1'>Find out more...</a>
						</p>
					</div>
				</div>
				<div className='ProjectCardContainer'>
					<img src={portfolioLogo} alt='' onClick={() => {
						navigate("/projects/2");
					}} />
					<div className='ContainerText'>
						<h2>My Portfolio</h2>
						<p>
							Full Stack Website <br />
							<a href='/' >Home</a>
						</p>
					</div>
				</div>
				<div className='ProjectCardContainer'>
					<img src={crmLogo} alt='' onClick={() => {
						navigate("/projects/3");
					}} />
					<div className='ContainerText'>
						<h2>Django CRM</h2>
						<p>
							Back-End based CRM App with Django <br />
							<a href='/projects/3'>Find out more...</a>
						</p>
					</div>
				</div>
			</div>
			<div className='MailMeHeader'>
				<h1>Drop me a message!</h1>
				<p>Like my work or want to connect, just let me know.</p>
				<div className='MailMe-InnerContent'>

					<form onSubmit={handleSubmit} name='contact' method='POST' data-netlify='true'>
						<div className='Form-Row'>
							<input type='hidden' name='form-name' value="contact" />
							<input name='name' value={inputs.name} type="text" className='Abhay FormInput'
								placeholder='Enter your name' onChange={handleChange} required />
							<input name='email' value={inputs.email} type="email" className='Abhay FormInput'
								placeholder='Enter your email' onChange={handleChange} required />
						</div>
						<div className='Form-Row'>
							<textarea name='comment' value={inputs.comment} className='FormInput' onChange={handleChange}
								placeholder='Enter your message' required></textarea>
						</div>
						<button type='submit' className="SendButton">Send</button>
					</form>
				</div>
			</div>
			<div className='Skill'>
				<h2>Tech Skills</h2>
				<ul className='SkillInfo'>
					<li>
						Front-End: ReactJS, HTML, CSS
					</li>
					<br />
					<li>
						Back-End: NodeJS, ExpressJS, Django, MySQL
					</li>
				</ul>
				<h2>Languages</h2>
				<ul className='SkillInfo'>
					<li>JavaScript, Python, Java, C</li>
				</ul>
			</div>
		</div>
	)
};

export default Home;
