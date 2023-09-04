import React, {useState} from "react";
import "./style.scss";

import {CgMenuRight} from "react-icons/cg"
import {IoMdClose} from "react-icons/io"
import logo from "../../images/logo2.png";
import CallToAction from "../shared/CallTOAction/Index";
import { scroolToSection } from "../utils/helper";

function Navigation() {

  const [mobileMenu, setMobileMenu] = useState(false)

  const menuItenClickHandler = (section) =>{
    setMobileMenu(!mobileMenu)
    scroolToSection(section)
  }
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="JS Dev" />
      </div>
      <div className="mobile-menu" onClick={()=>setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff"/>
        ) : (
          <CgMenuRight size={24} color="#fff"/>
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItenClickHandler("skills")}
        >
          Skils
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItenClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItenClickHandler("blogs")}
        >
          Blogs & Articles
        </span>
        <CallToAction
          text="Contact Me"
          action={() => menuItenClickHandler("contact")}
        />
      </div>
    </div>
  );
}

export default Navigation;
