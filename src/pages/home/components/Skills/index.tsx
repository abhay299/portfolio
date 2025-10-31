import { Cloud, Code, Palette } from "@mui/icons-material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { backend, frontend, languages } from "./constant/data";
import styles from "./index.module.css";

const skillCategories = [
	{
		title: "Frontend",
		skills: frontend,
		icon: Palette,
		gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		color: "#667eea",
	},
	{
		title: "Backend",
		skills: backend,
		icon: Cloud,
		gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		color: "#f5576c",
	},
	{
		title: "Languages",
		skills: languages,
		icon: Code,
		gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
		color: "#4facfe",
	},
];

function SkillSection(): React.ReactElement {
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
		<section className={styles.skill_section}>
			<motion.h1
				className={styles.skill_head}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				Skills & Technologies
			</motion.h1>

			<div className={styles.skill_cards_container}>
				{skillCategories.map((category, index) => {
					const IconComponent = category.icon;
					return (
						<motion.div
							key={category.title}
							className={styles.skill_card}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.5,
								delay: index * 0.15,
							}}
						>
							<motion.div
								className={styles.card_inner}
								whileHover={
									!isMobile ? { y: -8, scale: 1.02 } : {}
								}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div
									className={styles.card_gradient}
									style={{ background: category.gradient }}
								/>
								<div className={styles.card_content}>
									<div className={styles.card_header}>
										<div
											className={styles.icon_wrapper}
											style={{
												background: category.gradient,
											}}
										>
											<IconComponent
												className={styles.category_icon}
											/>
										</div>
										<h2 className={styles.card_title}>
											{category.title}
										</h2>
									</div>

									<div className={styles.skills_grid}>
										{category.skills.map(
											(skill, skillIndex) => (
												<motion.div
													key={skill.name}
													className={
														styles.skill_item
													}
													initial={{
														opacity: 0,
														scale: 0.8,
													}}
													whileInView={{
														opacity: 1,
														scale: 1,
													}}
													viewport={{ once: true }}
													transition={{
														duration: 0.3,
														delay:
															index * 0.15 +
															skillIndex * 0.1,
													}}
													whileHover={
														!isMobile
															? {
																	scale: 1.1,
																	y: -4,
															  }
															: {}
													}
													whileTap={{ scale: 0.95 }}
												>
													<div
														className={
															styles.skill_icon_container
														}
													>
														<img
															src={skill.icon}
															alt={skill.name}
															className={
																styles.skill_icon
															}
														/>
													</div>
													<span
														className={
															styles.skill_name
														}
													>
														{skill.name}
													</span>
												</motion.div>
											),
										)}
									</div>
								</div>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}

export default SkillSection;
