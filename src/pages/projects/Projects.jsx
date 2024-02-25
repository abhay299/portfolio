import "./projects.css";
import "../home/home.css";
import ProjectItem from "../../components/projectItem/ProjectItem.jsx";
import { projectList } from "../../helpers/projectList.js";

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
