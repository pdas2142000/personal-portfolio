import React from 'react';
import "./style.scss"
import cloud from "../../images/cloud.png"
import cloudsoft from "../../images/cloud-soft.png"
import Navigation from '../navigation_bar/Navigation';
import IntroContent from './intro-content/IntroContent';

function Intro() {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id='parallax'>

      </div>
      <img src={cloud}className="cloud" />
      <img src={cloudsoft}className="cloud-soft" />
      <div className="content">
        <Navigation/>
        <IntroContent/>
      </div>

    </div>
  );
}

export default Intro;
