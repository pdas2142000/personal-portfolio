import React from "react";

import {
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import SocialIcon from "./social-icon/SocialIcon";
import Section from "../shared/section/Section";
import logo from "../../images/logo2.png";
import { scroolToSection } from "../utils/helper";

import "./style.scss";
function Footer() {
  return (
    <Section background="light" classname="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={logo} alt="React dev" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scroolToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scroolToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scroolToSection("blogs")}
          >
            Blogs & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scroolToSection("contact")}
          >
            contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#FF0000"
            icon={<FaYoutube />}
            link="https://www.youtube.com"
          />
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/pdas2142000?tab=overview&from=2023-06-01&to=2023-06-30"
          />
          <SocialIcon
            color="#0a66c2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/pratik-kumar-das-323528220/"
          />
          
          <SocialIcon
            color="#e84c88"
            icon={<FaInstagram />}
            link="https://www.instagram.com/___oooommm___/"
          />
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2022 React Dev | All Rights Reserved 
            </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
