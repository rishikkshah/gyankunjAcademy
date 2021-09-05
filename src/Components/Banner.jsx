import React from "react";
import "./style/Banner.css";
import banner from "../img/banner.jpg";
const Banner = () => {
  return (
    <div className="row banner my-5">
      <img className="img-fluid m-auto" src={banner} alt="school banner" />
    </div>
  );
};

export default Banner;
