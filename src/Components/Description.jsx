import React from "react";
import { CartContext } from "../context";

export function Description() {
  const [count, setCount] = React.useState(0);
  const { itemCount, setItemCount } = React.useContext(CartContext);

  const product = {
    company: "Sneaker company",
    title: "Fall Limited Edition Sneakers",
    text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
  }

  function handleClickCount(action) {
    if (action === "minus" && count === 0) {
      setCount(0);
    } else {
      setCount(prevCount => action === "plus" ? prevCount + 1 : prevCount - 1);
    }
  }

  function handleClickAdd() {
    setItemCount(count);
  }

  return (
    <div className="description">
      <div>
        <div className="description__company">{product.company}</div>
        <h2 className="description__title">{product.title}</h2>
        <p className="description__text">{product.text}</p>
        <div className="description__actual-price">
          <span className="description__price">${(product.price * product.discount / 100).toFixed(2)}</span>
          <span className="description__discount">{product.discount}%</span>
        </div>
        <p className="description__old-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="description__buttons">
        <div className="description__count">
          <button
            className="description__count-btn"
            onClick={() => handleClickCount("minus")}>
            -
          </button>
          <span className="description__count-number">{count}</span>
          <button
            className="description__count-btn"
            onClick={() => handleClickCount("plus")}>
            +
          </button>
        </div>
        <button
          className="description__add-btn"
          onClick={handleClickAdd}>Add to cart</button>
      </div>
    </div>
  )
}