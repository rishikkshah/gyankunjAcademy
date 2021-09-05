import React from "react";
import "./style/ContactForm.css";
const ContactForm = () => {
  return (
    <form className="form p-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="fname">First name</label>
          <input id="fname" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="lname">Last name</label>
          <input id="lname" type="text" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="number">Phone number</label>
          <input
            id="number"
            type="number"
            maxLength={10}
            className="form-control"
          />
        </div>
      </div>
      <div className="row px-2 mb-3">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          name="msg"
          id="message"
          rows="4"
        ></textarea>
      </div>
      <div className="row px-2 mb-3">
        <button className="col-sm-3 mt-3 btn contact__submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
