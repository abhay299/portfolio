import React from 'react';
import './about.css';

const About = () => {
	return (
		<div className='aboutMe'>
			<div className='aboutContainer'>
				<div className='exp'>
					<h1>Work Experience</h1>
					<h2>IIT-Bombay (e-Yantra)</h2>
					<h3>Role: Technical Assistant (5 months) </h3>
					<ul>
						<li>Worked on a Robotics based project to create a theme-based competition for <b>K-12</b> students.</li>
						<li>Designed and developed a friendly robotic kit for the same using Raspberry Pi as a microprocessor and using various software like Fusion360, Eagle Cad.
							Created a GUI using Kivy to ease up checking of the robotic kit’s functionality by <b>80%</b></li>
						<li>Created about <b>6</b> cycles of tasks in Robotics (Simulation only) using Webots Simulation and Python programming, also used Image processing with libraries like NumPy, and OpenCV.</li>
					</ul>
				</div>
				<div className='edu'>
					<h1>Education</h1>
					<h2>Mumbai University</h2>
					<h3>BE in Electronics Engineering</h3>
					<span>CGPA: <b>8.27</b></span>
					<h3>Achievements: </h3>
					<ul>
						<li>Secured <b>2nd</b> rank in Tantra vihar competition (intra college tech competition)</li>
						<li>Secured <b>2nd</b> rank in Algorhythmic Hackathon competition</li>
					</ul>
				</div>
			</div>
		</div >
	)
};

export default About;