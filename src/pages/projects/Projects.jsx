import React from 'react';
import "./projects.css";
import smHomePage from '../../assets/socialMediaFeed.png';
import baHomePage from '../../assets/bookamigoHomePage.png';
import calculator from '../../assets/calculator.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Projects = () => {

	const navigate = useNavigate();
	const locate = useLocation();
	console.log(locate)

	return (
		<div className='projects'>
			<h1>Personal Projects</h1>
			<div className='projectList'>
				<div className='projectItem' onClick={() => navigate('/projects/0')}>
					<div className='projectImage'>
						<img src={smHomePage} alt='' />
						<h1>Social Media App</h1>
					</div>
				</div>
				<div className='projectItem' onClick={() => navigate('/projects/1')}>
					<div className='projectImage'>
						<img src={baHomePage} alt='' />
						<h1>Hotel Booking App</h1>
					</div>
				</div>
				<div className='projectItem' onClick={() => navigate('/projects/2')}>
					<div className='projectImage'>
						<img src={calculator} alt='' />
						<h1>Calculator App</h1>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Projects;
