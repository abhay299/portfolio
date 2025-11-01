import React from "react";

import ProjectItem from "../../components/ProjectItem";
import { projectList } from "../../helpers/projectList";

import styles from "./index.module.css";

const Projects = () => {
	return (
		<section className={`${styles.projects_section} section`}>
			<div className={styles.projects_container}>
				<h1 className={styles.projects_heading}>
					Some of my recent work.
				</h1>
				<div className={styles.disclaimer_container}>
					<p className={styles.disclaimer_text}>
						<strong>Disclaimer:</strong> Few of the projects listed
						below have been done by following various tutorials on
						the web but I have customized and added a few features
						of my own. Feel free to leave a comment on the same.
					</p>
				</div>
				<div className={styles.projects_scroll_container}>
					<div className={styles.projects_scroll_content}>
						{projectList.map((project, index) => {
							return (
								<div
									key={index}
									className={styles.project_item_wrapper}
								>
									<ProjectItem
										id={index}
										name={project.name}
										image={project.image}
										stack={project.stack}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
