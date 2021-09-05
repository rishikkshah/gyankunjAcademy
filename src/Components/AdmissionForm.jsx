import React from "react";
import "./style/AdmissionForm.css";
const AdmissionForm = () => {
  return (
    <div className="container_ m-auto my-5">
      <h1>Admission Form</h1>
      <div className="content">
        <div className="right-side mx-auto">
          <div className="topic-text">Fill up the form to apply!</div>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Name of the pupil" id="name" />
            </div>
            <div className="input-box">
              <input type="date" placeholder="Date of birth" id="dob" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Place of birth" id="place" />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Nationality : Nepalese"
                id="nationality"
                disabled
                value="Nepalese"
              />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Religion" id="religion" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Current Address" id="address" />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Previous school (if any)"
                id="pschool"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Pupil's father name"
                id="father"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Pupil's mother name"
                id="mother"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Pupil's father occupation"
                id="occupation"
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="phone"
                placeholder="Parent's Phone Number"
                id="phone"
              />
            </div>
            <div className="input-box select-box">
              <select name="grade" id="grade">
                <option value="null">select grade</option>
                <option value="nursery">Nursery</option>
                <option value="lkg">L.K.G</option>
                <option value="ukg">U.K.G</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
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

export default AdmissionForm;
