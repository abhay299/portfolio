import { useEffect } from "react";
import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from "react-router-dom";
import "./App.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Home from "@/pages/Home";
import ProjectInfo from "@/pages/ProjectInfo";
import Projects from "@/pages/Projects";

// Component to scroll to top on route change
// Exception: ProjectInfo page handles its own scrolling
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Don't scroll to top for ProjectInfo pages as they have their own scroll behavior
		if (!pathname.startsWith("/projects/")) {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<ProjectInfo />} />
				<Route path="/aboutMe" element={<About />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
