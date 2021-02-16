import React from "react";
import CustomBotton from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/CartItem";
import { connect } from "react-redux";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomBotton> GO TO CHECKOUT</CustomBotton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
