import React from 'react';
import './navbar.css';
import ModalImage from "react-modal-image";
import me from '../../assets/Portfolio/me.JPG';
import smallMe from '../../assets/Portfolio/smallMe.png';

const Navbar = () => {

	return (
		<div className='Navbar'>
			<div className='NavContainer'>
				<ModalImage
					hideDownload='true'
					hideZoom='true'
					small={smallMe}
					large={me}
					alt="That's me :)"
				/>
				{/* <img src={me2} alt='pfp'
				/> */}
				<h1><a href='/'>Abhay Gupta</a></h1>
			</div>
			<input type='checkbox' id='active' />
			<label htmlFor='active' className='menu-btn'><span>
			</span></label>
			<div className='wrapper'>
				<ul>
					<li><a href='/'>Home</a></li>
					<li><a href={"/projects"}>Work</a></li>
					<li><a href={"/aboutMe"}>About</a></li>
					<li><a href={"https://drive.google.com/file/d/1-F2jTUlR582Le6xi6mf4qAVoXoEogxvL/view?usp=sharing"}>Resume</a></li>
					<li><a href='mailto:abhaysg2000@gmail.com'>Contact</a></li>
				</ul>
			</div>
		</div>
	)
};

export default Navbar;
