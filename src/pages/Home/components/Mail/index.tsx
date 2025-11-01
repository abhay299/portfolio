import React from "react";

import { EMAIL_REGEX } from "@/constants/regex";

import styles from "./index.module.css";

const Mail = ({ handleSubmit, register, errors, onSubmit }) => {
	return (
		<div id="contact" className={styles.mail_me_header}>
			<h1>Drop me a message!</h1>
			<p>Like my work or want to connect, just let me know.</p>

			<div className={styles.mail_me_inner_content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.form_row}>
						<input
							className={`${styles.abhay} ${styles.form_input}`}
							placeholder="Your name."
							{...register("name", {
								required: true,
								maxLength: 60,
							})}
						/>
						{errors.name?.type === "required" && (
							<p role="alert">Your name is required.</p>
						)}
						<input
							className={`${styles.abhay} ${styles.form_input}`}
							placeholder="Your email address."
							{...register("email", {
								required: true,
								maxLength: 100,
								pattern: EMAIL_REGEX,
							})}
						/>
						{errors.email && (
							<p>Please fill out this field correctly.</p>
						)}
					</div>

					<div className={styles.form_row}>
						<textarea
							className={styles.form_input}
							placeholder="Hello, we would like to discuss about so and so position/project with you."
							{...register("comment", { required: true })}
						/>
						{errors.comment && <p>Please fill out this field.</p>}
					</div>

					<div className={styles.btn_body}>
						<div id="BtnContainer">
							<button className={styles.learn_more} type="submit">
								<span
									className={styles.circle}
									aria-hidden="true"
								>
									<span
										className={`${styles.icon} ${styles.arrow}`}
									/>
								</span>
								<span className={styles.button_text}>SEND</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Mail;
