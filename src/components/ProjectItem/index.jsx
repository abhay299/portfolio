import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LazyImage from "@/components/LazyImage";

import styles from "./index.module.css";

const ProjectItem = ({ name, image, id, stack }) => {
	const navigate = useNavigate();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 680);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const goToProject = () => navigate("/projects/" + id);
	const onKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			goToProject();
		}
	};

	return (
		<motion.div
			className={styles.project_item}
			onClick={goToProject}
			tabIndex={0}
			onKeyDown={onKeyDown}
			role="button"
			aria-label={`Open project ${name}`}
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={!isMobile ? { y: -8, scale: 1.02 } : {}}
		>
			<div className={styles.project_card}>
				<LazyImage
					src={image}
					alt={`${name} cover image`}
					className={styles.project_image}
					rootMargin="150px"
				/>
				<div className={styles.text_overlay}>
					<div className={styles.name_container}>
						<h3 className={styles.project_name}>{name}</h3>
					</div>
					<div className={styles.tech_stack_container}>
						<div className={styles.tech_stack}>
							{stack.split(", ").map((tech, i) => (
								<span key={i} className={styles.tech_tag}>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectItem;
