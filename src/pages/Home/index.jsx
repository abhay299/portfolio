import "./home.css";

import { useEffect } from "react";

import Particles from "@/components/Particles";

import Hero from "./components/Hero/index.tsx";
import Mail from "./components/Mail/index.tsx";
import Skills from "./components/Skills/index.tsx";
import Work from "./components/Work/index.tsx";
import useHomePage from "./hooks/useHomePage.js";

function Home() {
	const { navigate, register, handleSubmit, onSubmit, errors } =
		useHomePage();

	useEffect(() => {
		// Check if there's a hash in the URL and scroll to contact section
		if (window.location.hash === "#contact") {
			// Use setTimeout to ensure the DOM is fully rendered
			setTimeout(() => {
				const contactSection = document.getElementById("contact");
				if (contactSection) {
					contactSection.scrollIntoView({ behavior: "smooth" });
				}
			}, 300);
		}
	}, []);

	return (
		<div className="Home section">
			<div className="particles-wrapper">
				<Particles
					particleColors={["#000", "#000"]}
					particleCount={200}
					particleSpread={10}
					speed={0.2}
					particleBaseSize={100}
					moveParticlesOnHover={true}
					alphaParticles={false}
					disableRotation={false}
				/>
			</div>
			<div className="home-content">
				<Hero />
				<Work navigate={navigate} />
				<Skills />
				<Mail
					handleSubmit={handleSubmit}
					register={register}
					errors={errors}
					onSubmit={onSubmit}
				/>
			</div>
		</div>
	);
}

export default Home;
