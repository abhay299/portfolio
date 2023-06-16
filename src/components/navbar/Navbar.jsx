import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbarItems'>
				<Link to={"/"}>Home</Link>
				<Link to={"/projects"}>Projects</Link>
				<Link to={"/aboutMe"}>About Me</Link>
			</div>
		</div>
	)
};

export default Navbar;
