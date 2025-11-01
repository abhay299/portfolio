import { Star } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./index.module.css";

import hdImage from "@/assets/Portfolio/me_in_HD_without_bg.png";
import { experienceData, stats } from "@/constants/experienceData";

function About() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 680);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className={styles.about_page}>
			{/* Hero Section */}
			<motion.section
				className={styles.hero_section}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className={styles.hero_content}>
					<motion.div
						className={styles.hero_image_wrapper}
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						<img
							src={hdImage}
							alt="Abhay Gupta"
							className={styles.hero_image}
						/>
						<div className={styles.image_overlay} />
					</motion.div>
					<div className={styles.hero_text}>
						<motion.h1
							className={styles.hero_title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
						>
							A Bit About Myself
						</motion.h1>
						<motion.p
							className={styles.hero_subtitle}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.6 }}
						>
							Passionate Full Stack Developer with a knack for
							creating functional solutions. From robotics to web
							development, I love turning ideas into reality.
						</motion.p>
					</div>
				</div>
			</motion.section>

			{/* Stats Section */}
			<motion.section
				className={styles.stats_section}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={containerVariants}
			>
				<div className={styles.stats_grid}>
					{stats.map((stat, index) => {
						const IconComponent = stat.icon;
						return (
							<motion.div
								key={index}
								className={styles.stat_card}
								variants={itemVariants}
								whileHover={
									!isMobile ? { y: -8, scale: 1.05 } : {}
								}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className={styles.stat_icon_wrapper}>
									<IconComponent
										className={styles.stat_icon}
									/>
								</div>
								<div className={styles.stat_value}>
									{stat.value}
								</div>
								<div className={styles.stat_label}>
									{stat.label}
								</div>
							</motion.div>
						);
					})}
				</div>
			</motion.section>

			{/* Timeline Section */}
			<motion.section
				className={styles.timeline_section}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={containerVariants}
			>
				<motion.h2
					className={styles.section_title}
					variants={itemVariants}
				>
					Journey & Achievements
				</motion.h2>

				<div className={styles.timeline}>
					{experienceData.map((item, index) => {
						const IconComponent = item.icon;
						return (
							<motion.div
								key={index}
								className={`${styles.timeline_item} ${
									item.current ? styles.current_job : ""
								}`}
								variants={itemVariants}
								whileHover={
									!isMobile ? { scale: 1.02, y: -4 } : {}
								}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div
									className={`${styles.timeline_card} ${
										item.current ? styles.current_card : ""
									}`}
									style={{ "--gradient": item.gradient }}
								>
									<div
										className={styles.card_gradient}
										style={{ background: item.gradient }}
									>
										<div className={styles.card_header}>
											<div
												className={styles.icon_wrapper}
											>
												<IconComponent
													className={styles.card_icon}
												/>
											</div>
											<div className={styles.card_meta}>
												<div
													className={styles.card_year}
												>
													{item.year}
												</div>
												<div
													className={
														styles.card_duration
													}
												>
													{item.duration}
												</div>
											</div>
										</div>
										<h3 className={styles.card_title}>
											{item.title}
										</h3>
									</div>
									<div className={styles.card_content}>
										<p className={styles.card_company}>
											{item.company}
										</p>

										<ul className={styles.highlights_list}>
											{item.highlights.map(
												(highlight, idx) => (
													<motion.li
														key={idx}
														className={
															styles.highlight_item
														}
														initial={{
															opacity: 0,
															x: -10,
														}}
														whileInView={{
															opacity: 1,
															x: 0,
														}}
														viewport={{
															once: true,
														}}
														transition={{
															delay:
																index * 0.1 +
																idx * 0.05,
														}}
													>
														<Star
															className={
																styles.highlight_icon
															}
														/>
														<span>{highlight}</span>
													</motion.li>
												),
											)}
										</ul>

										<div className={styles.card_badge}>
											{item.current && (
												<span
													className={
														styles.current_badge
													}
												>
													✨ Current Position
												</span>
											)}
											<span>
												{item.type === "work" &&
													"💼 Work Experience"}
												{item.type === "education" &&
													"🎓 Education"}
												{item.type === "achievement" &&
													"🏆 Achievements"}
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</motion.section>
		</div>
	);
}

export default About;
