import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Home from "@/pages/Home";
import ProjectInfo from "@/pages/ProjectInfo";
import Projects from "@/pages/Projects";

function App() {
	return (
		<Router>
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
