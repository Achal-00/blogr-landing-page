import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <section className="container">
      <IntroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </section>
  );
}
