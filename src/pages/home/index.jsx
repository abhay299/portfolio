import "./home.css";

import Hero from "./components/Hero/index.tsx";
import Mail from "./components/Mail/index.tsx";
import Skills from "./components/Skills/index.tsx";
import Work from "./components/Work/index.tsx";
import useHomePage from "./hooks/useHomePage.js";

function Home() {
	const { navigate, register, handleSubmit, onSubmit, errors } =
		useHomePage();

	return (
		<div className="Home">
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
	);
}

export default Home;
