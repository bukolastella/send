import React from "react";
import Switch from "../Cargo/Switch";
import classes from "./AdditionalItem.module.css";

const AdditionalItem = (props) => {
  return (
    <div className={classes.flexAdditionalItem}>
      <div className={classes.switch}>
        <Switch />
      </div>

      <div className={classes.AdditionalText}>
        <label>{props.label}</label>
        <span>{props.span}</span>
      </div>
    </div>
  );
};

export default AdditionalItem;
