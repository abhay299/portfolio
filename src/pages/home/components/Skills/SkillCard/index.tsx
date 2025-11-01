import React from "react";

import Orb from "../../../../../components/Orb";

import styles from "./index.module.css";

interface Skill {
	name: string;
	icon: string;
}

interface SkillCardProps {
	title: string;
	skills: Skill[];
	type: "frontend" | "backend" | "language";
	icon: string;
}

function SkillCard({
	title,
	skills,
	type,
	icon,
}: SkillCardProps): React.ReactElement {
	return (
		<div className={styles.skill_card}>
			<div className={styles.skill_icon}>
				<img src={icon} alt={`${title} icon`} />
				<h3>{title}</h3>
			</div>

			<div className={`${styles.skill_content} ${styles[type]}`}>
				<Orb />
				<div className={styles.skill_list}>
					{skills.map((skill, index) => (
						<span
							key={`${skill.name}-${index}`}
							className={styles.skill_item}
						>
							<img
								src={skill.icon}
								alt={skill.name}
								className={styles.skill_icon_small}
							/>
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillCard;
