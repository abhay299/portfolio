import './projectInfo.css'
import { useParams } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';

const ProjectInfo = () => {

	const projectList = [
		{
			name: "Social Media App",
			img: '/static/media/socialMediaFeed.80e4d92692e878d93b2d.png',
			stack: "ReactJS, NodeJS, ExpressJS, MySQL",
			url: "https://github.com/abhay299/social_media"
		},
		{
			name: "Hotel Booking App",
			img: '/static/media/bookamigoHomePage.ad898dd1f39e8410ab8d.png',
			stack: "ReactJS, NodeJS, ExpressJS, MySQL",
			url: "https://github.com/abhay299/BookAmigo"
		},
		{
			name: "Calculator App",
			img: '/static/media/calculator.24dae1306e4b85ccadea.png',
			stack: "JavaScript, HTML, CSS",
			url: "https://github.com/abhay299/calc"
		},
	];

	const { id } = useParams();
	const project = projectList[id];

	// console.log(projectList);

	return (
		<div className='project'>
			<h1>{project.name}</h1>
			<img src={project.img} alt='' ></img>
			<p>Tech Stack: {project.stack}</p>
			<a href={project.url}>
				<GitHub fontSize='large' style={{ "color": 'cornsilk' }} />
			</a>
		</div>
	)
};

export default ProjectInfo;