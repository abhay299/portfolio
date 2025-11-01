import "./projectInfo.css";

import { ArrowBack, ArrowForward, GitHub } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate, useParams } from "react-router-dom";

import LazyCarousel from "../../components/LazyCarousel";
import { projectList } from "../../helpers/projectList";
import convertToBulletPoints from "../../utils/convertToBulletPoints";

import styles from "./index.module.css";

const ProjectInfo = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const project = projectList[id];
	const isFirstProject = parseInt(id) === 0;

	const handleNext = () => {
		navigate("/projects/" + (parseInt(id) + 1).toString());
	};

	const handlePrev = () => {
		navigate("/projects/" + (parseInt(id) - 1).toString());
	};

	// Get all images for the project based on imgLen
	const getProjectImages = () => {
		const images = [];
		if (project?.image) images.push(project.image);
		if (project?.image1) images.push(project.image1);
		if (project?.image2) images.push(project.image2);
		if (project?.image3) images.push(project.image3);
		if (project?.image4) images.push(project.image4);
		if (project?.image5) images.push(project.image5);
		// Return only the images that exist, up to imgLen
		return images
			.filter(Boolean)
			.slice(0, project?.imgLen || images.length);
	};

	// Render revamped version for first project
	if (isFirstProject) {
		const bulletPoints = convertToBulletPoints(project.desc);
		const images = getProjectImages();

		return (
			<section className={`${styles.project_section} section`}>
				<div className={styles.project_container}>
					<h1 className={styles.project_title}>{project.name}</h1>
					<div className={styles.stack_container}>
						<p className={styles.stack_label}>Stack:</p>
						<div className={styles.tech_tags}>
							{project.stack.split(", ").map((tech, i) => (
								<span key={i} className={styles.tech_tag}>
									{tech}
								</span>
							))}
						</div>
					</div>

					<div className={styles.description_container}>
						<h2 className={styles.description_title}>
							Project Details
						</h2>
						<ul className={styles.bullet_list}>
							{bulletPoints.map((point, index) => (
								<li key={index} className={styles.bullet_item}>
									{point}
								</li>
							))}
						</ul>
					</div>

					<div className={styles.carousel_container}>
						<LazyCarousel images={images} />
					</div>

					<div className={styles.project_footer}>
						<button
							className={styles.nav_btn}
							disabled={parseInt(id) === 0}
							onClick={handlePrev}
							aria-label="Previous project"
						>
							<ArrowBack className={styles.btn_icon} />
							<span>Previous</span>
						</button>

						<a
							href={project.gitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.github_link}
							aria-label="View on GitHub"
						>
							<GitHub className={styles.github_icon} />
							<span>View Code</span>
						</a>

						<button
							className={styles.nav_btn}
							disabled={parseInt(id) === projectList.length - 1}
							onClick={handleNext}
							aria-label="Next project"
						>
							<span>Next</span>
							<ArrowForward className={styles.btn_icon} />
						</button>
					</div>
				</div>
			</section>
		);
	}

	// Original version for other projects
	return (
		<section className="section">
			<div className="Project container">
				<h1>{project.name}</h1>
				<p>Stack: {project.stack}</p>
				<div className="TextContainer">
					<p>{project.desc}</p>
				</div>
				<div className="CarouselContainer">
					{project.imgLen === 2 ? (
						<Carousel data-bs-theme="dark">
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image}
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image1}
									alt="Second slide"
								/>
							</Carousel.Item>
						</Carousel>
					) : project.imgLen === 4 ? (
						<Carousel data-bs-theme="dark">
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image}
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image1}
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image2}
									alt="Third slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image3}
									alt="Fourth slide"
								/>
							</Carousel.Item>
						</Carousel>
					) : (
						<Carousel data-bs-theme="dark">
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image}
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image1}
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image2}
									alt="Third slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image3}
									alt="Fourth slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image4}
									alt="Fifth slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={project?.image5}
									alt="Sixth slide"
								/>
							</Carousel.Item>
						</Carousel>
					)}
				</div>
				<div className="ProjectFooter">
					<button
						className="PrevBtn"
						disabled={parseInt(id) === 0 ? true : false}
						onClick={handlePrev}
					>
						prev
					</button>
					<a href={project.gitUrl}>
						<GitHub fontSize="large" />
					</a>
					<button
						className="NextBtn"
						disabled={
							parseInt(id) === projectList.length - 1
								? true
								: false
						}
						onClick={handleNext}
					>
						next
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProjectInfo;
