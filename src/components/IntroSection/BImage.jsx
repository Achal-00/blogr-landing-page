import React from "react";

const width = screen.width;

export default function BImage() {
  return (
    <div className="b-image">
      <img
        src={
          width <= 1024
            ? "bg-pattern-intro-mobile.svg"
            : "bg-pattern-intro-desktop.svg"
        }
        alt=""
      />
    </div>
  );
}
