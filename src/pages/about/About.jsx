import React from 'react';
import './about.css';

const About = () => {
	return (
		<div className='About'>
			<h1>A bit about myself</h1>
			<ul>
				<li style={{ "--accent-color": "#41516C" }}>
					<div className="Date">2022-23</div>
					<div className="Title">IIT-Bombay (e-Yantra)</div>
					<div className="Desc">
						Role: Technical Assistant (5 months)
						<br />
						<br />
						Worked on a Robotics based project to create a theme-based competition for <b>K-12</b> students.<br />
						{/* Designed and developed a friendly robotic kit for the same using Raspberry Pi as a microprocessor.<br /> */}
						Created a GUI using Kivy to ease up checking of the robotic kit's functionality by <b>80%.</b><br />
						Created about <b>6</b> cycles of tasks in Webots Simulation, also used Image processing with libraries like NumPy, and OpenCV.
					</div>
				</li>
				<li style={{ "--accent-color": "#FBCA3E" }}>
					<div className="Date">2022</div>
					<div className="Title">Mumbai University - Vidyalankar Institute of Technology</div>
					<div className="Desc">
						BE in Electronics Engineering<br />
						Graduated in Aug with CGPA of <b>8.27</b><br />
					</div>
				</li>
				<li style={{ "--accent-color": "#E24A68" }}>
					<div className="Date">2018-22</div>
					<div className="Title">UnderGrad Life</div>
					<div className="Desc">
						<b>Achievements</b>:
						Secured <b>2nd</b> rank in Tantra vihar competition (intra college tech competition).<br />
						Secured <b>2nd</b> rank in Algorhythmic Hackathon competition.<br />
						Won <b>1st</b> prize in Volleyball competition.<br />
						Secured <b>2nd</b> prize in Spoorthi <br />
					</div>
				</li>
				<li style={{ "--accent-color": "#1B5F8C" }}>
					<div className="Date">2017-18</div>
					<div className="Title">Jr. College - HSC</div>
					<div className="Desc">
						Graduated with 70.90% in Science.<br />
						Won  <b>1st</b> Prize in <b>400M</b> Hurdles in BCDAAA (Mumbai district) Athletics competition.
					</div>
				</li>
				<li style={{ "--accent-color": "#4CADAD" }}>
					<div className="Date">2016</div>
					<div className="Title">High School - SSC</div>
					<div className="Desc">
						Graduated with <b>90.40%</b>.<br />
						Won <b>1st</b> Prize in <b>400M</b> Hurdles in BCDAAA (Mumbai district) Athletics competition.
					</div>
				</li>
			</ul>
		</div>
	)
};

export default About;