import React from 'react';
import Axios from 'axios';
import './home.css';
import smLogo from '../../assets/Socials/SM-RegisterPage.png';
import baLogo from '../../assets/BookAmigo/BA-logo.png'
import portfolioLogo from '../../assets/Portfolio/portfolioLogo.png'
import crmLogo from '../../assets/CRM/CRM-homePage.png'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Home = () => {
	const navigate = useNavigate();

	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		defaultValues: {
			name: '',
			email: '',
			comment: '',
		},
	});

	// console.log(watch(register));

	const onSubmit = async (data) => {

		// try {
		// 	await Axios.post("https://abhay-develop.netlify.app/", data);
		// 	alert("Message Sent!");
		// 	reset();
		// } catch (err) {
		// 	console.log(err);
		// 	alert(`Something went wrong. Your submission has failed because -> ${err}`);
		// }
	};

	// Regex to check email validity
	let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

	return (
		<div className='Home'>
			<div className='Info'>
				<p>Hey, I'm</p>
				<h1>Abhay Gupta</h1>
				<h2>Full Stack Web developer. </h2>
				<p>Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='Form-Row'>
							{
								<input className='Abhay FormInput' placeholder='Your name'
									{...register('name', { required: true, maxLength: 60 })} />
							}
							{errors.name?.type === "required" && (
								<p role="alert">Your name is required</p>
							)}
							<input className='Abhay FormInput' placeholder='Your email address'
								{...register('email', { required: true, maxLength: 100, pattern: regEmail })} />
							{errors.email && <p> Please fill out this field correctly.</p>}
						</div>
						<div className='Form-Row'>
							<textarea className='FormInput' placeholder='Hi! We like some of your work, we would like to collaborate.'
								{...register('comment', { required: true, })} />
							{errors.comment && <p> Please fill out this field.</p>}
						</div>
						<input className='SendButton' type='submit' />
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
