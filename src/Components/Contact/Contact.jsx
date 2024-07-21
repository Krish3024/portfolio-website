import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import instagram_icon from '../../assets/instagram.png'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1ad4df0a-6453-4967-9732-1ba2098e51b3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available for taking new tasks, so feel free to send me a message about anything you want me to work on.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>krishsah5216@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>7440965103</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Chennai, India</p>
                </div>
                
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter you name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write Your message</label>
            <textarea name="message" rows='8' placeholder='Enter you message'></textarea>


            

            <button className='contact-submit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
