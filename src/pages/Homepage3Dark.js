import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import Contact from "../components/sections/Contact";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";
import { Helmet } from "react-helmet";

function Homepage3() {
  document.body.classList.add("dark");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pulsarforge Web3 Labs</title>
        <meta name="description" content="Web3 Labs. Code Garden. Playground. Community. Shipping Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pulsarforge.io/logo.png" />
      </Helmet>
      <Header3 logoSource="/images/PulsarForge-1.png" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-services" style={{marginBottom: '50px'}}>
          <Services />
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
