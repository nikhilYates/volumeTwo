import React from "react";
import {ReactComponent as Github} from '../../assets/svgs/github-mark.svg';
import {ReactComponent as LinkedIn} from '../../assets/svgs/linkedin-mark.svg';


const ContactHome = () => {
  return (
    <div className="contact-home-container">
      <a href="https://github.com/nikhilYates"><Github className="contact-home-icon" /></a>
      <a href="https://www.linkedin.com/in/nikhilyates/"><LinkedIn className="contact-home-icon" /></a>
    </div>
  );
};

export default ContactHome;