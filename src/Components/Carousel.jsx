import React from "react";
import { cards } from "./data";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={cards[0].img} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img
            className="d-block w-100"
            src={cards[1].img}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={cards[2].img} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={cards[3].img} alt="Third slide" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
