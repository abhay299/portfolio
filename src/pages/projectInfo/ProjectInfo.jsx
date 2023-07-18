import './projectInfo.css'
import { projectList } from '../../helpers/projectList';
import { useNavigate, useParams } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const ProjectInfo = () => {

	const navigate = useNavigate();

	const { id } = useParams();
	const project = projectList[id];

	const handleNext = () => {
		navigate('/projects/' + (parseInt(id) + 1).toString());
	};

	const handlePrev = () => {
		navigate('/projects/' + (parseInt(id) - 1).toString());
	};

	return (
		<section>
			<div className='Project'>
				<h1>{project.name}</h1>
				<p>Stack: {project.stack}</p>
				<div className='TextContainer'>
					<p>{project.desc}</p>
				</div>
				<div className='CarouselContainer'>

					{
						(project.imgLen === 2) ?
							<Carousel data-bs-theme="dark">
								<Carousel.Item>
									<img
										className='d-block w-100'
										src={project?.image}
										alt='First slide'
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className='d-block w-100'
										src={project?.image1}
										alt='Second slide'
									/>
								</Carousel.Item>
							</Carousel>
							: (project.imgLen === 4) ?
								<Carousel data-bs-theme="dark">
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image}
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image1}
											alt='Second slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image2}
											alt='Third slide'
										/>

									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image3}
											alt='Fourth slide'
										/>
									</Carousel.Item>
								</Carousel>
								:
								<Carousel data-bs-theme="dark">
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image}
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image1}
											alt='Second slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image2}
											alt='Third slide'
										/>

									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image3}
											alt='Fourth slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image4}
											alt='Fifth slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={project?.image5}
											alt='Sixth slide'
										/>
									</Carousel.Item>
								</Carousel>
					}
				</div>
				<div className='ProjectFooter'>
					<button className='PrevBtn' disabled={parseInt(id) === 0 ? true : false} onClick={handlePrev}>prev</button>
					<a href={project.gitUrl}>
						<GitHub fontSize='large' />
					</a>
					<button className='NextBtn' disabled={parseInt(id) === projectList.length - 1 ? true : false} onClick={handleNext} >next</button>
				</div>
			</div>
		</section>
	)
};

export default ProjectInfo;