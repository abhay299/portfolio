// import React, { useState } from 'react';
// import Axios from 'axios';
import './home.css';
import frontend from '../../assets/Portfolio/Frontend.png'
import backend from '../../assets/Portfolio/Backend.png'
import languageLogo from '../../assets/Portfolio/LanguagesLogo.png'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { projectCards } from '../../helpers/projectCards';
import { GitHub } from '@mui/icons-material';

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

const Home = () => {
	const navigate = useNavigate();

	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		defaultValues: {
			name: '',
			email: '',
			comment: '',
		},
	});

	const onSubmit = (data) => {
		// console.log(data);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...data })
		})
			.then(() => {
				alert("Success!");
				reset();
			})
			.catch(error => alert(error));
	}

	const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	// console.log(watch(register));

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
			<div className='Hero'>
				<div className='InfoContainer'>
					<div className='InfoText'>
						<p>Hey, I'm</p>
						<h1>Abhay Gupta</h1>
						<h2>Full Stack Web Developer. </h2>
						<p>Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
					</div>
					{/* <div className='InfoImg'>
					<img src={me2}
						alt='myPhoto' />
				</div> */}
				</div>
				<div className='Glowing'>
					<span style={{ "--i": "1" }}></span>
					<span style={{ "--i": "2" }}></span>
					<span style={{ "--i": "3" }}></span>
					<span style={{ "--i": "4" }}></span>
				</div>
				<div className='Glowing'>
					<span style={{ "--i": "1" }}></span>
					<span style={{ "--i": "2" }}></span>
					<span style={{ "--i": "3" }}></span>
					<span style={{ "--i": "4" }}></span>
				</div>
				<div className='Glowing'>
					<span style={{ "--i": "1" }}></span>
					<span style={{ "--i": "2" }}></span>
					<span style={{ "--i": "3" }}></span>

				</div>
				<div className='Glowing'>
					<span style={{ "--i": "1" }}></span>
					<span style={{ "--i": "2" }}></span>
					<span style={{ "--i": "3" }}></span>
				</div>
			</div>
			<div className='Work'>
				<h1>
					Over the months I've built a few projects...
				</h1>
				<div className='WorkContainer'>
					{
						projectCards.map((project, index) => (
							<div className='ProjectCardContainer' key={index}>
								<img src={project.image} alt='Project-Logo' onClick={() => {
									navigate(`/projects/${index}`);
								}} />
								<div>
									<h2>{project.title}</h2>
									<p>
										{project.desc}<br />
									</p>
									<span>
										<a href={`/projects/${index}`}>Find out more...</a>
										<a href={project.gitUrl}><GitHub /></a>
									</span>
								</div>
							</div>
						))
					}
					{/* <div className='ProjectCardContainer'>
						<img src={smLogo} alt='' onClick={() => {
							navigate("/projects/0");
						}} />
						<div className='Card-Content'>
							<h2>Meet & Greet</h2>
							<p>
								Full Stack Social Media App <br />
							</p>
							<a href='/projects/0'>Find out more...</a>
						</div>
					</div>
					<div className='ProjectCardContainer'>
						<img src={myFitsLogo} alt='' onClick={() => {
							navigate("/projects/0");
						}} />
						<div className='Card-Content'>
							<h2>Find Your Fit</h2>
							<p>
								Full Stack E-commerce App <br />
							</p>
							<a href='/projects/0'>Find out more...</a>
						</div>
					</div>
					<div className='ProjectCardContainer'>
						<img src={baLogo} alt='' onClick={() => {
							navigate("/projects/1");
						}} />
						<div className='Card-Content'>
							<h2>Find Your Comfort Zone</h2>
							<p>
								Front-End Hotel booking App <br />
							</p>
							<a href='/projects/1'>Find out more...</a>
						</div>
					</div>
					<div className='ProjectCardContainer'>
						<img src={portfolioLogo} alt='' onClick={() => {
							navigate("/projects/2");
						}} />
						<div className='Card-Content'>
							<h2>My Portfolio</h2>
							<p>
								Personal Website <br />
							</p>
							<a href='/' >Home</a>
						</div>
					</div>
					<div className='ProjectCardContainer'>
						<img src={crmLogo} alt='' onClick={() => {
							navigate("/projects/3");
						}} />
						<div className='Card-Content'>
							<h2>CRM System</h2>
							<p>
								Back-End based with Django <br />
							</p>
							<a href='/projects/3'>Find out more...</a>
						</div>
					</div> */}
				</div>
			</div>
			<div className='Skill'>
				<div className='SkillHead'>
					<h1>Tech Skills</h1>
				</div>
				{/* <h1>Hello</h1> */}
				<div className='SkillContainer'>
					<div className='SkillCard'>
						<div className='Face Face1'>
							<div className='SkillContent'>
								<div className='SkillIcon'>
									<img className='fa'
										aria-hidden='true'
										src={frontend}
										alt='frontend'></img>
									{/* <h2>Frontend</h2> */}
								</div>
							</div>
						</div>
						<div className='Face Face2'>
							<div className='Frontend'>
								<div className='SkillContent'>
									<h3>Frontend</h3>
									<p>
										<a href="https://reactjs.dev/" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
												alt="react"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://redux.js.org" target="_blank" rel="noreferrer">
											<img
												src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
												alt="redux"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
												alt="bootstrap"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
												alt="html5"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
												alt="css3"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://sass-lang.com" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"
												alt="sass"
												width="30"
												height="30"
											/>
										</a>
									</p>
									<p>ReactJS, Redux, Bootstrap, HTML5, CSS3, SASS</p>
								</div>
							</div>
						</div>
					</div>
					<div className='SkillCard'>
						<div className='Face Face1'>
							<div className='SkillContent'>
								<div className='SkillIcon'>
									<img className='fa'
										aria-hidden='true'
										src={backend}
										alt='backend'></img>
									{/* <h2>Backend</h2> */}
								</div>
							</div>
						</div>
						<div className='Face Face2'>
							<div className='Backend'>
								<div className='SkillContent'>
									<h3>Backend</h3>
									<p>
										<a href="https://nodejs.org" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
												alt="nodejs"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://expressjs.com" target="_blank" rel="noreferrer">
											<img
												src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png"
												alt="express"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
											<img
												src="https://cdn.worldvectorlogo.com/logos/django.svg"
												alt="django"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
											<img
												src="https://banner2.cleanpng.com/20180821/lyg/kisspng-mysql-workbench-database-mysql-cluster-5b7cdc87c3dd20.3638601015349095758023.jpg"
												alt="mysql"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
											<img
												src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
												alt="mongoDB"
												width="30"
												height="30"
											/>
										</a>
									</p>
									<p>Node.js, Express.js, Django, MySQL, MongoDB</p>
								</div>
							</div>
						</div>
					</div>
					<div className='SkillCard'>
						<div className='Face Face1'>
							<div className='SkillContent'>
								<div className='SkillIcon'>
									<img className='fa'
										aria-hidden='true'
										src={languageLogo}
										alt='languageLogo'></img>
									{/* <h2>Languages</h2> */}
								</div>
							</div>
						</div>
						<div className='Face Face2'>
							<div className='Language'>
								<div className='SkillContent'>
									<h3>Languages</h3>
									<p>
										<a
											href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
											target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
												alt="javascript"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.python.org" target="_blank" rel="noreferrer">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
												alt="python"
												width="30"
												height="30"
											/>
										</a>
										<a href="https://www.java.com" target="_blank" rel="noreferrer">
											<img
												src="https://app.codingrooms.com/assets/ide/java-original.svg"
												alt="java"
												width="30"
												height="30"
											/>
										</a>
									</p>
									<p>JavaScript, Python, Java</p>
								</div>
							</div>
						</div>
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
								<input className='Abhay FormInput' placeholder='Your name.'
									{...register('name', { required: true, maxLength: 60 })} />
							}
							{errors.name?.type === "required" && (
								<p role="alert">Your name is required.</p>
							)}
							<input className='Abhay FormInput' placeholder='Your email address.'
								{...register('email', { required: true, maxLength: 100, pattern: regEmail })} />
							{errors.email && <p> Please fill out this field correctly.</p>}
						</div>
						<div className='Form-Row'>
							<textarea className='FormInput' placeholder='Hello, we would like to discuss about so and so position/project with you.'
								{...register('comment', { required: true, })} />
							{errors.comment && <p> Please fill out this field.</p>}
						</div>
						{/* <input className='SendButton' type='submit' /> */}
						<div className='BtnBody' type='submit'>
							<div id='BtnContainer'>
								<button className='Learn-More'>
									<span className='Circle' aria-hidden="true">
										<span className='Icon Arrow'></span>
									</span>
									<span className='Button-Text'>SEND</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
};

export default Home;
