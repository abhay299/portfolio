import { GitHub } from "@mui/icons-material";
import React from "react";

import { projectCards } from "../../../../helpers/projectCards";

function Work({ navigate }) {
	return (
		<div className="Work">
			<h1>Over the months I've built a few projects...</h1>
			<div className="WorkContainer">
				{projectCards.map((project, index) => (
					<div className="ProjectCardContainer" key={index}>
						<img
							src={project.image}
							alt="Project-Logo"
							onClick={() => {
								navigate(`/projects/${index}`);
							}}
						/>
						<div>
							<h2>{project.title}</h2>
							<p>
								{project.desc}
								<br />
							</p>
							<span>
								<a href={`/projects/${index}`}>
									Find out more...
								</a>
								<a href={project.gitUrl}>
									<GitHub />
								</a>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Work;
