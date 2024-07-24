import React from "react";
import Nav from "../components/home/Nav";
import Recent from "../components/home/Recent";
import ContactHome from "../components/home/Contact";
import {ReactComponent as DownArrow} from "../assets/svgs/down-arrow.svg";

const graphic = require('../assets/images/v2_home.png');


export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <div className="home-info-wrapper">
        <div className="home-container-left">
            <img className="home-graphic" src={graphic} alt="graphic" />
        </div>
        <div className="home-container-right">
            <div className="home-container-right-title-wrapper">
                <h3 className="home-container-sub">it's yates,</h3>
                <h1 className="home-container-right-title">Nikhil James Yates</h1>
                <h3 className="home-container-sub-lower">software | hardware | design | entrepreneur</h3>
            </div>
            <ContactHome />
        </div>
      </div>
      <div className="home-container-bottom">
        <DownArrow className="home-container-bottom-down-arrow" />
      </div>
    </div>
  );
}

