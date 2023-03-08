import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>Im a react font-end developer. I've worked with various front end technologies HTML, CSS, Bootstrap, JavaScript, React.JS. I'm currently working towards learning backend technologies to create powerful full-stack applications. I'm open for internship opportunites in the front end domain to accelerate my learning and gain industrial development experience.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
