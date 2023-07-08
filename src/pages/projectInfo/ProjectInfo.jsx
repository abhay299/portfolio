import './projectInfo.css'
import { projectList } from '../../helpers/projectList';
import { useParams } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';

const ProjectInfo = () => {

	const { id } = useParams();
	const project = projectList[id];

	return (
		<div className='project'>
			<h1>{project.name}</h1>
			<div className='projectContainer'>
				<p>
				</p>
			</div>
			<img src={project.image} alt='' ></img>
			<img src={project?.image1} alt='' ></img>
			<img src={project?.image2} alt='' ></img>
			<img src={project?.image3} alt='' ></img>
			<img src={project?.image4} alt='' ></img>
			<img src={project?.image5} alt='' ></img>
			<p>Stack: {project.desc}</p>
			<a href={project.gitUrl}>
				<GitHub fontSize='large' />
			</a>
		</div>
	)
};

export default ProjectInfo;