import React from "react";

import styles from "./index.module.css";

function Hero() {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				position: "relative",
				background: "transparent",
				marginLeft: "calc(-50vw + 50%)",
				marginRight: "calc(-50vw + 50%)",
			}}
		>
			{/* Overlayed Info Text */}
			<div
				className={styles.info_container}
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 1,
					pointerEvents: "none",
				}}
			>
				<div className={styles.info_text}>
					<p>Hey, I'm</p>
					<h1>Abhay Gupta</h1>
					<h2>Full Stack Web Developer.</h2>
					<p>
						Passionate about creating functional websites | Eager to
						contribute and grow professionally.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
