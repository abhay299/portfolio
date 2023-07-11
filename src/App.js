import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import Projects from './pages/projects/Projects.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import ProjectInfo from './pages/projectInfo/ProjectInfo.jsx';
import Feedback from './pages/feedback/Feedback.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectInfo />} />
        <Route path='/aboutMe' element={<About />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
