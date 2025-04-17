import React from "react";

import styles from "./index.module.css";

function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.info_container}>
				<div className={styles.info_text}>
					<p>Hey, I'm</p>
					<h1>Abhay Gupta</h1>
					<h2>Full Stack Web Developer. </h2>
					<p>
						Passionate about creating functional websites | Eager to
						contribute and grow professionally.
					</p>
				</div>
			</div>
			<div className={styles.glowing}>
				<span style={{ "--i": "1" }} />
				<span style={{ "--i": "2" }} />
				<span style={{ "--i": "3" }} />
				<span style={{ "--i": "4" }} />
			</div>
			<div className={styles.glowing}>
				<span style={{ "--i": "1" }} />
				<span style={{ "--i": "2" }} />
				<span style={{ "--i": "3" }} />
				<span style={{ "--i": "4" }} />
			</div>
			<div className={styles.glowing}>
				<span style={{ "--i": "1" }} />
				<span style={{ "--i": "2" }} />
				<span style={{ "--i": "3" }} />
			</div>
			<div className={styles.glowing}>
				<span style={{ "--i": "1" }} />
				<span style={{ "--i": "2" }} />
				<span style={{ "--i": "3" }} />
			</div>
		</div>
	);
}

export default Hero;
