import React from "react";
import "./style/Card.css";

const Card = ({ img, title }) => {
  return (
    <div
      className="card m-auto mt-5"
      style={{
        width: "100%",
        minWidth: "220px",
        transition: "all 1s ease-out",
      }}
    >
      <img src={img} alt="image1 sdfasl" className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title title">{title}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum
          ipsam dolores laudantium quidem pariatur ullam animi rerum adipisci
          consectetur, consequuntur possimus nostrum dolorem a?
        </p>
      </div>
    </div>
  );
};

export default Card;
