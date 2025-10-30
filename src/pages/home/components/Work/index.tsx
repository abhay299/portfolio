import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";

import AuroraBackground from "../../../../components/AuroraBackground";
import TiltedCard from "../../../../components/TiltedCard";
import { projectCards } from "../../../../helpers/projectCards";

import styles from "./index.module.css";

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
	},
};

function Work({ navigate }) {
	return (
		<div className={styles.work}>
			<AuroraBackground
				colorStops={["#000000", "#000000", "#000000"]}
				blend={0.2}
				amplitude={0.8}
				speed={0.6}
			/>
			<h1 className={styles.work_heading}>
				Over the months I've built a few projects...
			</h1>

			<motion.div
				className={styles.work_container}
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{projectCards.map((project, index) => (
					<motion.div
						key={index}
						className={styles.project_card_container}
						variants={itemVariants}
					>
						<TiltedCard
							imageSrc={project.image}
							altText={project.title}
							containerHeight="22rem"
							containerWidth="100%"
							imageHeight="100%"
							imageWidth="100%"
							rotateAmplitude={12}
							scaleOnHover={1.05}
							showMobileWarning={false}
							showTooltip={false}
							displayOverlayContent={true}
							onImageClick={() => navigate(`/projects/${index}`)}
							overlayContent={
								<div className={styles.project_card}>
									<div className={styles.project_card_text}>
										<h2>{project.title}</h2>
										<span>
											<a href={`/projects/${index}`}>
												Find out more…
											</a>
											<a
												href={project.gitUrl}
												aria-label={`${project.title} code on GitHub`}
											>
												<GitHub />
											</a>
										</span>
									</div>
								</div>
							}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default Work;
