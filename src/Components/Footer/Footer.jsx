import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import instagram_icon from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Krish S.</h1>
          <div className="contact-detail">
            <p>Follow me:</p>
            <a href="https://github.com/Krish3024"><img src={github_icon} alt="" style={{width:"30px"}}/></a>
            <a href="https://www.linkedin.com/in/krish-sahu-513189278/"><img src={linkedin_icon} alt="" style={{width:"30px"}}/></a>
            <a href="https://www.instagram.com/krishsahu.024/"><img src={instagram_icon} alt="" style={{width:"30px"}}/></a>
          
          </div> 
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter you Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Krish Sahu. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
