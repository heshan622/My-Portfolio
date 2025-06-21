import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a Computer Science undergraduate from Sri Lanka with practical experience in building real-world software solutions. I enjoy working across different layers of development from crafting intuitive user experiences to building robust logic and ensuring software quality through automation.             
            </p>
            <p>I’m passionate about problem-solving and often leverage AI tools to enhance efficiency and creativity in my work. I bring a strong learning mindset, attention to detail, and a commitment to delivering impactful results always eager to take on new challenges and grow as a developer.
            </p>
            <p>Beyond technical skills, I value clear communication, teamwork, and adaptability qualities I believe are just as essential in a successful developer. I'm not just looking for a job; I'm looking for a place where I can contribute meaningfully, learn continuously, and grow alongside a team that values innovation and impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
