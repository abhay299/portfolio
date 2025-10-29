import { EmailSharp } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import "./footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="Footer" role="contentinfo">
			<div className="footer-bg" aria-hidden="true" />
			<div className="footer-container container">
				<div className="footer-grid">
					<div className="footer-cta">
						<h2>Let’s build something together</h2>
						<p>
							Available for freelance/contract roles. Open to
							interesting product ideas and collaborations.
						</p>
					</div>

					<nav className="footer-links" aria-label="Footer links">
						<h3 className="footer-title">Explore</h3>
						<ul>
							<li>
								<a href="/projects">Projects</a>
							</li>
							<li>
								<a href="/aboutMe">About</a>
							</li>
							<li>
								<a
									href="https://drive.google.com/file/d/1-F2jTUlR582Le6xi6mf4qAVoXoEogxvL/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>

					<div className="footer-social" aria-label="Social media">
						<h3 className="footer-title">Connect</h3>
						<div className="FooterSvg">
							<a
								href="https://www.linkedin.com/in/abhaygupta299/"
								aria-label="LinkedIn"
							>
								<LinkedInIcon />
							</a>
							<a
								href="mailto:abhaysg2000@gmail.com"
								aria-label="Email"
							>
								<EmailSharp />
							</a>
							<a
								href="https://www.instagram.com/abhay_29_7/"
								aria-label="Instagram"
							>
								<InstagramIcon />
							</a>
							<a
								href="https://twitter.com/abysssickg"
								aria-label="Twitter/X"
							>
								<TwitterIcon />
							</a>
						</div>
					</div>
				</div>

				<div className="footer-meta">
					<p>© {year} Abhay Gupta. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
