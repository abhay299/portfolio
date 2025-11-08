import { EmailSharp } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="FooterContainer">
				<div className="FooterSection">
					<h3 className="FooterTitle">Let's Connect</h3>
					<p className="FooterSubtitle">
						Reach out and let's build something amazing together
					</p>
					<div className="FooterSocialLinks">
						<a
							href="https://www.linkedin.com/in/abhaygupta299/"
							target="_blank"
							rel="noopener noreferrer"
							className="SocialLink"
							aria-label="LinkedIn"
						>
							<LinkedInIcon />
						</a>
						<a
							href="mailto:abhaysgpt@gmail.com"
							className="SocialLink"
							aria-label="Email"
						>
							<EmailSharp />
						</a>
						<a
							href="https://www.instagram.com/abhay_29_7/"
							target="_blank"
							rel="noopener noreferrer"
							className="SocialLink"
							aria-label="Instagram"
						>
							<InstagramIcon />
						</a>
						<a
							href="https://twitter.com/abysssickg"
							target="_blank"
							rel="noopener noreferrer"
							className="SocialLink"
							aria-label="Twitter"
						>
							<TwitterIcon />
						</a>
					</div>
				</div>

				<div className="FooterDivider" />

				<div className="FooterSection">
					<h3 className="FooterTitle">Quick Links</h3>
					<nav className="FooterNav">
						<a
							href={`https://drive.google.com/${import.meta.env.VITE_RESUME_LINK}`}
							target="_blank"
							rel="noopener noreferrer"
							className="FooterNavLink"
						>
							Resume
						</a>
						<a href="/projects" className="FooterNavLink">
							My Work
						</a>
						<a href="/aboutMe" className="FooterNavLink">
							About Me
						</a>
					</nav>
				</div>
			</div>

			<div className="FooterBottom">
				<p className="FooterCopyright">
					© {currentYear} Abhay Gupta. All rights reserved.
				</p>
				<p className="FooterTagline">
					Built with passion and precision
				</p>
			</div>
		</footer>
	);
};

export default Footer;
