import React from "react";
import { Description } from "./Description";
import { Images } from "./Images";
import { ImagesMobile } from "./ImagesMobile";

export function Main() {

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => mobileWidth(), []);

  function mobileWidth() {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  window.addEventListener('resize', () => {
    mobileWidth();
  })

  return (
    <main className="main">
      <div className="container main__container">
        {!isMobile && <Images />}
        {isMobile && <ImagesMobile />}
        <Description />
      </div>
    </main>
  )
}