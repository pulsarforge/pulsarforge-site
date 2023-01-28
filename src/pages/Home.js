import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Contact from "../components/sections/Contact";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";
import { Helmet } from "react-helmet";
import CodeGarden from "../components/sections/CodeGarden";

function Home() {
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
      <Header logoSource="/images/PulsarForge-1.png" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-code-garden">
          <CodeGarden />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-services">
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

export default Home;
