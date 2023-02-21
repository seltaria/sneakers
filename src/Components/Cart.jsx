import React from "react";
import { CartContext } from "../context";
import { CartItem } from "./CartItem";

export function Cart() {

  const { itemCount, setItemCount } = React.useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart__header">Cart</div>
      <div className="cart__main">
        {!itemCount && <div className="cart__empty">Your cart is empty</div>}
        {!!itemCount && <CartItem />}
        {!!itemCount && <button className="cart__checkout-btn">Checkout</button>}
      </div>
    </div>
  )
}