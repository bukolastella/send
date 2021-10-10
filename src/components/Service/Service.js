import React from "react";
import ServiceCards from "./ServiceCards";
import classes from "./Service.module.css";
import plane from "../../assests/airport-4012.svg";
import custom from "../../assests/engineer-2736.svg";
import truck from "../../assests/truck-1058.svg";
import boat from "../../assests/cruise-1042.svg";

const Service = () => {
  return (
    <div className={classes.Service}>
      <h3>Select a service</h3>
      <div className={classes.ServiceRows}>
        <ServiceCards active name="Air Freight" img={plane} />
        <ServiceCards name="Sea Freight" img={boat} />
        <ServiceCards
          double
          col1="Inland"
          col2={`(Truck & Barge)`}
          img={truck}
        />
        <ServiceCards name="Customs Clearance" img={custom} />
      </div>
    </div>
  );
};

export default Service;
