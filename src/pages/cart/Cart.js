import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
} from "../../store/reducers/cart.reducer";
import BasicTable from "../../MaterialUi/CartTable";
function Cart() {
  const dispatch = useDispatch();

  const addCartHandler = (id) => {
    dispatch(addToCart(id));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };
  const removeElementFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Fragment>
      <BasicTable
        addCartHandler={addCartHandler}
        removeElementFromCart={removeElementFromCart}
        removeFromCartHandler={removeFromCartHandler}
      />
    </Fragment>
  );
  // <div>
  //   <div className="mainCard">
  //     {/* {cartLimit && alert("Item Is Limited To 5 Per Cart")} */}
  //     {data.map((item) => (
  //       <div className="cart" key={item.id}>
  //         <div className="imagediv">
  //           <img src={item.image} alt={item.name} className="image" />
  //           <h5>$ {item.price}</h5>
  //         </div>
  //         <div className="footer">
  //           <Button
  //             sx={{ marginLeft: "70%" }}
  //             variant="outlined"
  //             color="error"
  //             onClick={() => {
  //               removeElementFromCart(item.id);
  //             }}
  //           >
  //             X
  //           </Button>
  //           <h3>{item.name}</h3>
  //           <h5>Made In {item.madeIn}</h5>
  //           <Button
  //             variant="outlined"
  //             color="error"
  //             onClick={() => {
  //               addCartHandler(item);
  //             }}
  //           >
  //             Add
  //           </Button>
  //           <span style={{ fontWeight: "bolder", padding: "5px" }}>
  //             Items : {item.quantity}
  //           </span>
  //           <Button
  //             variant="outlined"
  //             color="error"
  //             onClick={() => {
  //               removeFromCartHandler(item.id);
  //             }}
  //           >
  //             Remove
  //           </Button>
  //         </div>
  //         <Box>
  //           <Typography>Name:{item.name}</Typography>
  //           <Typography>Quantity:{item.quantity}</Typography>
  //         </Box>
  //       </div>
  //     ))}
  //   </div>
  //   <div className="order">
  //     <h4>{`Total Items:   ${items}`}</h4>
  //   </div>
  // </div>
}

export default Cart;
