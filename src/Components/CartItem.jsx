import React from "react";
import { CartContext } from "../context";
import { DeleteIcon } from "./Icons";

export function CartItem() {

  const { itemCount, setItemCount } = React.useContext(CartContext);

  function handleClickDelete() {
    setItemCount(0);
  }

  return (
    <div className="cart__item">
      <img className="cart__img" src={`/sneakers/images/image-product-1-thumbnail.jpg`} alt="product" />
      <div>
        <h2 className="cart__title">Fall Limited Edition Sneakers</h2>
        <span className="cart__price-single">$125.00 x {itemCount}</span>
        <span className="cart__price-sum">${(125 * itemCount).toFixed(2)}</span>
      </div>
      <button onClick={handleClickDelete}><DeleteIcon /></button>
    </div>
  )
}