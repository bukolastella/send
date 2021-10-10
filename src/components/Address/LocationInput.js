import React from "react";
import classes from "./LocationInput.module.css";

const LocationInput = (props) => {
  return (
    <div className={classes.LocationInput}>
      <i class="fas fa-map-marker-alt"></i>
      <span>{props.label}</span>
      <input type="text" placeholder="City or Port" />
    </div>
  );
};

export default LocationInput;
