import React from "react";
import "./style/Home.css";
import Card from "./Card";
import Head from "./Head";
import { cards } from "./data";
import Banner from "./Banner";
import Counter from "./Counter";

const Home = () => {
  return (
    <div className="row mt-5 px-5 gx-0">
      <Head />
      <Banner />
      <div className="row my-5 spec">
        <h2
          className=" text-center mt-4 text-uppercase"
          style={{ fontWeight: "bold" }}
        >
          Our specialities
        </h2>

        {cards.map((card, index) => {
          return (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 px-2">
              <Card img={card.img} title={card.title} />
            </div>
          );
        })}
      </div>
      <Counter />
    </div>
  );
};

export default Home;
