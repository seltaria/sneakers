import React from "react";
import { CartContext } from "../context";
import { Cart } from "./Cart";
import { CartIcon } from "./Icons";

export function Header() {

  const [isCartOpen, setIsCartOpen] = React.useState(false);

  function handleClick() {
    setIsCartOpen(prev => !prev);
  }

  const { itemCount, setItemCount } = React.useContext(CartContext);

  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__logo">sneakers</h1>
        <nav>
          <ul className="header__list">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button
          className="header__cart-btn"
          onClick={handleClick}>
          {!!itemCount && <div className="header__cart-count">{itemCount}</div>}
          <CartIcon color={"#69707D"} />
        </button>
        {isCartOpen && <Cart />}
        <button className="header__profile-btn">
          <img className="header__avatar" src="../images/image-avatar.png" alt="profile" />
        </button>
      </div>
    </header>
  )
}