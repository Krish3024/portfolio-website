import React, { useEffect, useState } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/me.jpg'

const About = () => {

  const [solvedProblems, setSolvedProblems] = useState([]); // Initialize as an array

  useEffect(() => {
    const fetchSolvedProblems = async () => {
      try {
        const response = await fetch('https://alfa-leetcode-api.onrender.com/krishsah5216/solved');
        const data = await response.json(); // Parse the JSON response
        setSolvedProblems(data.solvedProblem); // Assign the 'solvedProblem' to state
      } catch (error) {
        console.error('Error fetching solved problems:', error);
      }
    };

    fetchSolvedProblems();
  }, []);

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
            <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>React JS</p> <hr style={{ width: "55%" }} /></div>
            <div className="about-skill"><p>Next JS</p> <hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Deep Learning</p> <hr style={{ width: "50%" }} /></div>
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
        <h1>300+</h1>
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
