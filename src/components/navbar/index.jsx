import React, { useState } from "react";
import ModalImage from "react-modal-image";

import me from "../../assets/Portfolio/me.JPG";
import smallMe from "../../assets/Portfolio/smallMe.png";

import styles from "./index.module.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className={styles.navbar}>
			<div className={styles.nav_container}>
				<ModalImage
					hideDownload="true"
					hideZoom="true"
					small={smallMe}
					large={me}
					alt="That's me :)"
				/>

				<h1>
					<a href="/">Abhay Gupta</a>
				</h1>
			</div>

			<button
				className={`${styles.menu_btn} ${menuOpen ? styles.open : ""}`}
				onClick={() => setMenuOpen((prev) => !prev)}
				aria-label="Toggle menu"
			>
				<span />
			</button>

			<div className={`${styles.wrapper} ${menuOpen ? styles.show : ""}`}>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/projects">Work</a>
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
					<li>
						<a href="mailto:abhaysg2000@gmail.com">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
