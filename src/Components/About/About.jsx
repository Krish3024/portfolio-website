import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/me.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm currently diving into the world of technology while pursuing my BTech in Electronics and Computer Engineering at VIT Chennai. As a budding full-stack developer, I'm passionate about crafting user-friendly digital solutions through innovative coding and design.</p>
                <p></p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"75%"}}/></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>Next JS</p> <hr style={{width:"60%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Web Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>75+</h1>
            <p>LeetCode questions solved</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>100+</h1>
            <p>Codechef questions solved</p>
        </div>
      </div>
    </div>
  )
}

export default About
