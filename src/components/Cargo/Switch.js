import React from "react";
import classes from "./Switch.module.css";

const Switch = () => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" />
      <span className={`${classes.slider}  ${classes.round}`}></span>
    </label>
  );
};

export default Switch;
