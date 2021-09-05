import React from "react";
import Iframe from "react-iframe";

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <Iframe
          url="https://maps.google.com/maps?q=gyankunj%20academy%20gauriganj%20nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400px"
          id="gmap_canvas"
          display="initial"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Map;
