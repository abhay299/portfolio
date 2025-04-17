import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ name, image, id, stack }) => {
	const navigate = useNavigate();

	return (
		<div
			className="projectItem"
			onClick={() => {
				navigate("/projects/" + id);
			}}
		>
			<img src={image} alt="" />
			<h1>{name}</h1>
			<p>Stack: {stack}</p>
		</div>
	);
};

export default ProjectItem;
