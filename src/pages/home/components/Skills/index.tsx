import React from "react";

import BackendLogo from "../../../../assets/Portfolio/Backend.png";
import FrontendLogo from "../../../../assets/Portfolio/Frontend.png";
import LanguageLogo from "../../../../assets/Portfolio/LanguagesLogo.png";

import styles from "./index.module.css";

function Skills() {
	return (
		<div className={styles.skill}>
			<div className={styles.skill_head}>
				<h1>Tech Skills</h1>
			</div>

			<div className={styles.skill_container}>
				<div className={styles.skill_card}>
					<div className={`${styles.face} ${styles.face1}`}>
						<div className={styles.skill_content}>
							<div className={styles.skill_icon}>
								<img
									className={styles.fa}
									src={FrontendLogo}
									alt="frontend"
								/>
							</div>
						</div>
					</div>
					<div className={`${styles.face} ${styles.face2}`}>
						<div className={styles.frontend}>
							<div className={styles.skill_content}>
								<h3>Frontend</h3>
								<p>
									<a
										href="https://reactjs.dev/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
											alt="react"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://redux.js.org"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
											alt="redux"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://getbootstrap.com"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
											alt="bootstrap"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.w3.org/html/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
											alt="html5"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.w3schools.com/css/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
											alt="css3"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://sass-lang.com"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"
											alt="sass"
											width="30"
											height="30"
										/>
									</a>
								</p>
								<p>
									ReactJS, Redux, Bootstrap, HTML5, CSS3, SASS
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.skill_card}>
					<div className={`${styles.face} ${styles.face1}`}>
						<div className={styles.skill_content}>
							<div className={styles.skill_icon}>
								<img
									className={styles.fa}
									src={BackendLogo}
									alt="backend"
								/>
							</div>
						</div>
					</div>
					<div className={`${styles.face} ${styles.face2}`}>
						<div className={styles.backend}>
							<div className={styles.skill_content}>
								<h3>Backend</h3>
								<p>
									<a
										href="https://nodejs.org"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
											alt="nodejs"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://expressjs.com"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png"
											alt="express"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.djangoproject.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://cdn.worldvectorlogo.com/logos/django.svg"
											alt="django"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.mysql.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://banner2.cleanpng.com/20180821/lyg/kisspng-mysql-workbench-database-mysql-cluster-5b7cdc87c3dd20.3638601015349095758023.jpg"
											alt="mysql"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.mongodb.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
											alt="mongoDB"
											width="30"
											height="30"
										/>
									</a>
								</p>
								<p>
									Node.js, Express.js, Django, MySQL, MongoDB
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.skill_card}>
					<div className={`${styles.face} ${styles.face1}`}>
						<div className={styles.skill_content}>
							<div className={styles.skill_icon}>
								<img
									className={styles.fa}
									src={LanguageLogo}
									alt="languageLogo"
								/>
							</div>
						</div>
					</div>
					<div className={`${styles.face} ${styles.face2}`}>
						<div className={styles.language}>
							<div className={styles.skill_content}>
								<h3>Languages</h3>
								<p>
									<a
										href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
											alt="javascript"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.python.org"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
											alt="python"
											width="30"
											height="30"
										/>
									</a>
									<a
										href="https://www.java.com"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="https://app.codingrooms.com/assets/ide/java-original.svg"
											alt="java"
											width="30"
											height="30"
										/>
									</a>
								</p>
								<p>JavaScript, Python, Java</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
