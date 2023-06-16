import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import ProjectInfo from './pages/projectInfo/ProjectInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectInfo />} />
        <Route path='/aboutMe' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
