import React from "react";

import sayingHelloImage from "../../../../assets/Portfolio/generated-image-new.png";

import styles from "./index.module.css";

function Hero() {
	return (
		<div className={styles.hero_container}>
			<div className={styles.hero_content}>
				{/* Text Content */}
				<div className={styles.info_container}>
					<div className={styles.info_text}>
						<p>Hey, I'm</p>
						<h1>Abhay Gupta</h1>
						<h2>Full Stack Web Developer.</h2>
						<p>Passionate about creating functional websites</p>
						<p>Eager to contribute and grow professionally.</p>
					</div>
				</div>

				{/* Image */}
				<div className={styles.hero_image_wrapper}>
					<img
						src={sayingHelloImage}
						alt="Abhay Gupta - Developer"
						className={styles.hero_image}
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
