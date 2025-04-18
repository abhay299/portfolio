import { GitHub } from "@mui/icons-material";
import React from "react";

import AuroraBackground from "../../../../components/AuroraBackground";
import TiltedCard from "../../../../components/TiltedCard";
import { projectCards } from "../../../../helpers/projectCards";

import styles from "./index.module.css";

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

			<div className={styles.work_container}>
				{projectCards.map((project, index) => (
					<div key={index} className={styles.project_card_container}>
						<TiltedCard
							imageSrc={project.image}
							altText={project.title}
							containerHeight="36rem"
							containerWidth="100%"
							imageHeight="100%"
							imageWidth="100%"
							rotateAmplitude={12}
							scaleOnHover={1.1}
							showMobileWarning={false}
							showTooltip={false}
							displayOverlayContent={true}
							onImageClick={() => navigate(`/projects/${index}`)}
							overlayContent={
								<div className={styles.project_card}>
									<div className={styles.project_card_text}>
										<h2>{project.title}</h2>
										{/* <p>{project.desc}</p> */}
										<span>
											<a href={`/projects/${index}`}>
												Find out more...
											</a>
											<a href={project.gitUrl}>
												<GitHub />
											</a>
										</span>
									</div>
								</div>
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Work;
