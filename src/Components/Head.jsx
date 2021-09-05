import React from "react";
import image from "../img/LOGO.png";
import image1 from "../img/board.jpg";
import "./style/Head.css";

const Head = () => {
  return (
    <div className="row my-5 m-auto g-0 head">
      <div
        className=" col-sm-6 text-center main "
        style={{ backgroundColor: "#f3f3ed" }}
      >
        <div className="main_sec ">
          <img src={image} alt="" className="img-fluid image " />
          <h2 className="text">GYANKUNJ ACADEMY</h2>
          <p>Admission Open 2021</p>
          <button className="btn btn-sm apply text-white">APPLY NOW</button>
        </div>
      </div>
      <div className="col-sm-6 ">
        <img src={image1} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Head;
