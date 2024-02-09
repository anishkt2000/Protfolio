import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Education Journey</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and illustrator.
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Lal Classes </h2>
              <p>Mainly focuses on creating user interfaces that are both visually appealing and user-friendly, ensuring a positive and intuitive user experience. </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Gyan Bharti Public School</h2>
              <p>Creating visually appealing and user-friendly web interfaces that effectively convey information, engage users, and enhance the overall online experience.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Param Gyan Niketan</h2>
              <p>Creating a user-friendly and visually appealing interface for a mobile or web application, focusing on user experience, functionality, and aesthetics.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Aakash Institute</h2>
              <p>Creating visually appealing and user-friendly web interfaces that effectively convey information, engage users, and enhance the overall online experience.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>IIT Roorkee</h2>
              <p>Creating visually appealing and user-friendly web interfaces that effectively convey information, engage users, and enhance the overall online experience.</p>
            </div>
          </div>
        </div>
      </span>
    </section>
  );
};

export default Skills;
