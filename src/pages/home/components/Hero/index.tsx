import React from "react";

import Particles from "../../../../components/Particles";

import styles from "./index.module.css";

function Hero() {
	return (
		<div
			style={{
				width: "100%",
				height: "600px",
				position: "relative",
				background: "black",
			}}
		>
			<Particles
				particleColors={["#ffffff", "#ffffff"]}
				particleCount={200}
				particleSpread={10}
				speed={0.2}
				particleBaseSize={100}
				moveParticlesOnHover={true}
				alphaParticles={false}
				disableRotation={false}
			/>
			{/* Overlayed Info Text */}
			<div
				className={styles.info_container}
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 1,
					pointerEvents: "none", // Optional, lets you still interact with particles
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
