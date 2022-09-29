import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/banner.jpg";
import {Link} from "react-router-dom";

const heroimg = () => {
  return (
    <div className="hero">
     <div className="mask">
      <img className="into-img" src={IntroImg} alt="IntroImg"/>

     </div>
     <div className="content">
      <p>Hi, Hire A FREELANCER</p>
      <h1>For your Front End Job</h1>
      <div className="promise">
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>

     </div>
    </div>
  );
};

export default heroimg