import { EmailSharp } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="FooterItems">
				<h2>Say Hello</h2>
				<div className="FooterSvg">
					<a href="https://www.linkedin.com/in/abhaygupta299/">
						<LinkedInIcon />
					</a>
					<a href="mailto:abhaysg2000@gmail.com">
						<EmailSharp />
					</a>
					<a href="https://www.instagram.com/abhay_29_7/">
						<InstagramIcon />
					</a>
					<a href="https://twitter.com/abysssickg">
						<TwitterIcon />
					</a>
				</div>
			</div>
			<div className="Vl" />
			<div className="FooterItems">
				<h2>
					<a href="https://drive.google.com/file/d/1-F2jTUlR582Le6xi6mf4qAVoXoEogxvL/view?usp=sharing">
						Resume
					</a>
				</h2>
				<h2>
					<a href="/projects">My work</a>
				</h2>
				<h2>
					<a href="/aboutMe">About Me</a>
				</h2>
			</div>
		</div>
	);
};

export default Footer;
