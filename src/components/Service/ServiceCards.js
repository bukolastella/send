import React from "react";
import classes from "./ServiceCards.module.css";

const ServiceCards = (props) => {
  const clickHandler = () => {
    props.changeState(props.name || props.col1);
  };
  return (
    <div
      className={classes.ServiceCards}
      style={{ backgroundColor: props.active ? "#0746a7" : null }}
      onClick={clickHandler}
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
        {props.active ? (
          <img src={props.activeImg} alt="plane" />
        ) : (
          <img src={props.img} alt="plane" />
        )}
      </div>
    </div>
  );
};

export default ServiceCards;
