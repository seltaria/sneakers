import React from "react";
import { NextIcon, PrevIcon } from "./Icons";

export function ImagesMobile() {

  const [image, setImage] = React.useState(1);

  function handleClickNext() {
    setImage(prev => {
      if (prev === 4) {
        return 1;
      }
      return prev + 1;
    })
  }

  function handleClickPrev() {
    setImage(prev => {
      if (prev === 1) {
        return 4;
      }
      return prev - 1;
    })
  }

  return (
    <div className="imgm">
      <button className="imgm__btn" onClick={handleClickPrev}>
        <PrevIcon />
      </button>
      <img src={`/sneakers/images/image-product-${image}.jpg`} alt="product" />
      <button className="imgm__btn" onClick={handleClickNext}>
        <NextIcon />
      </button>
    </div>
  )
}