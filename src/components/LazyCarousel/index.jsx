import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import styles from "./index.module.css";

import LazyImage from "@/components/LazyImage";

const LazyCarousel = ({ images, autoPlayInterval = 2000 }) => {
	const [index, setIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef(null);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	// Auto-play functionality
	useEffect(() => {
		if (!images || images.length <= 1 || isPaused) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			return;
		}

		intervalRef.current = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, autoPlayInterval);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [images, isPaused, autoPlayInterval]);

	// Preload adjacent images for smoother transitions
	useEffect(() => {
		if (images && images.length > 0) {
			const nextIndex = (index + 1) % images.length;
			const prevIndex = (index - 1 + images.length) % images.length;

			[images[nextIndex], images[prevIndex]].forEach((imgSrc) => {
				if (imgSrc) {
					const img = new Image();
					img.src = imgSrc;
				}
			});
		}
	}, [index, images]);

	const handleMouseEnter = () => {
		setIsPaused(true);
	};

	const handleMouseLeave = () => {
		setIsPaused(false);
	};

	const handleInteraction = () => {
		setIsPaused(true);
		// Resume after 3 seconds
		setTimeout(() => {
			setIsPaused(false);
		}, 2000);
	};

	if (!images || images.length === 0) {
		return null;
	}

	return (
		<div
			className={styles.carousel_wrapper}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				className={styles.custom_carousel}
				interval={null}
				controls={false}
				indicators={false}
			>
				{images.map((image, idx) => (
					<Carousel.Item key={idx} className={styles.carousel_item}>
						<div className={styles.image_container}>
							<LazyImage
								src={image}
								alt={`Project image ${idx + 1}`}
								className={styles.carousel_image}
								rootMargin="100px"
							/>
						</div>
					</Carousel.Item>
				))}
			</Carousel>
			<div className={styles.carousel_controls}>
				<button
					className={styles.nav_button}
					onClick={() => {
						handleInteraction();
						handleSelect(
							(index - 1 + images.length) % images.length,
						);
					}}
					aria-label="Previous image"
				>
					<ArrowBackIos className={styles.nav_icon} />
				</button>
				<div className={styles.dots}>
					{images.map((_, idx) => (
						<button
							key={idx}
							className={`${styles.dot} ${
								index === idx ? styles.active : ""
							}`}
							onClick={() => {
								handleInteraction();
								handleSelect(idx);
							}}
							aria-label={`Go to image ${idx + 1}`}
						/>
					))}
				</div>
				<button
					className={styles.nav_button}
					onClick={() => {
						handleInteraction();
						handleSelect((index + 1) % images.length);
					}}
					aria-label="Next image"
				>
					<ArrowForwardIos className={styles.nav_icon} />
				</button>
			</div>
		</div>
	);
};

export default LazyCarousel;
