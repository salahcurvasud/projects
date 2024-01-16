import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'

import Story from '../components/Story'


const About = () => {
  return (
    <div>
    <Navbar />
    <Hero2 heading="Story" text="Im an IT developer"/>
    <Story />
    <Footer />  
    </div>
  )
}

export default About