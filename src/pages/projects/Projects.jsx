import React from 'react';
import "./projects.css";
import '../home/home.css'
import ProjectItem from '../../components/projectItem/ProjectItem.jsx';
import { projectList } from '../../helpers/projectList.js';

const Projects = () => {

	// console.log(projectList[0].image);
	return (
		<div className='projects'>
			<h1>Some of my recent work.</h1>
			<p>Disclaimer: The projects listed below have been done by following various
				tutorials on the web but I have customized and added
				a few features of my own. Feel free to leave a comment on the same.</p>
			<br />
			<br />
			{
				projectList.map((project, index) => {
					return <ProjectItem id={index} name={project.name} image={project.image} stack={project.stack} />
				})
			}
		</div>
	)
};

export default Projects;
