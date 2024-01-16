
import "./Story.css"
import { Link } from "react-router-dom"
import react1 from "../assets/rea1.jpg"
import react2 from "../assets/rea2.jpg"



import React from 'react'

const story = () => {
  return (
    <div className="story" >
      <div className="left">
        <h1>WHO AM I </h1>
        <p>
        Experienced software developer with a passion for technology. Curious, client-focused, and dedicated to innovation. Long-time tech enthusiast with a history of delivering exceptional solutions. Let's build something amazing together!
        </p>
        <Link to="/contact">
        <button className="btn">Contact</button>

        </Link>
      </div>

      <div className="right">
        <div className="img-container">



        <div className="img-stack bottom">
          <img className="img" alt="true" src={react1} />
        </div>


          <div className="img-stack top">
            <img className="img" alt="true" src={react2} /> 
          </div>

         
        </div>
      </div>


    </div>
  )
}

export default story