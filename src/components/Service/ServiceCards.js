import React from "react";
import classes from "./ServiceCards.module.css";

const ServiceCards = (props) => {
  return (
    <div
      className={classes.ServiceCards}
      style={{ backgroundColor: props.active ? "#0746a7" : null }}
    >
      <span style={{ color: props.active ? "white" : null }}>
        {props.double ? (
          <div>
            <div>{props.col1}</div>
            <div>{props.col2}</div>
          </div>
        ) : (
          props.name
        )}
      </span>
      <div className={classes.imgBlock}>
        <img src={props.img} alt="plane" />
      </div>
    </div>
  );
};

export default ServiceCards;
