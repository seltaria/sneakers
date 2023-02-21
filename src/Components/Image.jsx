import React from "react";

export function Image(props) {
  const styles = {
    outline: props.isChecked ? "3px solid hsl(26, 100%, 55%)" : "none",
    borderRadius: "10px"
  }

  function handleClick() {
    props.check()
  }

  return (
    <button style={styles} onClick={handleClick}>
      <img style={{ opacity: props.isChecked ? 0.5 : 1 }} src={`./images/image-product-${props.imageNumber}-thumbnail.jpg`} alt="product" />
    </button>
  )
}