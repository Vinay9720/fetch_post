import "./Card.css";
import BasicButtons from "../buttons/Custom.button";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../store/actions/cart.action";
// import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Card(props) {
  const buttonNames = ["Cart", "Buy Now"];

  return (
    <div className="main">
      <div className="imagediv">
        <img
          className="image"
          src={props.image}
          alt={props.title}
          title={props.title}
        />
      </div>
      <div className="cardfooter">
        <h1 className="title">{props.description}</h1>
        <h5 className="desc">{props.title}</h5>
      </div>

      <Box className="rating">
        <Rating name="half-rating" defaultValue={4} precision={0.5} />
      </Box>

      <div className="cardButtons">
        {buttonNames.map((name, i) => (
          <BasicButtons
            key={i * 10.5676}
            onClick={() => props.onClick(i)}
            sx={styles.style}
            variant={"outlined"}
            color={"success"}
            size={"small"}
          >
            {name}
          </BasicButtons>
        ))}
      </div>
    </div>
  );
}

const styles = {
  style: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
};
