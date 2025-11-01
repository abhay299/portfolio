import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { SKILL_CATEGORIES } from "./constant/data";
import styles from "./index.module.css";

function SkillSection() {
	const [isMobile, setIsMobile] = useState(false);
	const [flippedCards, setFlippedCards] = useState(new Set(0));

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 680);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const handleCardFlip = (index = 0) => {
		setFlippedCards((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(index)) {
				newSet.delete(index);
			} else {
				newSet.add(index);
			}
			return newSet;
		});
	};

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

			{/* 3D Cards Container */}
			<div className={styles.cards_container}>
				{SKILL_CATEGORIES.map((category, index) => {
					const IconComponent = category.icon;
					const isFlipped = flippedCards.has(index);

					return (
						<motion.div
							key={category.title}
							className={styles.card_wrapper}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.5,
								delay: index * 0.15,
							}}
							onClick={() => handleCardFlip(index)}
							style={{ cursor: "pointer" }}
						>
							<motion.div
								className={`${styles.card_3d} ${
									isFlipped ? styles.card_flipped : ""
								}`}
								animate={{
									rotateY: isFlipped ? 180 : 0,
								}}
								transition={{
									duration: 0.6,
									ease: "easeInOut",
								}}
								whileHover={
									!isMobile && !isFlipped
										? {
												scale: 1.05,
												zIndex: 10,
											}
										: {}
								}
							>
								{/* Front Face */}
								<div
									className={styles.card_face}
									style={{
										"--card-gradient": category.gradient,
									}}
								>
									<div className={styles.card_front}>
										<div
											className={
												styles.front_icon_wrapper
											}
										>
											<IconComponent
												className={styles.front_icon}
											/>
										</div>
										<h2 className={styles.front_title}>
											{category.title}
										</h2>
										{!isFlipped && (
											<div className={styles.flip_hint}>
												<span>
													{isMobile ? "Tap" : "Click"}
												</span>
												<span>to find out more</span>
											</div>
										)}
									</div>
								</div>

								{/* Back Face */}
								<div
									className={`${styles.card_face} ${styles.card_back}`}
									style={{
										"--card-gradient": category.gradient,
									}}
								>
									<div className={styles.back_content}>
										<h3 className={styles.back_title}>
											{category.title} Skills
										</h3>
										<div className={styles.skills_list}>
											{category.skills.map(
												(skill, skillIndex) => (
													<motion.div
														key={skill.name}
														className={
															styles.skill_item
														}
														initial={{
															opacity: 0,
															x: -20,
														}}
														animate={{
															opacity: isFlipped
																? 1
																: 0,
															x: isFlipped
																? 0
																: -20,
														}}
														transition={{
															duration: 0.3,
															delay:
																skillIndex *
																0.1,
														}}
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
