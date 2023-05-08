import React from 'react'
import Navbar from '../Navbar'
import image2 from '../../Components/images/image2.png'
import './home.css'
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {CiYoutube} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaInstagram} from "react-icons/fa"
const Home = () => {
  return (
    
    <div className ="home-container">
        <div >
          <h1 className='new-heading'>OPENAUTO</h1>
        </div>
        <div className='new-container'>
        <Navbar/>
        </div>
        
        <div className='container'>
        <div>
        <h1 className='heading'>Vehicle Maintenance  From The Comfort of Your Home</h1>
        <p className='paragraph'>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</p>
        <input className='input1' placeholder='Enter your name' type='text'  name=''/> <br/>
        <input className='input1' placeholder='Enter your mail' type='mail'  name=''/> <br/>
        <button className='input1'>Submit</button>
        </div>
        
        <div><img className='image2' src={image2} alt=''/></div>
        <div ><img className='image3' src={image2} alt=''/></div>
        
      </div>
      <div className='image-lp-container'>
        <div>
          <img src="https://res.cloudinary.com/dh0odgkdj/image/upload/v1683538776/1651832889534_npezs8.jpg" alt="" className='icon-image' />  
        </div>
        <div className='icons'>
          <FiFacebook className='facebook'/>
          <FiTwitter className='twitter'/>
          <CiYoutube className='youtube'/>
          <CiLinkedin className='linkedin'/>
          <FaInstagram className='instagram'/>
          
        </div>
      </div>

      
    </div>
  )
}

export default Home
