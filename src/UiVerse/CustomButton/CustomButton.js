import React from "react";
import classes from "./CustomButton.module.css";
import { useNavigate } from "react-router-dom";

function CustomButton() {
  const navigate = useNavigate();
  return (
    <button className={classes.btn} onClick={() => navigate("/placeOrder")}>
      Place Order
    </button>
  );
}

export default CustomButton;
