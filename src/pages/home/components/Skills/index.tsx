import React from "react";

import RollingGallery from "../../../../components/RollingGallery";

import styles from "./index.module.css";

function SkillSection(): React.ReactElement {
	return (
		<section className={styles.skill_section}>
			<h1 className={styles.skill_head}>Skills</h1>
			<div style={{}}>
				<RollingGallery autoplay={true} pauseOnHover={true} />
			</div>
			{/* <div className={styles.skill_container}>
				<SkillCard
					title="Frontend"
					skills={frontend}
					type="frontend"
					icon="/icons/devtools-svgrepo.svg"
				/>

				<SkillCard
					title="Backend"
					skills={backend}
					type="backend"
					icon="/icons/database-svgrepo.svg"
				/>

				<SkillCard
					title="Languages"
					skills={languages}
					type="language"
					icon="/icons/coding-program-svgrepo.svg"
				/>
			</div> */}
		</section>
	);
}

export default SkillSection;
