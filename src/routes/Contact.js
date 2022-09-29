import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImage2 from '../components/HeroImage2';
import Form from "../components/Form"

const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="CONTACT" text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default contact