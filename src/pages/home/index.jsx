import "./home.css";

import { regEmail } from "../../constants/index.js";

import Hero from "./components/Hero/index.tsx";
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

			<div className="MailMeHeader">
				<h1>Drop me a message!</h1>
				<p>Like my work or want to connect, just let me know.</p>
				<div className="MailMe-InnerContent">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="Form-Row">
							{
								<input
									className="Abhay FormInput"
									placeholder="Your name."
									{...register("name", {
										required: true,
										maxLength: 60,
									})}
								/>
							}
							{errors.name?.type === "required" && (
								<p role="alert">Your name is required.</p>
							)}
							<input
								className="Abhay FormInput"
								placeholder="Your email address."
								{...register("email", {
									required: true,
									maxLength: 100,
									pattern: regEmail,
								})}
							/>
							{errors.email && (
								<p> Please fill out this field correctly.</p>
							)}
						</div>
						<div className="Form-Row">
							<textarea
								className="FormInput"
								placeholder="Hello, we would like to discuss about so and so position/project with you."
								{...register("comment", { required: true })}
							/>
							{errors.comment && (
								<p> Please fill out this field.</p>
							)}
						</div>

						<div className="BtnBody" type="submit">
							<div id="BtnContainer">
								<button className="Learn-More">
									<span className="Circle" aria-hidden="true">
										<span className="Icon Arrow" />
									</span>
									<span className="Button-Text">SEND</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Home;
