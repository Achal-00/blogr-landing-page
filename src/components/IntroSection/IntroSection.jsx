import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import BImage from "./BImage";

export default function IntroSection() {
  return (
    <section className="intro-section">
      <Navbar />
      <Content />
      <BImage />
    </section>
  );
}
