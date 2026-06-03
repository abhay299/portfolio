import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./index.module.css";

import sayingHelloImage from "@/assets/Portfolio/generated-image-new.webp";
import { trackHeroContactClick } from "@/lib/gtm";

function Hero() {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = sayingHelloImage;
		img.onload = () => {
			setImageLoaded(true);
		};
	}, []);
	const scrollToContact = () => {
		trackHeroContactClick();
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

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
						<p className={styles.subtitle_text}>
							Eager to contribute and grow professionally.
						</p>
						<button
							onClick={scrollToContact}
							className={styles.contact_button}
							aria-label="Contact Me"
						>
							Contact Me
						</button>
					</div>
				</div>

				{/* Image */}
				<div className={styles.hero_image_wrapper}>
					{!imageLoaded ? (
						<Skeleton
							variant="circular"
							animation="wave"
							sx={{
								width: "100%",
								maxWidth: "550px",
								aspectRatio: "1/1",
								bgcolor: "rgba(102, 126, 234, 0.1)",
								margin: "auto",
							}}
						/>
					) : (
						<motion.img
							src={sayingHelloImage}
							alt="Abhay Gupta - Developer"
							className={styles.hero_image}
							initial={{ opacity: 0, filter: "blur(10px)" }}
							animate={{ opacity: 1, filter: "blur(0px)" }}
							transition={{ duration: 0.6, ease: "easeOut" }}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Hero;
