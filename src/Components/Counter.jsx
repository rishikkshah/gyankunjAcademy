import React from "react";
import "./style/Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  return (
    <div className="counter my-5">
      <h1 className="text-center font-weight-bolder my-3 title-color">
        From nursery to class 10
      </h1>
      <div className="row my-5 text-uppercase">
        <div className="col-sm-6 col-md-4  text-center mb-2 title-color">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <h1>
                {isVisible ? (
                  <CountUp start={0} end={2500} duration={3} />
                ) : (
                  2500
                )}
                +
              </h1>
            )}
          </VisibilitySensor>

          <h5 className="subtitle-color">happy students</h5>
        </div>
        <div className="col-sm-6 col-md-4  text-center mb-2 title-color">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <h1>
                {isVisible ? <CountUp start={0} end={50} duration={3} /> : 50}+
              </h1>
            )}
          </VisibilitySensor>
          <h5 className="subtitle-color">happy faculties</h5>
        </div>
        <div className="col-sm-6 col-md-4  text-center mb-2 title-color">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <h1>
                {isVisible ? <CountUp start={0} end={30} duration={3} /> : 30}+
              </h1>
            )}
          </VisibilitySensor>
          <h5 className="subtitle-color">classrooms</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;
