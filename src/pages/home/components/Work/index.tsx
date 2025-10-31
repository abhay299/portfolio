import {
	Business,
	Code,
	GitHub,
	Hotel,
	Launch,
	Person,
	ShoppingCart,
	Storage,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { projectCards } from "../../../../helpers/projectCards";

import { gradientColours } from "./constants/gradientColours";
import styles from "./index.module.css";

const projectIcons = {
	Socials: Person,
	MyFits: ShoppingCart,
	BookAmigo: Hotel,
	Portfolio: Code,
	"CRM App": Business,
};

function Work({ navigate }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 680);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<div className={styles.work}>
			<h1 className={styles.work_heading}>Featured Projects</h1>

			<div className={styles.work_container}>
				{projectCards.map((project, index) => {
					const IconComponent = projectIcons[project.name] || Storage;
					const gradient =
						gradientColours[index % gradientColours.length];

					return (
						<motion.div
							key={index}
							className={styles.project_card_container}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
						>
							<motion.div
								className={styles.project_card}
								whileHover={
									!isMobile ? { y: -8, scale: 1.02 } : {}
								}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div
									className={styles.card_gradient}
									style={{ background: gradient }}
								/>
								<div className={styles.card_content}>
									<div className={styles.card_header}>
										<div
											className={styles.icon_wrapper}
											style={{
												background: gradient,
											}}
										>
											<IconComponent
												className={styles.project_icon}
											/>
										</div>
										<div className={styles.project_name}>
											{project.name}
										</div>
									</div>

									<h2 className={styles.project_title}>
										{project.title}
									</h2>

									<p className={styles.project_desc}>
										{project.desc}
									</p>

									<div className={styles.tech_stack}>
										{project.stack
											.split(", ")
											.map((tech, i) => (
												<span
													key={i}
													className={styles.tech_tag}
												>
													{tech}
												</span>
											))}
									</div>

									<div className={styles.card_actions}>
										<motion.button
											className={styles.view_button}
											onClick={() =>
												navigate(`/projects/${index}`)
											}
											whileHover={
												!isMobile ? { scale: 1.05 } : {}
											}
											whileTap={{ scale: 0.95 }}
										>
											<Launch
												className={styles.button_icon}
											/>
											View Project
										</motion.button>
										{project.gitUrl && (
											<motion.a
												href={project.gitUrl}
												target="_blank"
												rel="noopener noreferrer"
												className={styles.github_button}
												whileHover={
													!isMobile
														? {
																scale: 1.1,
																rotate: 5,
														  }
														: {}
												}
												whileTap={{ scale: 0.9 }}
												aria-label="View on GitHub"
											>
												<GitHub />
											</motion.a>
										)}
									</div>
								</div>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default Work;
