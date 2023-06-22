import React from "react";
import classes from "./SpinnerLoader.module.css";
import wineGlass from "../../assests/wineGlass.png";

function SpinnerLoader() {
  return (
    <div className={classes.loader}>
      <div>
        <img src={wineGlass} alt="wine" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default SpinnerLoader;
