import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.Title}>
      <h2>New Booking</h2>
      <span>
        Fill in the information below to get a quote or create a new booking
      </span>
    </div>
  );
};

export default Title;
