import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';
import ProjectInfo from './pages/ProjectInfo/ProjectInfo.jsx';
import Projects from './pages/Projects/Projects.jsx';

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
