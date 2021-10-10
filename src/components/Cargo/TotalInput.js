import React from "react";
import classes from "./TotalInput.module.css";

const TotalInput = (props) => {
  return (
    <div className={classes.Total}>
      <label className={classes.Labeltotal}> {props.label}</label>
      <input type="text" />
      <span>{props.unit}</span>
    </div>
  );
};

export default TotalInput;
