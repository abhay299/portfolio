import './projectInfo.css'
import { projectList } from '../../helpers/projectList';
import { useNavigate, useParams } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';

const ProjectInfo = () => {

	const navigate = useNavigate();

	const { id } = useParams();
	const project = projectList[id];

	const handleNext = () => {
		navigate('/projects/' + (parseInt(id) + 1).toString());
	}

	const handlePrev = () => {
		navigate('/projects/' + (parseInt(id) - 1).toString());
	}

	return (
		<div className='project'>
			<h1>{project.name}</h1>
			<p>Stack: {project.stack}</p>
			<div className='projectContainer'>
				<p>{project.desc}</p>
			</div>
			<img src={project.image} alt='' ></img>
			<img src={project?.image1} alt='' ></img>
			<img src={project?.image2} alt='' ></img>
			<img src={project?.image3} alt='' ></img>
			<img src={project?.image4} alt='' ></img>
			<img src={project?.image5} alt='' ></img>
			<div className='projectFooter'>
				<button className='prevBtn' disabled={parseInt(id) === 0 ? true : false} onClick={handlePrev}>prev</button>
				<a href={project.gitUrl}>
					<GitHub fontSize='large' />
				</a>
				<button className='nextBtn' disabled={parseInt(id) === projectList.length - 1 ? true : false} onClick={handleNext} >next</button>
			</div>
		</div>
	)
};

export default ProjectInfo;