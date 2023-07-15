import React from "react";
import classes from "./LoadingLoader.module.css";
import Waiter from "../../assests/Waiter.png";

const LoadingLoader = () => {
  return (
    <div className={classes.loader}>
      <img
        src={Waiter}
        alt="waiter"
        style={{ height: "80px", width: "80px", marginTop: "25px" }}
      />
      Loading
      <span></span>
    </div>
  );
};

export default LoadingLoader;
