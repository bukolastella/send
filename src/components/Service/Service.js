import React, { useState } from "react";
import ServiceCards from "./ServiceCards";
import classes from "./Service.module.css";
import plane from "../../assests/airport-4012.svg";
import custom from "../../assests/engineer-2736.svg";
import truck from "../../assests/truck-1058.svg";
import boat from "../../assests/cruise-1042.svg";
import planeGray from "../../assests/airportGray.svg";
import customWhite from "../../assests/engineerwhite.svg";
import truckWhite from "../../assests/truckwhite.svg";
import boatWhite from "../../assests/cruisewhite.svg";

const Service = () => {
  const [state, setstate] = useState("Air Freight");
  const changeState = (data) => {
    setstate(data);
  };
  return (
    <div className={classes.Service}>
      <h3>Select a service</h3>
      <div className={classes.ServiceRows}>
        <ServiceCards
          active={state === "Air Freight"}
          name="Air Freight"
          activeImg={plane}
          img={planeGray}
          changeState={changeState}
        />

        <ServiceCards
          active={state === "Sea Freight"}
          name="Sea Freight"
          activeImg={boatWhite}
          img={boat}
          changeState={changeState}
        />
        <ServiceCards
          double
          active={state === "Inland"}
          col1="Inland"
          col2={`(Truck & Barge)`}
          activeImg={truckWhite}
          img={truck}
          changeState={changeState}
        />

        <ServiceCards
          active={state === "Customs Clearance"}
          name="Customs Clearance"
          activeImg={customWhite}
          img={custom}
          changeState={changeState}
        />
      </div>
    </div>
  );
};

export default Service;
