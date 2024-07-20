import React from "react";

const graphic = require('../assets/images/v2_home.png');


export default function Home() {
  return (
    <div className="home-container">
        <div className="home-container-left">
            <img className="home-graphic" src={graphic} alt="graphic" />
        </div>
        <div className="home-container-right">
            <div className="home-container-right-title-wrapper">
                <h3 className="home-container-sub">it's yates,</h3>
                <h1 className="home-container-right-title">nikhil yates</h1>
                <h3 className="home-container-sub-lower">software | hardware | design</h3>
            </div>
        </div>


    </div>
  );
}

