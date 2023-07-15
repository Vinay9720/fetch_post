import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import TotalCost from "../pages/TotalCost/TotalCost";
import DeleteButton from "../UiVerse/DeleteButton/DeleteButton";

const table = ["TITLE", "ITEM COST", "QUANTITY", "TOTAL PRICE", "REMOVE ITEM"];

export default function BasicTable({
  addCartHandler,
  removeElementFromCart,
  removeFromCartHandler,
}) {
  const data = useSelector((state) => state.cart.selectedItems);
  console.log("my data", data);
  // const { cartLimit } = useSelector((state) => state.cart);
  // const items = data.length;

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <TableContainer component={Paper} sx={styles.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.head}>IMAGE</TableCell>
                {table.map((el) => (
                  <TableCell align="center" sx={styles.head}>
                    {el}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={item.image}
                      style={{ height: "50px" }}
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ width: "30px" }}>
                    {item.name}
                  </TableCell>
                  <TableCell align="center">{item.price} €</TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{ fontSize: "larger", color: "primary" }}
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      -
                    </Button>
                    {item.quantity}
                    <Button
                      onClick={() => addCartHandler(item)}
                      sx={{ fontSize: "larger", color: "primary" }}
                    >
                      +
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    {item.quantity * item.price} €
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ paddingRight: "0px", paddingLeft: "6%" }}
                  >
                    <DeleteButton
                      onClick={() => removeElementFromCart(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem auto",
          width: "100%",
        }}
      >
        <TotalCost />
      </Box>
    </Box>
  );
}

const styles = {
  table: {
    width: "75vw",
    overFlowY: "auto",
    height: " calc(100vh - 80.5px)",
  },
  head: {
    fontSize: "600",
    fontWeight: "bold",
  },
};
