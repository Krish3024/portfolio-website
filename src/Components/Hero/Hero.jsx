import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import instagram_icon from '../../assets/instagram.png'

const fileUrl = "https://drive.google.com/file/d/1nC23awaVkGg5qJ4micxgUyJrfXUVsmuq/view?usp=sharing";


const handleDownload = () => {
  // const link = document.createElement("a");
  // link.href = fileUrl;
  // link.download = fileName;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
  window.location.href = fileUrl;
};

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span> I'm Krish,</span> Full Stack developer based in India.</h1>
      <p>Hello! I'm Krish Sahu, a 21-year-old Full Stack Developer passionate about creating seamless digital experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleDownload}>My resume</div>
        {/* <div className="hero-resume" onClick={handleDownload}> <AnchorLink className='anchor-link' offset={50} href='#portfolio'>My resume</AnchorLink></div> */}
      </div>
    </div>
  )
}

export default Hero
