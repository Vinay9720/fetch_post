import React from "react";
import classes from "./SpinnerLoader.module.css";
import wineimg from "../../assests/Waiter serving 1.jpg";

function SpinnerLoader() {
  return (
    <div className={classes.loader}>
      <div>
        <img src={wineimg} alt="wine" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default SpinnerLoader;
