import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ name, image, id, desc }) => {
	const navigate = useNavigate();
	// console.log((image))
	return (
		<div className='projectItem' onClick={() => {
			navigate("/projects/" + id);
		}}>
			{/* <div style={{ backgroundImage: `url(${image})` }} className='bgImage' /> */}
			<img src={image} alt='' />
			<h1>{name}</h1>
			<p>Stack: {desc}</p>
		</div>
	);
}

export default ProjectItem;