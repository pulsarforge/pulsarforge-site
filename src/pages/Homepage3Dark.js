import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import BrandlogosDark from "../components/sections/BrandlogosDark";
import Contact from "../components/sections/Contact";
import Herosection from "../components/sections/Herosection";
import Pricing from "../components/sections/Pricing";
import Works from "../components/sections/Works";

function Homepage3() {
  document.body.classList.add("dark");
  return (
    <>
      <Header3 logoSource="/images/PulsarForge-1.png" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-pricing">
          <Pricing />
        </Element>
        <Element name="section-brandlogos">
          <BrandlogosDark />
        </Element>
        <Element name="section-blogs">
          <Blogs />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage3;
