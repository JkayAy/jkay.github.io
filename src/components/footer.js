import "./footerStyles.css"
// import {useState } from 'react'
import { Link } from "react-router-dom"
// import { FaBars, FaTimes} from "react-icons/fa";

import React from 'react';
import { FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    // <div className="footer">
    //  <div className="footer-container">
    //   <div className="left">
    //    <div className="location">
    //     <FaHome size={20} style={{color:"#fff", marginRight :"2rem"}}/>
    //     <div>
    //      <p>45 Taiwo Road, Ilorin</p>
    //      <p>Kwara State, Nigeria</p>
    //     </div>
    //    </div>
    //    <div className="phone">
    //     <h4><FaPhone size={20} style={{color:"#fff", marginRight :"2rem"}}/>
    //     09039179999 / 08151763676</h4>

    //    </div>
    //    <div className="email">
    //     <h4><FaMailBulk size={20} style={{color:"#fff", marginRight :"2rem"}}/>
    //     jkay.com@gmail.com</h4>

    //    </div>
    //   </div>
    //   <div className="right">
    //    <h4>About the Company</h4>
    //    <p>This is Ayo Kolawole, the CEO of DM Technologies. I Train Young minded people on ICT Skills like Data Analyis, Web Development, Cloud Computing, Software Development,.. </p>
    //    <div className="social">
    //     <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
    //     <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
    //     <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />

    //    </div>

    //   </div>

    //  </div>
    //  <div className="footer_copyright">
    //   <p>Copyright &copy DmTechnologies</p>
    //  </div>

    // </div>
    <footer>
      <div class="container footer__container" >
        <div class="footer__1">
          <a href="index.html" class="footer__Logo"><h4>DmTechnologies</h4></a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias illum eaque sed ullam vero sequi. Natus optio quas nihil! et.
          </p>
       </div>
        <div class="footer__2">
          <h4>Permalinks</h4>
          <ul className="footer_navigation">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/project">Project</Link>
           </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact ">Contact</Link>
            </li>
           </ul>

        </div>
        <div class="footer__3">
          <h4>Privacy</h4>
          <ul class="Privacy">
           <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Refund Policy</a></li>
        
          </ul>

        </div>
        <div class="footer__4">
          <h4>Contact Us</h4>
          <div>
            <div className="phone">
           <h4><FaPhone size={20} style={{color:"#fff", marginRight :"2rem"}}/>
           09039179999 / 08151763676</h4>

          </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight :"2rem"}}/>
              jkay.com@gmail.com</h4>

            </div>
          </div>
          <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />

        </div>

        </div>
        <div class="footer__copyright">
          <small>Copyright &copy; DmTechnologies</small>
        </div>

      </div>

    </footer>
  )
}

export default footer