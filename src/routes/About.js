import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImage2 from '../components/HeroImage2';
import AboutContent from "../components/AboutContent";

const about = () => {
  return (
    <div> 
      <Navbar />
      <HeroImage2 heading="ABOUT." text="I'm a friendly Front-End Developer"/>
      <AboutContent />
      <Footer /> 
    </div>
  )
}

export default about