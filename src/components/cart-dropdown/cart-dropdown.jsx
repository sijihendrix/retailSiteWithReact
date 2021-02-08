import React from "react";
import CustomBotton from "../custom-button/custom-button.component";

import "./cart-dropdown.scss";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomBotton> GO TO CHECKOUT</CustomBotton>
    </div>
  );
};
