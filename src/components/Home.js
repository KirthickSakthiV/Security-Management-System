import React from 'react';
import ban from './img/banner.jpg';
import './css/Marquee.css'
import './css/Home.css'; 
import imgb from './img/bandown-2.jpeg'
import about from './img/iphone__1_-removebg.png'
import abimg from './img/aboutpage.jpeg'
import img from './img/abs.jpg'
import img1 from'./img/cyb2.jpg'
import img2 from './img/cyb3.jpg'

import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container">
        <header className="home-header">
          <img src={img} alt="Banner" className="banner-img" />
          <div className="text-overlay">
            <h1>SECURITY MANAGEMENT SYSTEM <br></br><br></br>END TO END ENCRYPTED</h1>
            
          </div>
        </header>
     <h2 style={{textAlign:'center',color:'black',fontSize:'30px'}}>About Us</h2>
     <p style={{fontSize:'20px',fontFamily:'Arial',fontWeight:'bolder'}}>A security management system encompasses the framework, processes, and tools used by organizations to protect their assets. It includes risk assessment, policies, access control, security training, incident response, monitoring, compliance management, audits, physical security, and continual improvement.</p>
     <div><img src={img1} alt='back'style={{width:'100%',height:'700px'}}/></div>
      <section className='flex-about'> 
      <div className='flex-about1'>
      <h1>A security management system is the backbone of an organization's efforts to protect its assets and maintain operational integrity. 
         
      </h1>
      
      
      </div>
      <div className='flex-about2'>
      <img src={img2} alt='about' style={{width:'400px',height:'600px'}}/>
      </div>
      </section>
      <section class="contact" id="contact">
            <h2 class="titleText"><span>C</span>ontact Us</h2>

        <div class="box">
            <div><h4>Send Message</h4>
            <div class="input">
                <input type="text" placeholder="Name"/>
            </div>
            <div class="input">
                <input type="text" placeholder="Email"/>
            </div>
            <div class="input1">
                <textarea placeholder="message"></textarea>
             </div>
             <div class="input">
                <input style={{backgroundColor:'lightblue',color:'white',borderRadius:'5px'}} type="submit" placeholder="Sumbit"/>
            </div></div>
            <div>
                <img src={abimg} alt='about'/>
            </div>

            
        </div>
    </section>
        <div class="Copyrighttext">
            <footer>©️Copyright 2024 created by Security Management</footer>
        </div>

      
    </div>
  );
};
