import "./home.css";

import Particles from "../../components/Particles";

import Hero from "./components/Hero/index.tsx";
import Mail from "./components/Mail/index.tsx";
import Skills from "./components/Skills/index.tsx";
import Work from "./components/Work/index.tsx";
import useHomePage from "./hooks/useHomePage.js";

function Home() {
	const { navigate, register, handleSubmit, onSubmit, errors } =
		useHomePage();

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
