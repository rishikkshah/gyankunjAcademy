import React from "react";
import "./style/Contact.css";

import ContactFrm from "./ContactFrm";
import Map from "./Map";

const Contact = () => {
  return (
    <div>
      <ContactFrm />
      <div className="row px-5 mb-5 gx-0">
        <h2 className="text-center my-5 direction">Get a direction here !</h2>
        <div className="map_container  mb-5">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
