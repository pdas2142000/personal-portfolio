import React from "react";

import { AiOutlineCloudDownload } from "react-icons/ai";
import Section from "../shared/section/Section";
import techImg from "../../images/tech-icons.png";
import "./style.scss";
import CallToAction from "../shared/CallTOAction/Index";
import Downlode from "./downlode/Downlode";

function Skills() {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={techImg} alt="JS, React, HTML, CSS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            To secure a challenging position in a reputable organization to
            expand my learnings, knowledge, and skills in this field.
          </p>
          {/* <CallToAction text= "Downlode CV" icon={<AiOutlineCloudDownload />} downlode={<a href="pratik.pdf" download="Pratik Kumar Das.pdf"></a>}  /> */}
          <button><Downlode/></button>

        </div>
      </div>
    </Section>
  );
}

export default Skills;
