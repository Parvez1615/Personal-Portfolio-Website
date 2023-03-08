import "./FormStyles.css";
import React from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h5chhjd', 'template_d35hzkg', form.current, 'm8ZMOBlnodRIo2nGK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label><p>Your Name</p></label>
            <input type="text" name="name"></input>
            <label><p>Email</p></label>
            <input type="email" name="email"></input>
            <label><p>Subject</p></label>
            <input type="text" name="subject"></input>
            <label><p>Message</p></label>
            <textarea name="message" rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form