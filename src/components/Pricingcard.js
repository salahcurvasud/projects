import { Link } from "react-router-dom"
import "./Pricingcard.css"

import React from 'react'

const Pricingcard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
        <h3>- Basic - </h3>
        <span className="bar"></span>
        <p className="btc">$150</p>
        <p >-3days-</p>
        <p >-3 pages-</p>
        <p >-responsive -</p>
        <Link to ="/contact" className="btn">PURSHSE</Link>
        </div>



        <div className="card">
        <h3>- Premium - </h3>
        <span className="bar"></span>
        <p className="btc">$200</p>
        <p >-2days-</p>
        <p >-7 pages-</p>
        <p >-responsive -</p>
        <Link to ="/contact" className="btn">PURSHSE</Link>
        </div>







        <div className="card">
        <h3>- business - </h3>
        <span className="bar"></span>
        <p className="btc">$500</p>
        <p >-6days-</p>
        <p >-3 pages-</p>
        <p >-responsive -</p>
        <Link to ="/contact" className="btn">PURSHSE</Link>
        </div>


      </div>
    </div>
  )
}

export default Pricingcard