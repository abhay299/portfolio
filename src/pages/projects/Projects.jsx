import ProjectItem from "../../components/projectItem/ProjectItem.jsx";
import { projectList } from "../../helpers/projectList.js";
import "../Home/home.css";
import "./projects.css";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <h1>Some of my recent work.</h1>
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
