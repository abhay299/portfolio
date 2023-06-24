import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();

	const id = location.pathname.split('/')

	const current = {
		home: '/',
		project: '/projects',
		projectID: `/projects/${id[id.length - 1]}`,
		about: '/aboutMe'
	};

	return (
		<div className='navbar'>
			<div className='navbarItems'>
				{
					location.pathname === current.home
						? <Link to={"/"} style={{ color: 'black', 'textDecoration': 'underline' }}>Home</Link>
						: <Link to={"/"}>Home</Link>
				}
				{
					location.pathname === current.project || location.pathname === current.projectID
						? <Link to={"/projects"} style={{ color: 'black', 'textDecoration': 'underline' }}>Projects</Link>
						: <Link to={"/projects"}>Projects</Link>
				}
				{
					location.pathname === current.about
						? <Link to={"/aboutMe"} style={{ color: 'black', 'textDecoration': 'underline' }}>About Me</Link>
						: <Link to={"/aboutMe"}>About Me</Link>
				}
			</div>
		</div>
	)
};

export default Navbar;
