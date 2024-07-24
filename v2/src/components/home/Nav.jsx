import React from "react";
import Signature from '../../assets/svgs/nyWhite.svg';


const Nav = () => {
    return ( 
        <div className="navigation-wrapper">
            <div className="navigation-wrapper-left">
                <img className="ny" style={{height:'100%'}} src={Signature} alt="signature" />
            </div>
            <div className="navigation-wrapper-right">
                <div className="navigation-wrapper-links">
                    <a href="/about">about</a>
                    <a href="/projects">projects</a>
                    <a href="/contact">contact</a>
                </div>
                <div className="navigation-wrapper-farright">
                    <a href="/resume">resume</a>
                    <a href="/blog">labz</a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
