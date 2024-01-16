import "./Footer.css"
import React from 'react'
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhoneAlt}from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer-container">
            <div className="left">
            <h4>    Location    </h4>
                <div className="location">
                    <FaHome size={20} style={{color:'#fff' , marginRight: "2rem"}}/>
                    <div>   <p> Tunis , Tunisia </p>    </div>   
                </div>


                <div className="phone">
                <h4><FaPhoneAlt size={20} style={{color:'#fff' , marginRight: "2rem"}}/>
                <p>+216 93 450 343</p></h4>
                </div>


                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:'#fff' , marginRight: "2rem"}}/>
                    <p>+khalfaouisaleheddin@gmail.com</p></h4>
                </div>

            </div>
            <div className="right">
                <h4>    About Me    </h4>
                <p> This is a description for career ...    </p>

                <div className="social">
                    <FaFacebook size={30} style={{color:'#fff' , marginRight: "4rem"}}/>
                    <FaGithub size={30} style={{color:'#fff' , marginRight: "4rem"}}/>
                    <FaLinkedin size={30} style={{color:'#fff' , marginRight: "4rem"}}/>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Footer