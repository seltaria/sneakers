import React from "react";
import { CartContext } from "../context";
import { BurgerMenu } from "./BurgerMenu";
import { Cart } from "./Cart";
import { BurgerIcon, CartIcon } from "./Icons";

export function Header() {

  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isBurger, setIsBurger] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const { itemCount, setItemCount } = React.useContext(CartContext);

  React.useEffect(() => burgerWidth(), []);

  function handleClick() {
    setIsCartOpen(prev => !prev);
  }

  function openBurgerMenu() {
    setIsBurgerOpen(true);
  }

  function burgerWidth() {
    if (window.innerWidth <= 900) {
      setIsBurger(true);
    } else {
      setIsBurger(false);
    }
  }

  window.addEventListener('resize', () => {
    burgerWidth();
    setIsBurgerOpen(false);
  })

  return (
    <header className="header">
      <div className="container header__container">
        {isBurger && <button className="header__burger" onClick={openBurgerMenu}>
          <BurgerIcon />
        </button>}
        <h1 className="header__logo">sneakers</h1>
        <nav className="header__nav">
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
          <img className="header__avatar" src="/sneakers/images/image-avatar.png" alt="profile" />
        </button>
      </div>
      {isBurgerOpen && <BurgerMenu setIsBurgerOpen={setIsBurgerOpen} />}
    </header>
  )
}