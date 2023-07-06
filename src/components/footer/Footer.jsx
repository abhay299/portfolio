import React from 'react';
import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerItems'>
				<h2>Say Hello</h2>
				<div className='footerSvg'>
					<a href="https://www.linkedin.com/in/abhay-gupta-88326b1a6/">
						<LinkedInIcon />
					</a>
					<a href="https://www.facebook.com/Abhay.sg.18/">
						<FacebookIcon />
					</a>
					<a href="https://www.instagram.com/abhay_29_7/">
						<InstagramIcon />
					</a>
					<a href="https://twitter.com/abysssickg">
						<TwitterIcon />
					</a>
				</div>
			</div>
			<div className='vl'></div>
			<div className='footerItems'>
				<p>
					<h2><a href='https://drive.google.com/file/d/1kHcHDc51cNCSeL20qqmiJ4Fy76EOl-34/view?usp=sharing'>My Resume</a></h2>
					<h2>My work</h2>
				</p>
			</div>
		</div>
	)
}

export default Footer;