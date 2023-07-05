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
		// <div className='navbar'>
		// 	<div className='navbarItems'>
		// 		{
		// 			location.pathname === current.home
		// 				? <Link to={"/"} style={{ color: '#F1C376', 'textDecoration': 'underline' }}>Home</Link>
		// 				: <Link to={"/"}>Home</Link>
		// 		}
		// 		{
		// 			location.pathname === current.project || location.pathname === current.projectID
		// 				? <Link to={"/projects"} style={{ color: '#F1C376', 'textDecoration': 'underline' }}>Projects</Link>
		// 				: <Link to={"/projects"}>Projects</Link>
		// 		}
		// 		{
		// 			location.pathname === current.about
		// 				? <Link to={"/aboutMe"} style={{ color: '#F1C376', 'textDecoration': 'underline' }}>About Me</Link>
		// 				: <Link to={"/aboutMe"}>About Me</Link>
		// 		}
		// 	</div>
		// </div>
		<body>
			{/* <div className='navbar'> */}
			<input type='checkbox' id='active' />
			<label htmlFor='active' className='menu-btn'><span></span></label>
			<label htmlFor='active' className='close'></label>
			<div className='wrapper'>
				<ul>
					<li><Link to={"/"}>Home</Link></li>
					<li><Link to={"/projects"}>Work</Link></li>
					<li><Link to={"/aboutMe"}>About</Link></li>
					<li><Link to={"/feedback"}>Feedback</Link></li>
				</ul>
			</div>
			{/* </div> */}
		</body>
	)
};

export default Navbar;
