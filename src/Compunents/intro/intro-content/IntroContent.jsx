import React from "react";
import "./style.scss";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallTOAction/Index";
import { scroolToSection } from "../../utils/helper";

function IntroContent() {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} />
                <span className="text">, I Am</span>
              </span>
            </span>
            <span className="big-text"> Pratik ku. Das</span>
          </h1>
          <p>
            To make use of my interpersonal skills to achieve the goals of a company that focuses
            on customer satisfaction and customer experience.
          </p>
          <CallToAction
            text="Contact Me"
            action={() => scroolToSection("contact")}
          />
        </div>
        <div className="right-col">
          <img src={girl} alt="JS Dev" />

          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design</div>
          </div>

          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              you can Happy with my design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroContent;
