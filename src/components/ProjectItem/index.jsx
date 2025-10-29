import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ name, image, id, stack }) => {
	const navigate = useNavigate();

	const goToProject = () => navigate("/projects/" + id);
	const onKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			goToProject();
		}
	};

	return (
		<div
			className="projectItem card"
			onClick={goToProject}
			tabIndex={0}
			onKeyDown={onKeyDown}
			role="link"
			aria-label={`Open project ${name}`}
		>
			<img src={image} alt={`${name} cover image`} loading="lazy" />
			<h3>{name}</h3>
			<p>Stack: {stack}</p>
		</div>
	);
};

export default ProjectItem;
