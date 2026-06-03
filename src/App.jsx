import Clarity from "@microsoft/clarity";
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
import { initGtm, trackPageView } from "@/lib/gtm";
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

function GtmPageView() {
	const { pathname, search } = useLocation();

	useEffect(() => {
		trackPageView(pathname, search);
	}, [pathname, search]);

	return null;
}

function App() {
	// In any component or file
	const clarityId = import.meta.env.VITE_CLARITY_ID;

	useEffect(() => {
		initGtm();
	}, []);

	useEffect(() => {
		if (clarityId) {
			Clarity.init(clarityId);
		}
	}, [clarityId]);

	return (
		<Router>
			<GtmPageView />
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
