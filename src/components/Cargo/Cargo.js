import React from "react";
import classes from "./Cargo.module.css";
import Switch from "./Switch";
import TotalInput from "./TotalInput";

const Cargo = () => {
  return (
    <div>
      <div className={classes.Header}>
        <h3>Cargo Details</h3>
        <div className={classes.DangerousCargo}>
          <Switch />
          <span className={classes.Text}>
            Dangerous Cargo (ex. Chemicals, Battery)
          </span>
        </div>
      </div>
      <div className={classes.flexbox}>
        <div>Total Dimensions</div>
        <div>Package Details</div>
      </div>
      <div className={classes.flexTotal}>
        <TotalInput label="Total Volume" unit="cdm" />
        <TotalInput label="Total Weight" unit="kg" />
      </div>
    </div>
  );
};

export default Cargo;
