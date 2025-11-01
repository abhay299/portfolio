import { ArrowBack, ArrowForward, GitHub } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./index.module.css";

import { projectList } from "@/helpers/projectList";
import convertToBulletPoints from "@/utils/convertToBulletPoints";

const ProjectInfo = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const project = projectList[id];

	const handleNext = () => {
		navigate("/projects/" + (parseInt(id) + 1).toString());
	};

	const handlePrev = () => {
		navigate("/projects/" + (parseInt(id) - 1).toString());
	};

	// Convert description to bullet points
	const bulletPoints = convertToBulletPoints(project.desc);

	// Render carousel based on image count
	const renderCarousel = () => {
		if (project.imgLen === 2) {
			return (
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
			);
		}
		if (project.imgLen === 4) {
			return (
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
			);
		}
		// Default to 6 images
		return (
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
		);
	};

	return (
		<section className={`${styles.project_section} section`}>
			<div className={styles.project_container}>
				<h1 className={styles.project_title}>{project.name}</h1>
				<div className={styles.stack_container}>
					<div className={styles.stack_label}>
						<span>Stack:</span>
						<div className={styles.tech_tags}>
							{project.stack.split(", ").map((tech, i) => (
								<span key={i} className={styles.tech_tag}>
									{tech}
								</span>
							))}
						</div>
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
					{renderCarousel()}
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
};

export default ProjectInfo;
