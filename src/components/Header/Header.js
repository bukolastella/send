import React from "react";
import classes from "./Header.module.css";
import { svg } from "../../assests/sendlogo.js";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        {svg}
        <span>FREIGHT</span>
      </div>
      <div className={classes.Search}>
        <input type="text" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
      <div className={classes.Request}>Request Quote</div>
      <div className={classes.Book}>Book Shipment</div>
    </div>
  );
};

export default Header;
