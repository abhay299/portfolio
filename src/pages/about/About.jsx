import React from 'react';
import './about.css';

const About = () => {
	return (
		// <div className='page'>
		// 	<div className='timeline'>
		// 		<div className='timeline-group'>
		// 			<span className='timeline-year-time' aria-hidden="true">
		// 			</span>
		// 			<div className='timeline-cards'>
		// 				<div className='timeline-cards-card'>
		// 					<header className='card-header'>
		// 						<time className='time' dateTime='2010-02-02'>
		// 							<span className='time-day'>2</span>
		// 							<span className='time-month'>Feb</span>
		// 						</time>
		// 					</header>
		// 					<div className='card-content'>
		// 						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		// 							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
		// 							when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className='about'>
			<h1>A bit about myself</h1>
			<ul>
				<li style={{ "--accent-color": "#41516C" }}>
					<div className="date">2022-23</div>
					<div className="title">IIT-Bombay (e-Yantra)</div>
					<div className="desc">
						Role: Technical Assistant (5 months)
						<br />
						<br />
						Worked on a Robotics based project to create a theme-based competition for <b>K-12</b> students.<br />
						{/* Designed and developed a friendly robotic kit for the same using Raspberry Pi as a microprocessor.<br /> */}
						Created a GUI using Kivy to ease up checking of the robotic kit’s functionality by <b>80%</b><br />
						Created about <b>6</b> cycles of tasks in Webots Simulation, also used Image processing with libraries like NumPy, and OpenCV.
					</div>
				</li>
				<li style={{ "--accent-color": "#FBCA3E" }}>
					<div className="date">2022</div>
					<div className="title">Mumbai University - Vidyalankar Institute of Technology</div>
					<div className="desc">
						BE in Electronics Engineering<br />
						Graduated in Aug with CGPA of <b>8.27</b><br />
					</div>
				</li>
				<li style={{ "--accent-color": "#E24A68" }}>
					<div className="date">2018-22</div>
					<div className="title">UnderGrad Life</div>
					<div className="desc">
						<b>Achievements</b>:
						Secured <b>2nd</b> rank in Tantra vihar competition (intra college tech competition).<br />
						Secured <b>2nd</b> rank in Algorhythmic Hackathon competition.<br />
						Won <b>1st</b> prize in Volleyball competition.<br />
						Secured <b>2nd</b> prize in Spoorthi <br />
					</div>
				</li>
				<li style={{ "--accent-color": "#1B5F8C" }}>
					<div className="date">2017-18</div>
					<div className="title">Jr. College - HSC</div>
					<div className="desc">
						Graduated with 70.90% in Science.<br />
						Won  <b>1st</b> Prize in <b>400M</b> Hurdles in BCDAAA (Mumbai district) Athletics competition.
					</div>
				</li>
				<li style={{ "--accent-color": "#4CADAD" }}>
					<div className="date">2016</div>
					<div className="title">High School - SSC</div>
					<div className="desc">
						Graduated with <b>90.40%</b>.<br />
						Won <b>1st</b> Prize in <b>400M</b> Hurdles in BCDAAA (Mumbai district) Athletics competition.
					</div>
				</li>
			</ul>
		</div>
	)
};

export default About;