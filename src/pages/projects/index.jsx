import React from "react";

import ProjectItem from "../../components/ProjectItem";
import { projectList } from "../../helpers/projectList";
import "../home/home.css";
import "./projects.css";

const Projects = () => {
	return (
		<section>
			<div className="projects">
				<h1>Some of my recent work.</h1>
				<p>
					Disclaimer: Few of the projects listed below have been done
					by following various tutorials on the web but I have
					customized and added a few features of my own. Feel free to
					leave a comment on the same.
				</p>
				{projectList.map((project, index) => {
					return (
						<ProjectItem
							id={index}
							name={project.name}
							image={project.image}
							stack={project.stack}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
