import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Button } from "@mui/material";
import { addToCart, removeFromCart } from "../../store/reducers/cart.reducer";
function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.selectedItems);
  const items = data.length;

  const addCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <div className="mainCard">
        {data.map((item) => (
          <div className="cart">
            <div className="imagediv">
              <img src={item.image} alt={item.name} className="image" />
              <h5>$ {item.price}</h5>
            </div>
            <div className="footer">
              <h3>{item.name}</h3>
              <h5>Made In {item.madeIn}</h5>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  addCartHandler(item);
                }}
              >
                Add
              </Button>
              <span style={{ fontWeight: "bolder", padding: "5px" }}>
                Items : {item.quantity}
              </span>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  removeFromCartHandler(item.id);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="order">
        <h4>{`Total Items:   ${items}`}</h4>
      </div>
    </div>
  );
}

export default Cart;
