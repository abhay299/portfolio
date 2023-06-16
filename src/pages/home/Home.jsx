import React from 'react'
import './home.css';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Home = () => {
	return (
		<div className='home'>
			<img src='https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
				alt=''
			/>
			<div className='info'>
				<p>Hello, I am</p>
				<h1>Abhay Gupta</h1>
				<p>Web developer | Fresh graduate | Passionate about creating functional websites | Eager to contribute and grow professionally.</p>
				<span>Get to know me more on</span>
				<a href='https://github.com/abhay299'>
					<GitHub fontSize='small' />
				</a>
				|
				<a href='https://linkedin.com'>
					<LinkedIn fontSize='medium' />
				</a>
				<div className='skills'>
					<h2>Tech Skills</h2>
					<p>ReactJS, HTML, CSS, Node.js, Express.js, Django, MySQL</p>
					<h2>Languages</h2>
					<p>JavaScript, Python, Java, C</p>
				</div>
			</div>
		</div>
	)
};

export default Home;
