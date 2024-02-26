import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="About">
      <section>
        <h1>
          <b>A bit about myself</b>
        </h1>
        <ul>
          <li style={{ "--accent-color": "#41516C" }}>
            <div className="Date">2022-23</div>
            <div className="Title">
              <b>IIT-Bombay (e-Yantra)</b>
            </div>
            <div className="Desc">
              Role: Technical Assistant (<b>5</b> months)
              <br />
              <br />
              Worked on a Robotics based project to create a theme-based
              competition for <b>K-12</b> students.
              <br />
              Created a GUI using Kivy to ease up checking of the robotic kit's
              functionality by <b>80%.</b>
              <br />
              Created about <b>6</b> cycles of tasks in Webots Simulation, also
              used Image processing with libraries like NumPy, and OpenCV.
            </div>
          </li>
          <li style={{ "--accent-color": "#FBCA3E" }}>
            <div className="Date">2022</div>
            <div className="Title">
              <b>Mumbai University - Vidyalankar Institute of Technology</b>
            </div>
            <div className="Desc">
              BE in Electronics Engineering
              <br />
              Graduated in Aug with CGPA of <b>8.27</b>
              <br />
            </div>
          </li>
          <li style={{ "--accent-color": "#E24A68" }}>
            <div className="Date">2018-22</div>
            <div className="Title">
              <b>UnderGrad Life</b>
            </div>
            <div className="Desc">
              <b>Achievements</b>: Secured <b>2nd</b> rank in Tantra vihar
              competition (intra college tech competition).
              <br />
              Secured <b>2nd</b> rank in Algorhythmic Hackathon competition.
              <br />
              Won <b>2nd</b> prize in Enthusia(National level sport fest) in
              Volleyball event.
              <br />
              Secured <b>2nd</b> prize in Spoorthi Volleyball event. <br />
            </div>
          </li>
          <li style={{ "--accent-color": "#1B5F8C" }}>
            <div className="Date">2017-18</div>
            <div className="Title">
              <b>Jr. College - HSC</b>
            </div>
            <div className="Desc">
              Graduated with 70.90% in Science.
              <br />
              Won <b>1st</b> Prize in <b>400M</b> Hurdles in BCDAAA (Mumbai
              district) Athletics competition.
            </div>
          </li>
          <li style={{ "--accent-color": "#4CADAD" }}>
            <div className="Date">2016</div>
            <div className="Title">
              <b>High School - SSC</b>
            </div>
            <div className="Desc">
              Graduated with <b>90.40%</b>.<br />
              Won <b>1st</b> Prize in <b>400M</b> Hurdles in BCDAAA (Mumbai
              district) Athletics competition.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
