import { Close, Menu } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import smallMe from "../../assets/Portfolio/smallMe.png";

import styles from "./index.module.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [menuOpen]);

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/projects", label: "Work" },
		{ path: "/aboutMe", label: "About" },
		{
			path: "https://drive.google.com/file/d/1-F2jTUlR582Le6xi6mf4qAVoXoEogxvL/view?usp=sharing",
			label: "Resume",
			external: true,
		},
		{
			path: "mailto:abhaysg2000@gmail.com",
			label: "Contact",
			external: true,
		},
	];

	return (
		<nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
			<div className={styles.nav_container}>
				<Link to="/" className={styles.logo_section}>
					<div className={styles.profile_image_wrapper}>
						<img
							src={smallMe}
							alt="Abhay Gupta"
							className={styles.profile_image}
						/>
						<div className={styles.image_overlay} />
					</div>
					<h1 className={styles.logo_text}>Abhay Gupta</h1>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<div className={styles.desktop_nav}>
				{navLinks.map((link, index) => {
					if (link.external) {
						return (
							<a
								key={link.path}
								href={link.path}
								target={
									link.path.startsWith("http")
										? "_blank"
										: undefined
								}
								rel={
									link.path.startsWith("http")
										? "noopener noreferrer"
										: undefined
								}
								className={styles.nav_link}
							>
								{link.label}
							</a>
						);
					}
					return (
						<Link
							key={link.path}
							to={link.path}
							className={`${styles.nav_link} ${
								location.pathname === link.path
									? styles.active
									: ""
							}`}
						>
							{link.label}
						</Link>
					);
				})}
			</div>

			{/* Mobile Menu Button */}
			<button
				className={styles.menu_btn}
				onClick={() => setMenuOpen((prev) => !prev)}
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
			>
				{menuOpen ? (
					<Close className={styles.menu_icon} />
				) : (
					<Menu className={styles.menu_icon} />
				)}
			</button>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<>
						<motion.div
							className={styles.menu_overlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={() => setMenuOpen(false)}
						/>
						<motion.div
							className={styles.mobile_menu}
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{
								type: "spring",
								damping: 25,
								stiffness: 200,
							}}
						>
							<div className={styles.mobile_menu_content}>
								<div className={styles.mobile_profile}>
									<img
										src={smallMe}
										alt="Abhay Gupta"
										className={styles.mobile_profile_image}
									/>
									<h2 className={styles.mobile_profile_name}>
										Abhay Gupta
									</h2>
								</div>
								<ul className={styles.mobile_nav_list}>
									{navLinks.map((link, index) => (
										<motion.li
											key={link.path}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												delay: index * 0.1,
												duration: 0.3,
											}}
											className={styles.mobile_nav_item}
										>
											{link.external ? (
												<a
													href={link.path}
													target={
														link.path.startsWith(
															"http",
														)
															? "_blank"
															: undefined
													}
													rel={
														link.path.startsWith(
															"http",
														)
															? "noopener noreferrer"
															: undefined
													}
													className={
														styles.mobile_nav_link
													}
													onClick={() =>
														setMenuOpen(false)
													}
												>
													{link.label}
												</a>
											) : (
												<Link
													to={link.path}
													className={`${
														styles.mobile_nav_link
													} ${
														location.pathname ===
														link.path
															? styles.active
															: ""
													}`}
													onClick={() =>
														setMenuOpen(false)
													}
												>
													{link.label}
												</Link>
											)}
										</motion.li>
									))}
								</ul>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
}

export default Navbar;
