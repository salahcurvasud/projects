import "./Hero.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="intro-img" src={IntroImg} alt="intro-bg.jpg"/>
    
    
    </div>

    <div className="content" >
      <p>Hi it's Saladin !</p>
      <h1>Web and Software Devoloper</h1>
    <div>
      <Link to="/Projects" className="btn" >Projects </Link>
      <Link to="/contact" className="btn btn-light" >    Contact</Link>

      </div>
    </div>


    
    </div>
  )
}

export default Hero
