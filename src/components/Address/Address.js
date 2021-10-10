import React from "react";
import LocationInput from "./LocationInput";
import classes from "./Address.module.css";
import Box from "./Box";

const Address = () => {
  return (
    <div>
      <div className={classes.info}>
        <i class="fas fa-info"></i>
      </div>

      <div className={classes.Col1}>
        <div className={classes.ImportExport}>
          <span>import</span>
          <span>export</span>
        </div>
        <LocationInput label="To" />
        <LocationInput label="From" />
      </div>
      <div className={classes.Col2}>
        <Box>
          <i class="fas fa-calendar"></i>
          <span className={classes.ready}>Ready Date</span>
        </Box>
        <Box>
          <form className={classes.form}>
            <select name="devices" className={classes.select}>
              <option value="ipod">Incoterms</option>
              <option value="radio">Radio</option>
              <option value="computer">Computer</option>
            </select>
          </form>
        </Box>
        <Box>Total Cargo Value</Box>
      </div>
    </div>
  );
};

export default Address;
