import React from 'react';
import './navbar.css';
import { EastRounded, EmailSharp } from '@mui/icons-material';

const Navbar = () => {

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

		<div>
			<input type='checkbox' id='active' />
			<label htmlFor='active' className='menu-btn'><span></span></label>
			<label htmlFor='active' className='close'></label>
			<div className='wrapper'>
				<ul>
					<li><a href='/'>Home</a></li>
					{/* <li><Link to={"/"}>Home</Link></li> */}
					<li><a href={"/projects"}>Work</a></li>
					<li><a href={"/aboutMe"}>About</a></li>
					<li><a href={"https://drive.google.com/file/d/1kHcHDc51cNCSeL20qqmiJ4Fy76EOl-34/view?usp=sharing"}>Resume</a></li>
					<li><a href='mailto:abhaysg2000@gmail.com'>Contact</a></li>
					{/* <div className='checkout'>
						Contact Me
						<EastRounded />
						<a href='mailto:abhaysg2000@gmail.com'>
							<EmailSharp />
						</a>

					</div> */}
				</ul>
			</div>
		</div>

	)
};

export default Navbar;
