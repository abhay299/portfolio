import React from 'react';
import './about.css';

const About = () => {
	return (
		<div className='aboutMe'>
			<div className='exp'>
				<h1>Work Experience</h1>
				<h2>IIT-Bombay (e-Yantra)</h2>
				<h3>Role: Technical Assistant (5 months) </h3>
				<ul>
					<li>Worked on a Robotics based project to create a theme-based competition for K-12 students.</li>
					<li>Designed and developed a friendly robotic kit for the same using Raspberry Pi as a microprocessor and using various software like Fusion360, Eagle Cad.
						Created a GUI using Kivy to ease up checking of the robotic kit’s functionality by 80%</li>
					<li>Created about 6 cycles of tasks in Robotics (Simulation only) using Webots Simulation and Python programming, also used Image processing with libraries like NumPy, and OpenCV.</li>
				</ul>
			</div>
			<div className='edu'>
				<h1>Education</h1>
				<h2>Mumbai University</h2>
				<h3>BE in Electronics Engineering</h3>
				<li>CGPA: 8.27</li>
				<h3>Achievements: </h3>
				<ul>
					<li>Secured 2nd rank in Tantra vihar competition (intra college tech competition)</li>
					<li>Secured 2nd rank in Algorhythmic Hackathon competition</li>
				</ul>
			</div>
		</div >
	)
};

export default About;