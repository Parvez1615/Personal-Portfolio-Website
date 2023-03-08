import "./FooterStyles.css";
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import {RiContactsFill} from "react-icons/ri";
const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-container">
       <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>National Institute of Technology Agartala</p>
            </div>
        </div>
        <div className="phone">
        <h4>
        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        +91-9862789100
        </h4>
        </div>

        <div className="email">
        <h4>
        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        mohammadparvez2002@gmail.com
        </h4>
        </div>

       </div>
       <div className="right">
        <h4>About me</h4>
        <p>This is Md parvez Front End Developer.I enjoy discussing new projects and 
        design challenges.</p>
        <div className="social">
       <a href="https://github.com/Parvez1615"><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
       <a href="https://www.linkedin.com/in/md-parvez-ab60b2238/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
       <a href="https://drive.google.com/file/d/1yD2e8cWIoSTeweUBYDtqMFH7J9WWmzwB/view?usp=share_link"> <RiContactsFill size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Footer