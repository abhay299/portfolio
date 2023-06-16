import React from 'react';
import "./projects.css";
import smHomePage from '../../assets/socialMediaFeed.png';
import baHomePage from '../../assets/bookamigoHomePage.png';
import calculator from '../../assets/calculator.png';

const Projects = () => {
	return (
		<div className='projects'>
			<h1>Personal Projects</h1>
			<div className='projectList'>
				<div className='projectItem'>
					<div className='projectImage'>
						<img src={smHomePage} alt='' />
						<h1>Social Media App</h1>
					</div>
				</div>
				<div className='projectItem'>
					<div className='projectImage'>
						<img src={baHomePage} alt='' />
						<h1>Hotel Booking App</h1>
					</div>
				</div>
				<div className='projectItem'>
					<div className='projectImage'>
						<img src={calculator} alt='' />
						<h1>Calculator</h1>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Projects;
