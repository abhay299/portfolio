import React, { useEffect, useRef, useState } from "react";

import styles from "./index.module.css";

const LazyImage = ({
	src,
	alt,
	className = "",
	placeholder = "",
	rootMargin = "100px",
}) => {
	const [imageSrc, setImageSrc] = useState(placeholder || "");
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const imgRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						// Once in view, start loading the actual image
						if (imageSrc === placeholder) {
							const img = new Image();
							img.src = src;
							img.onload = () => {
								setImageSrc(src);
								setIsLoaded(true);
							};
							img.onerror = () => {
								// Keep placeholder on error
								setImageSrc(placeholder || src);
							};
						}
						// Unobserve once we've started loading
						if (containerRef.current) {
							observer.unobserve(containerRef.current);
						}
					}
				});
			},
			{
				rootMargin,
				threshold: 0.01,
			},
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [src, placeholder, rootMargin, imageSrc]);

	return (
		<div ref={containerRef} className={styles.lazy_image_container}>
			{isInView && (
				<img
					ref={imgRef}
					src={imageSrc}
					alt={alt}
					className={`${styles.lazy_image} ${className} ${
						isLoaded ? styles.loaded : ""
					}`}
					onLoad={() => {
						setIsLoaded(true);
					}}
				/>
			)}
			{isInView && !isLoaded && (
				<div className={styles.placeholder}>
					<div className={styles.skeleton} />
				</div>
			)}
		</div>
	);
};

export default LazyImage;
