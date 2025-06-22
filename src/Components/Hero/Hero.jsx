import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Pasindu Heshan,</span> a Computer Science undergraduate based in Sri Lanka.</h1>
        <div className="hero-action">
            {/* This now scrolls to the contact section */}
            <a href='#contact' className="hero-connect">Connect with me</a>
            {/* This is the downloadable resume link */}
            <a href="/Pasindu_Heshan_CV.pdf" download="Pasindu_Heshan_CV.pdf" className="hero-resume">My resume</a>
        </div>
    </div>
  )
}

export default Hero
