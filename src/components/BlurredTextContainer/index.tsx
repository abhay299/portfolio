import React from "react";
import "./BlurredTextContainer.css";

interface BlurredTextContainerProps {
	text: string;
	width?: string;
	height?: string;
}

const BlurredTextContainer: React.FC<BlurredTextContainerProps> = ({
	text,
	width = "250px",
	height = "50px",
}) => {
	return (
		<div className="blurred-container" style={{ width, height }}>
			<div className="blurred-bg" />
			<div className="blurred-text">{text}</div>
		</div>
	);
};

export default BlurredTextContainer;
