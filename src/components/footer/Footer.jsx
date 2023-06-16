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
				<a href="https://linkedin.com">
					<LinkedInIcon />
				</a>
				<a href="https://facebook.com">
					<FacebookIcon />
				</a>
				<a href="https://instagram.com">
					<InstagramIcon />
				</a>
				<a href="https://twitter.com">
					<TwitterIcon />
				</a>
			</div>
		</div>
	)
}

export default Footer;