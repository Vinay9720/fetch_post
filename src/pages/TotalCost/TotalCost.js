import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../UiVerse/CustomButton/CustomButton";

function TotalCost() {
  const data = useSelector((state) => state.cart.selectedItems);
  console.log("my data", data);
  const dupData = [...data];

  let initialValue = 0;
  const updatedValue = dupData.reduce(
    (accumulator, currentValue) =>
      currentValue.price * currentValue.quantity + accumulator,
    initialValue
  );

  const CGST = updatedValue * 0.06;
  const SGST = updatedValue * 0.06;
  const TOTAL = updatedValue + SGST + CGST;
  // let totalCost = 0;
  // for (let i = 0; i < dupData.length; i++) {
  //   const item = dupData[i];
  //   // console.log("item", item);
  //   const cost = item.quantity * item.price;
  //   // console.log("cost ", cost);
  //   totalCost += +cost;
  //   // console.log("totalCost", totalCost);
  // }

  return (
    <Box>
      <Typography variant="h5" sx={styles.box}>
        Detailed Bill
      </Typography>
      <Box
        sx={{ width: "90%", margin: "1rem auto", border: "1px solid #e2e2e2" }}
      >
        <Box sx={styles.box}>
          <Box>SUB TOTAL :</Box>
          <Box>{+updatedValue} €</Box>
        </Box>
        <Box sx={styles.box}>
          <Box>STATE TAX :</Box>
          <Box>{+SGST.toFixed(2)} €</Box>
        </Box>
        <Box sx={styles.box}>
          <Box>CENTRAL TAX : </Box>
          <Box>{+CGST.toFixed(2)} €</Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={{ fontWeight: "bolder" }}>TOTAL :</Box>
          <Box sx={{ fontWeight: "800" }}>{+TOTAL.toFixed(2)} €</Box>
        </Box>
      </Box>
      <Box sx={{ width: "50%", margin: "1rem auto" }}>
        <CustomButton />
      </Box>
    </Box>
  );
}

export default TotalCost;

const styles = {
  box: {
    borderBottom: "1px solid #e2e2e2",
    height: "60px",
    fontFamily: "monopoly",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
  },
};
