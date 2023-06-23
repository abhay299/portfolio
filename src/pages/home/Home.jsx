import React from 'react'
import './home.css';
import me2 from '../../assets/me2.jpg'
import { GitHub, LinkedIn, EmailSharp } from '@mui/icons-material';


const Home = () => {

	return (
		<div className='home'>
			<img
				src={me2}
				alt=''
			/>
			<div className='info'>
				<p>Hello, I am</p>
				<h1 style={{ 'color': 'darkblue' }}>Abhay Gupta</h1>
				<p>Web developer | Fresh graduate | Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
				<span>Get to know me more through</span>
				<div className='checkout'>

					<a href='https://github.com/abhay299/'>
						<GitHub fontSize='small' />
					</a>
					|
					<a href='https://www.linkedin.com/in/abhay-gupta-88326b1a6/'>
						<LinkedIn fontSize='medium' />
					</a>
					|
					<a href='mailto:abhaysg2000@gmail.com'>
						<EmailSharp fontSize='medium' />
					</a>
				</div>
				<div className='skills'>
					<h2>Tech Skills</h2>
					<ul>
						<li>
							Front-End: ReactJS, HTML, CSS
						</li>
					</ul>
					<ul>
						<li>
							Back-End: NodeJS, ExpressJS, Django, MySQL
						</li>
					</ul>
					<h2>Languages</h2>
					<ul>
						<li>JavaScript, Python, Java, C</li>
					</ul>
				</div>
			</div>
		</div>
	)
};

export default Home;
