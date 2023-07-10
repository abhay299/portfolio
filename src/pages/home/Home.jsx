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

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = async (data) => {

		try {
			await Axios.post("http://localhost:8800/", data);
		} catch (err) {
			console.log(err);
		}
	};

	// console.log(watch({ register }))

	// const [inputs, setInputs] = useState({
	// 	name: "",
	// 	email: "",
	// 	comment: "",
	// });

	// Regex to check email validity
	let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

	// const [err, setErr] = useState(null);

	// const handleChange = (e) => {
	// 	setInputs(prev => ({
	// 		...prev, [e.target.name]: e.target.value
	// 	}));
	// };

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
	// 		setErr(err.response.data)
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
			<div className='MailMe'>
				<h1>Drop me a message!</h1>
				<p>Like my work or want to connect, just let me know.</p>
				{/* <form>
					<input name='name' value={inputs.name} type="text" className='formInput'
						placeholder='Enter your name' onChange={handleChange} required />
					<input name='email' value={inputs.email} type="email" className='formInput'
						placeholder='Enter your email' onChange={handleChange} required />
					<textarea name='comment' value={inputs.comment} className='formInput' onChange={handleChange}
						placeholder='Enter your message' required></textarea>
					<button type='submit' className="sendButton"
						onClick={handleSubmit}>Send</button>
				</form> */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<input className='FormInput' placeholder='Your name'
						{...register('name', { required: true, maxLength: 60 })} />
					{errors.name?.type === "required" && (
						<p role="alert">Your name is required</p>
					)}
					{/* {errors.name && <span> Please fill out this field. </span>} */}

					<input className='FormInput' placeholder='Your email address'
						{...register('email', { required: true, maxLength: 100, pattern: regEmail })} />
					{errors.email && <span> Please fill out this field.</span>}

					<input className='FormInput' placeholder='Hi! We like some of your work, we would like to collaborate.'
						{...register('comment', { required: true, })} />
					{errors.comment && <span> Please fill out this field.</span>}

					<input type='submit' />
				</form>
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
