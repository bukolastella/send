import React from "react";
import classes from "./Additional.module.css";
import AdditionalItem from "./AdditionalItem";

const Additional = () => {
  return (
    <div>
      <h3 className={classes.Title}>Additional Services</h3>
      <div className={classes.AdditionalGrid}>
        <AdditionalItem
          label="Export forwarding"
          span="We handle custom clearance and documentation"
        />
        <AdditionalItem
          label="import customs clearance"
          span="We handle import custom and regulatory requirements"
        />
        <AdditionalItem
          label="cargo insurance"
          span="Protect your cargo from logistics risks up to its full value"
        />
        <AdditionalItem
          label="Transport/Delivery"
          span="We deliver the cargo to your door step from ports"
        />
      </div>
    </div>
  );
};

export default Additional;
