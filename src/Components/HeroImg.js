import "./HeroImgStyles.css";
 import React from 'react'
 import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
 
 const HeroImg = () => {
   return (
     <div className="hero">
        <div className="mask">
            <img className="into-img" 
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
        <p>HI, I'M MD PARVEZ.</p>
        <h1>Front End Developer.</h1>
        <div>
            <Link to="/Project" className="btn">ProjectS</Link>
            <Link to="/Contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>
     </div>
   )
 }
 
 export default HeroImg