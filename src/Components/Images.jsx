import React from "react";
import { Image } from "./Image";

export function Images() {
  const [mainImage, setMainImage] = React.useState(1);
  const [imageList, setImageList] = React.useState([
    { imageNumber: 1, isChecked: true },
    { imageNumber: 2 },
    { imageNumber: 3 },
    { imageNumber: 4 }
  ]);

  function check(id) {
    setImageList(prevList => prevList.map(image => {
      return image.imageNumber === id ? { ...image, isChecked: true } : { ...image, isChecked: false }
    }))
    setMainImage(id);
  }

  const imageElements = imageList.map(image =>
    <Image
      key={image.imageNumber}
      imageNumber={image.imageNumber}
      isChecked={image.isChecked}
      check={() => check(image.imageNumber)}
    />
  )

  return (
    <div className="images">
      <img className="images__main" src={`../images/image-product-${mainImage}.jpg`} alt="product" />
      {imageElements}
    </div>
  )
}