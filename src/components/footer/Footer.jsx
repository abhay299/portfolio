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
	)
}

export default Footer;