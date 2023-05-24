import React from 'react'
// import './style.css'
import '../style.css'
import mainImg from '../../assets/main-img.png'
import { Link } from "react-router-dom";


function MainPage() {
  return (
    <div><h1 className='heading'>Resume generator</h1>
    <div className='main-content'>
        <div className='main-content-text'>
            <h3 className='heading-3'>Best Resume Maker</h3>
            <p className='text'>Transform Your Professional Story into a Captivating Symphony of Success, Opening Doors to Limitless Opportunities</p>
            <Link to="/create-resume"><button className='create-button'>CREATE YOUR RESUME NOW</button></Link>
        </div>
        <div>
            <img className='main-img' src={mainImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default MainPage