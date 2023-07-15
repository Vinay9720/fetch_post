import React from "react";
import classes from "./CustomCard.module.css";
import { Rating, Box, Typography } from "@mui/material";
import BasicButtons from "../../components/buttons/Custom.button";

const CustomCard = (props) => {
  const buttonNames = ["Add To Cart", "Buy Now"];

  return (
    <div className={classes.book}>
      <div className={classes.main}>
        <div className={classes.imagediv}>
          <img
            className={classes.image}
            src={props.image}
            alt={props.title}
            title={props.title}
          />
        </div>
        <div className={classes.cardfooter}>
          <h2 className={classes.title}>{props.description}</h2>
          <h5 className={classes.desc}>{props.title}</h5>
        </div>

        <Box className={classes.rating}>
          <Rating
            value={props.average}
            name="rating"
            defaultValue={4}
            precision={0.1}
            size="small"
            readOnly
          />
          <Typography sx={{ fontSize: "20px" }}>{props.price}€</Typography>
        </Box>

        <div className={classes.cardButtons}>
          {buttonNames.map((name, i) => (
            <BasicButtons
              key={i * 10.5676}
              onClick={() => props.onClick(i)}
              sx={styles.style}
              variant={"contained"}
              color={"primary"}
              size={"small"}
            >
              {name}
            </BasicButtons>
          ))}
        </div>
      </div>
      <div className={classes.cover}>
        <div className={classes.imagediv}>
          <img
            className={classes.image}
            src={props.image}
            alt={props.title}
            title={props.title}
          />
        </div>
        <div className={classes.cardfooter}>
          <h1 className={classes.title}>{props.description}</h1>
          <h5 className={classes.desc}>{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

const styles = {
  style: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
};
