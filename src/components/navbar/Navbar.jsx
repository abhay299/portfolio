import React from "react";
import "./navbar.css";
import ModalImage from "react-modal-image";
import me from "../../assets/Portfolio/me_in_HD.png";
import smallMe from "../../assets/Portfolio/smallMe_in_HD.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavContainer">
        <ModalImage
          hideDownload="true"
          hideZoom="true"
          small={smallMe}
          large={me}
          alt="That's me :)"
        />
        <h1>
          <a href="/">Abhay Gupta</a>
        </h1>
      </div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href={"/projects"}>Work</a>
          </li>
          <li>
            <a href={"/aboutMe"}>About</a>
          </li>
          <li>
            <a
              href={
                "https://drive.google.com/file/d/1eQIwd8-OMydW1YKBZZIqiLwz7U_Mnk71/view?usp=sharing"
              }
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="mailto:abhaysg2000@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
