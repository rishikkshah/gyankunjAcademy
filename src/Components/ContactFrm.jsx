import React from "react";
import "./style/ContactFrm.css";
const ContactFrm = () => {
  return (
    <div className="container_ m-auto my-5">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Gauriganj,03</div>
            <div className="text-two">Jhapa</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+97712345678</div>
            <div className="text-two">+97787654321</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">abc@gmail.com</div>
            <div className="text-two">abc.alom@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Drop a message for Us!</div>
          <p></p>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Enter your name" id="name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" id="mail" />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="phone"
                placeholder="Enter your Phone Number"
                id="phone"
              />
            </div>
            <div className="input-box message-box">
              <textarea
                rows="2"
                type="Message"
                placeholder="Enter the message"
                id="textarea"
              ></textarea>
            </div>
            <div className="button">
              <input type="button" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFrm;
