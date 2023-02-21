import React from "react";
import { Description } from "./Description";
import { Images } from "./Images";

export function Main() {
  return (
    <main className="main">
      <div className="container main__container">
        <Images />
        <Description />
      </div>
    </main>
  )
}