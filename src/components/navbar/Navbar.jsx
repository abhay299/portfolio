import React from 'react';
import './navbar.css';
const Navbar = () => {

	return (

		<div className='NavContainer'>
			<h1><a href='/'>Abhay Gupta</a></h1>
			<input type='checkbox' id='active' />
			<label htmlFor='active' className='menu-btn'><span>
			</span></label>
			<div className='wrapper'>
				<ul>
					<li><a href='/'>Home</a></li>
					<li><a href={"/projects"}>Work</a></li>
					<li><a href={"/aboutMe"}>About</a></li>
					<li><a href={"https://drive.google.com/file/d/1kHcHDc51cNCSeL20qqmiJ4Fy76EOl-34/view?usp=sharing"}>Resume</a></li>
					<li><a href='mailto:abhaysg2000@gmail.com'>Contact</a></li>
				</ul>
			</div>
		</div>
	)
};

export default Navbar;
