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
			<img src={project.image} alt='' ></img>
			<p>Stack: {project.desc}</p>
			<a href={project.gitUrl}>
				<GitHub fontSize='large' />
			</a>
		</div>
	)
};

export default ProjectInfo;