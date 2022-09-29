import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import react1 from "../assets/ayo2.jpg"
import react2 from "../assets/ayo2.jpg"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am a Front-Stack developer, Data Scientist and Tech Consultant. I create responsive secure websites for my clients, Analyse Data and solve myriads Tech related problems</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>

      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="true" />


          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="true" />


          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutContent