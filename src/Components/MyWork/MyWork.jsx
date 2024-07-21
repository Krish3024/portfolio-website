import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from './../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <a href={work.w_link}><img key={index} src={work.w_img} alt="" /></a>
        })}
      </div>
      <a className="mywork-showmore" href='https://github.com/Krish3024'>
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </a>
    </div>
  )
}

export default MyWork
