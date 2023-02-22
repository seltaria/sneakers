import React from "react";
import { CloseIcon } from "./Icons";

export function BurgerMenu(props) {
  return (
    <div className="burger">
      <nav className="burger__nav">
        <button onClick={() => props.setIsBurgerOpen(false)}><CloseIcon /></button>
        <ul className="burger__list">
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}