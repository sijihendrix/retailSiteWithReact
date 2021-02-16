import React from "react";
import "./CartItem.scss";

export const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="Item" className="img" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {price} x {quantity}
      </span>
    </div>
  </div>
);
