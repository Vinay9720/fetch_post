import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
function Cart() {
  const data = useSelector((state) => state.cart.selectedItems);
  const items = data.length;

  return (
    <div className="mainCard">
      <div className="cartCard">
        {data.map((item) => (
          <div className="cart">
            <div className="imagediv">
              <img src={item.image} alt={item.winery} className="image" />
            </div>
            <div className="footer">
              <p>{item.winery}</p>
              <button>-</button>
              <span>{items}</span>
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="order">
        <p>{`Total Items:   ${items}`}</p>
      </div>
    </div>
  );
}

export default Cart;
